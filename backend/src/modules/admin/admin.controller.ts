import { Request, Response, NextFunction } from 'express';
import { adminService } from './admin.service';
import { sendSuccess } from '../../utils/response';

export class AdminController {
  async getDashboardSummary(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await adminService.getDashboardSummary();
      return sendSuccess(res, result, 'Admin dashboard summary retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getAuditLogs(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 20;
      const resource = req.query.resource as string;
      const action = req.query.action as string;
      const result = await adminService.getAuditLogs(page, limit, resource, action);
      return sendSuccess(res, result, 'Audit logs retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getSettings(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await adminService.getSystemSettings();
      return sendSuccess(res, result, 'System settings retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async updateSetting(req: Request, res: Response, next: NextFunction) {
    try {
      const { key } = req.params;
      const { value } = req.body;
      const result = await adminService.updateSystemSetting(key, value);
      return sendSuccess(res, result, 'Setting updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const adminController = new AdminController();
