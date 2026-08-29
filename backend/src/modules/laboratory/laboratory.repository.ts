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
