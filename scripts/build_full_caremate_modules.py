"""
CareMate Healthcare Management System
Complete Enterprise Architecture Generator
Generates full-scale production code across all 6 core functional modules:
1. Authentication & RBAC
2. Patient & Doctor Management
3. Appointment & Scheduling Management
4. Medical Records, Clinical EHR, Prescriptions & Laboratory
5. Billing, Payments & Notifications
6. Admin Dashboard, Analytics, CDS & Audit Trails
"""

import os
import sys

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
BACKEND_DIR = os.path.join(BASE_DIR, "backend", "src")
FRONTEND_DIR = os.path.join(BASE_DIR, "frontend", "src")

def write_file(rel_path, content):
    full_path = os.path.join(BASE_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"Generated: {rel_path}")

def generate_backend_appointments():
    # Types
    write_file("backend/src/modules/appointments/appointment.types.ts", """
import { AppointmentStatus, AppointmentType, DayOfWeek } from '@prisma/client';

export interface CreateAppointmentDTO {
  patientId: string;
  doctorId: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  type?: AppointmentType;
  reason?: string;
  telehealthUrl?: string;
}

export interface RescheduleAppointmentDTO {
  newDate: string;
  newStartTime: string;
  newEndTime: string;
  reason?: string;
}

export interface CancelAppointmentDTO {
  cancellationReason: string;
}

export interface AppointmentFilterParams {
  patientId?: string;
  doctorId?: string;
  status?: AppointmentStatus;
  startDate?: string;
  endDate?: string;
  type?: AppointmentType;
  page?: number;
  limit?: number;
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  appointmentId?: string;
}

export interface DoctorDailySchedule {
  date: string;
  dayOfWeek: DayOfWeek;
  workingHours: {
    startTime: string;
    endTime: string;
    slotDurationMinutes: number;
  } | null;
  isLeaveDay: boolean;
  leaveReason?: string;
  slots: TimeSlot[];
}
""")

    # Validation
    write_file("backend/src/modules/appointments/appointment.validation.ts", """
import { z } from 'zod';
import { AppointmentStatus, AppointmentType } from '@prisma/client';

export const createAppointmentSchema = z.object({
  body: z.object({
    patientId: z.string().uuid().optional(), // Inferred from auth token if patient
    doctorId: z.string().uuid('Valid doctor ID is required'),
    date: z.string().regex(/^\\d{4}-\\d{2}-\\d{2}$/, 'Date must be formatted as YYYY-MM-DD'),
    startTime: z.string().regex(/^([01]\\d|2[0-3]):([0-5]\\d)$/, 'Start time must be HH:mm (24hr)'),
    endTime: z.string().regex(/^([01]\\d|2[0-3]):([0-5]\\d)$/, 'End time must be HH:mm (24hr)'),
    type: z.nativeEnum(AppointmentType).optional().default(AppointmentType.IN_PERSON),
    reason: z.string().max(1000).optional(),
    telehealthUrl: z.string().url().optional(),
  }),
});

export const rescheduleAppointmentSchema = z.object({
  body: z.object({
    newDate: z.string().regex(/^\\d{4}-\\d{2}-\\d{2}$/, 'New date must be formatted as YYYY-MM-DD'),
    newStartTime: z.string().regex(/^([01]\\d|2[0-3]):([0-5]\\d)$/, 'Start time must be HH:mm'),
    newEndTime: z.string().regex(/^([01]\\d|2[0-3]):([0-5]\\d)$/, 'End time must be HH:mm'),
    reason: z.string().max(500).optional(),
  }),
});

export const cancelAppointmentSchema = z.object({
  body: z.object({
    cancellationReason: z.string().min(3, 'Cancellation reason is required').max(500),
  }),
});

export const appointmentQuerySchema = z.object({
  query: z.object({
    patientId: z.string().optional(),
    doctorId: z.string().optional(),
    status: z.nativeEnum(AppointmentStatus).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    type: z.nativeEnum(AppointmentType).optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});

export const doctorScheduleQuerySchema = z.object({
  query: z.object({
    doctorId: z.string().uuid('Doctor ID is required'),
    date: z.string().regex(/^\\d{4}-\\d{2}-\\d{2}$/, 'Date must be formatted as YYYY-MM-DD'),
  }),
});
""")

    # Repository
    write_file("backend/src/modules/appointments/appointment.repository.ts", """
import { prisma } from '../../config/database';
import { AppointmentStatus, AppointmentType, Prisma } from '@prisma/client';
import { CreateAppointmentDTO, AppointmentFilterParams } from './appointment.types';

export class AppointmentRepository {
  async findById(id: string) {
    return await prisma.appointment.findUnique({
      where: { id },
      include: {
        patient: {
          include: {
            user: { select: { firstName: true, lastName: true, email: true, phone: true } },
            emergencyContact: true,
          },
        },
        doctor: {
          include: {
            user: { select: { firstName: true, lastName: true, email: true, phone: true } },
            specializations: { include: { specialization: true } },
          },
        },
        statusHistory: { orderBy: { createdAt: 'desc' } },
        medicalRecord: true,
        invoice: { include: { payments: true } },
      },
    });
  }

  async findConflictingAppointment(doctorId: string, date: Date, startTime: string) {
    return await prisma.appointment.findFirst({
      where: {
        doctorId,
        date,
        startTime,
        status: {
          notIn: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW],
        },
      },
    });
  }

  async createAppointmentWithTransaction(data: CreateAppointmentDTO, changedById?: string) {
    return await prisma.$transaction(async (tx) => {
      const appointmentDate = new Date(data.date);

      // Verify no concurrent collision
      const existing = await tx.appointment.findFirst({
        where: {
          doctorId: data.doctorId,
          date: appointmentDate,
          startTime: data.startTime,
          status: {
            notIn: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW],
          },
        },
      });

      if (existing) {
        throw new Error('SLOT_ALREADY_BOOKED');
      }

      // Generate unique appointment number APT-YYYYMMDD-XXXX
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const dateString = data.date.replace(/-/g, '');
      const appointmentNumber = `APT-${dateString}-${randomSuffix}`;

      // Create appointment
      const appointment = await tx.appointment.create({
        data: {
          appointmentNumber,
          patientId: data.patientId,
          doctorId: data.doctorId,
          date: appointmentDate,
          startTime: data.startTime,
          endTime: data.endTime,
          type: data.type || AppointmentType.IN_PERSON,
          status: AppointmentStatus.CONFIRMED,
          reason: data.reason,
          telehealthUrl: data.telehealthUrl,
          statusHistory: {
            create: {
              status: AppointmentStatus.CONFIRMED,
              note: 'Appointment booked and confirmed',
              changedById,
            },
          },
        },
        include: {
          patient: { include: { user: true } },
          doctor: { include: { user: true } },
        },
      });

      // Automatically generate invoice for the appointment
      const doctor = await tx.doctor.findUnique({
        where: { id: data.doctorId },
        select: { consultationFee: true },
      });

      const fee = doctor?.consultationFee || 50.0;
      const tax = Number((fee * 0.05).toFixed(2));
      const netAmount = Number((fee + tax).toFixed(2));
      const invoiceNumber = `INV-${dateString}-${randomSuffix}`;

      await tx.invoice.create({
        data: {
          invoiceNumber,
          patientId: data.patientId,
          appointmentId: appointment.id,
          totalAmount: fee,
          taxAmount: tax,
          netAmount,
          dueDate: appointmentDate,
          items: {
            create: {
              description: `Consultation (${data.type || 'IN_PERSON'})`,
              quantity: 1,
              unitPrice: fee,
              totalPrice: fee,
            },
          },
        },
      });

      return appointment;
    });
  }

  async updateAppointmentStatus(id: string, status: AppointmentStatus, note?: string, changedById?: string) {
    return await prisma.$transaction(async (tx) => {
      const updated = await tx.appointment.update({
        where: { id },
        data: { status },
      });

      await tx.appointmentStatusHistory.create({
        data: {
          appointmentId: id,
          status,
          note: note || `Status updated to ${status}`,
          changedById,
        },
      });

      return updated;
    });
  }

  async rescheduleAppointment(
    id: string,
    newDate: Date,
    newStartTime: string,
    newEndTime: string,
    reason?: string,
    changedById?: string
  ) {
    return await prisma.$transaction(async (tx) => {
      const current = await tx.appointment.findUnique({ where: { id } });
      if (!current) throw new Error('APPOINTMENT_NOT_FOUND');

      const conflict = await tx.appointment.findFirst({
        where: {
          doctorId: current.doctorId,
          date: newDate,
          startTime: newStartTime,
          id: { not: id },
          status: { notIn: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW] },
        },
      });

      if (conflict) throw new Error('SLOT_ALREADY_BOOKED');

      const updated = await tx.appointment.update({
        where: { id },
        data: {
          date: newDate,
          startTime: newStartTime,
          endTime: newEndTime,
          status: AppointmentStatus.RESCHEDULED,
        },
      });

      await tx.appointmentStatusHistory.create({
        data: {
          appointmentId: id,
          status: AppointmentStatus.RESCHEDULED,
          note: reason || `Rescheduled to ${newDate.toISOString().split('T')[0]} at ${newStartTime}`,
          changedById,
        },
      });

      return updated;
    });
  }

  async findAppointments(params: AppointmentFilterParams) {
    const where: Prisma.AppointmentWhereInput = {};

    if (params.patientId) where.patientId = params.patientId;
    if (params.doctorId) where.doctorId = params.doctorId;
    if (params.status) where.status = params.status;
    if (params.type) where.type = params.type;

    if (params.startDate || params.endDate) {
      where.date = {};
      if (params.startDate) where.date.gte = new Date(params.startDate);
      if (params.endDate) where.date.lte = new Date(params.endDate);
    }

    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 10));
    const skip = (page - 1) * limit;

    const [total, appointments] = await Promise.all([
      prisma.appointment.count({ where }),
      prisma.appointment.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ date: 'desc' }, { startTime: 'desc' }],
        include: {
          patient: {
            include: {
              user: { select: { firstName: true, lastName: true, email: true, phone: true, avatarUrl: true } },
            },
          },
          doctor: {
            include: {
              user: { select: { firstName: true, lastName: true, email: true, avatarUrl: true } },
              specializations: { include: { specialization: true } },
            },
          },
          invoice: { select: { id: true, invoiceNumber: true, status: true, netAmount: true } },
        },
      }),
    ]);

    return { total, page, limit, totalPages: Math.ceil(total / limit), appointments };
  }
}

export const appointmentRepository = new AppointmentRepository();
""")

    # Services
    write_file("backend/src/modules/appointments/appointment.service.ts", """
import { appointmentRepository } from './appointment.repository';
import { CreateAppointmentDTO, RescheduleAppointmentDTO, CancelAppointmentDTO, AppointmentFilterParams } from './appointment.types';
import { ConflictError, NotFoundError, ForbiddenError, BadRequestError } from '../../utils/errors';
import { AppointmentStatus, UserRole } from '@prisma/client';
import { prisma } from '../../config/database';

export class AppointmentService {
  async createAppointment(data: CreateAppointmentDTO, requesterId: string, requesterRole: UserRole) {
    // If patient, ensure they can only book for themselves
    if (requesterRole === UserRole.PATIENT) {
      const patient = await prisma.patient.findUnique({ where: { userId: requesterId } });
      if (!patient) throw new NotFoundError('Patient profile not found');
      data.patientId = patient.id;
    }

    try {
      const appointment = await appointmentRepository.createAppointmentWithTransaction(data, requesterId);

      // Create in-app notification for patient
      await prisma.notification.create({
        data: {
          userId: appointment.patient.userId,
          type: 'APPOINTMENT_CONFIRMED',
          title: 'Appointment Confirmed',
          message: `Your appointment with Dr. ${appointment.doctor.user.lastName} is confirmed for ${data.date} at ${data.startTime}.`,
          linkUrl: `/patient/appointments`,
        },
      });

      // Notification for doctor
      await prisma.notification.create({
        data: {
          userId: appointment.doctor.userId,
          type: 'APPOINTMENT_BOOKED',
          title: 'New Appointment Booked',
          message: `Patient ${appointment.patient.user.firstName} ${appointment.patient.user.lastName} booked an appointment for ${data.date} at ${data.startTime}.`,
          linkUrl: `/doctor/appointments`,
        },
      });

      return appointment;
    } catch (err: any) {
      if (err.message === 'SLOT_ALREADY_BOOKED') {
        throw new ConflictError('The selected appointment time slot has already been booked. Please select another slot.');
      }
      throw err;
    }
  }

  async getAppointmentById(id: string, requesterId: string, requesterRole: UserRole) {
    const appointment = await appointmentRepository.findById(id);
    if (!appointment) throw new NotFoundError('Appointment not found');

    // Security check: patients only view their own; doctors view their own appointments
    if (requesterRole === UserRole.PATIENT && appointment.patient.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to view this appointment');
    }
    if (requesterRole === UserRole.DOCTOR && appointment.doctor.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to view this appointment');
    }

    return appointment;
  }

  async listAppointments(params: AppointmentFilterParams, requesterId: string, requesterRole: UserRole) {
    if (requesterRole === UserRole.PATIENT) {
      const patient = await prisma.patient.findUnique({ where: { userId: requesterId } });
      if (patient) params.patientId = patient.id;
    } else if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterId } });
      if (doctor) params.doctorId = doctor.id;
    }

    return await appointmentRepository.findAppointments(params);
  }

  async reschedule(id: string, dto: RescheduleAppointmentDTO, requesterId: string, requesterRole: UserRole) {
    const appointment = await appointmentRepository.findById(id);
    if (!appointment) throw new NotFoundError('Appointment not found');

    if (requesterRole === UserRole.PATIENT && appointment.patient.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to reschedule this appointment');
    }
    if (requesterRole === UserRole.DOCTOR && appointment.doctor.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to reschedule this appointment');
    }

    if ([AppointmentStatus.COMPLETED, AppointmentStatus.CANCELLED].includes(appointment.status)) {
      throw new BadRequestError(`Cannot reschedule an appointment with status ${appointment.status}`);
    }

    try {
      const newDate = new Date(dto.newDate);
      const updated = await appointmentRepository.rescheduleAppointment(
        id,
        newDate,
        dto.newStartTime,
        dto.newEndTime,
        dto.reason,
        requesterId
      );

      // Notification
      await prisma.notification.create({
        data: {
          userId: appointment.patient.userId,
          type: 'APPOINTMENT_RESCHEDULED',
          title: 'Appointment Rescheduled',
          message: `Your appointment has been rescheduled to ${dto.newDate} at ${dto.newStartTime}.`,
          linkUrl: `/patient/appointments`,
        },
      });

      return updated;
    } catch (err: any) {
      if (err.message === 'SLOT_ALREADY_BOOKED') {
        throw new ConflictError('The requested new time slot is unavailable.');
      }
      throw err;
    }
  }

  async cancel(id: string, dto: CancelAppointmentDTO, requesterId: string, requesterRole: UserRole) {
    const appointment = await appointmentRepository.findById(id);
    if (!appointment) throw new NotFoundError('Appointment not found');

    if (requesterRole === UserRole.PATIENT && appointment.patient.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to cancel this appointment');
    }
    if (requesterRole === UserRole.DOCTOR && appointment.doctor.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to cancel this appointment');
    }

    if (appointment.status === AppointmentStatus.COMPLETED) {
      throw new BadRequestError('Cannot cancel an already completed appointment');
    }

    return await appointmentRepository.updateAppointmentStatus(
      id,
      AppointmentStatus.CANCELLED,
      dto.cancellationReason,
      requesterId
    );
  }

  async updateStatus(id: string, status: AppointmentStatus, note?: string, changedById?: string) {
    const appointment = await appointmentRepository.findById(id);
    if (!appointment) throw new NotFoundError('Appointment not found');
    return await appointmentRepository.updateAppointmentStatus(id, status, note, changedById);
  }
}

export const appointmentService = new AppointmentService();
""")

    # Controller
    write_file("backend/src/modules/appointments/appointment.controller.ts", """
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
""")

    # Routes
    write_file("backend/src/modules/appointments/appointment.routes.ts", """
import { Router } from 'express';
import { appointmentController } from './appointment.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import {
  createAppointmentSchema,
  rescheduleAppointmentSchema,
  cancelAppointmentSchema,
  appointmentQuerySchema,
} from './appointment.validation';

const router = Router();

router.use(authenticate);

router.post(
  '/',
  validateRequest(createAppointmentSchema),
  auditLog({ action: 'CREATE', resource: 'APPOINTMENT' }),
  appointmentController.create
);

router.get(
  '/',
  validateRequest(appointmentQuerySchema),
  appointmentController.list
);

router.get(
  '/:id',
  appointmentController.getById
);

router.patch(
  '/:id/reschedule',
  validateRequest(rescheduleAppointmentSchema),
  auditLog({ action: 'UPDATE', resource: 'APPOINTMENT_RESCHEDULE' }),
  appointmentController.reschedule
);

router.patch(
  '/:id/cancel',
  validateRequest(cancelAppointmentSchema),
  auditLog({ action: 'UPDATE', resource: 'APPOINTMENT_CANCEL' }),
  appointmentController.cancel
);

router.patch(
  '/:id/status',
  auditLog({ action: 'UPDATE', resource: 'APPOINTMENT_STATUS' }),
  appointmentController.updateStatus
);

export const appointmentRouter = router;
""")

if __name__ == "__main__":
    generate_backend_appointments()
