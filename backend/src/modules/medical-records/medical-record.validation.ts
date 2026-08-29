import { z } from 'zod';

export const createMedicalRecordSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Valid patient ID is required'),
    doctorId: z.string().uuid().optional(), // Inferred from doctor auth token
    appointmentId: z.string().uuid().optional(),
    visitDate: z.string().optional(),
    symptoms: z.string().min(3, 'Symptoms description is required'),
    diagnosisNote: z.string().min(3, 'Clinical diagnosis note is required'),
    treatmentPlan: z.string().optional(),
    vitalSigns: z.object({
      systolicBP: z.number().min(40).max(300).optional(),
      diastolicBP: z.number().min(30).max(200).optional(),
      heartRate: z.number().min(30).max(250).optional(),
      respiratoryRate: z.number().min(5).max(60).optional(),
      temperature: z.number().min(30).max(45).optional(),
      oxygenSaturation: z.number().min(50).max(100).optional(),
      bloodGlucose: z.number().min(20).max(800).optional(),
    }).optional(),
    diagnoses: z.array(
      z.object({
        code: z.string().optional(),
        description: z.string().min(2),
        type: z.enum(['PRIMARY', 'SECONDARY']).default('PRIMARY'),
      })
    ).optional(),
    soapNote: z.object({
      subjective: z.string().optional(),
      objective: z.string().optional(),
      assessment: z.string().optional(),
      plan: z.string().optional(),
    }).optional(),
    treatments: z.array(
      z.object({
        name: z.string().min(2),
        description: z.string().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        status: z.enum(['ACTIVE', 'COMPLETED', 'DISCONTINUED']).default('ACTIVE'),
      })
    ).optional(),
  }),
});

export const medicalRecordQuerySchema = z.object({
  query: z.object({
    patientId: z.string().optional(),
    doctorId: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});
