import React from 'react';
import { Card } from '../../components/common/Card';
import { ShieldCheck, HeartPulse, Award, Globe } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          About CareMate Healthcare
        </h1>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
          CareMate is engineered to revolutionize patient care, clinician workflows, and medical data transparency through modern, secure cloud architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Card className="space-y-4 p-8">
          <h2 className="text-2xl font-bold text-slate-900">Our Clinical Mission</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We bridge the communication gap between patients and healthcare providers. By reducing administrative friction, eliminating double bookings, and ensuring real-time EHR accessibility, CareMate empowers medical professionals to focus on what matters most: patient health and recovery.
          </p>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center p-6 space-y-2">
            <HeartPulse className="w-8 h-8 text-brand-500 mx-auto" />
            <p className="text-2xl font-extrabold text-slate-900">100k+</p>
            <p className="text-xs text-slate-500 font-semibold">Patients Served</p>
          </Card>
          <Card className="text-center p-6 space-y-2">
            <ShieldCheck className="w-8 h-8 text-emerald-500 mx-auto" />
            <p className="text-2xl font-extrabold text-slate-900">100%</p>
            <p className="text-xs text-slate-500 font-semibold">Encrypted Health Data</p>
          </Card>
          <Card className="text-center p-6 space-y-2">
            <Award className="w-8 h-8 text-amber-500 mx-auto" />
            <p className="text-2xl font-extrabold text-slate-900">15+</p>
            <p className="text-xs text-slate-500 font-semibold">Medical Disciplines</p>
          </Card>
          <Card className="text-center p-6 space-y-2">
            <Globe className="w-8 h-8 text-indigo-500 mx-auto" />
            <p className="text-2xl font-extrabold text-slate-900">24/7</p>
            <p className="text-xs text-slate-500 font-semibold">Digital Support</p>
          </Card>
        </div>
      </div>
    </div>
  );
};
