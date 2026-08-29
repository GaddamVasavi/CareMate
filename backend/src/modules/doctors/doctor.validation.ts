import { z } from 'zod';
import { DayOfWeek } from '@prisma/client';

export const doctorSearchSchema = z.object({
  query: z.object({
    search: z.string().optional(),
    specializationId: z.string().optional(),
    specializationName: z.string().optional(),
    minExperience: z.string().optional().transform(Number),
    maxFee: z.string().optional().transform(Number),
    minRating: z.string().optional().transform(Number),
    city: z.string().optional(),
    sortBy: z.enum(['rating', 'fee_asc', 'fee_desc', 'experience']).optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});

export const updateDoctorProfileSchema = z.object({
  body: z.object({
    licenseNumber: z.string().optional(),
    qualifications: z.string().optional(),
    experienceYears: z.number().min(0).optional(),
    consultationFee: z.number().min(0).optional(),
    biography: z.string().optional(),
    clinicName: z.string().optional(),
    clinicAddress: z.string().optional(),
    languages: z.array(z.string()).optional(),
    specializationIds: z.array(z.string()).optional(),
  }),
});

export const setAvailabilitySchema = z.object({
  body: z.object({
    dayOfWeek: z.nativeEnum(DayOfWeek),
    startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
    endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
    slotDurationMinutes: z.number().int().min(10).max(120).default(30),
    isActive: z.boolean().default(true),
  }),
});

export const addDoctorLeaveSchema = z.object({
  body: z.object({
    startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    reason: z.string().optional(),
  }),
});

export const addDoctorReviewSchema = z.object({
  body: z.object({
    rating: z.number().int().min(1).max(5),
    comment: z.string().max(1000).optional(),
  }),
});
