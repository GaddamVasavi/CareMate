import { Router } from 'express';
import { prescriptionController } from './prescription.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireDoctorOrAdmin } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import { createPrescriptionSchema, prescriptionQuerySchema } from './prescription.validation';

const router = Router();

router.use(authenticate);

router.post(
  '/',
  requireDoctorOrAdmin,
  validateRequest(createPrescriptionSchema),
  auditLog({ action: 'CREATE', resource: 'PRESCRIPTION' }),
  prescriptionController.create
);

router.get('/medicines', prescriptionController.searchMedicines);
router.get('/', validateRequest(prescriptionQuerySchema), prescriptionController.list);
router.get('/:id', auditLog({ action: 'READ', resource: 'PRESCRIPTION' }), prescriptionController.getById);

export const prescriptionRouter = router;
