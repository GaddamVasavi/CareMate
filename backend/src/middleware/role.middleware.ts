import { Request, Response, NextFunction } from 'express';
import { UserRole } from '@prisma/client';
import { sendError } from '../utils/response';

export const authorizeRoles = (...allowedRoles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return sendError(res, 'Authentication required before authorization check.', 401, 'UNAUTHORIZED');
    }

    if (!allowedRoles.includes(req.user.role)) {
      return sendError(
        res,
        `Access denied. Required role: ${allowedRoles.join(' or ')}. Your role: ${req.user.role}`,
        403,
        'FORBIDDEN'
      );
    }

    return next();
  };
};

export const requirePatient = authorizeRoles(UserRole.PATIENT);
export const requireDoctor = authorizeRoles(UserRole.DOCTOR);
export const requireAdmin = authorizeRoles(UserRole.ADMIN);
export const requireDoctorOrAdmin = authorizeRoles(UserRole.DOCTOR, UserRole.ADMIN);
export const requirePatientOrAdmin = authorizeRoles(UserRole.PATIENT, UserRole.ADMIN);
export const requireStaff = authorizeRoles(UserRole.DOCTOR, UserRole.ADMIN);
