import { prescriptionRepository } from './prescription.repository';
import { CreatePrescriptionDTO, PrescriptionFilterParams } from './prescription.types';
import { NotFoundError, ForbiddenError } from '../../utils/errors';
import { UserRole } from '@prisma/client';
import { prisma } from '../../config/database';

export class PrescriptionService {
  async createPrescription(data: CreatePrescriptionDTO, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole !== UserRole.DOCTOR && requesterRole !== UserRole.ADMIN) {
      throw new ForbiddenError('Only licensed medical doctors can generate official prescriptions');
    }

    let doctorId = data.doctorId;
    if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterUserId } });
      if (!doctor) throw new NotFoundError('Doctor record not found');
      doctorId = doctor.id;
    }

    if (!doctorId) throw new NotFoundError('Doctor identification required');

    const prescription = await prescriptionRepository.createPrescription({
      ...data,
      doctorId,
    });

    // Notify patient
    await prisma.notification.create({
      data: {
        userId: prescription.patient.userId,
        type: 'PRESCRIPTION_CREATED',
        title: 'New Prescription Issued',
        message: `Dr. ${prescription.doctor.user.lastName} issued prescription #${prescription.prescriptionNumber}.`,
        linkUrl: `/patient/prescriptions`,
      },
    });

    return prescription;
  }

  async getPrescriptionById(id: string, requesterUserId: string, requesterRole: UserRole) {
    const rx = await prescriptionRepository.findById(id);
    if (!rx) throw new NotFoundError('Prescription not found');

    if (requesterRole === UserRole.PATIENT && rx.patient.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized to view this prescription');
    }

    return rx;
  }

  async listPrescriptions(params: PrescriptionFilterParams, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole === UserRole.PATIENT) {
      const patient = await prisma.patient.findUnique({ where: { userId: requesterUserId } });
      if (patient) params.patientId = patient.id;
    } else if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterUserId } });
      if (doctor) params.doctorId = doctor.id;
    }

    return await prescriptionRepository.findPrescriptions(params);
  }

  async searchMedicines(query: string) {
    return await prescriptionRepository.searchMedicines(query);
  }
}

export const prescriptionService = new PrescriptionService();
