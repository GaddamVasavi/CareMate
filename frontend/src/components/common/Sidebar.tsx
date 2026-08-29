import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';
import {
  LayoutDashboard,
  Calendar,
  Clock,
  FileText,
  FlaskConical,
  CreditCard,
  User,
  Settings,
  Users,
  Stethoscope,
  Activity,
  ShieldAlert,
  BarChart3,
  LogOut,
  FolderOpen,
} from 'lucide-react';
import { clsx } from 'clsx';

export const Sidebar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  if (!user) return null;

  const patientLinks = [
    { name: 'Dashboard', path: '/patient/dashboard', icon: LayoutDashboard },
    { name: 'Find Doctors', path: '/doctors', icon: Stethoscope },
    { name: 'My Appointments', path: '/patient/appointments', icon: Calendar },
    { name: 'Medical Records', path: '/patient/medical-records', icon: FileText },
    { name: 'Prescriptions', path: '/patient/prescriptions', icon: FolderOpen },
    { name: 'Lab Reports', path: '/patient/lab-results', icon: FlaskConical },
    { name: 'Billing & Invoices', path: '/patient/billing', icon: CreditCard },
    { name: 'My Health Profile', path: '/patient/profile', icon: User },
    { name: 'Settings', path: '/patient/settings', icon: Settings },
  ];

  const doctorLinks = [
    { name: 'Doctor Dashboard', path: '/doctor/dashboard', icon: LayoutDashboard },
    { name: 'Appointments', path: '/doctor/appointments', icon: Calendar },
    { name: 'Schedule & Hours', path: '/doctor/schedule', icon: Clock },
    { name: 'Patient Roster', path: '/doctor/patients', icon: Users },
    { name: 'Clinical Notes', path: '/doctor/clinical-records', icon: FileText },
    { name: 'Prescriptions', path: '/doctor/prescriptions', icon: FolderOpen },
    { name: 'Lab Requests', path: '/doctor/laboratory', icon: FlaskConical },
    { name: 'Professional Profile', path: '/doctor/profile', icon: User },
    { name: 'Settings', path: '/doctor/settings', icon: Settings },
  ];

  const adminLinks = [
    { name: 'Admin Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'User Management', path: '/admin/users', icon: Users },
    { name: 'Doctors Directory', path: '/admin/doctors', icon: Stethoscope },
    { name: 'Patients Registry', path: '/admin/patients', icon: User },
    { name: 'All Appointments', path: '/admin/appointments', icon: Calendar },
    { name: 'Medical Services', path: '/admin/services', icon: Activity },
    { name: 'Lab Test Catalog', path: '/admin/laboratory', icon: FlaskConical },
    { name: 'Billing & Financials', path: '/admin/billing', icon: CreditCard },
    { name: 'Analytics & Trends', path: '/admin/analytics', icon: BarChart3 },
    { name: 'HIPAA Audit Logs', path: '/admin/audit-logs', icon: ShieldAlert },
    { name: 'System Settings', path: '/admin/settings', icon: Settings },
  ];

  let links = patientLinks;
  if (user.role === 'DOCTOR') links = doctorLinks;
  if (user.role === 'ADMIN') links = adminLinks;

  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200/80 bg-white flex flex-col justify-between min-h-[calc(100vh-4rem)]">
      <div className="p-4 space-y-6">
        {/* User Role Tag */}
        <div className="px-3 py-2.5 rounded-2xl bg-brand-50/70 border border-brand-100/60 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            {user.firstName.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-slate-900 truncate">
              {user.firstName} {user.lastName}
            </p>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
              {user.role} PORTAL
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
                    isActive
                      ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  )
                }
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Logout button */}
      <div className="p-4 border-t border-slate-100">
        <button
          onClick={() => dispatch(logout())}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
