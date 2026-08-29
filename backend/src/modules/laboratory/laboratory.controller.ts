import { Request, Response, NextFunction } from 'express';
import { laboratoryService } from './laboratory.service';
import { sendSuccess } from '../../utils/response';

export class LaboratoryController {
  async getCatalog(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await laboratoryService.getCatalog();
      return sendSuccess(res, result, 'Laboratory test catalog retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await laboratoryService.createLabOrder(req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Laboratory order created successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async getOrderById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await laboratoryService.getOrderById(id, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Lab order details retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async enterResult(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await laboratoryService.enterResult(req.body, req.user!.userId);
      return sendSuccess(res, result, 'Lab result recorded and verified', 200);
    } catch (error) {
      next(error);
    }
  }

  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const result = await laboratoryService.updateOrderStatus(id, status);
      return sendSuccess(res, result, `Lab order status updated to ${status}`, 200);
    } catch (error) {
      next(error);
    }
  }

  async listOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await laboratoryService.listOrders(req.query as any, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Lab orders list retrieved', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const laboratoryController = new LaboratoryController();
