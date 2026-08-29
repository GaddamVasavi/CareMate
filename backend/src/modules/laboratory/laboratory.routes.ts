import { Router } from 'express';
import { laboratoryController } from './laboratory.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireStaff } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import {
  createLabOrderSchema,
  enterLabResultSchema,
  updateLabStatusSchema,
  labOrderQuerySchema,
} from './laboratory.validation';

const router = Router();

router.use(authenticate);

router.get('/catalog', laboratoryController.getCatalog);
router.post(
  '/orders',
  requireStaff,
  validateRequest(createLabOrderSchema),
  auditLog({ action: 'CREATE', resource: 'LAB_ORDER' }),
  laboratoryController.createOrder
);
router.get('/orders', validateRequest(labOrderQuerySchema), laboratoryController.listOrders);
router.get('/orders/:id', auditLog({ action: 'READ', resource: 'LAB_ORDER' }), laboratoryController.getOrderById);
router.patch('/orders/:id/status', requireStaff, validateRequest(updateLabStatusSchema), laboratoryController.updateStatus);
router.post('/results', requireStaff, validateRequest(enterLabResultSchema), laboratoryController.enterResult);

export const laboratoryRouter = router;
