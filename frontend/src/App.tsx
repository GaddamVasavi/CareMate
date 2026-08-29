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
