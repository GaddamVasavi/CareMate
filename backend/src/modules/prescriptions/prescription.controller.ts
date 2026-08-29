import { Request, Response, NextFunction } from 'express';
import { prescriptionService } from './prescription.service';
import { sendSuccess } from '../../utils/response';

export class PrescriptionController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await prescriptionService.createPrescription(req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Prescription issued successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await prescriptionService.getPrescriptionById(id, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Prescription retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await prescriptionService.listPrescriptions(req.query as any, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Prescriptions retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async searchMedicines(req: Request, res: Response, next: NextFunction) {
    try {
      const query = (req.query.q as string) || '';
      const result = await prescriptionService.searchMedicines(query);
      return sendSuccess(res, result, 'Medicines search completed', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const prescriptionController = new PrescriptionController();
