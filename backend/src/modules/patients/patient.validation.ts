import { z } from 'zod';
import { Gender, BloodGroup } from '@prisma/client';

export const updatePatientProfileSchema = z.object({
  body: z.object({
    dateOfBirth: z.string().optional(),
    gender: z.nativeEnum(Gender).optional(),
    bloodGroup: z.nativeEnum(BloodGroup).optional(),
    height: z.number().min(30).max(300).optional(),
    weight: z.number().min(2).max(500).optional(),
    insuranceProvider: z.string().optional(),
    insurancePolicyNumber: z.string().optional(),
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    emergencyContactName: z.string().optional(),
    emergencyContactPhone: z.string().optional(),
    emergencyContactRelationship: z.string().optional(),
  }),
});

export const addAllergySchema = z.object({
  body: z.object({
    allergen: z.string().min(2, 'Allergen name is required'),
    severity: z.enum(['MILD', 'MODERATE', 'SEVERE']),
    reaction: z.string().optional(),
    diagnosedAt: z.string().optional(),
  }),
});

export const addConditionSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Condition name is required'),
    status: z.enum(['ACTIVE', 'IN_REMISSION', 'RESOLVED']),
    diagnosedAt: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const addMedicalHistorySchema = z.object({
  body: z.object({
    condition: z.string().min(2, 'Condition description is required'),
    surgeries: z.string().optional(),
    familyHistory: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const patientSearchSchema = z.object({
  query: z.object({
    search: z.string().optional(),
    bloodGroup: z.nativeEnum(BloodGroup).optional(),
    gender: z.nativeEnum(Gender).optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});
