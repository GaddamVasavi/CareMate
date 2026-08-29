import { z } from 'zod';
import { InvoiceStatus, PaymentMethod } from '@prisma/client';

export const createInvoiceSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Patient ID is required'),
    appointmentId: z.string().uuid().optional(),
    dueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Due date must be YYYY-MM-DD'),
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
