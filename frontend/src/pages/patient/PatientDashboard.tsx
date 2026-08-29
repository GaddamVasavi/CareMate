import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Calendar, Clock, FileText, FlaskConical, Stethoscope, ArrowRight, UserCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PatientDashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-brand-600 to-sky-500 text-white shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <Badge variant="info" className="bg-white/20 text-white border-white/30">
            Patient Health Portal
          </Badge>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Hello, {user?.firstName || 'Patient'}! 👋
          </h1>
          <p className="text-brand-100 text-sm max-w-xl">
            Track your consultations, digital prescriptions, lab orders, and vital signs in one secure place.
          </p>
        </div>
        <Link to="/doctors">
          <Button variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Book New Appointment
          </Button>
        </Link>
      </div>

      {/* Quick Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card hoverEffect className="flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Upcoming Appointments</p>
            <p className="text-xl font-extrabold text-slate-900">1 Scheduled</p>
          </div>
        </Card>

        <Card hoverEffect className="flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Active Prescriptions</p>
            <p className="text-xl font-extrabold text-slate-900">1 Active</p>
          </div>
        </Card>

        <Card hoverEffect className="flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
            <FlaskConical className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Lab Results</p>
            <p className="text-xl font-extrabold text-slate-900">1 Completed</p>
          </div>
        </Card>

        <Card hoverEffect className="flex items-center gap-4 p-5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400">Blood Group</p>
            <p className="text-xl font-extrabold text-slate-900">O+ Positive</p>
          </div>
        </Card>
      </div>

      {/* Appointment Showcase & Clinical History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Upcoming Consultation */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Next Scheduled Consultation</h2>
          <Card className="space-y-4 border-l-4 border-l-brand-500">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                  SJ
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Dr. Sarah Jenkins</h3>
                  <p className="text-xs text-brand-600 font-semibold">Cardiology • Boston Heart & Vascular</p>
                </div>
              </div>
              <Badge variant="success">CONFIRMED</Badge>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl text-slate-600">
              <div>
                <span className="text-slate-400 block font-medium">Date & Time</span>
                <span className="font-bold text-slate-900">Today • 10:00 AM - 10:30 AM</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Appointment Type</span>
                <span className="font-bold text-slate-900">In-Person Consultation</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Reason: Routine annual cardiovascular checkup and blood pressure monitoring.
            </p>
          </Card>
        </div>

        {/* Quick Health Alerts & Actions */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">My Health Summary</h2>
          <Card className="space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
              <span className="text-slate-500">Known Allergies</span>
              <span className="font-bold text-rose-600">Penicillin (Severe)</span>
            </div>
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
              <span className="text-slate-500">Chronic Conditions</span>
              <span className="font-bold text-slate-800">Mild Hypertension</span>
            </div>
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
              <span className="text-slate-500">Emergency Contact</span>
              <span className="font-bold text-slate-800">Mary Miller (Spouse)</span>
            </div>
            <div className="pt-2">
              <Link to="/patient/profile" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
                Edit Health Profile <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
