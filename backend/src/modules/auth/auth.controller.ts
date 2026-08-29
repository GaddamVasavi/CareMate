import { Request, Response, NextFunction } from 'express';
import { authService } from './auth.service';
import { sendSuccess } from '../../utils/response';

export class AuthController {
  async registerPatient(req: Request, res: Response, next: NextFunction) {
    try {
      const ipAddress = req.ip;
      const userAgent = req.headers['user-agent'];
      const result = await authService.registerPatient(req.body, ipAddress, userAgent);
      return sendSuccess(res, result, 'Patient registered successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async registerDoctor(req: Request, res: Response, next: NextFunction) {
    try {
      const ipAddress = req.ip;
      const userAgent = req.headers['user-agent'];
      const result = await authService.registerDoctor(req.body, ipAddress, userAgent);
      return sendSuccess(res, result, 'Doctor account registered successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const ipAddress = req.ip;
      const userAgent = req.headers['user-agent'];
      const result = await authService.login(req.body, ipAddress, userAgent);
      return sendSuccess(res, result, 'Login successful', 200);
    } catch (error) {
      next(error);
    }
  }

  async refreshTokens(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const ipAddress = req.ip;
      const userAgent = req.headers['user-agent'];
      const result = await authService.refreshTokens(refreshToken, ipAddress, userAgent);
      return sendSuccess(res, result, 'Tokens refreshed successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      await authService.logout(refreshToken);
      return sendSuccess(res, { loggedOut: true }, 'Logged out successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async getCurrentUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      const user = await authService.getCurrentUser(userId);
      return sendSuccess(res, user, 'Current user profile retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.userId;
      await authService.changePassword(userId, req.body);
      return sendSuccess(res, { updated: true }, 'Password changed successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const result = await authService.forgotPassword(email);
      return sendSuccess(res, result, 'Password reset request processed', 200);
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { token, newPassword } = req.body;
      await authService.resetPassword(token, newPassword);
      return sendSuccess(res, { reset: true }, 'Password reset successfully. You may now log in.', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
