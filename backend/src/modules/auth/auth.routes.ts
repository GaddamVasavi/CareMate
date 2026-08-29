import { Router } from 'express';
import { authController } from './auth.controller';
import { validateRequest } from '../../middleware/validate.middleware';
import { authenticate } from '../../middleware/auth.middleware';
import { authRateLimiter } from '../../middleware/rateLimit.middleware';
import {
  registerPatientSchema,
  registerDoctorSchema,
  loginSchema,
  refreshTokenSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  changePasswordSchema,
} from './auth.validation';

const router = Router();

// Public routes
router.post(
  '/register/patient',
  authRateLimiter,
  validateRequest(registerPatientSchema),
  authController.registerPatient
);

router.post(
  '/register/doctor',
  authRateLimiter,
  validateRequest(registerDoctorSchema),
  authController.registerDoctor
);

router.post(
  '/login',
  authRateLimiter,
  validateRequest(loginSchema),
  authController.login
);

router.post(
  '/refresh-token',
  validateRequest(refreshTokenSchema),
  authController.refreshTokens
);

router.post(
  '/forgot-password',
  authRateLimiter,
  validateRequest(forgotPasswordSchema),
  authController.forgotPassword
);

router.post(
  '/reset-password',
  authRateLimiter,
  validateRequest(resetPasswordSchema),
  authController.resetPassword
);

// Protected routes (require JWT)
router.post('/logout', authenticate, authController.logout);
router.get('/me', authenticate, authController.getCurrentUser);
router.post(
  '/change-password',
  authenticate,
  validateRequest(changePasswordSchema),
  authController.changePassword
);

export const authRouter = router;
