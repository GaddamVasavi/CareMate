import { Router } from 'express';
import { billingController } from './billing.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireAdmin } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import {
  createInvoiceSchema,
  processPaymentSchema,
  processRefundSchema,
  invoiceQuerySchema,
} from './billing.validation';

const router = Router();

router.use(authenticate);

router.post(
  '/invoices',
  requireAdmin,
  validateRequest(createInvoiceSchema),
  auditLog({ action: 'CREATE', resource: 'INVOICE' }),
  billingController.createInvoice
);

router.get('/invoices', validateRequest(invoiceQuerySchema), billingController.listInvoices);
router.get('/invoices/:id', auditLog({ action: 'READ', resource: 'INVOICE' }), billingController.getInvoiceById);

router.post(
  '/payments',
  validateRequest(processPaymentSchema),
  auditLog({ action: 'CREATE', resource: 'PAYMENT' }),
  billingController.processPayment
);

router.post(
  '/refunds',
  requireAdmin,
  validateRequest(processRefundSchema),
  auditLog({ action: 'CREATE', resource: 'REFUND' }),
  billingController.processRefund
);

export const billingRouter = router;
