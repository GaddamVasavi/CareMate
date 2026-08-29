import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

export const DoctorSchedulePage: React.FC = () => {
  const [msg, setMsg] = useState('');

  const handleSaveWorkingHours = async () => {
    setMsg('Working hours updated for weekly rotation!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Working Hours & Availability</h1>
        <p className="text-sm text-slate-500">Configure your recurring consultation slots and duration</p>
      </div>

      {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}

      <Card className="space-y-4">
        <h3 className="font-bold text-slate-900">Weekly Shift Configuration</h3>
        <div className="space-y-3">
          {days.map((day) => (
            <div key={day} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-xs">
              <span className="font-bold text-slate-800 w-28">{day}</span>
              <div className="flex items-center gap-2">
                <input type="text" defaultValue="09:00" className="w-20 rounded-lg border border-slate-200 p-1.5 text-center" />
                <span>to</span>
                <input type="text" defaultValue="17:00" className="w-20 rounded-lg border border-slate-200 p-1.5 text-center" />
              </div>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-brand-500" />
                <span>Active</span>
              </label>
            </div>
          ))}
        </div>
        <Button onClick={handleSaveWorkingHours} className="w-full">Save Schedule Settings</Button>
      </Card>
    </div>
  );
};
