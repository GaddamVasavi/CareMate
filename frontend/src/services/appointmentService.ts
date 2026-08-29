import api from './api';
import { ApiResponse } from '../types/auth.types';

export interface CreateAppointmentPayload {
  doctorId: string;
  date: string;
  startTime: string;
  endTime: string;
  type?: string;
  reason?: string;
  telehealthUrl?: string;
}

export const appointmentService = {
  create: async (data: CreateAppointmentPayload) => {
    const res = await api.post<ApiResponse<any>>('/appointments', data);
    return res.data;
  },
  list: async (params?: Record<string, any>) => {
    const res = await api.get<ApiResponse<any>>('/appointments', { params });
    return res.data;
  },
  getById: async (id: string) => {
    const res = await api.get<ApiResponse<any>>(`/appointments/${id}`);
    return res.data;
  },
  reschedule: async (id: string, data: { newDate: string; newStartTime: string; newEndTime: string; reason?: string }) => {
    const res = await api.patch<ApiResponse<any>>(`/appointments/${id}/reschedule`, data);
    return res.data;
  },
  cancel: async (id: string, cancellationReason: string) => {
    const res = await api.patch<ApiResponse<any>>(`/appointments/${id}/cancel`, { cancellationReason });
    return res.data;
  },
  updateStatus: async (id: string, status: string, note?: string) => {
    const res = await api.patch<ApiResponse<any>>(`/appointments/${id}/status`, { status, note });
    return res.data;
  },
};
