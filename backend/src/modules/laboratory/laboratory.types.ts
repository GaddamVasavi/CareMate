import { LabOrderStatus } from '@prisma/client';

export interface CreateLabOrderDTO {
  patientId: string;
  doctorId?: string;
  labTestIds: string[];
  notes?: string;
}

export interface EnterLabResultDTO {
  labOrderItemId: string;
  resultValue: string;
  isAbnormal?: boolean;
  remarks?: string;
  reportFileUrl?: string;
  verifiedBy?: string;
}

export interface LabOrderFilterParams {
  patientId?: string;
  doctorId?: string;
  status?: LabOrderStatus;
  page?: number;
  limit?: number;
}
