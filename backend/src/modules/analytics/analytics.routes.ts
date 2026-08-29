import { Router } from 'express';
import { analyticsController } from './analytics.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireAdmin } from '../../middleware/role.middleware';

const router = Router();

router.use(authenticate, requireAdmin);

router.get('/appointment-trends', analyticsController.getAppointmentTrends);
router.get('/specialization-distribution', analyticsController.getSpecializationDistribution);
router.get('/revenue-trends', analyticsController.getRevenueTrends);

export const analyticsRouter = router;
