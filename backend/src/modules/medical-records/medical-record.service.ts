import { medicalRecordRepository } from './medical-record.repository';
import { CreateMedicalRecordDTO, MedicalRecordFilterParams } from './medical-record.types';
import { NotFoundError, ForbiddenError } from '../../utils/errors';
import { UserRole } from '@prisma/client';
import { prisma } from '../../config/database';

export class MedicalRecordService {
  async createRecord(data: CreateMedicalRecordDTO, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole !== UserRole.DOCTOR && requesterRole !== UserRole.ADMIN) {
      throw new ForbiddenError('Only licensed medical practitioners or administrators can create EHR clinical records');
    }

    if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterUserId } });
      if (!doctor) throw new NotFoundError('Doctor record not found');
      data.doctorId = doctor.id;
    }

    const record = await medicalRecordRepository.createRecord(data);

    // Notification for patient
    await prisma.notification.create({
      data: {
        userId: record.patient.userId,
        type: 'SYSTEM_ALERT',
        title: 'New Clinical Record Added',
        message: `Dr. ${record.doctor.user.lastName} has recorded clinical notes for your recent visit.`,
        linkUrl: `/patient/medical-records`,
      },
    });

    return record;
  }

  async getRecordById(id: string, requesterUserId: string, requesterRole: UserRole) {
    const record = await medicalRecordRepository.findById(id);
    if (!record) throw new NotFoundError('Medical record not found');

    if (requesterRole === UserRole.PATIENT && record.patient.userId !== requesterUserId) {
      throw new ForbiddenError('Access denied: You can only view your own medical records');
    }

    return record;
  }

  async listRecords(params: MedicalRecordFilterParams, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole === UserRole.PATIENT) {
      const patient = await prisma.patient.findUnique({ where: { userId: requesterUserId } });
      if (patient) params.patientId = patient.id;
    } else if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterUserId } });
      if (doctor) params.doctorId = doctor.id;
    }

    return await medicalRecordRepository.findRecords(params);
  }
}

export const medicalRecordService = new MedicalRecordService();
