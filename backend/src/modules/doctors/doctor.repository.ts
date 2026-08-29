import { prisma } from '../../config/database';
import { Prisma, DayOfWeek } from '@prisma/client';
import { DoctorSearchParams, SetAvailabilityDTO, AddDoctorLeaveDTO, AddDoctorReviewDTO } from './doctor.types';

export class DoctorRepository {
  async findById(id: string) {
    return await prisma.doctor.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            avatarUrl: true,
            isActive: true,
          },
        },
        specializations: { include: { specialization: true } },
        availabilities: { where: { isActive: true }, orderBy: { dayOfWeek: 'asc' } },
        leaves: { where: { endDate: { gte: new Date() } }, orderBy: { startDate: 'asc' } },
        reviews: {
          orderBy: { createdAt: 'desc' },
          take: 20,
          include: {
            patient: {
              include: { user: { select: { firstName: true, lastName: true, avatarUrl: true } } },
            },
          },
        },
      },
    });
  }

  async findByUserId(userId: string) {
    return await prisma.doctor.findUnique({
      where: { userId },
      include: {
        user: true,
        specializations: { include: { specialization: true } },
        availabilities: true,
        leaves: true,
      },
    });
  }

  async searchDoctors(params: DoctorSearchParams) {
    const where: Prisma.DoctorWhereInput = {
      user: { isActive: true },
    };

    if (params.minExperience) {
      where.experienceYears = { gte: params.minExperience };
    }

    if (params.maxFee) {
      where.consultationFee = { lte: params.maxFee };
    }

    if (params.minRating) {
      where.ratingAverage = { gte: params.minRating };
    }

    if (params.specializationId) {
      where.specializations = {
        some: { specializationId: params.specializationId },
      };
    }

    if (params.specializationName) {
      where.specializations = {
        some: {
          specialization: { name: { contains: params.specializationName, mode: 'insensitive' } },
        },
      };
    }

    if (params.search) {
      where.OR = [
        { user: { firstName: { contains: params.search, mode: 'insensitive' } } },
        { user: { lastName: { contains: params.search, mode: 'insensitive' } } },
        { clinicName: { contains: params.search, mode: 'insensitive' } },
        { qualifications: { contains: params.search, mode: 'insensitive' } },
        {
          specializations: {
            some: {
              specialization: { name: { contains: params.search, mode: 'insensitive' } },
            },
          },
        },
      ];
    }

    let orderBy: Prisma.DoctorOrderByWithRelationInput = { ratingAverage: 'desc' };
    if (params.sortBy === 'fee_asc') orderBy = { consultationFee: 'asc' };
    if (params.sortBy === 'fee_desc') orderBy = { consultationFee: 'desc' };
    if (params.sortBy === 'experience') orderBy = { experienceYears: 'desc' };

    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 10));
    const skip = (page - 1) * limit;

    const [total, doctors] = await Promise.all([
      prisma.doctor.count({ where }),
      prisma.doctor.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
              avatarUrl: true,
              phone: true,
            },
          },
          specializations: { include: { specialization: true } },
          availabilities: { where: { isActive: true } },
        },
      }),
    ]);

    return { total, page, limit, totalPages: Math.ceil(total / limit), doctors };
  }

  async upsertAvailability(doctorId: string, data: SetAvailabilityDTO) {
    return await prisma.doctorAvailability.upsert({
      where: {
        doctorId_dayOfWeek_startTime: {
          doctorId,
          dayOfWeek: data.dayOfWeek,
          startTime: data.startTime,
        },
      },
      create: {
        doctorId,
        dayOfWeek: data.dayOfWeek,
        startTime: data.startTime,
        endTime: data.endTime,
        slotDurationMinutes: data.slotDurationMinutes || 30,
        isActive: data.isActive ?? true,
      },
      update: {
        endTime: data.endTime,
        slotDurationMinutes: data.slotDurationMinutes || 30,
        isActive: data.isActive ?? true,
      },
    });
  }

  async addLeave(doctorId: string, data: AddDoctorLeaveDTO) {
    return await prisma.doctorLeave.create({
      data: {
        doctorId,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        reason: data.reason,
      },
    });
  }

  async addReview(doctorId: string, patientId: string, rating: number, comment?: string) {
    return await prisma.$transaction(async (tx) => {
      const review = await tx.doctorReview.upsert({
        where: {
          doctorId_patientId: {
            doctorId,
            patientId,
          },
        },
        create: {
          doctorId,
          patientId,
          rating,
          comment,
        },
        update: {
          rating,
          comment,
        },
      });

      // Recalculate average rating
      const allReviews = await tx.doctorReview.findMany({
        where: { doctorId },
        select: { rating: true },
      });

      const ratingCount = allReviews.length;
      const ratingSum = allReviews.reduce((sum, r) => sum + r.rating, 0);
      const ratingAverage = Number((ratingSum / ratingCount).toFixed(1));

      await tx.doctor.update({
        where: { id: doctorId },
        data: { ratingAverage, ratingCount },
      });

      return review;
    });
  }
}

export const doctorRepository = new DoctorRepository();
