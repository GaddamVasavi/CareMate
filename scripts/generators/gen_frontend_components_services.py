import os

def generate(write_file):
    write_file("frontend/src/services/appointmentService.ts", """
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
""")

    write_file("frontend/src/services/patientService.ts", """
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
""")

    write_file("frontend/src/services/doctorService.ts", """
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
""")

    write_file("frontend/src/services/medicalRecordService.ts", """
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
""")

    write_file("frontend/src/services/prescriptionService.ts", """
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
""")

    write_file("frontend/src/services/labService.ts", """
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
""")

    write_file("frontend/src/services/billingService.ts", """
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
""")

    write_file("frontend/src/services/adminService.ts", """
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
""")

    write_file("frontend/src/services/analyticsService.ts", """
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
""")

    write_file("frontend/src/services/notificationService.ts", """
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
""")
