import api from './api';
import { ApiResponse } from '../types/auth.types';

export const patientService = {
  getMyProfile: async () => {
    const res = await api.get<ApiResponse<any>>('/patients/me');
    return res.data;
  },
  getProfile: async (id: string) => {
    const res = await api.get<ApiResponse<any>>(`/patients/${id}`);
    return res.data;
  },
  updateProfile: async (id: string, data: any) => {
    const res = await api.put<ApiResponse<any>>(`/patients/${id}`, data);
    return res.data;
  },
  addAllergy: async (id: string, data: any) => {
    const res = await api.post<ApiResponse<any>>(`/patients/${id}/allergies`, data);
    return res.data;
  },
  removeAllergy: async (allergyId: string) => {
    const res = await api.delete<ApiResponse<any>>(`/patients/allergies/${allergyId}`);
    return res.data;
  },
  addCondition: async (id: string, data: any) => {
    const res = await api.post<ApiResponse<any>>(`/patients/${id}/conditions`, data);
    return res.data;
  },
  removeCondition: async (conditionId: string) => {
    const res = await api.delete<ApiResponse<any>>(`/patients/conditions/${conditionId}`);
    return res.data;
  },
  list: async (params?: Record<string, any>) => {
    const res = await api.get<ApiResponse<any>>('/patients', { params });
    return res.data;
  },
};
