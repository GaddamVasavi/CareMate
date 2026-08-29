export type UserRole = 'PATIENT' | 'DOCTOR' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
  avatarUrl?: string;
  isActive?: boolean;
  isEmailVerified?: boolean;
  patientId?: string;
  doctorId?: string;
  patient?: {
    id: string;
    gender: string;
    bloodGroup: string;
    dateOfBirth: string;
  };
  doctor?: {
    id: string;
    licenseNumber: string;
    qualifications: string;
    experienceYears: number;
    consultationFee: number;
    specializations?: Array<{
      specialization: {
        id: string;
        name: string;
      };
    }>;
  };
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  error?: {
    code: string;
    details?: any;
  };
}
