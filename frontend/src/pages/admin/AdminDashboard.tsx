import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Users, Stethoscope, Calendar, DollarSign, ShieldAlert, BarChart3, ArrowUpRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminDashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="space-y-8">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            System Administration & Analytics
          </h1>
          <p className="text-sm text-slate-500">
            CareMate Healthcare Central Command Center
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success" size="md">
            All Systems Operational
          </Badge>
        </div>
      </div>

      {/* Analytics KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card hoverEffect className="p-5 space-y-2">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Patients</span>
            <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">1,248</p>
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +12% from last month
          </p>
        </Card>

        <Card hoverEffect className="p-5 space-y-2">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Doctors</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Stethoscope className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">48 Verified</p>
          <p className="text-xs text-slate-500 font-medium">8 Specializations</p>
        </Card>

        <Card hoverEffect className="p-5 space-y-2">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Monthly Consultations</span>
            <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">3,420</p>
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +8.4% completed
          </p>
        </Card>

        <Card hoverEffect className="p-5 space-y-2">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Revenue</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">$184,200</p>
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +15.3% vs target
          </p>
        </Card>
      </div>

      {/* Management Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card hoverEffect className="space-y-4">
          <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">User Management</h3>
          <p className="text-xs text-slate-500">
            View registered patients, approve physician credentials, and manage account statuses.
          </p>
          <Link to="/admin/users" className="block pt-2">
            <Button size="sm" variant="outline" className="w-full">
              Manage Users
            </Button>
          </Link>
        </Card>

        <Card hoverEffect className="space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Audit & Security Logs</h3>
          <p className="text-xs text-slate-500">
            Review detailed access records for medical records, patient diagnoses, and billing adjustments.
          </p>
          <Link to="/admin/audit-logs" className="block pt-2">
            <Button size="sm" variant="outline" className="w-full">
              Inspect Audit Trail
            </Button>
          </Link>
        </Card>

        <Card hoverEffect className="space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Analytics & Reports</h3>
          <p className="text-xs text-slate-500">
            Specialization demand breakdown, monthly revenue distribution, and appointment volume curves.
          </p>
          <Link to="/admin/analytics" className="block pt-2">
            <Button size="sm" variant="outline" className="w-full">
              Open Analytics
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};
