import api from './api';
import { ApiResponse } from '../types/auth.types';

export const medicalRecordService = {
  create: async (data: any) => {
    const res = await api.post<ApiResponse<any>>('/medical-records', data);
    return res.data;
  },
  getById: async (id: string) => {
    const res = await api.get<ApiResponse<any>>(`/medical-records/${id}`);
    return res.data;
  },
  list: async (params?: Record<string, any>) => {
    const res = await api.get<ApiResponse<any>>('/medical-records', { params });
    return res.data;
  },
};
