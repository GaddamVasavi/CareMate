import { PrismaClient } from '@prisma/client';
import { logger } from './logger';
import { env } from './env';

declare global {
  // eslint-disable-next-line no-var
  var prismaClientGlobal: PrismaClient | undefined;
}

export const prisma =
  global.prismaClientGlobal ||
  new PrismaClient({
    log:
      env.NODE_ENV === 'development'
        ? [
            { emit: 'event', level: 'query' },
            { emit: 'event', level: 'error' },
            { emit: 'event', level: 'info' },
            { emit: 'event', level: 'warn' },
          ]
        : ['error'],
  });

if (env.NODE_ENV !== 'production') {
  global.prismaClientGlobal = prisma;
}

export async function connectDatabase() {
  try {
    await prisma.$connect();
    logger.info('✅ PostgreSQL connected successfully via Prisma');
  } catch (error) {
    logger.error('❌ Failed to connect to PostgreSQL:', error);
  }
}

export async function disconnectDatabase() {
  await prisma.$disconnect();
  logger.info('PostgreSQL disconnected');
}
