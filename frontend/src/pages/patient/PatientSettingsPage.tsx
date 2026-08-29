import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import api from '../../services/api';

export const PatientSettingsPage: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/auth/change-password', { currentPassword, newPassword });
      setMsg('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
    } catch {
      setMsg('Failed to update password.');
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
        <p className="text-sm text-slate-500">Manage your security credentials and notification preferences</p>
      </div>

      <Card className="space-y-4">
        <h3 className="font-bold text-slate-900">Security & Password</h3>
        {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}
        <form onSubmit={handleChangePassword} className="space-y-4">
          <Input label="Current Password" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
          <Input label="New Password (min 8 chars)" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          <Button type="submit" size="md">Update Password</Button>
        </form>
      </Card>
    </div>
  );
};
