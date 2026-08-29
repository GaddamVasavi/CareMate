import os

def generate(write_file):
    # ==========================================
    # BILLING & PAYMENTS MODULE
    # ==========================================
    write_file("backend/src/modules/billing/billing.types.ts", """
import { InvoiceStatus, PaymentMethod, PaymentStatus } from '@prisma/client';

export interface CreateInvoiceItemDTO {
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface CreateInvoiceDTO {
  patientId: string;
  appointmentId?: string;
  dueDate: string; // YYYY-MM-DD
  discountAmount?: number;
  taxAmount?: number;
  items: CreateInvoiceItemDTO[];
}

export interface ProcessPaymentDTO {
  invoiceId: string;
  amount: number;
  method: PaymentMethod;
  paymentToken?: string; // Stripe token or mock token
}

export interface ProcessRefundDTO {
  paymentId: string;
  amount: number;
  reason: string;
}

export interface InvoiceFilterParams {
  patientId?: string;
  status?: InvoiceStatus;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}
""")

    write_file("backend/src/modules/billing/billing.validation.ts", """
import { z } from 'zod';
import { InvoiceStatus, PaymentMethod } from '@prisma/client';

export const createInvoiceSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Patient ID is required'),
    appointmentId: z.string().uuid().optional(),
    dueDate: z.string().regex(/^\\d{4}-\\d{2}-\\d{2}$/, 'Due date must be YYYY-MM-DD'),
    discountAmount: z.number().min(0).default(0),
    taxAmount: z.number().min(0).default(0),
    items: z.array(
      z.object({
        description: z.string().min(2, 'Description is required'),
        quantity: z.number().int().min(1).default(1),
        unitPrice: z.number().min(0),
      })
    ).min(1, 'At least one invoice item is required'),
  }),
});

export const processPaymentSchema = z.object({
  body: z.object({
    invoiceId: z.string().uuid('Invoice ID is required'),
    amount: z.number().positive('Payment amount must be greater than zero'),
    method: z.nativeEnum(PaymentMethod),
    paymentToken: z.string().optional(),
  }),
});

export const processRefundSchema = z.object({
  body: z.object({
    paymentId: z.string().uuid('Payment ID is required'),
    amount: z.number().positive('Refund amount must be positive'),
    reason: z.string().min(3, 'Refund reason is required'),
  }),
});

export const invoiceQuerySchema = z.object({
  query: z.object({
    patientId: z.string().optional(),
    status: z.nativeEnum(InvoiceStatus).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});
""")

    write_file("backend/src/modules/billing/billing.repository.ts", """
import { prisma } from '../../config/database';
import { CreateInvoiceDTO, ProcessPaymentDTO, ProcessRefundDTO, InvoiceFilterParams } from './billing.types';
import { InvoiceStatus, PaymentStatus, Prisma } from '@prisma/client';

export class BillingRepository {
  async findInvoiceById(id: string) {
    return await prisma.invoice.findUnique({
      where: { id },
      include: {
        patient: { include: { user: { select: { firstName: true, lastName: true, email: true, phone: true } } } },
        appointment: {
          include: {
            doctor: { include: { user: { select: { firstName: true, lastName: true } } } },
          },
        },
        items: true,
        payments: {
          include: { refunds: true },
          orderBy: { createdAt: 'desc' },
        },
      },
    });
  }

  async createInvoice(data: CreateInvoiceDTO) {
    return await prisma.$transaction(async (tx) => {
      const invoiceNumber = `INV-${Date.now().toString().slice(-8)}`;

      const subtotal = data.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
      const discount = data.discountAmount || 0;
      const tax = data.taxAmount || Number((subtotal * 0.05).toFixed(2));
      const netAmount = Number((subtotal - discount + tax).toFixed(2));

      const invoice = await tx.invoice.create({
        data: {
          invoiceNumber,
          patientId: data.patientId,
          appointmentId: data.appointmentId,
          totalAmount: subtotal,
          discountAmount: discount,
          taxAmount: tax,
          netAmount,
          dueDate: new Date(data.dueDate),
          status: InvoiceStatus.ISSUED,
          items: {
            createMany: {
              data: data.items.map((item) => ({
                description: item.description,
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                totalPrice: Number((item.quantity * item.unitPrice).toFixed(2)),
              })),
            },
          },
        },
        include: {
          items: true,
          patient: { include: { user: true } },
        },
      });

      return invoice;
    });
  }

  async recordPayment(data: ProcessPaymentDTO, transactionRef: string) {
    return await prisma.$transaction(async (tx) => {
      const invoice = await tx.invoice.findUnique({
        where: { id: data.invoiceId },
        include: { payments: { where: { status: PaymentStatus.SUCCESS } } },
      });

      if (!invoice) throw new Error('INVOICE_NOT_FOUND');

      const paymentNumber = `PAY-${Date.now().toString().slice(-8)}`;

      const payment = await tx.payment.create({
        data: {
          paymentNumber,
          invoiceId: data.invoiceId,
          amount: data.amount,
          method: data.method,
          status: PaymentStatus.SUCCESS,
          transactionRef,
        },
      });

      // Calculate total paid
      const previousPaid = invoice.payments.reduce((sum, p) => sum + p.amount, 0);
      const totalPaid = previousPaid + data.amount;

      let newStatus: InvoiceStatus = InvoiceStatus.PARTIALLY_PAID;
      if (totalPaid >= invoice.netAmount) {
        newStatus = InvoiceStatus.PAID;
      }

      await tx.invoice.update({
        where: { id: data.invoiceId },
        data: {
          status: newStatus,
          paidAt: newStatus === InvoiceStatus.PAID ? new Date() : undefined,
        },
      });

      return payment;
    });
  }

  async recordRefund(data: ProcessRefundDTO) {
    return await prisma.$transaction(async (tx) => {
      const payment = await tx.payment.findUnique({
        where: { id: data.paymentId },
        include: { invoice: true },
      });

      if (!payment) throw new Error('PAYMENT_NOT_FOUND');

      const refund = await tx.refund.create({
        data: {
          paymentId: data.paymentId,
          amount: data.amount,
          reason: data.reason,
          status: 'PROCESSED',
        },
      });

      await tx.payment.update({
        where: { id: data.paymentId },
        data: { status: PaymentStatus.REFUNDED },
      });

      await tx.invoice.update({
        where: { id: payment.invoiceId },
        data: { status: InvoiceStatus.REFUNDED },
      });

      return refund;
    });
  }

  async findInvoices(params: InvoiceFilterParams) {
    const where: Prisma.InvoiceWhereInput = {};
    if (params.patientId) where.patientId = params.patientId;
    if (params.status) where.status = params.status;

    if (params.startDate || params.endDate) {
      where.createdAt = {};
      if (params.startDate) where.createdAt.gte = new Date(params.startDate);
      if (params.endDate) where.createdAt.lte = new Date(params.endDate);
    }

    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 10));
    const skip = (page - 1) * limit;

    const [total, invoices] = await Promise.all([
      prisma.invoice.count({ where }),
      prisma.invoice.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          patient: { include: { user: { select: { firstName: true, lastName: true } } } },
          payments: true,
          items: true,
        },
      }),
    ]);

    return { total, page, limit, totalPages: Math.ceil(total / limit), invoices };
  }
}

export const billingRepository = new BillingRepository();
""")

    write_file("backend/src/modules/billing/billing.service.ts", """
import { billingRepository } from './billing.repository';
import { CreateInvoiceDTO, ProcessPaymentDTO, ProcessRefundDTO, InvoiceFilterParams } from './billing.types';
import { NotFoundError, ForbiddenError, BadRequestError } from '../../utils/errors';
import { UserRole } from '@prisma/client';
import { prisma } from '../../config/database';
import crypto from 'crypto';

export class BillingService {
  async createInvoice(data: CreateInvoiceDTO) {
    return await billingRepository.createInvoice(data);
  }

  async getInvoiceById(id: string, requesterUserId: string, requesterRole: UserRole) {
    const invoice = await billingRepository.findInvoiceById(id);
    if (!invoice) throw new NotFoundError('Invoice not found');

    if (requesterRole === UserRole.PATIENT && invoice.patient.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized to view this invoice');
    }

    return invoice;
  }

  async processPayment(data: ProcessPaymentDTO, requesterUserId: string) {
    const invoice = await billingRepository.findInvoiceById(data.invoiceId);
    if (!invoice) throw new NotFoundError('Invoice not found');

    if (invoice.status === 'PAID') {
      throw new BadRequestError('This invoice has already been fully paid');
    }

    // Mock / Real payment gateway token integration
    const transactionRef = data.paymentToken || `ch_stripe_${crypto.randomBytes(12).toString('hex')}`;

    const payment = await billingRepository.recordPayment(data, transactionRef);

    // Notify patient
    await prisma.notification.create({
      data: {
        userId: invoice.patient.userId,
        type: 'PAYMENT_SUCCESS',
        title: 'Payment Successful',
        message: `Payment of $${data.amount.toFixed(2)} received for Invoice #${invoice.invoiceNumber}.`,
        linkUrl: `/patient/billing`,
      },
    });

    return payment;
  }

  async processRefund(data: ProcessRefundDTO) {
    return await billingRepository.recordRefund(data);
  }

  async listInvoices(params: InvoiceFilterParams, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole === UserRole.PATIENT) {
      const patient = await prisma.patient.findUnique({ where: { userId: requesterUserId } });
      if (patient) params.patientId = patient.id;
    }

    return await billingRepository.findInvoices(params);
  }
}

export const billingService = new BillingService();
""")

    write_file("backend/src/modules/billing/billing.controller.ts", """
import { Request, Response, NextFunction } from 'express';
import { billingService } from './billing.service';
import { sendSuccess } from '../../utils/response';

export class BillingController {
  async createInvoice(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await billingService.createInvoice(req.body);
      return sendSuccess(res, result, 'Invoice created successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async getInvoiceById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await billingService.getInvoiceById(id, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Invoice details retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async processPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await billingService.processPayment(req.body, req.user!.userId);
      return sendSuccess(res, result, 'Payment processed successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async processRefund(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await billingService.processRefund(req.body);
      return sendSuccess(res, result, 'Refund issued successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async listInvoices(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await billingService.listInvoices(req.query as any, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Invoices list retrieved', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const billingController = new BillingController();
""")

    write_file("backend/src/modules/billing/billing.routes.ts", """
import { Router } from 'express';
import { billingController } from './billing.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireAdmin } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import {
  createInvoiceSchema,
  processPaymentSchema,
  processRefundSchema,
  invoiceQuerySchema,
} from './billing.validation';

const router = Router();

router.use(authenticate);

router.post(
  '/invoices',
  requireAdmin,
  validateRequest(createInvoiceSchema),
  auditLog({ action: 'CREATE', resource: 'INVOICE' }),
  billingController.createInvoice
);

router.get('/invoices', validateRequest(invoiceQuerySchema), billingController.listInvoices);
router.get('/invoices/:id', auditLog({ action: 'READ', resource: 'INVOICE' }), billingController.getInvoiceById);

router.post(
  '/payments',
  validateRequest(processPaymentSchema),
  auditLog({ action: 'CREATE', resource: 'PAYMENT' }),
  billingController.processPayment
);

router.post(
  '/refunds',
  requireAdmin,
  validateRequest(processRefundSchema),
  auditLog({ action: 'CREATE', resource: 'REFUND' }),
  billingController.processRefund
);

export const billingRouter = router;
""")

    # ==========================================
    # NOTIFICATIONS MODULE
    # ==========================================
    write_file("backend/src/modules/notifications/notification.service.ts", """
import { prisma } from '../../config/database';
import { NotificationType } from '@prisma/client';

export class NotificationService {
  async getUserNotifications(userId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit;

    const [total, unreadCount, notifications] = await Promise.all([
      prisma.notification.count({ where: { userId } }),
      prisma.notification.count({ where: { userId, isRead: false } }),
      prisma.notification.findMany({
        where: { userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return { total, unreadCount, page, limit, notifications };
  }

  async markAsRead(notificationId: string, userId: string) {
    return await prisma.notification.updateMany({
      where: { id: notificationId, userId },
      data: { isRead: true },
    });
  }

  async markAllAsRead(userId: string) {
    return await prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true },
    });
  }

  async createNotification(userId: string, type: NotificationType, title: string, message: string, linkUrl?: string) {
    return await prisma.notification.create({
      data: {
        userId,
        type,
        title,
        message,
        linkUrl,
      },
    });
  }
}

export const notificationService = new NotificationService();
""")

    write_file("backend/src/modules/notifications/notification.controller.ts", """
import { Request, Response, NextFunction } from 'express';
import { notificationService } from './notification.service';
import { sendSuccess } from '../../utils/response';

export class NotificationController {
  async getMyNotifications(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 20;
      const result = await notificationService.getUserNotifications(req.user!.userId, page, limit);
      return sendSuccess(res, result, 'Notifications retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async markAsRead(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await notificationService.markAsRead(id, req.user!.userId);
      return sendSuccess(res, { updated: true }, 'Notification marked as read', 200);
    } catch (error) {
      next(error);
    }
  }

  async markAllAsRead(req: Request, res: Response, next: NextFunction) {
    try {
      await notificationService.markAllAsRead(req.user!.userId);
      return sendSuccess(res, { updated: true }, 'All notifications marked as read', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const notificationController = new NotificationController();
""")

    write_file("backend/src/modules/notifications/notification.routes.ts", """
import { Router } from 'express';
import { notificationController } from './notification.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/', notificationController.getMyNotifications);
router.patch('/:id/read', notificationController.markAsRead);
router.patch('/read-all', notificationController.markAllAsRead);

export const notificationRouter = router;
""")
