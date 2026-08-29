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
