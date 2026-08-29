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
