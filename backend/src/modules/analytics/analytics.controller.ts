import { Request, Response, NextFunction } from 'express';
import { analyticsService } from './analytics.service';
import { sendSuccess } from '../../utils/response';

export class AnalyticsController {
  async getAppointmentTrends(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await analyticsService.getAppointmentMonthlyTrends();
      return sendSuccess(res, result, 'Monthly appointment trends retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getSpecializationDistribution(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await analyticsService.getSpecializationDistribution();
      return sendSuccess(res, result, 'Doctor specialization distribution retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getRevenueTrends(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await analyticsService.getRevenueTrends();
      return sendSuccess(res, result, 'Revenue trends retrieved', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const analyticsController = new AnalyticsController();
