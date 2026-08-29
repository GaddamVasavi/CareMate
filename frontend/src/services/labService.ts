import api from './api';
import { ApiResponse } from '../types/auth.types';

export const labService = {
  getCatalog: async () => {
    const res = await api.get<ApiResponse<any>>('/laboratory/catalog');
    return res.data;
  },
  createOrder: async (data: any) => {
    const res = await api.post<ApiResponse<any>>('/laboratory/orders', data);
    return res.data;
  },
  getOrderById: async (id: string) => {
    const res = await api.get<ApiResponse<any>>(`/laboratory/orders/${id}`);
    return res.data;
  },
  listOrders: async (params?: Record<string, any>) => {
    const res = await api.get<ApiResponse<any>>('/laboratory/orders', { params });
    return res.data;
  },
  enterResult: async (data: any) => {
    const res = await api.post<ApiResponse<any>>('/laboratory/results', data);
    return res.data;
  },
  updateStatus: async (id: string, status: string) => {
    const res = await api.patch<ApiResponse<any>>(`/laboratory/orders/${id}/status`, { status });
    return res.data;
  },
};
