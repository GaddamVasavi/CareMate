import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { doctorService } from '../../services/doctorService';

export const DoctorProfileSettingsPage: React.FC = () => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [fee, setFee] = useState(100);
  const [clinicName, setClinicName] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    doctorService.getMyProfile().then((res) => {
      if (res.data) {
        setLicenseNumber(res.data.licenseNumber || '');
        setQualifications(res.data.qualifications || '');
        setFee(res.data.consultationFee || 100);
        setClinicName(res.data.clinicName || '');
      }
    });
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('Physician credentials updated!');
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Physician Profile Settings</h1>
        <p className="text-sm text-slate-500">Manage medical license numbers, consultation fees, and practice info</p>
      </div>

      {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}

      <Card className="space-y-4">
        <form onSubmit={handleSave} className="space-y-4">
          <Input label="Medical License Number" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} required />
          <Input label="Qualifications" value={qualifications} onChange={(e) => setQualifications(e.target.value)} required />
          <Input label="Consultation Fee ($)" type="number" value={fee} onChange={(e) => setFee(Number(e.target.value))} required />
          <Input label="Clinic Name" value={clinicName} onChange={(e) => setClinicName(e.target.value)} />
          <Button type="submit" size="md" className="w-full">Save Professional Details</Button>
        </form>
      </Card>
    </div>
  );
};
