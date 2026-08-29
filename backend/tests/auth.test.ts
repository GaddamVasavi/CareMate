import request from 'supertest';
import { createApp } from '../src/app';
import { prisma } from '../src/config/database';
import { generateAccessToken } from '../src/utils/jwt';
import { UserRole } from '@prisma/client';

const app = createApp();

describe('CareMate Authentication & Authorization API', () => {
  const testPatientEmail = `test.patient.${Date.now()}@example.com`;
  const testDoctorEmail = `test.doctor.${Date.now()}@example.com`;
  let patientAccessToken = '';
  let patientRefreshToken = '';
  let specializationId = '';

  beforeAll(async () => {
    // Create or find a test specialization
    let spec = await prisma.specialization.findFirst();
    if (!spec) {
      spec = await prisma.specialization.create({
        data: {
          name: 'Cardiology Test',
          description: 'Heart care testing',
        },
      });
    }
    specializationId = spec.id;
  });

  afterAll(async () => {
    // Cleanup created test users
    await prisma.user.deleteMany({
      where: {
        email: { in: [testPatientEmail, testDoctorEmail] },
      },
    });
    await prisma.$disconnect();
  });

  describe('Health Check API', () => {
    it('should return 200 OK and health status', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.status).toBe('UP');
    });
  });

  describe('POST /api/auth/register/patient', () => {
    it('should fail with validation error when required fields are missing', async () => {
      const res = await request(app)
        .post('/api/auth/register/patient')
        .send({ email: 'bad-email' });

      expect(res.status).toBe(422);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should successfully register a new patient', async () => {
      const res = await request(app)
        .post('/api/auth/register/patient')
        .send({
          email: testPatientEmail,
          password: 'SecurePassword123!',
          firstName: 'Alice',
          lastName: 'Smith',
          phone: `+1555${Math.floor(1000000 + Math.random() * 9000000)}`,
          dateOfBirth: '1995-06-20',
          gender: 'FEMALE',
          bloodGroup: 'O_POSITIVE',
          street: '123 Health Ave',
          city: 'Boston',
          state: 'MA',
          postalCode: '02115',
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.user.email).toBe(testPatientEmail.toLowerCase());
      expect(res.body.data.accessToken).toBeDefined();
      expect(res.body.data.refreshToken).toBeDefined();

      patientAccessToken = res.body.data.accessToken;
      patientRefreshToken = res.body.data.refreshToken;
    });

    it('should prevent duplicate patient email registration', async () => {
      const res = await request(app)
        .post('/api/auth/register/patient')
        .send({
          email: testPatientEmail,
          password: 'SecurePassword123!',
          firstName: 'Alice',
          lastName: 'Smith',
          phone: '+15559998888',
          dateOfBirth: '1995-06-20',
          gender: 'FEMALE',
        });

      expect(res.status).toBe(409);
      expect(res.body.success).toBe(false);
    });
  });

  describe('POST /api/auth/register/doctor', () => {
    it('should successfully register a doctor with specializations', async () => {
      const res = await request(app)
        .post('/api/auth/register/doctor')
        .send({
          email: testDoctorEmail,
          password: 'DoctorPassword123!',
          firstName: 'Robert',
          lastName: 'Lang',
          phone: `+1555${Math.floor(1000000 + Math.random() * 9000000)}`,
          licenseNumber: `LIC-${Date.now()}`,
          qualifications: 'MD, FACS',
          experienceYears: 10,
          consultationFee: 150,
          specializationIds: [specializationId],
          biography: 'Experienced cardiac surgeon.',
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.user.role).toBe('DOCTOR');
      expect(res.body.data.accessToken).toBeDefined();
    });
  });

  describe('POST /api/auth/login', () => {
    it('should reject invalid password', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: testPatientEmail,
          password: 'WrongPassword!',
        });

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });

    it('should successfully authenticate patient with correct credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: testPatientEmail,
          password: 'SecurePassword123!',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.user.role).toBe('PATIENT');
      expect(res.body.data.accessToken).toBeDefined();
    });
  });

  describe('POST /api/auth/refresh-token', () => {
    it('should rotate and generate a new access token', async () => {
      const res = await request(app)
        .post('/api/auth/refresh-token')
        .send({
          refreshToken: patientRefreshToken,
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.accessToken).toBeDefined();
      expect(res.body.data.refreshToken).toBeDefined();
    });
  });

  describe('GET /api/auth/me (Protected Route)', () => {
    it('should reject unauthorized requests without token', async () => {
      const res = await request(app).get('/api/auth/me');
      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });

    it('should return profile when valid Bearer token is provided', async () => {
      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${patientAccessToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.email).toBe(testPatientEmail.toLowerCase());
    });
  });

  describe('RBAC Guards - Role Protection', () => {
    it('should block a patient from accessing admin user management endpoint', async () => {
      const res = await request(app)
        .get('/api/users')
        .set('Authorization', `Bearer ${patientAccessToken}`);

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe('FORBIDDEN');
    });
  });
});
