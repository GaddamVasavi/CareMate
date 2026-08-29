import { Request, Response, NextFunction } from 'express';
import { userService } from './user.service';
import { sendSuccess } from '../../utils/response';

export class UserController {
  async listUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await userService.listUsers(req.query as any);
      return sendSuccess(res, result, 'Users retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id, req.user!.role, req.user!.userId);
      return sendSuccess(res, user, 'User details retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const targetUserId = req.params.id || req.user!.userId;
      const result = await userService.updateProfile(targetUserId, req.body);
      return sendSuccess(res, result, 'Profile updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async toggleStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { isActive } = req.body;
      const result = await userService.toggleUserStatus(id, isActive);
      return sendSuccess(res, result, `User account ${isActive ? 'activated' : 'deactivated'} successfully`, 200);
    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UserController();
