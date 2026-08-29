import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { prescriptionService } from '../../services/prescriptionService';
import { FolderOpen, Download, Pill } from 'lucide-react';

export const PatientPrescriptionsPage: React.FC = () => {
  const [prescriptions, setPrescriptions] = useState<any[]>([]);

  useEffect(() => {
    prescriptionService.list().then((res) => {
      if (res.data?.prescriptions) setPrescriptions(res.data.prescriptions);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Digital Prescriptions</h1>
        <p className="text-sm text-slate-500">Access and download verified digital prescriptions issued by your doctors</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prescriptions.map((rx) => (
          <Card key={rx.id} hoverEffect className="space-y-4">
            <div className="flex justify-between items-start pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FolderOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{rx.prescriptionNumber}</h4>
                  <p className="text-[11px] text-slate-400">Dr. {rx.doctor?.user?.lastName}</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 font-medium">{new Date(rx.issueDate).toLocaleDateString()}</span>
            </div>

            <div className="space-y-2">
              {rx.items?.map((item: any) => (
                <div key={item.id} className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span className="flex items-center gap-1.5"><Pill className="w-3.5 h-3.5 text-brand-500" /> {item.medicineName}</span>
                    <span>{item.dosage}</span>
                  </div>
                  <p className="text-slate-500">Frequency: {item.frequency} • Duration: {item.duration}</p>
                  {item.instructions && <p className="text-slate-600 italic">{item.instructions}</p>}
                </div>
              ))}
            </div>

            <Button size="sm" variant="outline" className="w-full" leftIcon={<Download className="w-3.5 h-3.5" />}>
              Download Official PDF Rx
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
