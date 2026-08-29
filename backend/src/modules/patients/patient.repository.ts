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
