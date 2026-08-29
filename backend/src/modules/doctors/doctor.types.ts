import { DayOfWeek } from '@prisma/client';

export interface DoctorSearchParams {
  search?: string;
  specializationId?: string;
  specializationName?: string;
  minExperience?: number;
  maxFee?: number;
  minRating?: number;
  city?: string;
  isAvailableToday?: boolean;
  page?: number;
  limit?: number;
  sortBy?: 'rating' | 'fee_asc' | 'fee_desc' | 'experience';
}

export interface SetAvailabilityDTO {
  dayOfWeek: DayOfWeek;
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  slotDurationMinutes?: number;
  isActive?: boolean;
}

export interface AddDoctorLeaveDTO {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  reason?: string;
}

export interface AddDoctorReviewDTO {
  doctorId: string;
  rating: number; // 1 to 5
  comment?: string;
}
