import { patientRepository } from './patient.repository';
import { UpdatePatientProfileDTO, AddAllergyDTO, AddConditionDTO, AddMedicalHistoryDTO, PatientSearchParams } from './patient.types';
import { NotFoundError, ForbiddenError } from '../../utils/errors';
import { UserRole } from '@prisma/client';

export class PatientService {
  async getProfile(patientId: string, requesterUserId: string, requesterRole: UserRole) {
    const patient = await patientRepository.findById(patientId);
    if (!patient) throw new NotFoundError('Patient profile not found');

    if (requesterRole === UserRole.PATIENT && patient.userId !== requesterUserId) {
      throw new ForbiddenError('You can only view your own patient profile');
    }

    return patient;
  }

  async getMyProfile(userId: string) {
    const patient = await patientRepository.findByUserId(userId);
    if (!patient) throw new NotFoundError('Patient record not found for this account');
    return patient;
  }

  async updateProfile(patientId: string, data: UpdatePatientProfileDTO, requesterUserId: string, requesterRole: UserRole) {
    const patient = await patientRepository.findById(patientId);
    if (!patient) throw new NotFoundError('Patient profile not found');

    if (requesterRole === UserRole.PATIENT && patient.userId !== requesterUserId) {
      throw new ForbiddenError('You can only update your own patient profile');
    }

    return await patientRepository.updateProfile(patientId, data);
  }

  async addAllergy(patientId: string, data: AddAllergyDTO, requesterUserId: string, requesterRole: UserRole) {
    const patient = await patientRepository.findById(patientId);
    if (!patient) throw new NotFoundError('Patient profile not found');
    if (requesterRole === UserRole.PATIENT && patient.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized');
    }
    return await patientRepository.addAllergy(patientId, data);
  }

  async removeAllergy(allergyId: string) {
    return await patientRepository.removeAllergy(allergyId);
  }

  async addCondition(patientId: string, data: AddConditionDTO, requesterUserId: string, requesterRole: UserRole) {
    const patient = await patientRepository.findById(patientId);
    if (!patient) throw new NotFoundError('Patient profile not found');
    if (requesterRole === UserRole.PATIENT && patient.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized');
    }
    return await patientRepository.addCondition(patientId, data);
  }

  async removeCondition(conditionId: string) {
    return await patientRepository.removeCondition(conditionId);
  }

  async addMedicalHistory(patientId: string, data: AddMedicalHistoryDTO) {
    return await patientRepository.addMedicalHistory(patientId, data);
  }

  async listPatients(params: PatientSearchParams) {
    return await patientRepository.findPatients(params);
  }
}

export const patientService = new PatientService();
