import { Router } from 'express';
import { doctorController } from './doctor.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requirePatient } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import {
  doctorSearchSchema,
  setAvailabilitySchema,
  addDoctorLeaveSchema,
  addDoctorReviewSchema,
} from './doctor.validation';

const router = Router();

// Public doctor discovery
router.get('/search', validateRequest(doctorSearchSchema), doctorController.search);
router.get('/specializations', doctorController.getSpecializations);
router.get('/:id', doctorController.getById);

// Protected doctor routes
router.use(authenticate);
router.get('/me/profile', doctorController.getMyProfile);
router.post('/:id/availability', validateRequest(setAvailabilitySchema), doctorController.setAvailability);
router.post('/:id/leaves', validateRequest(addDoctorLeaveSchema), doctorController.addLeave);
router.post('/:id/reviews', requirePatient, validateRequest(addDoctorReviewSchema), doctorController.addReview);

export const doctorRouter = router;
