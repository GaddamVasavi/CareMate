import { Router } from 'express';
import { medicalRecordController } from './medical-record.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireDoctorOrAdmin } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import { createMedicalRecordSchema, medicalRecordQuerySchema } from './medical-record.validation';

const router = Router();

router.use(authenticate);

router.post(
  '/',
  requireDoctorOrAdmin,
  validateRequest(createMedicalRecordSchema),
  auditLog({ action: 'CREATE', resource: 'MEDICAL_RECORD' }),
  medicalRecordController.create
);

router.get(
  '/',
  validateRequest(medicalRecordQuerySchema),
  medicalRecordController.list
);

router.get(
  '/:id',
  auditLog({ action: 'READ', resource: 'MEDICAL_RECORD' }),
  medicalRecordController.getById
);

export const medicalRecordRouter = router;
