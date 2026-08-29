import { Router } from 'express';
import { adminController } from './admin.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireAdmin } from '../../middleware/role.middleware';

const router = Router();

router.use(authenticate, requireAdmin);

router.get('/summary', adminController.getDashboardSummary);
router.get('/audit-logs', adminController.getAuditLogs);
router.get('/settings', adminController.getSettings);
router.put('/settings/:key', adminController.updateSetting);

export const adminRouter = router;
