export interface CreatePrescriptionItemDTO {
  medicineId?: string;
  medicineName: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

export interface CreatePrescriptionDTO {
  patientId: string;
  doctorId?: string;
  medicalRecordId?: string;
  validUntil?: string;
  notes?: string;
  items: CreatePrescriptionItemDTO[];
}

export interface PrescriptionFilterParams {
  patientId?: string;
  doctorId?: string;
  page?: number;
  limit?: number;
}
