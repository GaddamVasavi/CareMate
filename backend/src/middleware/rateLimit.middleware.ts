import rateLimit from 'express-rate-limit';
import { sendError } from '../utils/response';

export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Limit each IP to 300 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => {
    return sendError(res, 'Too many requests from this IP, please try again after 15 minutes.', 429, 'RATE_LIMIT_EXCEEDED');
  },
});

export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30, // Limit auth attempts to 30 per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => {
    return sendError(res, 'Too many authentication attempts. Please try again later.', 429, 'AUTH_RATE_LIMIT_EXCEEDED');
  },
});
