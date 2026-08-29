export interface CreateVitalSignsDTO {
  systolicBP?: number;
  diastolicBP?: number;
  heartRate?: number;
  respiratoryRate?: number;
  temperature?: number;
  oxygenSaturation?: number;
  bloodGlucose?: number;
}

export interface CreateDiagnosisDTO {
  code?: string;
  description: string;
  type: 'PRIMARY' | 'SECONDARY';
}

export interface CreateSOAPNoteDTO {
  subjective?: string;
  objective?: string;
  assessment?: string;
  plan?: string;
}

export interface CreateTreatmentDTO {
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  status: 'ACTIVE' | 'COMPLETED' | 'DISCONTINUED';
}

export interface CreateMedicalRecordDTO {
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  visitDate?: string;
  symptoms: string;
  diagnosisNote: string;
  treatmentPlan?: string;
  vitalSigns?: CreateVitalSignsDTO;
  diagnoses?: CreateDiagnosisDTO[];
  soapNote?: CreateSOAPNoteDTO;
  treatments?: CreateTreatmentDTO[];
}

export interface MedicalRecordFilterParams {
  patientId?: string;
  doctorId?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}
