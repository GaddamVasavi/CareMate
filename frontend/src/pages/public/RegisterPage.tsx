import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/slices/authSlice';
import { addToast } from '../../store/slices/uiSlice';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Card } from '../../components/common/Card';
import { Activity, User, Stethoscope, Mail, Lock, Phone, Calendar, UserPlus } from 'lucide-react';
import api from '../../services/api';

export const RegisterPage: React.FC = () => {
  const [role, setRole] = useState<'PATIENT' | 'DOCTOR'>('PATIENT');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Form Fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  
  // Patient Fields
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('MALE');
  const [bloodGroup, setBloodGroup] = useState('O_POSITIVE');

  // Doctor Fields
  const [licenseNumber, setLicenseNumber] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [experienceYears, setExperienceYears] = useState(5);
  const [consultationFee, setConsultationFee] = useState(80);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (role === 'PATIENT') {
        const payload = {
          email,
          password,
          firstName,
          lastName,
          phone,
          dateOfBirth,
          gender,
          bloodGroup,
        };
        const response = await api.post('/auth/register/patient', payload);
        const { user, accessToken, refreshToken } = response.data.data;
        dispatch(setCredentials({ user, accessToken, refreshToken }));
        dispatch(addToast({ type: 'success', message: 'Patient account created successfully!' }));
        navigate('/patient/dashboard');
      } else {
        const payload = {
          email,
          password,
          firstName,
          lastName,
          phone,
          licenseNumber,
          qualifications,
          experienceYears: Number(experienceYears),
          consultationFee: Number(consultationFee),
          specializationIds: [], // Defaults to general in backend or assigned during onboarding
        };
        // Fetch a specialization if needed
        const response = await api.post('/auth/register/doctor', payload);
        const { user, accessToken, refreshToken } = response.data.data;
        dispatch(setCredentials({ user, accessToken, refreshToken }));
        dispatch(addToast({ type: 'success', message: 'Doctor account registered successfully!' }));
        navigate('/doctor/dashboard');
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Registration failed. Please check your details.';
      setError(msg);
      dispatch(addToast({ type: 'error', message: msg }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-xl w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-brand-500 text-white items-center justify-center shadow-lg shadow-brand-500/25">
            <Activity className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Create your CareMate Account
          </h2>
          <p className="text-sm text-slate-500">
            Select your account type to get started
          </p>
        </div>

        {/* Role Toggle */}
        <div className="flex p-1.5 bg-slate-200/80 rounded-2xl">
          <button
            type="button"
            onClick={() => setRole('PATIENT')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
              role === 'PATIENT' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4" /> Patient Account
          </button>
          <button
            type="button"
            onClick={() => setRole('DOCTOR')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
              role === 'DOCTOR' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Stethoscope className="w-4 h-4" /> Healthcare Provider / Doctor
          </button>
        </div>

        <Card className="shadow-lg border-slate-200/80">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leftIcon={<Mail className="w-4 h-4" />}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                leftIcon={<Phone className="w-4 h-4" />}
                required
              />
            </div>

            <Input
              label="Password (min. 8 characters)"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock className="w-4 h-4" />}
              required
            />

            {/* Patient Specific Fields */}
            {role === 'PATIENT' && (
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Input
                    label="Date of Birth"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                  />

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">Gender</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    >
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">Blood Group</label>
                    <select
                      value={bloodGroup}
                      onChange={(e) => setBloodGroup(e.target.value)}
                      className="block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    >
                      <option value="O_POSITIVE">O+</option>
                      <option value="O_NEGATIVE">O-</option>
                      <option value="A_POSITIVE">A+</option>
                      <option value="A_NEGATIVE">A-</option>
                      <option value="B_POSITIVE">B+</option>
                      <option value="B_NEGATIVE">B-</option>
                      <option value="AB_POSITIVE">AB+</option>
                      <option value="AB_NEGATIVE">AB-</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Doctor Specific Fields */}
            {role === 'DOCTOR' && (
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Medical License Number"
                    placeholder="MD-STATE-12345"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    required
                  />
                  <Input
                    label="Qualifications"
                    placeholder="MD, MBBS, FACS"
                    value={qualifications}
                    onChange={(e) => setQualifications(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Years of Experience"
                    type="number"
                    min="0"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(Number(e.target.value))}
                    required
                  />
                  <Input
                    label="Consultation Fee ($)"
                    type="number"
                    min="0"
                    value={consultationFee}
                    onChange={(e) => setConsultationFee(Number(e.target.value))}
                    required
                  />
                </div>
              </div>
            )}

            <Button
              type="submit"
              className="w-full mt-2"
              size="lg"
              isLoading={isLoading}
              rightIcon={<UserPlus className="w-4 h-4" />}
            >
              Complete Registration
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-brand-600 hover:text-brand-700">
              Sign in here
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
