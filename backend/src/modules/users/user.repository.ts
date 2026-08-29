import { prisma } from '../../config/database';
import { UserRole, Prisma } from '@prisma/client';

export class UserRepository {
  async findUsers(params: {
    skip: number;
    take: number;
    role?: UserRole;
    search?: string;
    isActive?: boolean;
  }) {
    const where: Prisma.UserWhereInput = {};

    if (params.role) {
      where.role = params.role;
    }

    if (typeof params.isActive === 'boolean') {
      where.isActive = params.isActive;
    }

    if (params.search) {
      where.OR = [
        { firstName: { contains: params.search, mode: 'insensitive' } },
        { lastName: { contains: params.search, mode: 'insensitive' } },
        { email: { contains: params.search, mode: 'insensitive' } },
        { phone: { contains: params.search, mode: 'insensitive' } },
      ];
    }

    const [total, users] = await Promise.all([
      prisma.user.count({ where }),
      prisma.user.findMany({
        where,
        skip: params.skip,
        take: params.take,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          phone: true,
          role: true,
          avatarUrl: true,
          isActive: true,
          isEmailVerified: true,
          lastLoginAt: true,
          createdAt: true,
          updatedAt: true,
          address: true,
          patient: { select: { id: true, gender: true, bloodGroup: true } },
          doctor: { select: { id: true, licenseNumber: true, consultationFee: true } },
        },
      }),
    ]);

    return { total, users };
  }

  async findUserById(id: string) {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        address: true,
        patient: {
          include: {
            emergencyContact: true,
            allergies: true,
            conditions: true,
          },
        },
        doctor: {
          include: {
            specializations: { include: { specialization: true } },
          },
        },
      },
    });
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async upsertAddress(userId: string, addressData: { street: string; city: string; state: string; postalCode: string; country?: string }) {
    return await prisma.address.upsert({
      where: { userId },
      create: {
        userId,
        ...addressData,
      },
      update: addressData,
    });
  }

  async deleteUser(id: string) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}

export const userRepository = new UserRepository();
