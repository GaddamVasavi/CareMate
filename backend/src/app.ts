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
import { sendSuccess, sendError } from './utils/response';

export const createApp = (): Express => {
  const app = express();

  // Security headers
  app.use(helmet());

  // CORS configuration
  app.use(
    cors({
      origin: [env.FRONTEND_URL, 'http://localhost:5173', 'http://localhost:3000'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  // Request parsers
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Logging
  if (env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  // Rate Limiting on all API routes
  app.use('/api', apiRateLimiter);

  // API Documentation
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Health Check
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

  // API Module Routes
  app.use('/api/auth', authRouter);
  app.use('/api/users', userRouter);

  // 404 Fallback
  app.use('*', (req: Request, res: Response) => {
    return sendError(res, `Endpoint ${req.originalUrl} not found`, 404, 'NOT_FOUND');
  });

  // Global Error Handler
  app.use(errorHandler);

  return app;
};
