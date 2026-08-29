import { Response } from 'express';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T | null;
  error?: {
    code: string;
    details?: any;
  } | null;
}

export function sendSuccess<T>(
  res: Response,
  data: T,
  message = 'Operation successful',
  statusCode = 200
): Response {
  const responsePayload: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  return res.status(statusCode).json(responsePayload);
}

export function sendError(
  res: Response,
  message = 'Operation failed',
  statusCode = 500,
  code = 'INTERNAL_ERROR',
  details?: any
): Response {
  const responsePayload: ApiResponse = {
    success: false,
    message,
    data: null,
    error: {
      code,
      details: details || [],
    },
  };
  return res.status(statusCode).json(responsePayload);
}
