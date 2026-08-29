import { Request, Response, NextFunction } from 'express';
import { doctorService } from './doctor.service';
import { sendSuccess } from '../../utils/response';

export class DoctorController {
  async search(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await doctorService.searchDoctors(req.query as any);
      return sendSuccess(res, result, 'Doctors found successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async getSpecializations(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await doctorService.getAllSpecializations();
      return sendSuccess(res, result, 'Specializations catalog retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getMyProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await doctorService.getMyProfile(req.user!.userId);
      return sendSuccess(res, result, 'Physician profile retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await doctorService.getDoctorById(id);
      return sendSuccess(res, result, 'Doctor details retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async setAvailability(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await doctorService.setAvailability(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Doctor availability updated', 200);
    } catch (error) {
      next(error);
    }
  }

  async addLeave(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await doctorService.addLeave(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Doctor leave scheduled', 201);
    } catch (error) {
      next(error);
    }
  }

  async addReview(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { rating, comment } = req.body;
      const result = await doctorService.addReview(id, req.user!.userId, rating, comment);
      return sendSuccess(res, result, 'Doctor review submitted successfully', 201);
    } catch (error) {
      next(error);
    }
  }
}

export const doctorController = new DoctorController();
