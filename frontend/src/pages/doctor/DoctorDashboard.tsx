import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Calendar, Users, FileText, FlaskConical, Clock, CheckCircle2, User, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DoctorDashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900 text-white shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <Badge variant="success" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
            Physician Clinical Portal
          </Badge>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Welcome, Dr. {user?.lastName || 'Doctor'} 🩺
          </h1>
          <p className="text-slate-400 text-sm max-w-xl">
            You have 3 patient appointments scheduled today. Manage diagnoses, write electronic prescriptions, and review laboratory results.
          </p>
        </div>
        <Link to="/doctor/schedule">
          <Button variant="primary" size="md">
            Manage Availability
          </Button>
        </Link>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card hoverEffect className="flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Today's Visits</p>
            <p className="text-xl font-extrabold text-slate-900">3 Patients</p>
          </div>
        </Card>

        <Card hoverEffect className="flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Total Patients</p>
            <p className="text-xl font-extrabold text-slate-900">142 Assigned</p>
          </div>
        </Card>

        <Card hoverEffect className="flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <FlaskConical className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Pending Lab Reviews</p>
            <p className="text-xl font-extrabold text-slate-900">2 Reports</p>
          </div>
        </Card>

        <Card hoverEffect className="flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Rating</p>
            <p className="text-xl font-extrabold text-slate-900">★ 4.9 (38 reviews)</p>
          </div>
        </Card>
      </div>

      {/* Today's Appointment Queue */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Today's Appointment Queue</h2>
        <Card className="divide-y divide-slate-100 p-0 overflow-hidden">
          <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                JM
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Johnathan Miller (41M)</h4>
                <p className="text-xs text-slate-500">Reason: Hypertension follow-up & Blood pressure test</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-700">10:00 AM - 10:30 AM</span>
              <Badge variant="success">CONFIRMED</Badge>
              <Button size="sm" variant="outline">Open EHR</Button>
            </div>
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                SG
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Sophia Garcia (34F)</h4>
                <p className="text-xs text-slate-500">Reason: Annual wellness check & lipid profile review</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-700">02:00 PM - 02:30 PM</span>
              <Badge variant="warning">REQUESTED</Badge>
              <Button size="sm" variant="outline">Review</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
