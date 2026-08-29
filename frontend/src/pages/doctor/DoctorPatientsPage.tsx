import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { patientService } from '../../services/patientService';
import { Mail, Phone } from 'lucide-react';

export const DoctorPatientsPage: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    patientService.list().then((res) => {
      if (res.data?.patients) setPatients(res.data.patients);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Patient Directory</h1>
        <p className="text-sm text-slate-500">View patients under your clinical care</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((pat) => (
          <Card key={pat.id} hoverEffect className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                {pat.user?.firstName?.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{pat.user?.firstName} {pat.user?.lastName}</h4>
                <p className="text-xs text-slate-400">Blood: {pat.bloodGroup} • Gender: {pat.gender}</p>
              </div>
            </div>
            <div className="space-y-1 text-xs text-slate-500 border-t border-slate-100 pt-2">
              <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {pat.user?.email}</p>
              <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {pat.user?.phone || 'No phone'}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
