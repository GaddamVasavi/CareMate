import api from './api';
import { ApiResponse } from '../types/auth.types';

export const prescriptionService = {
  create: async (data: any) => {
    const res = await api.post<ApiResponse<any>>('/prescriptions', data);
    return res.data;
  },
  getById: async (id: string) => {
    const res = await api.get<ApiResponse<any>>(`/prescriptions/${id}`);
    return res.data;
  },
  list: async (params?: Record<string, any>) => {
    const res = await api.get<ApiResponse<any>>('/prescriptions', { params });
    return res.data;
  },
  searchMedicines: async (q: string) => {
    const res = await api.get<ApiResponse<any>>('/prescriptions/medicines', { params: { q } });
    return res.data;
  },
};
