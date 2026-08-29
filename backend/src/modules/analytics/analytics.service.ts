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
