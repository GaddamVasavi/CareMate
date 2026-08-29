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
