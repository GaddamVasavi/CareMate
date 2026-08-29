import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Card } from '../../components/common/Card';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import api from '../../services/api';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resetToken, setResetToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.post('/auth/forgot-password', { email });
      setIsSubmitted(true);
      if (response.data?.data?.resetToken) {
        setResetToken(response.data.data.resetToken);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Reset your Password
          </h2>
          <p className="text-sm text-slate-500">
            Enter your registered email and we'll provide instructions to reset your password.
          </p>
        </div>

        <Card className="shadow-lg border-slate-200/80">
          {isSubmitted ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Check Your Email</h3>
              <p className="text-xs text-slate-600">
                If an account with <b>{email}</b> exists, a password reset link has been dispatched.
              </p>
              {resetToken && (
                <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl text-left">
                  <p className="text-xs font-bold text-brand-900">Developer Demo Mode Link:</p>
                  <Link
                    to={`/reset-password?token=${resetToken}`}
                    className="text-xs text-brand-600 underline break-all font-mono"
                  >
                    Click here to reset with demo token
                  </Link>
                </div>
              )}
              <Link to="/login" className="block pt-2">
                <Button variant="outline" className="w-full">
                  Return to Sign In
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Registered Email Address"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leftIcon={<Mail className="w-4 h-4" />}
                required
              />

              <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                Send Reset Link
              </Button>

              <div className="text-center pt-2">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-brand-600"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};
