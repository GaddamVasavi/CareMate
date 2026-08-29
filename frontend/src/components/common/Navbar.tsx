import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';
import { Activity, Menu, X, User as UserIcon, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const getDashboardLink = () => {
    if (!user) return '/login';
    switch (user.role) {
      case 'ADMIN':
        return '/admin/dashboard';
      case 'DOCTOR':
        return '/doctor/dashboard';
      case 'PATIENT':
      default:
        return '/patient/dashboard';
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                <Activity className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                  Care<span className="text-brand-500">Mate</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mt-0.5">
                  Healthcare System
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-brand-500 transition-colors">Home</Link>
            <Link to="/doctors" className="hover:text-brand-500 transition-colors">Find Doctors</Link>
            <Link to="/services" className="hover:text-brand-500 transition-colors">Specialties</Link>
            <Link to="/about" className="hover:text-brand-500 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-brand-500 transition-colors">Contact</Link>
          </div>

          {/* User Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated && user ? (
              <div className="flex items-center gap-3">
                <Link to={getDashboardLink()}>
                  <Button variant="outline" size="sm" leftIcon={<LayoutDashboard className="w-4 h-4" />}>
                    Dashboard
                  </Button>
                </Link>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">
                  <div className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold">
                    {user.firstName.charAt(0)}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    {user.firstName} ({user.role})
                  </span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="text-rose-600 hover:bg-rose-50">
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">
                    Book Appointment
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">Home</Link>
          <Link to="/doctors" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">Find Doctors</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">Specialties</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50">Contact</Link>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                <Link to={getDashboardLink()} onClick={() => setIsOpen(false)}>
                  <Button className="w-full" variant="outline">My Dashboard</Button>
                </Link>
                <Button className="w-full text-rose-600" variant="ghost" onClick={handleLogout}>Log Out</Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" variant="outline">Sign In</Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" variant="primary">Create Account</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
