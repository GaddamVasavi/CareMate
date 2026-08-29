import os

def generate(write_file):
    # ==========================================
    # MEDICAL RECORDS & EHR MODULE
    # ==========================================
    write_file("backend/src/modules/medical-records/medical-record.types.ts", """
export interface CreateVitalSignsDTO {
  systolicBP?: number;
  diastolicBP?: number;
  heartRate?: number;
  respiratoryRate?: number;
  temperature?: number;
  oxygenSaturation?: number;
  bloodGlucose?: number;
}

export interface CreateDiagnosisDTO {
  code?: string;
  description: string;
  type: 'PRIMARY' | 'SECONDARY';
}

export interface CreateSOAPNoteDTO {
  subjective?: string;
  objective?: string;
  assessment?: string;
  plan?: string;
}

export interface CreateTreatmentDTO {
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  status: 'ACTIVE' | 'COMPLETED' | 'DISCONTINUED';
}

export interface CreateMedicalRecordDTO {
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  visitDate?: string;
  symptoms: string;
  diagnosisNote: string;
  treatmentPlan?: string;
  vitalSigns?: CreateVitalSignsDTO;
  diagnoses?: CreateDiagnosisDTO[];
  soapNote?: CreateSOAPNoteDTO;
  treatments?: CreateTreatmentDTO[];
}

export interface MedicalRecordFilterParams {
  patientId?: string;
  doctorId?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}
""")

    write_file("backend/src/modules/medical-records/medical-record.validation.ts", """
import { z } from 'zod';

export const createMedicalRecordSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Valid patient ID is required'),
    doctorId: z.string().uuid().optional(), // Inferred from doctor auth token
    appointmentId: z.string().uuid().optional(),
    visitDate: z.string().optional(),
    symptoms: z.string().min(3, 'Symptoms description is required'),
    diagnosisNote: z.string().min(3, 'Clinical diagnosis note is required'),
    treatmentPlan: z.string().optional(),
    vitalSigns: z.object({
      systolicBP: z.number().min(40).max(300).optional(),
      diastolicBP: z.number().min(30).max(200).optional(),
      heartRate: z.number().min(30).max(250).optional(),
      respiratoryRate: z.number().min(5).max(60).optional(),
      temperature: z.number().min(30).max(45).optional(),
      oxygenSaturation: z.number().min(50).max(100).optional(),
      bloodGlucose: z.number().min(20).max(800).optional(),
    }).optional(),
    diagnoses: z.array(
      z.object({
        code: z.string().optional(),
        description: z.string().min(2),
        type: z.enum(['PRIMARY', 'SECONDARY']).default('PRIMARY'),
      })
    ).optional(),
    soapNote: z.object({
      subjective: z.string().optional(),
      objective: z.string().optional(),
      assessment: z.string().optional(),
      plan: z.string().optional(),
    }).optional(),
    treatments: z.array(
      z.object({
        name: z.string().min(2),
        description: z.string().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        status: z.enum(['ACTIVE', 'COMPLETED', 'DISCONTINUED']).default('ACTIVE'),
      })
    ).optional(),
  }),
});

export const medicalRecordQuerySchema = z.object({
  query: z.object({
    patientId: z.string().optional(),
    doctorId: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});
""")

    write_file("backend/src/modules/medical-records/medical-record.repository.ts", """
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
""")

    write_file("backend/src/modules/medical-records/medical-record.service.ts", """
import { medicalRecordRepository } from './medical-record.repository';
import { CreateMedicalRecordDTO, MedicalRecordFilterParams } from './medical-record.types';
import { NotFoundError, ForbiddenError } from '../../utils/errors';
import { UserRole } from '@prisma/client';
import { prisma } from '../../config/database';

export class MedicalRecordService {
  async createRecord(data: CreateMedicalRecordDTO, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole !== UserRole.DOCTOR && requesterRole !== UserRole.ADMIN) {
      throw new ForbiddenError('Only licensed medical practitioners or administrators can create EHR clinical records');
    }

    if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterUserId } });
      if (!doctor) throw new NotFoundError('Doctor record not found');
      data.doctorId = doctor.id;
    }

    const record = await medicalRecordRepository.createRecord(data);

    // Notification for patient
    await prisma.notification.create({
      data: {
        userId: record.patient.userId,
        type: 'SYSTEM_ALERT',
        title: 'New Clinical Record Added',
        message: `Dr. ${record.doctor.user.lastName} has recorded clinical notes for your recent visit.`,
        linkUrl: `/patient/medical-records`,
      },
    });

    return record;
  }

  async getRecordById(id: string, requesterUserId: string, requesterRole: UserRole) {
    const record = await medicalRecordRepository.findById(id);
    if (!record) throw new NotFoundError('Medical record not found');

    if (requesterRole === UserRole.PATIENT && record.patient.userId !== requesterUserId) {
      throw new ForbiddenError('Access denied: You can only view your own medical records');
    }

    return record;
  }

  async listRecords(params: MedicalRecordFilterParams, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole === UserRole.PATIENT) {
      const patient = await prisma.patient.findUnique({ where: { userId: requesterUserId } });
      if (patient) params.patientId = patient.id;
    } else if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterUserId } });
      if (doctor) params.doctorId = doctor.id;
    }

    return await medicalRecordRepository.findRecords(params);
  }
}

export const medicalRecordService = new MedicalRecordService();
""")

    write_file("backend/src/modules/medical-records/medical-record.controller.ts", """
import { Request, Response, NextFunction } from 'express';
import { medicalRecordService } from './medical-record.service';
import { sendSuccess } from '../../utils/response';

export class MedicalRecordController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await medicalRecordService.createRecord(req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Medical record created successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await medicalRecordService.getRecordById(id, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Medical record details retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await medicalRecordService.listRecords(req.query as any, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Medical records retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const medicalRecordController = new MedicalRecordController();
""")

    write_file("backend/src/modules/medical-records/medical-record.routes.ts", """
import { Router } from 'express';
import { medicalRecordController } from './medical-record.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireDoctorOrAdmin } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import { createMedicalRecordSchema, medicalRecordQuerySchema } from './medical-record.validation';

const router = Router();

router.use(authenticate);

router.post(
  '/',
  requireDoctorOrAdmin,
  validateRequest(createMedicalRecordSchema),
  auditLog({ action: 'CREATE', resource: 'MEDICAL_RECORD' }),
  medicalRecordController.create
);

router.get(
  '/',
  validateRequest(medicalRecordQuerySchema),
  medicalRecordController.list
);

router.get(
  '/:id',
  auditLog({ action: 'READ', resource: 'MEDICAL_RECORD' }),
  medicalRecordController.getById
);

export const medicalRecordRouter = router;
""")

    # ==========================================
    # PRESCRIPTIONS MODULE
    # ==========================================
    write_file("backend/src/modules/prescriptions/prescription.types.ts", """
export interface CreatePrescriptionItemDTO {
  medicineId?: string;
  medicineName: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

export interface CreatePrescriptionDTO {
  patientId: string;
  doctorId?: string;
  medicalRecordId?: string;
  validUntil?: string;
  notes?: string;
  items: CreatePrescriptionItemDTO[];
}

export interface PrescriptionFilterParams {
  patientId?: string;
  doctorId?: string;
  page?: number;
  limit?: number;
}
""")

    write_file("backend/src/modules/prescriptions/prescription.validation.ts", """
import { z } from 'zod';

export const createPrescriptionSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Patient ID is required'),
    medicalRecordId: z.string().uuid().optional(),
    validUntil: z.string().optional(),
    notes: z.string().optional(),
    items: z.array(
      z.object({
        medicineId: z.string().uuid().optional(),
        medicineName: z.string().min(2, 'Medicine name is required'),
        dosage: z.string().min(1, 'Dosage is required (e.g. 500mg)'),
        frequency: z.string().min(1, 'Frequency is required (e.g. twice daily)'),
        duration: z.string().min(1, 'Duration is required (e.g. 7 days)'),
        instructions: z.string().optional(),
      })
    ).min(1, 'At least one medicine item is required in prescription'),
  }),
});

export const prescriptionQuerySchema = z.object({
  query: z.object({
    patientId: z.string().optional(),
    doctorId: z.string().optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});
""")

    write_file("backend/src/modules/prescriptions/prescription.repository.ts", """
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
""")

    write_file("backend/src/modules/prescriptions/prescription.service.ts", """
import { prescriptionRepository } from './prescription.repository';
import { CreatePrescriptionDTO, PrescriptionFilterParams } from './prescription.types';
import { NotFoundError, ForbiddenError } from '../../utils/errors';
import { UserRole } from '@prisma/client';
import { prisma } from '../../config/database';

export class PrescriptionService {
  async createPrescription(data: CreatePrescriptionDTO, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole !== UserRole.DOCTOR && requesterRole !== UserRole.ADMIN) {
      throw new ForbiddenError('Only licensed medical doctors can generate official prescriptions');
    }

    let doctorId = data.doctorId;
    if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterUserId } });
      if (!doctor) throw new NotFoundError('Doctor record not found');
      doctorId = doctor.id;
    }

    if (!doctorId) throw new NotFoundError('Doctor identification required');

    const prescription = await prescriptionRepository.createPrescription({
      ...data,
      doctorId,
    });

    // Notify patient
    await prisma.notification.create({
      data: {
        userId: prescription.patient.userId,
        type: 'PRESCRIPTION_CREATED',
        title: 'New Prescription Issued',
        message: `Dr. ${prescription.doctor.user.lastName} issued prescription #${prescription.prescriptionNumber}.`,
        linkUrl: `/patient/prescriptions`,
      },
    });

    return prescription;
  }

  async getPrescriptionById(id: string, requesterUserId: string, requesterRole: UserRole) {
    const rx = await prescriptionRepository.findById(id);
    if (!rx) throw new NotFoundError('Prescription not found');

    if (requesterRole === UserRole.PATIENT && rx.patient.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized to view this prescription');
    }

    return rx;
  }

  async listPrescriptions(params: PrescriptionFilterParams, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole === UserRole.PATIENT) {
      const patient = await prisma.patient.findUnique({ where: { userId: requesterUserId } });
      if (patient) params.patientId = patient.id;
    } else if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterUserId } });
      if (doctor) params.doctorId = doctor.id;
    }

    return await prescriptionRepository.findPrescriptions(params);
  }

  async searchMedicines(query: string) {
    return await prescriptionRepository.searchMedicines(query);
  }
}

export const prescriptionService = new PrescriptionService();
""")

    write_file("backend/src/modules/prescriptions/prescription.controller.ts", """
import { Request, Response, NextFunction } from 'express';
import { prescriptionService } from './prescription.service';
import { sendSuccess } from '../../utils/response';

export class PrescriptionController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await prescriptionService.createPrescription(req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Prescription issued successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await prescriptionService.getPrescriptionById(id, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Prescription retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await prescriptionService.listPrescriptions(req.query as any, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Prescriptions retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async searchMedicines(req: Request, res: Response, next: NextFunction) {
    try {
      const query = (req.query.q as string) || '';
      const result = await prescriptionService.searchMedicines(query);
      return sendSuccess(res, result, 'Medicines search completed', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const prescriptionController = new PrescriptionController();
""")

    write_file("backend/src/modules/prescriptions/prescription.routes.ts", """
import { Router } from 'express';
import { prescriptionController } from './prescription.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireDoctorOrAdmin } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import { createPrescriptionSchema, prescriptionQuerySchema } from './prescription.validation';

const router = Router();

router.use(authenticate);

router.post(
  '/',
  requireDoctorOrAdmin,
  validateRequest(createPrescriptionSchema),
  auditLog({ action: 'CREATE', resource: 'PRESCRIPTION' }),
  prescriptionController.create
);

router.get('/medicines', prescriptionController.searchMedicines);
router.get('/', validateRequest(prescriptionQuerySchema), prescriptionController.list);
router.get('/:id', auditLog({ action: 'READ', resource: 'PRESCRIPTION' }), prescriptionController.getById);

export const prescriptionRouter = router;
""")

    # ==========================================
    # LABORATORY MODULE
    # ==========================================
    write_file("backend/src/modules/laboratory/laboratory.types.ts", """
import { LabOrderStatus } from '@prisma/client';

export interface CreateLabOrderDTO {
  patientId: string;
  doctorId?: string;
  labTestIds: string[];
  notes?: string;
}

export interface EnterLabResultDTO {
  labOrderItemId: string;
  resultValue: string;
  isAbnormal?: boolean;
  remarks?: string;
  reportFileUrl?: string;
  verifiedBy?: string;
}

export interface LabOrderFilterParams {
  patientId?: string;
  doctorId?: string;
  status?: LabOrderStatus;
  page?: number;
  limit?: number;
}
""")

    write_file("backend/src/modules/laboratory/laboratory.validation.ts", """
import { z } from 'zod';
import { LabOrderStatus } from '@prisma/client';

export const createLabOrderSchema = z.object({
  body: z.object({
    patientId: z.string().uuid('Patient ID is required'),
    labTestIds: z.array(z.string().uuid()).min(1, 'At least one lab test must be selected'),
    notes: z.string().optional(),
  }),
});

export const enterLabResultSchema = z.object({
  body: z.object({
    labOrderItemId: z.string().uuid('Lab order item ID is required'),
    resultValue: z.string().min(1, 'Result value is required'),
    isAbnormal: z.boolean().default(false),
    remarks: z.string().optional(),
    reportFileUrl: z.string().url().optional(),
  }),
});

export const updateLabStatusSchema = z.object({
  body: z.object({
    status: z.nativeEnum(LabOrderStatus),
  }),
});

export const labOrderQuerySchema = z.object({
  query: z.object({
    patientId: z.string().optional(),
    doctorId: z.string().optional(),
    status: z.nativeEnum(LabOrderStatus).optional(),
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
  }),
});
""")

    write_file("backend/src/modules/laboratory/laboratory.repository.ts", """
import { prisma } from '../../config/database';
import { CreateLabOrderDTO, EnterLabResultDTO, LabOrderFilterParams } from './laboratory.types';
import { LabOrderStatus, Prisma } from '@prisma/client';

export class LaboratoryRepository {
  async getCatalog() {
    return await prisma.labTest.findMany({
      orderBy: { category: 'asc' },
    });
  }

  async findOrderById(id: string) {
    return await prisma.labOrder.findUnique({
      where: { id },
      include: {
        patient: { include: { user: { select: { firstName: true, lastName: true, email: true, phone: true } } } },
        doctor: { include: { user: { select: { firstName: true, lastName: true, email: true } } } },
        items: {
          include: {
            labTest: true,
            result: true,
          },
        },
      },
    });
  }

  async createLabOrder(data: CreateLabOrderDTO & { doctorId: string }) {
    return await prisma.$transaction(async (tx) => {
      const orderNumber = `LAB-ORD-${Date.now().toString().slice(-8)}`;

      const order = await tx.labOrder.create({
        data: {
          orderNumber,
          patientId: data.patientId,
          doctorId: data.doctorId,
          status: LabOrderStatus.ORDERED,
          notes: data.notes,
          items: {
            createMany: {
              data: data.labTestIds.map((testId) => ({
                labTestId: testId,
              })),
            },
          },
        },
        include: {
          items: { include: { labTest: true } },
          patient: { include: { user: true } },
          doctor: { include: { user: true } },
        },
      });

      return order;
    });
  }

  async updateOrderStatus(id: string, status: LabOrderStatus) {
    return await prisma.labOrder.update({
      where: { id },
      data: { status },
    });
  }

  async upsertResult(data: EnterLabResultDTO, verifiedByName: string) {
    return await prisma.$transaction(async (tx) => {
      const result = await tx.labResult.upsert({
        where: { labOrderItemId: data.labOrderItemId },
        create: {
          labOrderItemId: data.labOrderItemId,
          resultValue: data.resultValue,
          isAbnormal: data.isAbnormal ?? false,
          remarks: data.remarks,
          reportFileUrl: data.reportFileUrl,
          verifiedBy: verifiedByName,
          verifiedAt: new Date(),
        },
        update: {
          resultValue: data.resultValue,
          isAbnormal: data.isAbnormal ?? false,
          remarks: data.remarks,
          reportFileUrl: data.reportFileUrl,
          verifiedBy: verifiedByName,
          verifiedAt: new Date(),
        },
      });

      // Check if all items in order have results; if so, mark order COMPLETED
      const orderItem = await tx.labOrderItem.findUnique({
        where: { id: data.labOrderItemId },
        include: { labOrder: { include: { items: { include: { result: true } } } } },
      });

      if (orderItem) {
        const allCompleted = orderItem.labOrder.items.every((item) => !!item.result);
        if (allCompleted) {
          await tx.labOrder.update({
            where: { id: orderItem.labOrderId },
            data: { status: LabOrderStatus.COMPLETED },
          });
        }
      }

      return result;
    });
  }

  async findOrders(params: LabOrderFilterParams) {
    const where: Prisma.LabOrderWhereInput = {};
    if (params.patientId) where.patientId = params.patientId;
    if (params.doctorId) where.doctorId = params.doctorId;
    if (params.status) where.status = params.status;

    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 10));
    const skip = (page - 1) * limit;

    const [total, orders] = await Promise.all([
      prisma.labOrder.count({ where }),
      prisma.labOrder.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          patient: { include: { user: { select: { firstName: true, lastName: true } } } },
          doctor: { include: { user: { select: { firstName: true, lastName: true } } } },
          items: { include: { labTest: true, result: true } },
        },
      }),
    ]);

    return { total, page, limit, totalPages: Math.ceil(total / limit), orders };
  }
}

export const laboratoryRepository = new LaboratoryRepository();
""")

    write_file("backend/src/modules/laboratory/laboratory.service.ts", """
import { laboratoryRepository } from './laboratory.repository';
import { CreateLabOrderDTO, EnterLabResultDTO, LabOrderFilterParams } from './laboratory.types';
import { NotFoundError, ForbiddenError } from '../../utils/errors';
import { LabOrderStatus, UserRole } from '@prisma/client';
import { prisma } from '../../config/database';

export class LaboratoryService {
  async getCatalog() {
    return await laboratoryRepository.getCatalog();
  }

  async createLabOrder(data: CreateLabOrderDTO, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole !== UserRole.DOCTOR && requesterRole !== UserRole.ADMIN) {
      throw new ForbiddenError('Only licensed medical staff can create laboratory test orders');
    }

    let doctorId = data.doctorId;
    if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterUserId } });
      if (!doctor) throw new NotFoundError('Doctor profile not found');
      doctorId = doctor.id;
    }

    if (!doctorId) throw new NotFoundError('Doctor ID required');

    const order = await laboratoryRepository.createLabOrder({
      ...data,
      doctorId,
    });

    // Notify patient
    await prisma.notification.create({
      data: {
        userId: order.patient.userId,
        type: 'LAB_ORDER_CREATED',
        title: 'Laboratory Test Ordered',
        message: `Dr. ${order.doctor.user.lastName} requested lab order #${order.orderNumber}.`,
        linkUrl: `/patient/lab-results`,
      },
    });

    return order;
  }

  async getOrderById(id: string, requesterUserId: string, requesterRole: UserRole) {
    const order = await laboratoryRepository.findOrderById(id);
    if (!order) throw new NotFoundError('Laboratory order not found');

    if (requesterRole === UserRole.PATIENT && order.patient.userId !== requesterUserId) {
      throw new ForbiddenError('Unauthorized access to lab order');
    }

    return order;
  }

  async enterResult(data: EnterLabResultDTO, verifierUserId: string) {
    const verifier = await prisma.user.findUnique({ where: { id: verifierUserId } });
    const verifiedByName = verifier ? `${verifier.firstName} ${verifier.lastName}` : 'Lab Staff';

    const result = await laboratoryRepository.upsertResult(data, verifiedByName);
    return result;
  }

  async updateOrderStatus(id: string, status: LabOrderStatus) {
    return await laboratoryRepository.updateOrderStatus(id, status);
  }

  async listOrders(params: LabOrderFilterParams, requesterUserId: string, requesterRole: UserRole) {
    if (requesterRole === UserRole.PATIENT) {
      const patient = await prisma.patient.findUnique({ where: { userId: requesterUserId } });
      if (patient) params.patientId = patient.id;
    } else if (requesterRole === UserRole.DOCTOR) {
      const doctor = await prisma.doctor.findUnique({ where: { userId: requesterUserId } });
      if (doctor) params.doctorId = doctor.id;
    }

    return await laboratoryRepository.findOrders(params);
  }
}

export const laboratoryService = new LaboratoryService();
""")

    write_file("backend/src/modules/laboratory/laboratory.controller.ts", """
import { Request, Response, NextFunction } from 'express';
import { laboratoryService } from './laboratory.service';
import { sendSuccess } from '../../utils/response';

export class LaboratoryController {
  async getCatalog(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await laboratoryService.getCatalog();
      return sendSuccess(res, result, 'Laboratory test catalog retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await laboratoryService.createLabOrder(req.body, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Laboratory order created successfully', 201);
    } catch (error) {
      next(error);
    }
  }

  async getOrderById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await laboratoryService.getOrderById(id, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Lab order details retrieved', 200);
    } catch (error) {
      next(error);
    }
  }

  async enterResult(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await laboratoryService.enterResult(req.body, req.user!.userId);
      return sendSuccess(res, result, 'Lab result recorded and verified', 200);
    } catch (error) {
      next(error);
    }
  }

  async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const result = await laboratoryService.updateOrderStatus(id, status);
      return sendSuccess(res, result, `Lab order status updated to ${status}`, 200);
    } catch (error) {
      next(error);
    }
  }

  async listOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await laboratoryService.listOrders(req.query as any, req.user!.userId, req.user!.role);
      return sendSuccess(res, result, 'Lab orders list retrieved', 200);
    } catch (error) {
      next(error);
    }
  }
}

export const laboratoryController = new LaboratoryController();
""")

    write_file("backend/src/modules/laboratory/laboratory.routes.ts", """
import { Router } from 'express';
import { laboratoryController } from './laboratory.controller';
import { authenticate } from '../../middleware/auth.middleware';
import { requireStaff } from '../../middleware/role.middleware';
import { validateRequest } from '../../middleware/validate.middleware';
import { auditLog } from '../../middleware/audit.middleware';
import {
  createLabOrderSchema,
  enterLabResultSchema,
  updateLabStatusSchema,
  labOrderQuerySchema,
} from './laboratory.validation';

const router = Router();

router.use(authenticate);

router.get('/catalog', laboratoryController.getCatalog);
router.post(
  '/orders',
  requireStaff,
  validateRequest(createLabOrderSchema),
  auditLog({ action: 'CREATE', resource: 'LAB_ORDER' }),
  laboratoryController.createOrder
);
router.get('/orders', validateRequest(labOrderQuerySchema), laboratoryController.listOrders);
router.get('/orders/:id', auditLog({ action: 'READ', resource: 'LAB_ORDER' }), laboratoryController.getOrderById);
router.patch('/orders/:id/status', requireStaff, validateRequest(updateLabStatusSchema), laboratoryController.updateStatus);
router.post('/results', requireStaff, validateRequest(enterLabResultSchema), laboratoryController.enterResult);

export const laboratoryRouter = router;
""")
