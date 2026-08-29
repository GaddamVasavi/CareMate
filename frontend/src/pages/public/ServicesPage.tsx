import React from 'react';
import { Card } from '../../components/common/Card';
import { Heart, Activity, Brain, Baby, Bone, ShieldPlus, Sparkles, Stethoscope } from 'lucide-react';

const specialties = [
  { name: 'Cardiology', icon: Heart, desc: 'Advanced heart care, diagnostics, and prevention of cardiovascular diseases.' },
  { name: 'Neurology', icon: Brain, desc: 'Comprehensive treatment for neurological conditions and nervous system health.' },
  { name: 'Pediatrics', icon: Baby, desc: 'Specialized healthcare from infancy through adolescence.' },
  { name: 'Orthopedics', icon: Bone, desc: 'Joint, spine, and musculoskeletal diagnostics and physical therapy.' },
  { name: 'General Medicine', icon: Stethoscope, desc: 'Primary health consultations, preventive checkups, and wellness.' },
  { name: 'Dermatology', icon: Sparkles, desc: 'Clinical and aesthetic care for skin, hair, and complex dermatologic conditions.' },
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Clinical Specialties & Healthcare Services
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          Our network brings together certified physicians across diverse medical disciplines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((spec) => {
          const Icon = spec.icon;
          return (
            <Card key={spec.name} hoverEffect className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{spec.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{spec.desc}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
