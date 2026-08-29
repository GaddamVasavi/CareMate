import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { patientService } from '../../services/patientService';

export const PatientProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [bloodGroup, setBloodGroup] = useState('UNKNOWN');
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(70);
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    patientService.getMyProfile().then((res) => {
      if (res.data) {
        setProfile(res.data);
        if (res.data.dateOfBirth) setDateOfBirth(res.data.dateOfBirth.split('T')[0]);
        setBloodGroup(res.data.bloodGroup || 'UNKNOWN');
        setHeight(res.data.height || 175);
        setWeight(res.data.weight || 70);
        if (res.data.emergencyContact) {
          setEmergencyName(res.data.emergencyContact.name);
          setEmergencyPhone(res.data.emergencyContact.phone);
        }
      }
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;
    setIsSaving(true);
    try {
      await patientService.updateProfile(profile.id, {
        dateOfBirth,
        bloodGroup,
        height: Number(height),
        weight: Number(weight),
        emergencyContactName: emergencyName,
        emergencyContactPhone: emergencyPhone,
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Personal Health Profile</h1>
        <p className="text-sm text-slate-500">Manage medical baseline metrics and emergency contact coordinates</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="space-y-4">
          <h3 className="font-bold text-slate-900">1. Vital Demographics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Date of Birth" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">Blood Group</label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:outline-none"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Height (cm)" type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
            <Input label="Weight (kg)" type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="font-bold text-slate-900">2. Emergency Contact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Contact Full Name" placeholder="Jane Doe" value={emergencyName} onChange={(e) => setEmergencyName(e.target.value)} />
            <Input label="Contact Phone Number" placeholder="+1 (555) 000-0000" value={emergencyPhone} onChange={(e) => setEmergencyPhone(e.target.value)} />
          </div>
        </Card>

        <Button type="submit" size="lg" className="w-full" isLoading={isSaving}>
          Save Health Profile Changes
        </Button>
      </form>
    </div>
  );
};
