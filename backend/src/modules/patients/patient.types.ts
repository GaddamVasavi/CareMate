import { Gender, BloodGroup } from '@prisma/client';

export interface UpdatePatientProfileDTO {
  dateOfBirth?: string;
  gender?: Gender;
  bloodGroup?: BloodGroup;
  height?: number;
  weight?: number;
  insuranceProvider?: string;
  insurancePolicyNumber?: string;
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactRelationship?: string;
}

export interface AddAllergyDTO {
  allergen: string;
  severity: 'MILD' | 'MODERATE' | 'SEVERE';
  reaction?: string;
  diagnosedAt?: string;
}

export interface AddConditionDTO {
  name: string;
  status: 'ACTIVE' | 'IN_REMISSION' | 'RESOLVED';
  diagnosedAt?: string;
  notes?: string;
}

export interface AddMedicalHistoryDTO {
  condition: string;
  surgeries?: string;
  familyHistory?: string;
  notes?: string;
}

export interface PatientSearchParams {
  search?: string;
  bloodGroup?: BloodGroup;
  gender?: Gender;
  page?: number;
  limit?: number;
}
