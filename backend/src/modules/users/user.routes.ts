import { Router } from 'express';
import { userController } from './user.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireAdmin } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import {
  updateUserProfileSchema,
  toggleUserStatusSchema,
  getUsersQuerySchema,
} from './user.validation';

const router = Router();

// All user routes require authentication
router.use(authenticate);

// Profile routes
router.put(
  '/profile',
  validateRequest(updateUserProfileSchema),
  auditLog({ action: 'UPDATE', resource: 'USER_PROFILE' }),
  userController.updateProfile
);

// Admin-only user management
router.get(
  '/',
  requireAdmin,
  validateRequest(getUsersQuerySchema),
  userController.listUsers
);

router.get(
  '/:id',
  userController.getUserById
);

router.patch(
  '/:id/status',
  requireAdmin,
  validateRequest(toggleUserStatusSchema),
  auditLog({ action: 'UPDATE', resource: 'USER_STATUS' }),
  userController.toggleStatus
);

export const userRouter = router;
