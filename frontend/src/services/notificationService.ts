import api from './api';
import { ApiResponse } from '../types/auth.types';

export const notificationService = {
  getMyNotifications: async (params?: Record<string, any>) => {
    const res = await api.get<ApiResponse<any>>('/notifications', { params });
    return res.data;
  },
  markAsRead: async (id: string) => {
    const res = await api.patch<ApiResponse<any>>(`/notifications/${id}/read`);
    return res.data;
  },
  markAllAsRead: async () => {
    const res = await api.patch<ApiResponse<any>>('/notifications/read-all');
    return res.data;
  },
};
