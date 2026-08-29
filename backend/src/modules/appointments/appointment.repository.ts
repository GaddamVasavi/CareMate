import { prisma } from '../../config/database';
import { AppointmentStatus, AppointmentType, Prisma } from '@prisma/client';
import { CreateAppointmentDTO, AppointmentFilterParams } from './appointment.types';

export class AppointmentRepository {
  async findById(id: string) {
    return await prisma.appointment.findUnique({
      where: { id },
      include: {
        patient: {
          include: {
            user: { select: { firstName: true, lastName: true, email: true, phone: true } },
            emergencyContact: true,
          },
        },
        doctor: {
          include: {
            user: { select: { firstName: true, lastName: true, email: true, phone: true } },
            specializations: { include: { specialization: true } },
          },
        },
        statusHistory: { orderBy: { createdAt: 'desc' } },
        medicalRecord: true,
        invoice: { include: { payments: true } },
      },
    });
  }

  async findConflictingAppointment(doctorId: string, date: Date, startTime: string) {
    return await prisma.appointment.findFirst({
      where: {
        doctorId,
        date,
        startTime,
        status: {
          notIn: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW],
        },
      },
    });
  }

  async createAppointmentWithTransaction(data: CreateAppointmentDTO, changedById?: string) {
    return await prisma.$transaction(async (tx) => {
      const appointmentDate = new Date(data.date);

      // Verify no concurrent collision
      const existing = await tx.appointment.findFirst({
        where: {
          doctorId: data.doctorId,
          date: appointmentDate,
          startTime: data.startTime,
          status: {
            notIn: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW],
          },
        },
      });

      if (existing) {
        throw new Error('SLOT_ALREADY_BOOKED');
      }

      // Generate unique appointment number APT-YYYYMMDD-XXXX
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const dateString = data.date.replace(/-/g, '');
      const appointmentNumber = `APT-${dateString}-${randomSuffix}`;

      // Create appointment
      const appointment = await tx.appointment.create({
        data: {
          appointmentNumber,
          patientId: data.patientId,
          doctorId: data.doctorId,
          date: appointmentDate,
          startTime: data.startTime,
          endTime: data.endTime,
          type: data.type || AppointmentType.IN_PERSON,
          status: AppointmentStatus.CONFIRMED,
          reason: data.reason,
          telehealthUrl: data.telehealthUrl,
          statusHistory: {
            create: {
              status: AppointmentStatus.CONFIRMED,
              note: 'Appointment booked and confirmed',
              changedById,
            },
          },
        },
        include: {
          patient: { include: { user: true } },
          doctor: { include: { user: true } },
        },
      });

      // Automatically generate invoice for the appointment
      const doctor = await tx.doctor.findUnique({
        where: { id: data.doctorId },
        select: { consultationFee: true },
      });

      const fee = doctor?.consultationFee || 50.0;
      const tax = Number((fee * 0.05).toFixed(2));
      const netAmount = Number((fee + tax).toFixed(2));
      const invoiceNumber = `INV-${dateString}-${randomSuffix}`;

      await tx.invoice.create({
        data: {
          invoiceNumber,
          patientId: data.patientId,
          appointmentId: appointment.id,
          totalAmount: fee,
          taxAmount: tax,
          netAmount,
          dueDate: appointmentDate,
          items: {
            create: {
              description: `Consultation (${data.type || 'IN_PERSON'})`,
              quantity: 1,
              unitPrice: fee,
              totalPrice: fee,
            },
          },
        },
      });

      return appointment;
    });
  }

  async updateAppointmentStatus(id: string, status: AppointmentStatus, note?: string, changedById?: string) {
    return await prisma.$transaction(async (tx) => {
      const updated = await tx.appointment.update({
        where: { id },
        data: { status },
      });

      await tx.appointmentStatusHistory.create({
        data: {
          appointmentId: id,
          status,
          note: note || `Status updated to ${status}`,
          changedById,
        },
      });

      return updated;
    });
  }

  async rescheduleAppointment(
    id: string,
    newDate: Date,
    newStartTime: string,
    newEndTime: string,
    reason?: string,
    changedById?: string
  ) {
    return await prisma.$transaction(async (tx) => {
      const current = await tx.appointment.findUnique({ where: { id } });
      if (!current) throw new Error('APPOINTMENT_NOT_FOUND');

      const conflict = await tx.appointment.findFirst({
        where: {
          doctorId: current.doctorId,
          date: newDate,
          startTime: newStartTime,
          id: { not: id },
          status: { notIn: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW] },
        },
      });

      if (conflict) throw new Error('SLOT_ALREADY_BOOKED');

      const updated = await tx.appointment.update({
        where: { id },
        data: {
          date: newDate,
          startTime: newStartTime,
          endTime: newEndTime,
          status: AppointmentStatus.RESCHEDULED,
        },
      });

      await tx.appointmentStatusHistory.create({
        data: {
          appointmentId: id,
          status: AppointmentStatus.RESCHEDULED,
          note: reason || `Rescheduled to ${newDate.toISOString().split('T')[0]} at ${newStartTime}`,
          changedById,
        },
      });

      return updated;
    });
  }

  async findAppointments(params: AppointmentFilterParams) {
    const where: Prisma.AppointmentWhereInput = {};

    if (params.patientId) where.patientId = params.patientId;
    if (params.doctorId) where.doctorId = params.doctorId;
    if (params.status) where.status = params.status;
    if (params.type) where.type = params.type;

    if (params.startDate || params.endDate) {
      where.date = {};
      if (params.startDate) where.date.gte = new Date(params.startDate);
      if (params.endDate) where.date.lte = new Date(params.endDate);
    }

    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 10));
    const skip = (page - 1) * limit;

    const [total, appointments] = await Promise.all([
      prisma.appointment.count({ where }),
      prisma.appointment.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ date: 'desc' }, { startTime: 'desc' }],
        include: {
          patient: {
            include: {
              user: { select: { firstName: true, lastName: true, email: true, phone: true, avatarUrl: true } },
            },
          },
          doctor: {
            include: {
              user: { select: { firstName: true, lastName: true, email: true, avatarUrl: true } },
              specializations: { include: { specialization: true } },
            },
          },
          invoice: { select: { id: true, invoiceNumber: true, status: true, netAmount: true } },
        },
      }),
    ]);

    return { total, page, limit, totalPages: Math.ceil(total / limit), appointments };
  }
}

export const appointmentRepository = new AppointmentRepository();
