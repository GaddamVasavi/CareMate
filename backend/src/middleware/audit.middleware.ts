import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/database';
import { logger } from '../config/logger';

export interface AuditOptions {
  action: string;
  resource: string;
  getResourceId?: (req: Request) => string | undefined;
}

export const auditLog = (options: AuditOptions) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const originalSend = res.send;

    res.send = function (body?: any): Response {
      res.send = originalSend;
      const response = originalSend.call(this, body);

      // Asynchronously log the operation after response is sent if status is successful (<400)
      if (res.statusCode >= 200 && res.statusCode < 400) {
        const userId = req.user?.userId || null;
        const resourceId = options.getResourceId ? options.getResourceId(req) : (req.params.id || null);
        const ipAddress = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
        const userAgent = req.headers['user-agent'] || 'unknown';

        prisma.auditLog.create({
          data: {
            userId,
            action: options.action,
            resource: options.resource,
            resourceId,
            ipAddress,
            userAgent,
            details: {
              method: req.method,
              path: req.originalUrl,
              statusCode: res.statusCode,
            },
          },
        }).catch((err) => {
          logger.error(`Audit logging failed: ${err.message}`);
        });
      }

      return response;
    };

    next();
  };
};
