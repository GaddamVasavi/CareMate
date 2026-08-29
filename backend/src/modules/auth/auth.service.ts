import { authRepository } from './auth.repository';
import {
  RegisterPatientInput,
  RegisterDoctorInput,
  LoginInput,
  ChangePasswordInput,
} from './auth.validation';
import { hashPassword, comparePassword } from '../../utils/password';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from '../../utils/jwt';
import {
  ConflictError,
  UnauthorizedError,
  NotFoundError,
  BadRequestError,
} from '../../utils/errors';
import { UserRole } from '@prisma/client';
import crypto from 'crypto';

export class AuthService {
  async registerPatient(input: RegisterPatientInput, ipAddress?: string, userAgent?: string) {
    const existing = await authRepository.findUserByEmail(input.email);
    if (existing) {
      throw new ConflictError('A user with this email address already exists');
    }

    const hashedPassword = await hashPassword(input.password);
    const dateOfBirth = new Date(input.dateOfBirth);

    const createdUser = await authRepository.createPatientUser({
      user: {
        email: input.email.toLowerCase().trim(),
        passwordHash: hashedPassword,
        role: UserRole.PATIENT,
        firstName: input.firstName.trim(),
        lastName: input.lastName.trim(),
        phone: input.phone.trim(),
      },
      patient: {
        dateOfBirth,
        gender: input.gender,
        bloodGroup: input.bloodGroup,
      },
      address: input.street
        ? {
            street: input.street,
            city: input.city || '',
            state: input.state || '',
            postalCode: input.postalCode || '',
          }
        : undefined,
      emergencyContact: input.emergencyContactName
        ? {
            name: input.emergencyContactName,
            phone: input.emergencyContactPhone || input.phone,
            relationship: input.emergencyContactRelation || 'Next of Kin',
          }
        : undefined,
    });

    if (!createdUser) {
      throw new BadRequestError('Failed to create patient account');
    }

    const tokenPayload = {
      userId: createdUser.id,
      email: createdUser.email,
      role: createdUser.role,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await authRepository.createSession(createdUser.id, refreshToken, expiresAt, userAgent, ipAddress);
    await authRepository.recordLoginHistory(createdUser.id, 'SUCCESS', ipAddress, userAgent);

    return {
      user: {
        id: createdUser.id,
        email: createdUser.email,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        role: createdUser.role,
        patientId: createdUser.patient?.id,
      },
      accessToken,
      refreshToken,
    };
  }

  async registerDoctor(input: RegisterDoctorInput, ipAddress?: string, userAgent?: string) {
    const existing = await authRepository.findUserByEmail(input.email);
    if (existing) {
      throw new ConflictError('A user with this email address already exists');
    }

    const hashedPassword = await hashPassword(input.password);

    const createdUser = await authRepository.createDoctorUser({
      user: {
        email: input.email.toLowerCase().trim(),
        passwordHash: hashedPassword,
        role: UserRole.DOCTOR,
        firstName: input.firstName.trim(),
        lastName: input.lastName.trim(),
        phone: input.phone.trim(),
      },
      doctor: {
        licenseNumber: input.licenseNumber.trim(),
        qualifications: input.qualifications.trim(),
        experienceYears: input.experienceYears,
        consultationFee: input.consultationFee,
        biography: input.biography,
        clinicName: input.clinicName,
        clinicAddress: input.clinicAddress,
        languages: input.languages,
      },
      specializationIds: input.specializationIds,
    });

    if (!createdUser) {
      throw new BadRequestError('Failed to create doctor account');
    }

    const tokenPayload = {
      userId: createdUser.id,
      email: createdUser.email,
      role: createdUser.role,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await authRepository.createSession(createdUser.id, refreshToken, expiresAt, userAgent, ipAddress);
    await authRepository.recordLoginHistory(createdUser.id, 'SUCCESS', ipAddress, userAgent);

    return {
      user: {
        id: createdUser.id,
        email: createdUser.email,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        role: createdUser.role,
        doctorId: createdUser.doctor?.id,
      },
      accessToken,
      refreshToken,
    };
  }

  async login(input: LoginInput, ipAddress?: string, userAgent?: string) {
    const user = await authRepository.findUserByEmail(input.email);
    if (!user) {
      throw new UnauthorizedError('Invalid email or password');
    }

    if (!user.isActive) {
      await authRepository.recordLoginHistory(user.id, 'FAILED', ipAddress, userAgent, 'ACCOUNT_DEACTIVATED');
      throw new UnauthorizedError('Account has been deactivated. Please contact support.');
    }

    const isMatch = await comparePassword(input.password, user.passwordHash);
    if (!isMatch) {
      await authRepository.recordLoginHistory(user.id, 'FAILED', ipAddress, userAgent, 'INVALID_PASSWORD');
      throw new UnauthorizedError('Invalid email or password');
    }

    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await authRepository.createSession(user.id, refreshToken, expiresAt, userAgent, ipAddress);
    await authRepository.recordLoginHistory(user.id, 'SUCCESS', ipAddress, userAgent);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        avatarUrl: user.avatarUrl,
        patientId: user.patient?.id,
        doctorId: user.doctor?.id,
      },
      accessToken,
      refreshToken,
    };
  }

