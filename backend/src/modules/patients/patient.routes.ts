import { Router } from 'express';
import { patientController } from './patient.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireDoctorOrAdmin, requireStaff } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import {
  updatePatientProfileSchema,
  addAllergySchema,
  addConditionSchema,
  addMedicalHistorySchema,
  patientSearchSchema,
} from './patient.validation';

const router = Router();

router.use(authenticate);

router.get('/me', patientController.getMyProfile);
router.get('/', requireDoctorOrAdmin, validateRequest(patientSearchSchema), patientController.list);
router.get('/:id', auditLog({ action: 'READ', resource: 'PATIENT_PROFILE' }), patientController.getProfile);
router.put('/:id', validateRequest(updatePatientProfileSchema), auditLog({ action: 'UPDATE', resource: 'PATIENT_PROFILE' }), patientController.updateProfile);

router.post('/:id/allergies', validateRequest(addAllergySchema), patientController.addAllergy);
router.delete('/allergies/:allergyId', patientController.removeAllergy);

router.post('/:id/conditions', validateRequest(addConditionSchema), patientController.addCondition);
router.delete('/conditions/:conditionId', patientController.removeCondition);

router.post('/:id/medical-history', requireStaff, validateRequest(addMedicalHistorySchema), patientController.addMedicalHistory);

export const patientRouter = router;
