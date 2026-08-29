import os

def generate(write_file):
    # ==========================================
    # PATIENTS MODULE
    # ==========================================
    write_file("backend/src/modules/patients/patient.types.ts", """
import { Gender, BloodGroup } from '@prisma/client';

export interface UpdatePatientProfileDTO {
  dateOfBirth?: string;
  gender?: Gender;
  bloodGroup?: BloodGroup;
  height?: number;
  weight?: number;
  insuranceProvider?: string;
  insurancePolicyNumber?: string;
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactRelationship?: string;
}

export interface AddAllergyDTO {
  allergen: string;
  severity: 'MILD' | 'MODERATE' | 'SEVERE';
  reaction?: string;
  diagnosedAt?: string;
}

export interface AddConditionDTO {
  name: string;
  status: 'ACTIVE' | 'IN_REMISSION' | 'RESOLVED';
  diagnosedAt?: string;
  notes?: string;
}

export interface AddMedicalHistoryDTO {
  condition: string;
  surgeries?: string;
  familyHistory?: string;
  notes?: string;
}

export interface PatientSearchParams {
  search?: string;
  bloodGroup?: BloodGroup;
  gender?: Gender;
  page?: number;
  limit?: number;
}
""")

    write_file("backend/src/modules/patients/patient.validation.ts", """
import { z } from 'zod';
import { Gender, BloodGroup } from '@prisma/client';

export const updatePatientProfileSchema = z.object({
  body: z.object({
    dateOfBirth: z.string().optional(),
    gender: z.nativeEnum(Gender).optional(),
    bloodGroup: z.nativeEnum(BloodGroup).optional(),
    height: z.number().min(30).max(300).optional(),
    weight: z.number().min(2).max(500).optional(),
    insuranceProvider: z.string().optional(),
    insurancePolicyNumber: z.string().optional(),
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    emergencyContactName: z.string().optional(),
    emergencyContactPhone: z.string().optional(),
    emergencyContactRelationship: z.string().optional(),
  }),
});

export const addAllergySchema = z.object({
  body: z.object({
    allergen: z.string().min(2, 'Allergen name is required'),
    severity: z.enum(['MILD', 'MODERATE', 'SEVERE']),
    reaction: z.string().optional(),
    diagnosedAt: z.string().optional(),
  }),
});

export const addConditionSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Condition name is required'),
    status: z.enum(['ACTIVE', 'IN_REMISSION', 'RESOLVED']),
    diagnosedAt: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const addMedicalHistorySchema = z.object({
  body: z.object({
    condition: z.string().min(2, 'Condition description is required'),
    surgeries: z.string().optional(),
    familyHistory: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const patientSearchSchema = z.object({
  query: z.object({
    search: z.string().optional(),
    bloodGroup: z.nativeEnum(BloodGroup).optional(),
    gender: z.nativeEnum(Gender).optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});
""")

    write_file("backend/src/modules/patients/patient.repository.ts", """
import { prisma } from '../../config/database';
import { Prisma, BloodGroup, Gender } from '@prisma/client';
import { UpdatePatientProfileDTO, AddAllergyDTO, AddConditionDTO, AddMedicalHistoryDTO, PatientSearchParams } from './patient.types';

export class PatientRepository {
  async findById(id: string) {
    return await prisma.patient.findUnique({
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
            createdAt: true,
            address: true,
          },
        },
        emergencyContact: true,
        allergies: { orderBy: { createdAt: 'desc' } },
        conditions: { orderBy: { createdAt: 'desc' } },
        medicalHistories: { orderBy: { recordedAt: 'desc' } },
        appointments: {
          take: 5,
          orderBy: { date: 'desc' },
          include: {
            doctor: {
              include: {
                user: { select: { firstName: true, lastName: true } },
                specializations: { include: { specialization: true } },
              },
            },
          },
        },
        prescriptions: {
          take: 5,
          orderBy: { issueDate: 'desc' },
          include: { items: true, doctor: { include: { user: { select: { firstName: true, lastName: true } } } } },
        },
        labOrders: {
          take: 5,
          orderBy: { createdAt: 'desc' },
          include: { items: { include: { labTest: true, result: true } } },
        },
      },
    });
  }

  async findByUserId(userId: string) {
    return await prisma.patient.findUnique({
      where: { userId },
      include: {
        user: { include: { address: true } },
        emergencyContact: true,
        allergies: true,
        conditions: true,
        medicalHistories: true,
      },
    });
  }

  async updateProfile(patientId: string, data: UpdatePatientProfileDTO) {
    return await prisma.$transaction(async (tx) => {
      const patient = await tx.patient.findUnique({
        where: { id: patientId },
        include: { user: true },
      });

      if (!patient) throw new Error('PATIENT_NOT_FOUND');

      // Update patient model
      const updatedPatient = await tx.patient.update({
        where: { id: patientId },
        data: {
          dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
          gender: data.gender,
          bloodGroup: data.bloodGroup,
          height: data.height,
          weight: data.weight,
          insuranceProvider: data.insuranceProvider,
          insurancePolicyNumber: data.insurancePolicyNumber,
        },
      });

      // Update address if provided
      if (data.street || data.city || data.state || data.postalCode) {
        await tx.address.upsert({
          where: { userId: patient.userId },
          create: {
            userId: patient.userId,
            street: data.street || '',
            city: data.city || '',
            state: data.state || '',
            postalCode: data.postalCode || '',
          },
          update: {
            street: data.street,
            city: data.city,
            state: data.state,
            postalCode: data.postalCode,
          },
        });
      }

      // Update emergency contact if provided
      if (data.emergencyContactName || data.emergencyContactPhone) {
        await tx.emergencyContact.upsert({
          where: { patientId },
          create: {
            patientId,
            name: data.emergencyContactName || 'Emergency Contact',
            phone: data.emergencyContactPhone || '',
            relationship: data.emergencyContactRelationship || 'Next of Kin',
          },
          update: {
            name: data.emergencyContactName,
            phone: data.emergencyContactPhone,
            relationship: data.emergencyContactRelationship,
          },
        });
      }

      return updatedPatient;
    });
  }

  async addAllergy(patientId: string, data: AddAllergyDTO) {
    return await prisma.allergy.create({
      data: {
        patientId,
        allergen: data.allergen,
        severity: data.severity,
        reaction: data.reaction,
        diagnosedAt: data.diagnosedAt ? new Date(data.diagnosedAt) : null,
      },
    });
  }

  async removeAllergy(allergyId: string) {
    return await prisma.allergy.delete({ where: { id: allergyId } });
  }

  async addCondition(patientId: string, data: AddConditionDTO) {
    return await prisma.medicalCondition.create({
      data: {
        patientId,
        name: data.name,
        status: data.status,
        diagnosedAt: data.diagnosedAt ? new Date(data.diagnosedAt) : null,
        notes: data.notes,
      },
    });
  }

  async removeCondition(conditionId: string) {
    return await prisma.medicalCondition.delete({ where: { id: conditionId } });
  }

  async addMedicalHistory(patientId: string, data: AddMedicalHistoryDTO) {
    return await prisma.medicalHistory.create({
      data: {
        patientId,
        condition: data.condition,
        surgeries: data.surgeries,
        familyHistory: data.familyHistory,
        notes: data.notes,
      },
    });
  }

  async findPatients(params: PatientSearchParams) {
    const where: Prisma.PatientWhereInput = {};

    if (params.bloodGroup) where.bloodGroup = params.bloodGroup;
    if (params.gender) where.gender = params.gender;

    if (params.search) {
      where.user = {
        OR: [
          { firstName: { contains: params.search, mode: 'insensitive' } },
          { lastName: { contains: params.search, mode: 'insensitive' } },
          { email: { contains: params.search, mode: 'insensitive' } },
          { phone: { contains: params.search, mode: 'insensitive' } },
        ],
      };
    }

    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 10));
    const skip = (page - 1) * limit;

    const [total, patients] = await Promise.all([
      prisma.patient.count({ where }),
      prisma.patient.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
              phone: true,
              avatarUrl: true,
              isActive: true,
            },
          },
          emergencyContact: true,
          allergies: true,
          conditions: true,
        },
      }),
    ]);

    return { total, page, limit, totalPages: Math.ceil(total / limit), patients };
  }
}

export const patientRepository = new PatientRepository();
""")

    write_file("backend/src/modules/patients/patient.service.ts", """
import { patientRepository } from './patient.repository';
import { UpdatePatientProfileDTO, AddAllergyDTO, AddConditionDTO, AddMedicalHistoryDTO, PatientSearchParams } from './patient.types';
import { NotFoundError, ForbiddenError } from '../../utils/errors';
import { UserRole } from '@prisma/client';

export class PatientService {
  async getProfile(patientId: string, requesterUserId: string, requesterRole: UserRole) {
    const patient = await patientRepository.findById(patientId);
    if (!patient) throw new NotFoundError('Patient profile not found');

    if (requesterRole === UserRole.PATIENT && patient.userId !== requesterUserId) {
      throw new ForbiddenError('You can only view your own patient profile');
    }

    return patient;
  }

  async getMyProfile(userId: string) {
    const patient = await patientRepository.findByUserId(userId);
    if (!patient) throw new NotFoundError('Patient record not found for this account');
    return patient;
  }

  async updateProfile(patientId: string, data: UpdatePatientProfileDTO, requesterUserId: string, requesterRole: UserRole) {
    const patient = await patientRepository.findById(patientId);
    if (!patient) throw new NotFoundError('Patient profile not found');

    if (requesterRole === UserRole.PATIENT && patient.userId !== requesterUserId) {
      throw new ForbiddenError('You can only update your own patient profile');
    }

    return await patientRepository.updateProfile(patientId, data);
  }

  async addAllergy(patientId: string, data: AddAllergyDTO, requesterUserId: string, requesterRole: UserRole) {
    const patient = await patientRepository.findById(patientId);
    if (!patient) throw new NotFoundError('Patient profile not found');
    if (requesterRole === UserRole.PATIENT && patient.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized');
    }
    return await patientRepository.addAllergy(patientId, data);
  }

  async removeAllergy(allergyId: string) {
    return await patientRepository.removeAllergy(allergyId);
  }

  async addCondition(patientId: string, data: AddConditionDTO, requesterUserId: string, requesterRole: UserRole) {
    const patient = await patientRepository.findById(patientId);
    if (!patient) throw new NotFoundError('Patient profile not found');
    if (requesterRole === UserRole.PATIENT && patient.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized');
    }
    return await patientRepository.addCondition(patientId, data);
  }

  async removeCondition(conditionId: string) {
    return await patientRepository.removeCondition(conditionId);
  }

  async addMedicalHistory(patientId: string, data: AddMedicalHistoryDTO) {
    return await patientRepository.addMedicalHistory(patientId, data);
  }

  async listPatients(params: PatientSearchParams) {
    return await patientRepository.findPatients(params);
  }
}

export const patientService = new PatientService();
""")

    write_file("backend/src/modules/patients/patient.controller.ts", """
import { Request, Response, NextFunction } from 'express';
import { patientService } from './patient.service';
import { sendSuccess } from '../../utils/response';

export class PatientController {
  async getMyProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await patientService.getMyProfile(req.user!.userId);
      return sendSuccess(res, result, 'Patient profile retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await patientService.getProfile(id, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Patient details retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await patientService.updateProfile(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Patient profile updated successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async addAllergy(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await patientService.addAllergy(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Allergy record added', 201);
    } catch (error) {
      next(error);
    }
  }

  async removeAllergy(req: Request, res: Response, next: NextFunction) {
    try {
      const { allergyId } = req.params;
      await patientService.removeAllergy(allergyId);
      return sendSuccess(res, { deleted: true }, 'Allergy record deleted', 200);
    } catch (error) {
      next(error);
    }
  }

  async addCondition(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await patientService.addCondition(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Medical condition added', 201);
    } catch (error) {
      next(error);
    }
  }

  async removeCondition(req: Request, res: Response, next: NextFunction) {
    try {
      const { conditionId } = req.params;
      await patientService.removeCondition(conditionId);
      return sendSuccess(res, { deleted: true }, 'Condition record deleted', 200);
    } catch (error) {
      next(error);
    }
  }

  async addMedicalHistory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await patientService.addMedicalHistory(id, req.body);
      return sendSuccess(res, result, 'Medical history recorded', 201);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await patientService.listPatients(req.query as any);
      return sendSuccess(res, result, 'Patient directory retrieved', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const patientController = new PatientController();
""")

    write_file("backend/src/modules/patients/patient.routes.ts", """
import { Router } from 'express';
import { patientController } from './patient.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireDoctorOrAdmin, requireStaff } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import {
  updatePatientProfileSchema,
  addAllergySchema,
  addConditionSchema,
  addMedicalHistorySchema,
  patientSearchSchema,
} from './patient.validation';

const router = Router();

router.use(authenticate);

router.get('/me', patientController.getMyProfile);
router.get('/', requireDoctorOrAdmin, validateRequest(patientSearchSchema), patientController.list);
router.get('/:id', auditLog({ action: 'READ', resource: 'PATIENT_PROFILE' }), patientController.getProfile);
router.put('/:id', validateRequest(updatePatientProfileSchema), auditLog({ action: 'UPDATE', resource: 'PATIENT_PROFILE' }), patientController.updateProfile);

router.post('/:id/allergies', validateRequest(addAllergySchema), patientController.addAllergy);
router.delete('/allergies/:allergyId', patientController.removeAllergy);

router.post('/:id/conditions', validateRequest(addConditionSchema), patientController.addCondition);
router.delete('/conditions/:conditionId', patientController.removeCondition);

router.post('/:id/medical-history', requireStaff, validateRequest(addMedicalHistorySchema), patientController.addMedicalHistory);

export const patientRouter = router;
""")

    # ==========================================
    # DOCTORS MODULE
    # ==========================================
    write_file("backend/src/modules/doctors/doctor.types.ts", """
import { DayOfWeek } from '@prisma/client';

export interface DoctorSearchParams {
  search?: string;
  specializationId?: string;
  specializationName?: string;
  minExperience?: number;
  maxFee?: number;
  minRating?: number;
  city?: string;
  isAvailableToday?: boolean;
  page?: number;
  limit?: number;
  sortBy?: 'rating' | 'fee_asc' | 'fee_desc' | 'experience';
}

export interface SetAvailabilityDTO {
  dayOfWeek: DayOfWeek;
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  slotDurationMinutes?: number;
  isActive?: boolean;
}

export interface AddDoctorLeaveDTO {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  reason?: string;
}

export interface AddDoctorReviewDTO {
  doctorId: string;
  rating: number; // 1 to 5
  comment?: string;
}
""")

    write_file("backend/src/modules/doctors/doctor.validation.ts", """
import { z } from 'zod';
import { DayOfWeek } from '@prisma/client';

export const doctorSearchSchema = z.object({
  query: z.object({
    search: z.string().optional(),
    specializationId: z.string().optional(),
    specializationName: z.string().optional(),
    minExperience: z.string().optional().transform(Number),
    maxFee: z.string().optional().transform(Number),
    minRating: z.string().optional().transform(Number),
    city: z.string().optional(),
    sortBy: z.enum(['rating', 'fee_asc', 'fee_desc', 'experience']).optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});

export const updateDoctorProfileSchema = z.object({
  body: z.object({
    licenseNumber: z.string().optional(),
    qualifications: z.string().optional(),
    experienceYears: z.number().min(0).optional(),
    consultationFee: z.number().min(0).optional(),
    biography: z.string().optional(),
    clinicName: z.string().optional(),
    clinicAddress: z.string().optional(),
    languages: z.array(z.string()).optional(),
    specializationIds: z.array(z.string()).optional(),
  }),
});

export const setAvailabilitySchema = z.object({
  body: z.object({
    dayOfWeek: z.nativeEnum(DayOfWeek),
    startTime: z.string().regex(/^([01]\\d|2[0-3]):([0-5]\\d)$/),
    endTime: z.string().regex(/^([01]\\d|2[0-3]):([0-5]\\d)$/),
    slotDurationMinutes: z.number().int().min(10).max(120).default(30),
    isActive: z.boolean().default(true),
  }),
});

export const addDoctorLeaveSchema = z.object({
  body: z.object({
    startDate: z.string().regex(/^\\d{4}-\\d{2}-\\d{2}$/),
    endDate: z.string().regex(/^\\d{4}-\\d{2}-\\d{2}$/),
    reason: z.string().optional(),
  }),
});

export const addDoctorReviewSchema = z.object({
  body: z.object({
    rating: z.number().int().min(1).max(5),
    comment: z.string().max(1000).optional(),
  }),
});
""")

    write_file("backend/src/modules/doctors/doctor.repository.ts", """
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
""")

    write_file("backend/src/modules/doctors/doctor.service.ts", """
import { doctorRepository } from './doctor.repository';
import { DoctorSearchParams, SetAvailabilityDTO, AddDoctorLeaveDTO } from './doctor.types';
import { NotFoundError, ForbiddenError } from '../../utils/errors';
import { UserRole } from '@prisma/client';
import { prisma } from '../../config/database';

export class DoctorService {
  async getDoctorById(id: string) {
    const doctor = await doctorRepository.findById(id);
    if (!doctor) throw new NotFoundError('Doctor profile not found');
    return doctor;
  }

  async getMyProfile(userId: string) {
    const doctor = await doctorRepository.findByUserId(userId);
    if (!doctor) throw new NotFoundError('Doctor record not found for this user account');
    return doctor;
  }

  async searchDoctors(params: DoctorSearchParams) {
    return await doctorRepository.searchDoctors(params);
  }

  async setAvailability(doctorId: string, data: SetAvailabilityDTO, requesterUserId: string, requesterRole: UserRole) {
    const doctor = await doctorRepository.findById(doctorId);
    if (!doctor) throw new NotFoundError('Doctor not found');

    if (requesterRole === UserRole.DOCTOR && doctor.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized to modify this doctor availability');
    }

    return await doctorRepository.upsertAvailability(doctorId, data);
  }

  async addLeave(doctorId: string, data: AddDoctorLeaveDTO, requesterUserId: string, requesterRole: UserRole) {
    const doctor = await doctorRepository.findById(doctorId);
    if (!doctor) throw new NotFoundError('Doctor not found');

    if (requesterRole === UserRole.DOCTOR && doctor.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized to log leave for this doctor');
    }

    return await doctorRepository.addLeave(doctorId, data);
  }

  async addReview(doctorId: string, patientUserId: string, rating: number, comment?: string) {
    const patient = await prisma.patient.findUnique({ where: { userId: patientUserId } });
    if (!patient) throw new NotFoundError('Patient profile not found');

    return await doctorRepository.addReview(doctorId, patient.id, rating, comment);
  }

  async getAllSpecializations() {
    return await prisma.specialization.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: { select: { doctors: true } },
      },
    });
  }
}

export const doctorService = new DoctorService();
""")

    write_file("backend/src/modules/doctors/doctor.controller.ts", """
import { Request, Response, NextFunction } from 'express';
import { doctorService } from './doctor.service';
import { sendSuccess } from '../../utils/response';

export class DoctorController {
  async search(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await doctorService.searchDoctors(req.query as any);
      return sendSuccess(res, result, 'Doctors found successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async getSpecializations(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await doctorService.getAllSpecializations();
      return sendSuccess(res, result, 'Specializations catalog retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getMyProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await doctorService.getMyProfile(req.user!.userId);
      return sendSuccess(res, result, 'Physician profile retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await doctorService.getDoctorById(id);
      return sendSuccess(res, result, 'Doctor details retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async setAvailability(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await doctorService.setAvailability(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Doctor availability updated', 200);
    } catch (error) {
      next(error);
    }
  }

  async addLeave(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await doctorService.addLeave(id, req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Doctor leave scheduled', 201);
    } catch (error) {
      next(error);
    }
  }

  async addReview(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { rating, comment } = req.body;
      const result = await doctorService.addReview(id, req.user!.userId, rating, comment);
      return sendSuccess(res, result, 'Doctor review submitted successfully', 201);
    } catch (error) {
      next(error);
    }
  }
}

export const doctorController = new DoctorController();
""")

    write_file("backend/src/modules/doctors/doctor.routes.ts", """
import { Router } from 'express';
import { doctorController } from './doctor.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requirePatient } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import {
  doctorSearchSchema,
  setAvailabilitySchema,
  addDoctorLeaveSchema,
  addDoctorReviewSchema,
} from './doctor.validation';

const router = Router();

// Public doctor discovery
router.get('/search', validateRequest(doctorSearchSchema), doctorController.search);
router.get('/specializations', doctorController.getSpecializations);
router.get('/:id', doctorController.getById);

// Protected doctor routes
router.use(authenticate);
router.get('/me/profile', doctorController.getMyProfile);
router.post('/:id/availability', validateRequest(setAvailabilitySchema), doctorController.setAvailability);
router.post('/:id/leaves', validateRequest(addDoctorLeaveSchema), doctorController.addLeave);
router.post('/:id/reviews', requirePatient, validateRequest(addDoctorReviewSchema), doctorController.addReview);

export const doctorRouter = router;
""")
