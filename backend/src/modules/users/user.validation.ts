import { z } from 'zod';

export const updateUserProfileSchema = z.object({
  body: z.object({
    firstName: z.string().min(2).optional(),
    lastName: z.string().min(2).optional(),
    phone: z.string().min(10).optional(),
    avatarUrl: z.string().url().optional(),
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string().optional(),
  }),
});

export const toggleUserStatusSchema = z.object({
  body: z.object({
    isActive: z.boolean(),
  }),
});

export const getUsersQuerySchema = z.object({
  query: z.object({
    page: z.string().optional().default('1').transform(Number),
    limit: z.string().optional().default('10').transform(Number),
    role: z.enum(['PATIENT', 'DOCTOR', 'ADMIN']).optional(),
    search: z.string().optional(),
    isActive: z.string().optional().transform((val) => val === 'true'),
  }),
});

export type UpdateUserProfileInput = z.infer<typeof updateUserProfileSchema>['body'];
export type ToggleUserStatusInput = z.infer<typeof toggleUserStatusSchema>['body'];
export type GetUsersQueryParams = z.infer<typeof getUsersQuerySchema>['query'];
