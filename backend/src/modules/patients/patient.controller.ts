import { Request, Response, NextFunction } from 'express';
import { patientService } from './patient.service';
import { sendSuccess } from '../../utils/response';

export class PatientController {
  async getMyProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await patientService.getMyProfile(req.user!.userId);
      return sendSuccess(res, result, 'Patient profile retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await patientService.getProfile(id, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Patient details retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await patientService.updateProfile(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Patient profile updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async addAllergy(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await patientService.addAllergy(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Allergy record added', 201);
    } catch (error) {
      next(error);
    }
  }

  async removeAllergy(req: Request, res: Response, next: NextFunction) {
    try {
      const { allergyId } = req.params;
      await patientService.removeAllergy(allergyId);
      return sendSuccess(res, { deleted: true }, 'Allergy record deleted', 200);
    } catch (error) {
      next(error);
    }
  }

  async addCondition(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await patientService.addCondition(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Medical condition added', 201);
    } catch (error) {
      next(error);
    }
  }

  async removeCondition(req: Request, res: Response, next: NextFunction) {
    try {
      const { conditionId } = req.params;
      await patientService.removeCondition(conditionId);
      return sendSuccess(res, { deleted: true }, 'Condition record deleted', 200);
    } catch (error) {
      next(error);
    }
  }

  async addMedicalHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await patientService.addMedicalHistory(id, req.body);
      return sendSuccess(res, result, 'Medical history recorded', 201);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await patientService.listPatients(req.query as any);
      return sendSuccess(res, result, 'Patient directory retrieved', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const patientController = new PatientController();