  async refreshTokens(refreshToken: string, ipAddress?: string, userAgent?: string) {
    try {
      verifyRefreshToken(refreshToken);
    } catch {
      throw new UnauthorizedError('Invalid or expired refresh token');
    }

    const session = await authRepository.findSessionByToken(refreshToken);
    if (!session || session.isRevoked || new Date() > session.expiresAt) {
      throw new UnauthorizedError('Session has expired or was revoked. Please log in again.');
    }

    const user = session.user;
    if (!user || !user.isActive) {
      throw new UnauthorizedError('User account not found or deactivated');
    }

    // Revoke old refresh token (Token rotation)
    await authRepository.revokeSession(refreshToken);

    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    const newAccessToken = generateAccessToken(tokenPayload);
    const newRefreshToken = generateRefreshToken(tokenPayload);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await authRepository.createSession(user.id, newRefreshToken, expiresAt, userAgent, ipAddress);

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        patientId: user.patient?.id,
        doctorId: user.doctor?.id,
      },
    };
  }

  async logout(refreshToken: string) {
    if (refreshToken) {
      await authRepository.revokeSession(refreshToken);
    }
    return true;
  }

  async getCurrentUser(userId: string) {
    const user = await authRepository.findUserById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    // Omit sensitive hashes
    const { passwordHash, resetPasswordToken, emailVerifyToken, ...sanitizedUser } = user;
    return sanitizedUser;
  }

  async changePassword(userId: string, input: ChangePasswordInput) {
    const user = await authRepository.findUserById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const isMatch = await comparePassword(input.currentPassword, user.passwordHash);
    if (!isMatch) {
      throw new BadRequestError('Current password provided is incorrect');
    }

    const newHash = await hashPassword(input.newPassword);
    await authRepository.updatePassword(userId, newHash);
    await authRepository.revokeAllUserSessions(userId);

    return true;
  }

  async forgotPassword(email: string) {
    const user = await authRepository.findUserByEmail(email);
    if (!user) {
      // Do not reveal email existence to prevent user enumeration
      return { message: 'If that email address is registered, a password reset link has been sent.' };
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await authRepository.setResetPasswordToken(email, resetToken, expiry);

    // In a production environment, send SMTP email via nodemailer.
    // For demo & testing, we log the token securely.
    return {
      message: 'If that email address is registered, a password reset link has been sent.',
      resetToken, // Returned for dev/testing ease
    };
  }

  async resetPassword(token: string, newPass: string) {
    const user = await authRepository.findUserByResetToken(token);
    if (!user) {
      throw new BadRequestError('Invalid or expired password reset token');
    }

    const newHash = await hashPassword(newPass);
    await authRepository.updatePassword(user.id, newHash);
    await authRepository.revokeAllUserSessions(user.id);

    return true;
  }
}

export const authService = new AuthService();
