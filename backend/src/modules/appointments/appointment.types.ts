import { AppointmentStatus, AppointmentType, DayOfWeek } from '@prisma/client';

export interface CreateAppointmentDTO {
  patientId: string;
  doctorId: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  type?: AppointmentType;
  reason?: string;
  telehealthUrl?: string;
}

export interface RescheduleAppointmentDTO {
  newDate: string;
  newStartTime: string;
  newEndTime: string;
  reason?: string;
}

export interface CancelAppointmentDTO {
  cancellationReason: string;
}

export interface AppointmentFilterParams {
  patientId?: string;
  doctorId?: string;
  status?: AppointmentStatus;
  startDate?: string;
  endDate?: string;
  type?: AppointmentType;
  page?: number;
  limit?: number;
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  appointmentId?: string;
}

export interface DoctorDailySchedule {
  date: string;
  dayOfWeek: DayOfWeek;
  workingHours: {
    startTime: string;
    endTime: string;
    slotDurationMinutes: number;
  } | null;
  isLeaveDay: boolean;
  leaveReason?: string;
  slots: TimeSlot[];
}
