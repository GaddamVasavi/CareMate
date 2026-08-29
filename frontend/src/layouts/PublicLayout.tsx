import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { ToastContainer } from '../components/common/Toast';
import { Activity, Shield, HeartHandshake, Mail, Phone, MapPin } from 'lucide-react';

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <ToastContainer />
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Footer */}
      <footer className="border-t border-slate-200 bg-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center text-white font-bold">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Care<span className="text-brand-500">Mate</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Enterprise Patient & Doctor Management System delivering accessible, transparent, and seamless modern healthcare services.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/doctors" className="hover:text-brand-500">Find Specialists</Link></li>
              <li><Link to="/services" className="hover:text-brand-500">Clinical Specialties</Link></li>
              <li><Link to="/about" className="hover:text-brand-500">About CareMate</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500">Support & Help</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Portals</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/login" className="hover:text-brand-500">Patient Portal</Link></li>
              <li><Link to="/login" className="hover:text-brand-500">Physician Portal</Link></li>
              <li><Link to="/login" className="hover:text-brand-500">Admin Control Center</Link></li>
              <li><Link to="/register" className="hover:text-brand-500">Register as Patient / Doctor</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Contact & Support</h4>
            <div className="space-y-2.5 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-500" />
                <span>+1 (800) 555-CARE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-500" />
                <span>support@caremate.health</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>100 Medical Plaza, Boston, MA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2026 CareMate Healthcare System. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Standards</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
