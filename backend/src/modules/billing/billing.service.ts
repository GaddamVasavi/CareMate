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
