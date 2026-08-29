import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/slices/authSlice';
import { addToast } from '../../store/slices/uiSlice';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Card } from '../../components/common/Card';
import { Activity, Mail, Lock, LogIn, Shield, Stethoscope, User } from 'lucide-react';
import api from '../../services/api';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/login', { email, password });
      const { user, accessToken, refreshToken } = response.data.data;

      dispatch(setCredentials({ user, accessToken, refreshToken }));
      dispatch(
        addToast({
          type: 'success',
          message: `Welcome back, ${user.firstName}!`,
        })
      );

      if (from) {
        navigate(from, { replace: true });
        return;
      }

      // Route by role
      if (user.role === 'ADMIN') navigate('/admin/dashboard');
      else if (user.role === 'DOCTOR') navigate('/doctor/dashboard');
      else navigate('/patient/dashboard');
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Login failed. Please check your credentials.';
      setError(msg);
      dispatch(addToast({ type: 'error', message: msg }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFillDemo = (role: 'ADMIN' | 'DOCTOR' | 'PATIENT') => {
    if (role === 'ADMIN') {
      setEmail('admin@caremate.health');
      setPassword('Admin123!');
    } else if (role === 'DOCTOR') {
      setEmail('dr.jenkins@caremate.health');
      setPassword('Password123!');
    } else {
      setEmail('patient.john@example.com');
      setPassword('Password123!');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-brand-500 text-white items-center justify-center shadow-lg shadow-brand-500/25">
            <Activity className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sign In to CareMate
          </h2>
          <p className="text-sm text-slate-500">
            Access your appointments, medical records, or clinic dashboard
          </p>
        </div>

        {/* Demo Quick Fill Switcher */}
        <div className="p-3 bg-brand-50/70 border border-brand-100 rounded-2xl space-y-2">
          <p className="text-xs font-semibold text-brand-800 text-center uppercase tracking-wider">
            Quick Fill Demo Accounts:
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleFillDemo('PATIENT')}
              className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-white rounded-xl text-xs font-bold text-slate-700 hover:bg-brand-500 hover:text-white border border-slate-200 transition-all shadow-sm"
            >
              <User className="w-3.5 h-3.5" /> Patient
            </button>
            <button
              type="button"
              onClick={() => handleFillDemo('DOCTOR')}
              className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-white rounded-xl text-xs font-bold text-slate-700 hover:bg-brand-500 hover:text-white border border-slate-200 transition-all shadow-sm"
            >
              <Stethoscope className="w-3.5 h-3.5" /> Doctor
            </button>
            <button
              type="button"
              onClick={() => handleFillDemo('ADMIN')}
              className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-white rounded-xl text-xs font-bold text-slate-700 hover:bg-brand-500 hover:text-white border border-slate-200 transition-all shadow-sm"
            >
              <Shield className="w-3.5 h-3.5" /> Admin
            </button>
          </div>
        </div>

        <Card className="shadow-lg border-slate-200/80">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                {error}
              </div>
            )}

            <Input
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail className="w-4 h-4" />}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock className="w-4 h-4" />}
              required
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-brand-500 focus:ring-brand-400" />
                <span className="text-xs">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-xs font-semibold text-brand-600 hover:text-brand-700">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isLoading}
              rightIcon={<LogIn className="w-4 h-4" />}
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-brand-600 hover:text-brand-700">
              Create an account
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
