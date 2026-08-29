import os
import sys

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.append(os.path.join(BASE_DIR, "scripts"))
sys.path.append(os.path.join(BASE_DIR, "scripts", "generators"))

from build_full_caremate_modules import generate_backend_appointments
import gen_patients_doctors
import gen_medical_ehr_rx_lab
import gen_billing_notifications
import gen_admin_analytics
import gen_clinical_decision_support
import gen_terminologies_icd10_cpt
import gen_frontend_components_services
import gen_frontend_portal_pages
import gen_massive_clinical_datasets
import gen_clinical_guidelines
import gen_massive_clinical_knowledge_base
import gen_massive_loinc_and_snomed
import gen_clinical_reference_data
import gen_clinical_specialties_extended
import gen_frontend_rich_components
import gen_massive_clinical_pathways
import gen_massive_imaging_and_genomics
import gen_clinical_intake_and_forms
import gen_clinical_trials_and_evidence
import gen_massive_clinical_protocols_and_calculators
import gen_massive_laboratory_panels
import gen_massive_radiology_and_surgical_protocols
import gen_massive_radiology_dicom_catalog

def write_file(rel_path, content):
    full_path = os.path.join(BASE_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    print("[*] Starting CareMate Full-Scale Codebase Generation...")

    print("[1/10] Generating Appointment & Scheduling Module...")
    generate_backend_appointments()

    print("[2/10] Generating Patients & Doctors Modules...")
    gen_patients_doctors.generate(write_file)

    print("[3/10] Generating Medical Records, Prescriptions & Laboratory Modules...")
    gen_medical_ehr_rx_lab.generate(write_file)

    print("[4/10] Generating Billing, Payments & Notifications Modules...")
    gen_billing_notifications.generate(write_file)

    print("[5/10] Generating Admin & Analytics Modules...")
    gen_admin_analytics.generate(write_file)

    print("[6/10] Generating Clinical Decision Support Rule Engines...")
    gen_clinical_decision_support.generate(write_file)

    print("[7/10] Generating Medical Coding & Procedure Catalogs (ICD-10 / CPT)...")
    gen_terminologies_icd10_cpt.generate(write_file)

    print("[8/10] Generating Specialty Clinical Datasets & Knowledge Bases...")
    gen_massive_clinical_datasets.generate(write_file)
    gen_clinical_guidelines.generate(write_file)
    gen_massive_clinical_knowledge_base.generate(write_file)
    gen_massive_loinc_and_snomed.generate(write_file)
    gen_clinical_reference_data.generate(write_file)
    gen_clinical_specialties_extended.generate(write_file)
    gen_massive_clinical_pathways.generate(write_file)
    gen_massive_imaging_and_genomics.generate(write_file)
    gen_clinical_intake_and_forms.generate(write_file)
    gen_clinical_trials_and_evidence.generate(write_file)
    gen_massive_clinical_protocols_and_calculators.generate(write_file)
    gen_massive_laboratory_panels.generate(write_file)
    gen_massive_radiology_and_surgical_protocols.generate(write_file)
    gen_massive_radiology_dicom_catalog.generate(write_file)

    print("[9/10] Generating Frontend Services SDKs & Rich Medical UI Components...")
    gen_frontend_components_services.generate(write_file)
    gen_frontend_rich_components.generate(write_file)

    print("[10/10] Generating Frontend Portal Pages (Patient, Doctor, Admin)...")
    gen_frontend_portal_pages.generate(write_file)

    # Update backend app.ts to register all module routers
    write_file("backend/src/app.ts", """
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
""")

    # Update Frontend App.tsx with all rich routes
    write_file("frontend/src/App.tsx", """
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { PatientLayout, DoctorLayout, AdminLayout } from './layouts/DashboardLayouts';
import { ProtectedRoute } from './layouts/ProtectedRoute';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { LoginPage } from './pages/public/LoginPage';
import { RegisterPage } from './pages/public/RegisterPage';
import { ForgotPasswordPage } from './pages/public/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/public/ResetPasswordPage';
import { DoctorsPage } from './pages/public/DoctorsPage';
import { ServicesPage } from './pages/public/ServicesPage';
import { AboutPage } from './pages/public/AboutPage';
import { ContactPage } from './pages/public/ContactPage';

// Patient Portal Pages
import { PatientDashboard } from './pages/patient/PatientDashboard';
import { PatientAppointmentsPage } from './pages/patient/PatientAppointmentsPage';
import { BookAppointmentPage } from './pages/patient/BookAppointmentPage';
import { PatientMedicalRecordsPage } from './pages/patient/PatientMedicalRecordsPage';
import { PatientPrescriptionsPage } from './pages/patient/PatientPrescriptionsPage';
import { PatientLabResultsPage } from './pages/patient/PatientLabResultsPage';
import { PatientBillingPage } from './pages/patient/PatientBillingPage';
import { PatientProfilePage } from './pages/patient/PatientProfilePage';
import { PatientSettingsPage } from './pages/patient/PatientSettingsPage';

// Doctor Portal Pages
import { DoctorDashboard } from './pages/doctor/DoctorDashboard';
import { DoctorAppointmentsPage } from './pages/doctor/DoctorAppointmentsPage';
import { DoctorSchedulePage } from './pages/doctor/DoctorSchedulePage';
import { DoctorPatientsPage } from './pages/doctor/DoctorPatientsPage';
import { DoctorEHRCreatePage } from './pages/doctor/DoctorEHRCreatePage';
import { DoctorPrescriptionCreatePage } from './pages/doctor/DoctorPrescriptionCreatePage';
import { DoctorLabOrdersPage } from './pages/doctor/DoctorLabOrdersPage';
import { DoctorProfileSettingsPage } from './pages/doctor/DoctorProfileSettingsPage';

// Admin Portal Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminUsersManagementPage } from './pages/admin/AdminUsersManagementPage';
import { AdminAnalyticsPage } from './pages/admin/AdminAnalyticsPage';
import { AdminAuditLogsPage } from './pages/admin/AdminAuditLogsPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>

        {/* Patient Portal */}
        <Route element={<ProtectedRoute allowedRoles={['PATIENT', 'ADMIN']} />}>
          <Route path="/patient" element={<PatientLayout />}>
            <Route path="dashboard" element={<PatientDashboard />} />
            <Route path="appointments" element={<PatientAppointmentsPage />} />
            <Route path="book-appointment" element={<BookAppointmentPage />} />
            <Route path="medical-records" element={<PatientMedicalRecordsPage />} />
            <Route path="prescriptions" element={<PatientPrescriptionsPage />} />
            <Route path="lab-results" element={<PatientLabResultsPage />} />
            <Route path="billing" element={<PatientBillingPage />} />
            <Route path="profile" element={<PatientProfilePage />} />
            <Route path="settings" element={<PatientSettingsPage />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>

        {/* Doctor Portal */}
        <Route element={<ProtectedRoute allowedRoles={['DOCTOR', 'ADMIN']} />}>
          <Route path="/doctor" element={<DoctorLayout />}>
            <Route path="dashboard" element={<DoctorDashboard />} />
            <Route path="appointments" element={<DoctorAppointmentsPage />} />
            <Route path="schedule" element={<DoctorSchedulePage />} />
            <Route path="patients" element={<DoctorPatientsPage />} />
            <Route path="clinical-records" element={<DoctorEHRCreatePage />} />
            <Route path="prescriptions" element={<DoctorPrescriptionCreatePage />} />
            <Route path="laboratory" element={<DoctorLabOrdersPage />} />
            <Route path="profile" element={<DoctorProfileSettingsPage />} />
            <Route path="settings" element={<DoctorProfileSettingsPage />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>

        {/* Admin Portal */}
        <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsersManagementPage />} />
            <Route path="doctors" element={<AdminUsersManagementPage />} />
            <Route path="patients" element={<AdminUsersManagementPage />} />
            <Route path="appointments" element={<AdminUsersManagementPage />} />
            <Route path="services" element={<AdminUsersManagementPage />} />
            <Route path="laboratory" element={<AdminUsersManagementPage />} />
            <Route path="billing" element={<AdminUsersManagementPage />} />
            <Route path="analytics" element={<AdminAnalyticsPage />} />
            <Route path="audit-logs" element={<AdminAuditLogsPage />} />
            <Route path="settings" element={<AdminUsersManagementPage />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
""")

    print("[+] All modules generated successfully!")

if __name__ == "__main__":
    main()
