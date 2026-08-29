import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import {
  Calendar,
  ShieldCheck,
  Stethoscope,
  Clock,
  Award,
  Video,
  FileCheck2,
  ArrowRight,
  Heart,
  CheckCircle2,
  Users,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/70 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></span>
                Next-Gen Healthcare Management
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Connecting Patients with Trusted{' '}
                <span className="bg-gradient-to-r from-brand-600 to-sky-500 bg-clip-text text-transparent">
                  Doctors & Specialists
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Streamline your healthcare journey. Instant appointment scheduling, electronic medical records, digital prescriptions, and transparent billing—all in one unified platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2">
                <Link to="/doctors">
                  <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Find a Doctor
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="lg">
                    Create Patient Account
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80">
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">500+</p>
                  <p className="text-xs text-slate-500 font-medium">Verified Physicians</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">99.8%</p>
                  <p className="text-xs text-slate-500 font-medium">Patient Satisfaction</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">24/7</p>
                  <p className="text-xs text-slate-500 font-medium">Encrypted EHR Access</p>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 to-sky-400 rounded-3xl blur opacity-30 animate-pulse"></div>
                <Card className="relative bg-white/95 p-6 rounded-3xl border-slate-200/80 shadow-xl space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-brand-500/20">
                        SJ
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Dr. Sarah Jenkins</h4>
                        <p className="text-xs text-brand-600 font-semibold">Cardiology Specialist • Harvard MD</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                      ★ 4.9 (38)
                    </span>
                  </div>

                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" /> Next Slot:
                      </span>
                      <span className="font-bold text-slate-900">Today, 02:30 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-slate-400" /> Mode:
                      </span>
                      <span className="font-bold text-slate-900">In-Person & Telehealth</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-slate-400" /> Consultation Fee:
                      </span>
                      <span className="font-bold text-emerald-600">$120.00</span>
                    </div>
                  </div>

                  <Link to="/login" className="block">
                    <Button className="w-full" variant="primary" size="md">
                      Instant One-Click Booking
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Functional Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-600">
            Comprehensive Platform
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900">
            Designed for Modern Healthcare Excellence
          </h3>
          <p className="text-slate-600 text-sm md:text-base">
            CareMate integrates all clinical workflows into an intuitive, secure ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hoverEffect className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Smart Scheduling</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Real-time slot reservation, conflict prevention, automatic reminders, and instant rescheduling.
            </p>
          </Card>

          <Card hoverEffect className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">EHR & Digital Prescriptions</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Structured SOAP clinical notes, ICD-10 diagnoses, vital signs charts, and downloadable official prescriptions.
            </p>
          </Card>

          <Card hoverEffect className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Audited Access Control</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Strict RBAC guards ensuring only authorized healthcare practitioners and patients access medical records.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};
