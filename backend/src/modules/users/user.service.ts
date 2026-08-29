import { userRepository } from './user.repository';
import { UpdateUserProfileInput, GetUsersQueryParams } from './user.validation';
import { NotFoundError, ForbiddenError } from '../../utils/errors';
import { UserRole } from '@prisma/client';

export class UserService {
  async listUsers(params: GetUsersQueryParams) {
    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 10));
    const skip = (page - 1) * limit;

    const { total, users } = await userRepository.findUsers({
      skip,
      take: limit,
      role: params.role as UserRole,
      search: params.search,
      isActive: params.isActive,
    });

    return {
      users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getUserById(id: string, requesterRole: UserRole, requesterId: string) {
    // Non-admins can only view their own full profile directly via this route
    if (requesterRole !== UserRole.ADMIN && requesterId !== id) {
      throw new ForbiddenError('You are not authorized to view this user profile');
    }

    const user = await userRepository.findUserById(id);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const { passwordHash, resetPasswordToken, emailVerifyToken, ...sanitized } = user;
    return sanitized;
  }

  async updateProfile(userId: string, input: UpdateUserProfileInput) {
    const user = await userRepository.findUserById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const userUpdateData: any = {};
    if (input.firstName) userUpdateData.firstName = input.firstName.trim();
    if (input.lastName) userUpdateData.lastName = input.lastName.trim();
    if (input.phone) userUpdateData.phone = input.phone.trim();
    if (input.avatarUrl) userUpdateData.avatarUrl = input.avatarUrl;

    if (Object.keys(userUpdateData).length > 0) {
      await userRepository.updateUser(userId, userUpdateData);
    }

    if (input.street || input.city || input.state || input.postalCode) {
      await userRepository.upsertAddress(userId, {
        street: input.street || user.address?.street || '',
        city: input.city || user.address?.city || '',
        state: input.state || user.address?.state || '',
        postalCode: input.postalCode || user.address?.postalCode || '',
        country: input.country || user.address?.country || 'United States',
      });
    }

    return await this.getUserById(userId, UserRole.ADMIN, userId);
  }

  async toggleUserStatus(userId: string, isActive: boolean) {
    const user = await userRepository.findUserById(userId);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    return await userRepository.updateUser(userId, { isActive });
  }
}

export const userService = new UserService();
