import os

def generate(write_file):
    write_file("backend/src/modules/admin/admin.service.ts", """
import { prisma } from '../../config/database';
import { UserRole } from '@prisma/client';

export class AdminService {
  async getDashboardSummary() {
    const [
      totalPatients,
      totalDoctors,
      totalAppointments,
      completedAppointments,
      cancelledAppointments,
      totalInvoices,
      paidInvoices,
    ] = await Promise.all([
      prisma.patient.count(),
      prisma.doctor.count(),
      prisma.appointment.count(),
      prisma.appointment.count({ where: { status: 'COMPLETED' } }),
      prisma.appointment.count({ where: { status: 'CANCELLED' } }),
      prisma.invoice.count(),
      prisma.invoice.findMany({
        where: { status: 'PAID' },
        select: { netAmount: true },
      }),
    ]);

    const totalRevenue = paidInvoices.reduce((sum, inv) => sum + inv.netAmount, 0);

    return {
      totalPatients,
      totalDoctors,
      totalAppointments,
      completedAppointments,
      cancelledAppointments,
      totalInvoices,
      totalRevenue: Number(totalRevenue.toFixed(2)),
    };
  }

  async getAuditLogs(page = 1, limit = 20, resource?: string, action?: string) {
    const where: any = {};
    if (resource) where.resource = resource;
    if (action) where.action = action;

    const skip = (page - 1) * limit;

    const [total, logs] = await Promise.all([
      prisma.auditLog.count({ where }),
      prisma.auditLog.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          user: { select: { firstName: true, lastName: true, email: true, role: true } },
        },
      }),
    ]);

    return { total, page, limit, totalPages: Math.ceil(total / limit), logs };
  }

  async getSystemSettings() {
    return await prisma.systemSetting.findMany({
      orderBy: { key: 'asc' },
    });
  }

  async updateSystemSetting(key: string, value: string) {
    return await prisma.systemSetting.upsert({
      where: { key },
      create: { key, value },
      update: { value },
    });
  }
}

export const adminService = new AdminService();
""")

    write_file("backend/src/modules/admin/admin.controller.ts", """
import { Request, Response, NextFunction } from 'express';
import { adminService } from './admin.service';
import { sendSuccess } from '../../utils/response';

export class AdminController {
  async getDashboardSummary(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await adminService.getDashboardSummary();
      return sendSuccess(res, result, 'Admin dashboard summary retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getAuditLogs(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 20;
      const resource = req.query.resource as string;
      const action = req.query.action as string;
      const result = await adminService.getAuditLogs(page, limit, resource, action);
      return sendSuccess(res, result, 'Audit logs retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getSettings(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await adminService.getSystemSettings();
      return sendSuccess(res, result, 'System settings retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async updateSetting(req: Request, res: Response, next: NextFunction) {
    try {
      const { key } = req.params;
      const { value } = req.body;
      const result = await adminService.updateSystemSetting(key, value);
      return sendSuccess(res, result, 'Setting updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const adminController = new AdminController();
""")

    write_file("backend/src/modules/admin/admin.routes.ts", """
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
""")

    # ==========================================
    # ANALYTICS MODULE
    # ==========================================
    write_file("backend/src/modules/analytics/analytics.service.ts", """
import { prisma } from '../../config/database';

export class AnalyticsService {
  async getAppointmentMonthlyTrends() {
    // Generate monthly aggregation for the past 6 months
    const appointments = await prisma.appointment.findMany({
      select: { date: true, status: true },
    });

    const monthsMap: Record<string, { total: number; completed: number; cancelled: number }> = {};

    appointments.forEach((apt) => {
      const monthKey = apt.date.toISOString().slice(0, 7); // YYYY-MM
      if (!monthsMap[monthKey]) {
        monthsMap[monthKey] = { total: 0, completed: 0, cancelled: 0 };
      }
      monthsMap[monthKey].total += 1;
      if (apt.status === 'COMPLETED') monthsMap[monthKey].completed += 1;
      if (apt.status === 'CANCELLED') monthsMap[monthKey].cancelled += 1;
    });

    return Object.entries(monthsMap).map(([month, data]) => ({
      month,
      ...data,
    }));
  }

  async getSpecializationDistribution() {
    const specializations = await prisma.specialization.findMany({
      include: {
        _count: {
          select: { doctors: true },
        },
      },
    });

    return specializations.map((spec) => ({
      specialization: spec.name,
      doctorCount: spec._count.doctors,
    }));
  }

  async getRevenueTrends() {
    const invoices = await prisma.invoice.findMany({
      where: { status: 'PAID' },
      select: { createdAt: true, netAmount: true },
    });

    const revenueMap: Record<string, number> = {};

    invoices.forEach((inv) => {
      const monthKey = inv.createdAt.toISOString().slice(0, 7);
      revenueMap[monthKey] = (revenueMap[monthKey] || 0) + inv.netAmount;
    });

    return Object.entries(revenueMap).map(([month, revenue]) => ({
      month,
      revenue: Number(revenue.toFixed(2)),
    }));
  }
}

export const analyticsService = new AnalyticsService();
""")

    write_file("backend/src/modules/analytics/analytics.controller.ts", """
import { Request, Response, NextFunction } from 'express';
import { analyticsService } from './analytics.service';
import { sendSuccess } from '../../utils/response';

export class AnalyticsController {
  async getAppointmentTrends(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await analyticsService.getAppointmentMonthlyTrends();
      return sendSuccess(res, result, 'Monthly appointment trends retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getSpecializationDistribution(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await analyticsService.getSpecializationDistribution();
      return sendSuccess(res, result, 'Doctor specialization distribution retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getRevenueTrends(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await analyticsService.getRevenueTrends();
      return sendSuccess(res, result, 'Revenue trends retrieved', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const analyticsController = new AnalyticsController();
""")

    write_file("backend/src/modules/analytics/analytics.routes.ts", """
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
""")
