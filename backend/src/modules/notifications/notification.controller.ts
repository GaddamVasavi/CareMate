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
