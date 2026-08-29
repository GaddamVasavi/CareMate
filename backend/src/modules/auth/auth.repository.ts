import { prisma } from '../../config/database';
import { User, Session, UserRole, Prisma } from '@prisma/client';

export class AuthRepository {
  async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
      include: {
        patient: true,
        doctor: {
          include: {
            specializations: {
              include: {
                specialization: true,
              },
            },
          },
        },
        address: true,
      },
    });
  }

  async findUserById(id: string) {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        patient: {
          include: {
            emergencyContact: true,
            allergies: true,
            conditions: true,
          },
        },
        doctor: {
          include: {
            specializations: {
              include: {
                specialization: true,
              },
            },
          },
        },
        address: true,
      },
    });
  }

  async createPatientUser(data: {
    user: Prisma.UserCreateInput;
    patient: Omit<Prisma.PatientCreateInput, 'user'>;
    address?: Omit<Prisma.AddressCreateInput, 'user'>;
    emergencyContact?: Omit<Prisma.EmergencyContactCreateInput, 'patient'>;
  }) {
    return await prisma.$transaction(async (tx) => {
      const createdUser = await tx.user.create({
        data: data.user,
      });

      const createdPatient = await tx.patient.create({
        data: {
          ...data.patient,
          userId: createdUser.id,
        },
      });

      if (data.address) {
        await tx.address.create({
          data: {
            ...data.address,
            userId: createdUser.id,
          },
        });
      }

      if (data.emergencyContact) {
        await tx.emergencyContact.create({
          data: {
            ...data.emergencyContact,
            patientId: createdPatient.id,
          },
        });
      }

      return await tx.user.findUnique({
        where: { id: createdUser.id },
        include: {
          patient: { include: { emergencyContact: true } },
          address: true,
        },
      });
    });
  }

  async createDoctorUser(data: {
    user: Prisma.UserCreateInput;
    doctor: Omit<Prisma.DoctorCreateInput, 'user'>;
    specializationIds: string[];
  }) {
    return await prisma.$transaction(async (tx) => {
      const createdUser = await tx.user.create({
        data: data.user,
      });

      const createdDoctor = await tx.doctor.create({
        data: {
          ...data.doctor,
          userId: createdUser.id,
        },
      });

      if (data.specializationIds.length > 0) {
        await tx.doctorSpecialization.createMany({
          data: data.specializationIds.map((specId) => ({
            doctorId: createdDoctor.id,
            specializationId: specId,
          })),
        });
      }

      return await tx.user.findUnique({
        where: { id: createdUser.id },
        include: {
          doctor: {
            include: {
              specializations: { include: { specialization: true } },
            },
          },
        },
      });
    });
  }

  async createSession(userId: string, refreshToken: string, expiresAt: DateTime, userAgent?: string, ipAddress?: string) {
    return await prisma.session.create({
      data: {
        userId,
        refreshToken,
        expiresAt,
        userAgent,
        ipAddress,
      },
    });
  }

  async findSessionByToken(refreshToken: string) {
    return await prisma.session.findUnique({
      where: { refreshToken },
      include: {
        user: {
          include: {
            patient: true,
            doctor: true,
          },
        },
      },
    });
  }

  async revokeSession(refreshToken: string) {
    return await prisma.session.update({
      where: { refreshToken },
      data: { isRevoked: true },
    });
  }

  async revokeAllUserSessions(userId: string) {
    return await prisma.session.updateMany({
      where: { userId },
      data: { isRevoked: true },
    });
  }

  async recordLoginHistory(userId: string, status: string, ipAddress?: string, userAgent?: string, reason?: string) {
    return await prisma.loginHistory.create({
      data: {
        userId,
        status,
        ipAddress,
        userAgent,
        reason,
      },
    });
  }

  async updatePassword(userId: string, newPasswordHash: string) {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        passwordHash: newPasswordHash,
        resetPasswordToken: null,
        resetTokenExpiry: null,
      },
    });
  }

  async setResetPasswordToken(email: string, token: string, expiry: Date) {
    return await prisma.user.update({
      where: { email: email.toLowerCase().trim() },
      data: {
        resetPasswordToken: token,
        resetTokenExpiry: expiry,
      },
    });
  }

  async findUserByResetToken(token: string) {
    return await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetTokenExpiry: {
          gt: new Date(),
        },
      },
    });
  }
}

export const authRepository = new AuthRepository();
