import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken, TokenPayload } from '../utils/jwt';
import { sendError } from '../utils/response';
import { prisma } from '../config/database';

export interface AuthenticatedUser extends TokenPayload {
  patientId?: string;
  doctorId?: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return sendError(res, 'Authentication required. No token provided.', 401, 'UNAUTHORIZED');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return sendError(res, 'Invalid authorization token format.', 401, 'UNAUTHORIZED');
    }

    const payload = verifyAccessToken(token);

    // Verify user exists and is active in database
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        patient: { select: { id: true } },
        doctor: { select: { id: true } },
      },
    });

    if (!user || !user.isActive) {
      return sendError(res, 'User account is deactivated or no longer exists.', 401, 'UNAUTHORIZED');
    }

    req.user = {
      userId: user.id,
      email: user.email,
      role: user.role,
      patientId: user.patient?.id,
      doctorId: user.doctor?.id,
    };

    return next();
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      return sendError(res, 'Access token has expired. Please refresh your session.', 401, 'TOKEN_EXPIRED');
    }
    return sendError(res, 'Invalid or corrupted access token.', 401, 'UNAUTHORIZED');
  }
};
