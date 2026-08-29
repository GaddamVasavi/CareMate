import { z } from 'zod';
import { LabOrderStatus } from '@prisma/client';

export const createLabOrderSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Patient ID is required'),
    labTestIds: z.array(z.string().uuid()).min(1, 'At least one lab test must be selected'),
    notes: z.string().optional(),
  }),
});

export const enterLabResultSchema = z.object({
  body: z.object({
    labOrderItemId: z.string().uuid('Lab order item ID is required'),
    resultValue: z.string().min(1, 'Result value is required'),
    isAbnormal: z.boolean().default(false),
    remarks: z.string().optional(),
    reportFileUrl: z.string().url().optional(),
  }),
});

export const updateLabStatusSchema = z.object({
  body: z.object({
    status: z.nativeEnum(LabOrderStatus),
  }),
});

export const labOrderQuerySchema = z.object({
  query: z.object({
    patientId: z.string().optional(),
    doctorId: z.string().optional(),
    status: z.nativeEnum(LabOrderStatus).optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});
