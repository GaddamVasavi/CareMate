import { Router } from 'express';
import { appointmentController } from './appointment.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import {
  createAppointmentSchema,
  rescheduleAppointmentSchema,
  cancelAppointmentSchema,
  appointmentQuerySchema,
} from './appointment.validation';

const router = Router();

router.use(authenticate);

router.post(
  '/',
  validateRequest(createAppointmentSchema),
  auditLog({ action: 'CREATE', resource: 'APPOINTMENT' }),
  appointmentController.create
);

router.get(
  '/',
  validateRequest(appointmentQuerySchema),
  appointmentController.list
);

router.get(
  '/:id',
  appointmentController.getById
);

router.patch(
  '/:id/reschedule',
  validateRequest(rescheduleAppointmentSchema),
  auditLog({ action: 'UPDATE', resource: 'APPOINTMENT_RESCHEDULE' }),
  appointmentController.reschedule
);

router.patch(
  '/:id/cancel',
  validateRequest(cancelAppointmentSchema),
  auditLog({ action: 'UPDATE', resource: 'APPOINTMENT_CANCEL' }),
  appointmentController.cancel
);

router.patch(
  '/:id/status',
  auditLog({ action: 'UPDATE', resource: 'APPOINTMENT_STATUS' }),
  appointmentController.updateStatus
);

export const appointmentRouter = router;
