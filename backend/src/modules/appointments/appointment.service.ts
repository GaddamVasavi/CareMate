import { appointmentRepository } from './appointment.repository';
import { CreateAppointmentDTO, RescheduleAppointmentDTO, CancelAppointmentDTO, AppointmentFilterParams } from './appointment.types';
import { ConflictError, NotFoundError, ForbiddenError, BadRequestError } from '../../utils/errors';
import { AppointmentStatus, UserRole } from '@prisma/client';
import { prisma } from '../../config/database';

export class AppointmentService {
  async createAppointment(data: CreateAppointmentDTO, requesterId: string, requesterRole: UserRole) {
    // If patient, ensure they can only book for themselves
    if (requesterRole === UserRole.PATIENT) {
      const patient = await prisma.patient.findUnique({ where: { userId: requesterId } });
      if (!patient) throw new NotFoundError('Patient profile not found');
      data.patientId = patient.id;
    }

    try {
      const appointment = await appointmentRepository.createAppointmentWithTransaction(data, requesterId);

      // Create in-app notification for patient
      await prisma.notification.create({
        data: {
          userId: appointment.patient.userId,
          type: 'APPOINTMENT_CONFIRMED',
          title: 'Appointment Confirmed',
          message: `Your appointment with Dr. ${appointment.doctor.user.lastName} is confirmed for ${data.date} at ${data.startTime}.`,
          linkUrl: `/patient/appointments`,
        },
      });

      // Notification for doctor
      await prisma.notification.create({
        data: {
          userId: appointment.doctor.userId,
          type: 'APPOINTMENT_BOOKED',
          title: 'New Appointment Booked',
          message: `Patient ${appointment.patient.user.firstName} ${appointment.patient.user.lastName} booked an appointment for ${data.date} at ${data.startTime}.`,
          linkUrl: `/doctor/appointments`,
        },
      });

      return appointment;
    } catch (err: any) {
      if (err.message === 'SLOT_ALREADY_BOOKED') {
        throw new ConflictError('The selected appointment time slot has already been booked. Please select another slot.');
      }
      throw err;
    }
  }

  async getAppointmentById(id: string, requesterId: string, requesterRole: UserRole) {
    const appointment = await appointmentRepository.findById(id);
    if (!appointment) throw new NotFoundError('Appointment not found');

    // Security check: patients only view their own; doctors view their own appointments
    if (requesterRole === UserRole.PATIENT && appointment.patient.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to view this appointment');
    }
    if (requesterRole === UserRole.DOCTOR && appointment.doctor.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to view this appointment');
    }

    return appointment;
  }

  async listAppointments(params: AppointmentFilterParams, requesterId: string, requesterRole: UserRole) {
    if (requesterRole === UserRole.PATIENT) {
      const patient = await prisma.patient.findUnique({ where: { userId: requesterId } });
      if (patient) params.patientId = patient.id;
    } else if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterId } });
      if (doctor) params.doctorId = doctor.id;
    }

    return await appointmentRepository.findAppointments(params);
  }

  async reschedule(id: string, dto: RescheduleAppointmentDTO, requesterId: string, requesterRole: UserRole) {
    const appointment = await appointmentRepository.findById(id);
    if (!appointment) throw new NotFoundError('Appointment not found');

    if (requesterRole === UserRole.PATIENT && appointment.patient.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to reschedule this appointment');
    }
    if (requesterRole === UserRole.DOCTOR && appointment.doctor.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to reschedule this appointment');
    }

    if ([AppointmentStatus.COMPLETED, AppointmentStatus.CANCELLED].includes(appointment.status)) {
      throw new BadRequestError(`Cannot reschedule an appointment with status ${appointment.status}`);
    }

    try {
      const newDate = new Date(dto.newDate);
      const updated = await appointmentRepository.rescheduleAppointment(
        id,
        newDate,
        dto.newStartTime,
        dto.newEndTime,
        dto.reason,
        requesterId
      );

      // Notification
      await prisma.notification.create({
        data: {
          userId: appointment.patient.userId,
          type: 'APPOINTMENT_RESCHEDULED',
          title: 'Appointment Rescheduled',
          message: `Your appointment has been rescheduled to ${dto.newDate} at ${dto.newStartTime}.`,
          linkUrl: `/patient/appointments`,
        },
      });

      return updated;
    } catch (err: any) {
      if (err.message === 'SLOT_ALREADY_BOOKED') {
        throw new ConflictError('The requested new time slot is unavailable.');
      }
      throw err;
    }
  }

  async cancel(id: string, dto: CancelAppointmentDTO, requesterId: string, requesterRole: UserRole) {
    const appointment = await appointmentRepository.findById(id);
    if (!appointment) throw new NotFoundError('Appointment not found');

    if (requesterRole === UserRole.PATIENT && appointment.patient.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to cancel this appointment');
    }
    if (requesterRole === UserRole.DOCTOR && appointment.doctor.userId !== requesterId) {
      throw new ForbiddenError('You are not authorized to cancel this appointment');
    }

    if (appointment.status === AppointmentStatus.COMPLETED) {
      throw new BadRequestError('Cannot cancel an already completed appointment');
    }

    return await appointmentRepository.updateAppointmentStatus(
      id,
      AppointmentStatus.CANCELLED,
      dto.cancellationReason,
      requesterId
    );
  }

  async updateStatus(id: string, status: AppointmentStatus, note?: string, changedById?: string) {
    const appointment = await appointmentRepository.findById(id);
    if (!appointment) throw new NotFoundError('Appointment not found');
    return await appointmentRepository.updateAppointmentStatus(id, status, note, changedById);
  }
}

export const appointmentService = new AppointmentService();
