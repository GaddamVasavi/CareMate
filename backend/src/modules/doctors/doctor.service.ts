import { doctorRepository } from './doctor.repository';
import { DoctorSearchParams, SetAvailabilityDTO, AddDoctorLeaveDTO } from './doctor.types';
import { NotFoundError, ForbiddenError } from '../../utils/errors';
import { UserRole } from '@prisma/client';
import { prisma } from '../../config/database';

export class DoctorService {
  async getDoctorById(id: string) {
    const doctor = await doctorRepository.findById(id);
    if (!doctor) throw new NotFoundError('Doctor profile not found');
    return doctor;
  }

  async getMyProfile(userId: string) {
    const doctor = await doctorRepository.findByUserId(userId);
    if (!doctor) throw new NotFoundError('Doctor record not found for this user account');
    return doctor;
  }

  async searchDoctors(params: DoctorSearchParams) {
    return await doctorRepository.searchDoctors(params);
  }

  async setAvailability(doctorId: string, data: SetAvailabilityDTO, requesterUserId: string, requesterRole: UserRole) {
    const doctor = await doctorRepository.findById(doctorId);
    if (!doctor) throw new NotFoundError('Doctor not found');

    if (requesterRole === UserRole.DOCTOR && doctor.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized to modify this doctor availability');
    }

    return await doctorRepository.upsertAvailability(doctorId, data);
  }

  async addLeave(doctorId: string, data: AddDoctorLeaveDTO, requesterUserId: string, requesterRole: UserRole) {
    const doctor = await doctorRepository.findById(doctorId);
    if (!doctor) throw new NotFoundError('Doctor not found');

    if (requesterRole === UserRole.DOCTOR && doctor.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized to log leave for this doctor');
    }

    return await doctorRepository.addLeave(doctorId, data);
  }

  async addReview(doctorId: string, patientUserId: string, rating: number, comment?: string) {
    const patient = await prisma.patient.findUnique({ where: { userId: patientUserId } });
    if (!patient) throw new NotFoundError('Patient profile not found');

    return await doctorRepository.addReview(doctorId, patient.id, rating, comment);
  }

  async getAllSpecializations() {
    return await prisma.specialization.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: { select: { doctors: true } },
      },
    });
  }
}

export const doctorService = new DoctorService();
