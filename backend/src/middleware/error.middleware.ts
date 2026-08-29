import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors';
import { sendError } from '../utils/response';
import { logger } from '../config/logger';
import { env } from '../config/env';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(`[${req.method}] ${req.originalUrl} - Error: ${err.message}`, {
    stack: err.stack,
    details: err.details,
  });

  if (err instanceof AppError) {
    return sendError(res, err.message, err.statusCode, err.code, err.details);
  }

  // Handle Prisma specific errors
  if (err.code === 'P2002') {
    const target = (err.meta?.target as string[]) || ['Field'];
    return sendError(
      res,
      `A record with this ${target.join(', ')} already exists.`,
      409,
      'DUPLICATE_RESOURCE',
      err.meta
    );
  }

  if (err.code === 'P2025') {
    return sendError(
      res,
      'Requested record was not found in the database.',
      404,
      'RECORD_NOT_FOUND'
    );
  }

  // Unexpected runtime errors
  const isDev = env.NODE_ENV === 'development';
  return sendError(
    res,
    isDev ? err.message : 'Internal Server Error occurred. Please contact support.',
    500,
    'INTERNAL_SERVER_ERROR',
    isDev ? { stack: err.stack } : undefined
  );
};
