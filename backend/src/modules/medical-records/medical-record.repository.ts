import { prisma } from '../../config/database';
import { CreateMedicalRecordDTO, MedicalRecordFilterParams } from './medical-record.types';
import { Prisma } from '@prisma/client';

export class MedicalRecordRepository {
  async findById(id: string) {
    return await prisma.medicalRecord.findUnique({
      where: { id },
      include: {
        patient: {
          include: {
            user: { select: { firstName: true, lastName: true, email: true, phone: true } },
            allergies: true,
            conditions: true,
          },
        },
        doctor: {
          include: {
            user: { select: { firstName: true, lastName: true, email: true } },
            specializations: { include: { specialization: true } },
          },
        },
        appointment: true,
        vitalSigns: { orderBy: { recordedAt: 'desc' } },
        diagnoses: true,
        clinicalNotes: true,
        treatments: true,
        documents: true,
        prescriptions: {
          include: { items: true },
        },
      },
    });
  }

  async createRecord(data: CreateMedicalRecordDTO) {
    return await prisma.$transaction(async (tx) => {
      const recordNumber = `EHR-${Date.now().toString().slice(-8)}`;

      const created = await tx.medicalRecord.create({
        data: {
          recordNumber,
          patientId: data.patientId,
          doctorId: data.doctorId,
          appointmentId: data.appointmentId,
          visitDate: data.visitDate ? new Date(data.visitDate) : new Date(),
          symptoms: data.symptoms,
          diagnosisNote: data.diagnosisNote,
          treatmentPlan: data.treatmentPlan,
          vitalSigns: data.vitalSigns ? { create: data.vitalSigns } : undefined,
          diagnoses: data.diagnoses ? { createMany: { data: data.diagnoses } } : undefined,
          clinicalNotes: data.soapNote ? { create: data.soapNote } : undefined,
          treatments: data.treatments
            ? {
                createMany: {
                  data: data.treatments.map((t) => ({
                    name: t.name,
                    description: t.description,
                    startDate: t.startDate ? new Date(t.startDate) : null,
                    endDate: t.endDate ? new Date(t.endDate) : null,
                    status: t.status,
                  })),
                },
              }
            : undefined,
        },
        include: {
          vitalSigns: true,
          diagnoses: true,
          clinicalNotes: true,
          treatments: true,
          patient: { include: { user: true } },
          doctor: { include: { user: true } },
        },
      });

      return created;
    });
  }

  async findRecords(params: MedicalRecordFilterParams) {
    const where: Prisma.MedicalRecordWhereInput = {};

    if (params.patientId) where.patientId = params.patientId;
    if (params.doctorId) where.doctorId = params.doctorId;

    if (params.startDate || params.endDate) {
      where.visitDate = {};
      if (params.startDate) where.visitDate.gte = new Date(params.startDate);
      if (params.endDate) where.visitDate.lte = new Date(params.endDate);
    }

    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 10));
    const skip = (page - 1) * limit;

    const [total, records] = await Promise.all([
      prisma.medicalRecord.count({ where }),
      prisma.medicalRecord.findMany({
        where,
        skip,
        take: limit,
        orderBy: { visitDate: 'desc' },
        include: {
          patient: {
            include: { user: { select: { firstName: true, lastName: true } } },
          },
          doctor: {
            include: {
              user: { select: { firstName: true, lastName: true } },
              specializations: { include: { specialization: true } },
            },
          },
          diagnoses: true,
          vitalSigns: true,
        },
      }),
    ]);

    return { total, page, limit, totalPages: Math.ceil(total / limit), records };
  }
}

export const medicalRecordRepository = new MedicalRecordRepository();
