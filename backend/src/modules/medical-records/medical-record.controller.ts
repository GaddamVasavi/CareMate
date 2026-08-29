import { Request, Response, NextFunction } from 'express';
import { medicalRecordService } from './medical-record.service';
import { sendSuccess } from '../../utils/response';

export class MedicalRecordController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await medicalRecordService.createRecord(req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Medical record created successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await medicalRecordService.getRecordById(id, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Medical record details retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await medicalRecordService.listRecords(req.query as any, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Medical records retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const medicalRecordController = new MedicalRecordController();
