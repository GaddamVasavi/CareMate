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
