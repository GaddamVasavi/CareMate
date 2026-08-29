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

// Portal Dashboards
import { PatientDashboard } from './pages/patient/PatientDashboard';
import { DoctorDashboard } from './pages/doctor/DoctorDashboard';
import { AdminDashboard } from './pages/admin/AdminDashboard';

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

        {/* Patient Portal Routes */}
        <Route element={<ProtectedRoute allowedRoles={['PATIENT', 'ADMIN']} />}>
          <Route path="/patient" element={<PatientLayout />}>
            <Route path="dashboard" element={<PatientDashboard />} />
            <Route path="appointments" element={<PatientDashboard />} />
            <Route path="medical-records" element={<PatientDashboard />} />
            <Route path="prescriptions" element={<PatientDashboard />} />
            <Route path="lab-results" element={<PatientDashboard />} />
            <Route path="billing" element={<PatientDashboard />} />
            <Route path="profile" element={<PatientDashboard />} />
            <Route path="settings" element={<PatientDashboard />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>

        {/* Doctor Portal Routes */}
        <Route element={<ProtectedRoute allowedRoles={['DOCTOR', 'ADMIN']} />}>
          <Route path="/doctor" element={<DoctorLayout />}>
            <Route path="dashboard" element={<DoctorDashboard />} />
            <Route path="appointments" element={<DoctorDashboard />} />
            <Route path="schedule" element={<DoctorDashboard />} />
            <Route path="patients" element={<DoctorDashboard />} />
            <Route path="clinical-records" element={<DoctorDashboard />} />
            <Route path="prescriptions" element={<DoctorDashboard />} />
            <Route path="laboratory" element={<DoctorDashboard />} />
            <Route path="profile" element={<DoctorDashboard />} />
            <Route path="settings" element={<DoctorDashboard />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>

        {/* Admin Portal Routes */}
        <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminDashboard />} />
            <Route path="doctors" element={<AdminDashboard />} />
            <Route path="patients" element={<AdminDashboard />} />
            <Route path="appointments" element={<AdminDashboard />} />
            <Route path="services" element={<AdminDashboard />} />
            <Route path="laboratory" element={<AdminDashboard />} />
            <Route path="billing" element={<AdminDashboard />} />
            <Route path="analytics" element={<AdminDashboard />} />
            <Route path="audit-logs" element={<AdminDashboard />} />
            <Route path="settings" element={<AdminDashboard />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
