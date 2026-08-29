import { createApp } from './app';
import { env } from './config/env';
import { logger } from './config/logger';
import { connectDatabase, disconnectDatabase } from './config/database';
import { redisCache } from './config/redis';

const app = createApp();

async function startServer() {
  await connectDatabase();
  await redisCache.connect();

  const server = app.listen(env.PORT, () => {
    logger.info(`🚀 CareMate Backend API is running on http://localhost:${env.PORT}`);
    logger.info(`📚 Swagger Documentation is available at http://localhost:${env.PORT}/api/docs`);
    logger.info(`🏥 Environment: ${env.NODE_ENV}`);
  });

  const shutdown = async (signal: string) => {
    logger.info(`Received ${signal}. Gracefully shutting down CareMate API...`);
    server.close(async () => {
      await disconnectDatabase();
      logger.info('Server closed. Process terminating.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

if (process.env.NODE_ENV !== 'test') {
  startServer();
}
