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
