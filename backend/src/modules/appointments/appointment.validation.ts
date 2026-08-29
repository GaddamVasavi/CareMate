import { z } from 'zod';
import { AppointmentStatus, AppointmentType } from '@prisma/client';

export const createAppointmentSchema = z.object({
  body: z.object({
    patientId: z.string().uuid().optional(), // Inferred from auth token if patient
    doctorId: z.string().uuid('Valid doctor ID is required'),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be formatted as YYYY-MM-DD'),
    startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Start time must be HH:mm (24hr)'),
    endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'End time must be HH:mm (24hr)'),
    type: z.nativeEnum(AppointmentType).optional().default(AppointmentType.IN_PERSON),
    reason: z.string().max(1000).optional(),
    telehealthUrl: z.string().url().optional(),
  }),
});

export const rescheduleAppointmentSchema = z.object({
  body: z.object({
    newDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'New date must be formatted as YYYY-MM-DD'),
    newStartTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Start time must be HH:mm'),
    newEndTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'End time must be HH:mm'),
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
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be formatted as YYYY-MM-DD'),
  }),
});
