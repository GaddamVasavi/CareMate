import api from './api';
import { ApiResponse } from '../types/auth.types';

export const billingService = {
  createInvoice: async (data: any) => {
    const res = await api.post<ApiResponse<any>>('/billing/invoices', data);
    return res.data;
  },
  getInvoiceById: async (id: string) => {
    const res = await api.get<ApiResponse<any>>(`/billing/invoices/${id}`);
    return res.data;
  },
  listInvoices: async (params?: Record<string, any>) => {
    const res = await api.get<ApiResponse<any>>('/billing/invoices', { params });
    return res.data;
  },
  processPayment: async (data: any) => {
    const res = await api.post<ApiResponse<any>>('/billing/payments', data);
    return res.data;
  },
  processRefund: async (data: any) => {
    const res = await api.post<ApiResponse<any>>('/billing/refunds', data);
    return res.data;
  },
};
