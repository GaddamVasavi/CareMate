import api from './api';
import { ApiResponse } from '../types/auth.types';

export const adminService = {
  getSummary: async () => {
    const res = await api.get<ApiResponse<any>>('/admin/summary');
    return res.data;
  },
  getAuditLogs: async (params?: Record<string, any>) => {
    const res = await api.get<ApiResponse<any>>('/admin/audit-logs', { params });
    return res.data;
  },
  getSettings: async () => {
    const res = await api.get<ApiResponse<any>>('/admin/settings');
    return res.data;
  },
  updateSetting: async (key: string, value: string) => {
    const res = await api.put<ApiResponse<any>>(`/admin/settings/${key}`, { value });
    return res.data;
  },
};
