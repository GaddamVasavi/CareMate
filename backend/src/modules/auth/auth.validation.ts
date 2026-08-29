import { z } from 'zod';
import { UserRole, Gender, BloodGroup } from '@prisma/client';

export const registerPatientSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    phone: z.string().min(10, 'Valid phone number is required'),
    dateOfBirth: z.string().datetime().or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date of birth must be YYYY-MM-DD')),
    gender: z.nativeEnum(Gender),
    bloodGroup: z.nativeEnum(BloodGroup).optional().default(BloodGroup.UNKNOWN),
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    emergencyContactName: z.string().optional(),
    emergencyContactPhone: z.string().optional(),
    emergencyContactRelation: z.string().optional(),
  }),
});

export const registerDoctorSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    phone: z.string().min(10, 'Valid phone number is required'),
    licenseNumber: z.string().min(3, 'Medical license number is required'),
    qualifications: z.string().min(2, 'Qualifications are required (e.g. MD, MBBS)'),
    experienceYears: z.number().int().min(0).default(1),
    consultationFee: z.number().min(0).default(50),
    specializationIds: z.array(z.string()).min(1, 'At least one specialization is required'),
    biography: z.string().optional(),
    clinicName: z.string().optional(),
    clinicAddress: z.string().optional(),
    languages: z.array(z.string()).optional().default(['English']),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
  }),
});

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, 'Refresh token is required'),
  }),
});

export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
  }),
});

export const resetPasswordSchema = z.object({
  body: z.object({
    token: z.string().min(1, 'Reset token is required'),
    newPassword: z.string().min(8, 'New password must be at least 8 characters long'),
  }),
});

export const changePasswordSchema = z.object({
  body: z.object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(8, 'New password must be at least 8 characters long'),
  }),
});

export type RegisterPatientInput = z.infer<typeof registerPatientSchema>['body'];
export type RegisterDoctorInput = z.infer<typeof registerDoctorSchema>['body'];
export type LoginInput = z.infer<typeof loginSchema>['body'];
export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>['body'];
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>['body'];
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>['body'];
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>['body'];
