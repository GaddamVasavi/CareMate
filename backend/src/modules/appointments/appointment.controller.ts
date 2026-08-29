import { Request, Response, NextFunction } from 'express';
import { appointmentService } from './appointment.service';
import { sendSuccess } from '../../utils/response';

export class AppointmentController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await appointmentService.createAppointment(req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Appointment booked successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await appointmentService.getAppointmentById(id, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Appointment details retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await appointmentService.listAppointments(req.query as any, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Appointments retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async reschedule(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await appointmentService.reschedule(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Appointment rescheduled successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async cancel(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await appointmentService.cancel(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Appointment cancelled successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, note } = req.body;
      const result = await appointmentService.updateStatus(id, status, note, req.user!.userId);
      return sendSuccess(res, result, `Appointment status updated to ${status}`, 200);
    } catch (error) {
      next(error);
    }
  }
}

export const appointmentController = new AppointmentController();
