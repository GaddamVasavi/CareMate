import api from './api';
import { ApiResponse } from '../types/auth.types';

export const doctorService = {
  search: async (params?: Record<string, any>) => {
    const res = await api.get<ApiResponse<any>>('/doctors/search', { params });
    return res.data;
  },
  getSpecializations: async () => {
    const res = await api.get<ApiResponse<any>>('/doctors/specializations');
    return res.data;
  },
  getById: async (id: string) => {
    const res = await api.get<ApiResponse<any>>(`/doctors/${id}`);
    return res.data;
  },
  getMyProfile: async () => {
    const res = await api.get<ApiResponse<any>>('/doctors/me/profile');
    return res.data;
  },
  setAvailability: async (id: string, data: any) => {
    const res = await api.post<ApiResponse<any>>(`/doctors/${id}/availability`, data);
    return res.data;
  },
  addLeave: async (id: string, data: any) => {
    const res = await api.post<ApiResponse<any>>(`/doctors/${id}/leaves`, data);
    return res.data;
  },
  addReview: async (id: string, rating: number, comment?: string) => {
    const res = await api.post<ApiResponse<any>>(`/doctors/${id}/reviews`, { rating, comment });
    return res.data;
  },
};
