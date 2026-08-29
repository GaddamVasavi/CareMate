import { z } from 'zod';

export const createPrescriptionSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Patient ID is required'),
    medicalRecordId: z.string().uuid().optional(),
    validUntil: z.string().optional(),
    notes: z.string().optional(),
    items: z.array(
      z.object({
        medicineId: z.string().uuid().optional(),
        medicineName: z.string().min(2, 'Medicine name is required'),
        dosage: z.string().min(1, 'Dosage is required (e.g. 500mg)'),
        frequency: z.string().min(1, 'Frequency is required (e.g. twice daily)'),
        duration: z.string().min(1, 'Duration is required (e.g. 7 days)'),
        instructions: z.string().optional(),
      })
    ).min(1, 'At least one medicine item is required in prescription'),
  }),
});

export const prescriptionQuerySchema = z.object({
  query: z.object({
    patientId: z.string().optional(),
    doctorId: z.string().optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});
