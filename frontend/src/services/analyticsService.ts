import api from './api';
import { ApiResponse } from '../types/auth.types';

export const analyticsService = {
  getAppointmentTrends: async () => {
    const res = await api.get<ApiResponse<any>>('/analytics/appointment-trends');
    return res.data;
  },
  getSpecializationDistribution: async () => {
    const res = await api.get<ApiResponse<any>>('/analytics/specialization-distribution');
    return res.data;
  },
  getRevenueTrends: async () => {
    const res = await api.get<ApiResponse<any>>('/analytics/revenue-trends');
    return res.data;
  },
};
