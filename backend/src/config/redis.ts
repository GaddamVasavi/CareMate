import { createClient } from 'redis';
import { logger } from './logger';
import { env } from './env';

class RedisManager {
  private client: ReturnType<typeof createClient> | null = null;
  private isConnected = false;
  private memoryStore = new Map<string, { value: string; expiresAt: number }>();

  constructor() {
    // Lazy or immediate initialization
  }

  async connect() {
    try {
      this.client = createClient({ url: env.REDIS_URL });
      this.client.on('error', (err) => {
        logger.warn(`Redis Client Error (falling back to memory cache): ${err.message}`);
        this.isConnected = false;
      });
      await this.client.connect();
      this.isConnected = true;
      logger.info('✅ Redis cache connected successfully');
    } catch (err) {
      logger.warn('⚠️ Redis connection unavailable, running with high-performance in-memory cache fallback');
      this.isConnected = false;
    }
  }

  async get(key: string): Promise<string | null> {
    if (this.isConnected && this.client) {
      try {
        return await this.client.get(key);
      } catch {
        // Fallback to memory
      }
    }
    const item = this.memoryStore.get(key);
    if (!item) return null;
    if (Date.now() > item.expiresAt) {
      this.memoryStore.delete(key);
      return null;
    }
    return item.value;
  }

  async set(key: string, value: string, ttlSeconds = 300): Promise<void> {
    if (this.isConnected && this.client) {
      try {
        await this.client.set(key, value, { EX: ttlSeconds });
        return;
      } catch {
        // Fallback to memory
      }
    }
    this.memoryStore.set(key, {
      value,
      expiresAt: Date.now() + ttlSeconds * 1000,
    });
  }

  async del(key: string): Promise<void> {
    if (this.isConnected && this.client) {
      try {
        await this.client.del(key);
      } catch {
        // Fallback to memory
      }
    }
    this.memoryStore.delete(key);
  }
}

export const redisCache = new RedisManager();
