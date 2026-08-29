export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'CareMate Healthcare Management System API',
    version: '1.0.0',
    description: 'Enterprise REST API for CareMate Patient & Doctor Healthcare Management System',
    contact: {
      name: 'CareMate Technical Team',
      email: 'support@caremate.health',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Local Development Server',
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      StandardResponse: {
        type: 'object',
        properties: {
          success: { type: 'boolean', example: true },
          message: { type: 'string', example: 'Operation successful' },
          data: { type: 'object' },
        },
      },
      ErrorResponse: {
        type: 'object',
        properties: {
          success: { type: 'boolean', example: false },
          message: { type: 'string', example: 'Operation failed' },
          data: { type: 'null', example: null },
          error: {
            type: 'object',
            properties: {
              code: { type: 'string', example: 'VALIDATION_ERROR' },
              details: { type: 'array', items: { type: 'object' } },
            },
          },
        },
      },
      RegisterPatient: {
        type: 'object',
        required: ['email', 'password', 'firstName', 'lastName', 'phone', 'dateOfBirth', 'gender'],
        properties: {
          email: { type: 'string', format: 'email', example: 'patient@example.com' },
          password: { type: 'string', example: 'Password123!' },
          firstName: { type: 'string', example: 'John' },
          lastName: { type: 'string', example: 'Doe' },
          phone: { type: 'string', example: '+1234567890' },
          dateOfBirth: { type: 'string', example: '1990-05-15' },
          gender: { type: 'string', enum: ['MALE', 'FEMALE', 'OTHER'] },
          bloodGroup: { type: 'string', enum: ['O_POSITIVE', 'A_POSITIVE', 'B_POSITIVE', 'AB_POSITIVE'] },
        },
      },
      LoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email', example: 'john.doe@example.com' },
          password: { type: 'string', example: 'Password123!' },
        },
      },
    },
  },
  paths: {
    '/api/auth/register/patient': {
      post: {
        summary: 'Register a new patient account',
        tags: ['Authentication'],
        requestBody: {
          required: true,
          content: {
            'application/json': { schema: { $ref: '#/components/schemas/RegisterPatient' } },
          },
        },
        responses: {
          201: { description: 'Patient registered successfully', content: { 'application/json': { schema: { $ref: '#/components/schemas/StandardResponse' } } } },
          409: { description: 'Email already exists', content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } } },
        },
      },
    },
    '/api/auth/login': {
      post: {
        summary: 'Log in with email and password',
        tags: ['Authentication'],
        requestBody: {
          required: true,
          content: {
            'application/json': { schema: { $ref: '#/components/schemas/LoginRequest' } },
          },
        },
        responses: {
          200: { description: 'Login successful with JWT access & refresh tokens' },
          401: { description: 'Invalid credentials or inactive account' },
        },
      },
    },
    '/api/auth/me': {
      get: {
        summary: 'Get currently authenticated user profile',
        tags: ['Authentication'],
        security: [{ BearerAuth: [] }],
        responses: {
          200: { description: 'User profile retrieved successfully' },
          401: { description: 'Unauthorized' },
        },
      },
    },
    '/api/users': {
      get: {
        summary: 'List users (Admin only)',
        tags: ['Users & Admin'],
        security: [{ BearerAuth: [] }],
        responses: {
          200: { description: 'Paginated user list retrieved' },
          403: { description: 'Forbidden' },
        },
      },
    },
  },
};
