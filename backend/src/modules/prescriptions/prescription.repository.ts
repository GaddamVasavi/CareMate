import { prisma } from '../../config/database';
import { CreatePrescriptionDTO, PrescriptionFilterParams } from './prescription.types';
import { Prisma } from '@prisma/client';

export class PrescriptionRepository {
  async findById(id: string) {
    return await prisma.prescription.findUnique({
      where: { id },
      include: {
        patient: {
          include: {
            user: { select: { firstName: true, lastName: true, email: true, phone: true } },
            allergies: true,
          },
        },
        doctor: {
          include: {
            user: { select: { firstName: true, lastName: true, email: true } },
            specializations: { include: { specialization: true } },
          },
        },
        medicalRecord: true,
        items: {
          include: { medicine: true },
        },
      },
    });
  }

  async createPrescription(data: CreatePrescriptionDTO & { doctorId: string }) {
    return await prisma.$transaction(async (tx) => {
      const prescriptionNumber = `RX-${Date.now().toString().slice(-8)}`;

      const prescription = await tx.prescription.create({
        data: {
          prescriptionNumber,
          patientId: data.patientId,
          doctorId: data.doctorId,
          medicalRecordId: data.medicalRecordId,
          validUntil: data.validUntil ? new Date(data.validUntil) : null,
          notes: data.notes,
          items: {
            createMany: {
              data: data.items.map((item) => ({
                medicineId: item.medicineId,
                medicineName: item.medicineName,
                dosage: item.dosage,
                frequency: item.frequency,
                duration: item.duration,
                instructions: item.instructions,
              })),
            },
          },
        },
        include: {
          items: true,
          patient: { include: { user: true } },
          doctor: { include: { user: true } },
        },
      });

      return prescription;
    });
  }

  async findPrescriptions(params: PrescriptionFilterParams) {
    const where: Prisma.PrescriptionWhereInput = {};
    if (params.patientId) where.patientId = params.patientId;
    if (params.doctorId) where.doctorId = params.doctorId;

    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 10));
    const skip = (page - 1) * limit;

    const [total, prescriptions] = await Promise.all([
      prisma.prescription.count({ where }),
      prisma.prescription.findMany({
        where,
        skip,
        take: limit,
        orderBy: { issueDate: 'desc' },
        include: {
          patient: { include: { user: { select: { firstName: true, lastName: true } } } },
          doctor: { include: { user: { select: { firstName: true, lastName: true } } } },
          items: true,
        },
      }),
    ]);

    return { total, page, limit, totalPages: Math.ceil(total / limit), prescriptions };
  }

  async searchMedicines(query: string) {
    return await prisma.medicine.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { genericName: { contains: query, mode: 'insensitive' } },
          { category: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: 20,
    });
  }
}

export const prescriptionRepository = new PrescriptionRepository();
