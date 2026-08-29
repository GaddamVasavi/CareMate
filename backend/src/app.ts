import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { env } from './config/env';
import { errorHandler } from './middleware/error.middleware';
import { apiRateLimiter } from './middleware/rateLimit.middleware';
import { swaggerDocument } from './docs/swagger';

import { authRouter } from './modules/auth/auth.routes';
import { userRouter } from './modules/users/user.routes';
import { patientRouter } from './modules/patients/patient.routes';
import { doctorRouter } from './modules/doctors/doctor.routes';
import { appointmentRouter } from './modules/appointments/appointment.routes';
import { medicalRecordRouter } from './modules/medical-records/medical-record.routes';
import { prescriptionRouter } from './modules/prescriptions/prescription.routes';
import { laboratoryRouter } from './modules/laboratory/laboratory.routes';
import { billingRouter } from './modules/billing/billing.routes';
import { notificationRouter } from './modules/notifications/notification.routes';
import { adminRouter } from './modules/admin/admin.routes';
import { analyticsRouter } from './modules/analytics/analytics.routes';
import { sendSuccess, sendError } from './utils/response';

export const createApp = (): Express => {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: [env.FRONTEND_URL, 'http://localhost:5173', 'http://localhost:3000'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  if (env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  app.use('/api', apiRateLimiter);
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.get('/api/health', (_req: Request, res: Response) => {
    return sendSuccess(
      res,
      {
        status: 'UP',
        timestamp: new Date().toISOString(),
        service: 'CareMate API',
        environment: env.NODE_ENV,
      },
      'CareMate API is healthy and operational'
    );
  });

  // REST API Module Routers
  app.use('/api/auth', authRouter);
  app.use('/api/users', userRouter);
  app.use('/api/patients', patientRouter);
  app.use('/api/doctors', doctorRouter);
  app.use('/api/appointments', appointmentRouter);
  app.use('/api/medical-records', medicalRecordRouter);
  app.use('/api/prescriptions', prescriptionRouter);
  app.use('/api/laboratory', laboratoryRouter);
  app.use('/api/billing', billingRouter);
  app.use('/api/notifications', notificationRouter);
  app.use('/api/admin', adminRouter);
  app.use('/api/analytics', analyticsRouter);

  app.use('*', (req: Request, res: Response) => {
    return sendError(res, `Endpoint ${req.originalUrl} not found`, 404, 'NOT_FOUND');
  });

  app.use(errorHandler);

  return app;
};
