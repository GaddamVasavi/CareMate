import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { labService } from '../../services/labService';
import { patientService } from '../../services/patientService';

export const DoctorLabOrdersPage: React.FC = () => {
  const [catalog, setCatalog] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [selectedTestIds, setSelectedTestIds] = useState<string[]>([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    labService.getCatalog().then((res) => {
      if (res.data) setCatalog(res.data);
    });
    patientService.list().then((res) => {
      if (res.data?.patients) {
        setPatients(res.data.patients);
        if (res.data.patients.length > 0) setSelectedPatientId(res.data.patients[0].id);
      }
    });
  }, []);

  const toggleTest = (id: string) => {
    if (selectedTestIds.includes(id)) {
      setSelectedTestIds(selectedTestIds.filter((t) => t !== id));
    } else {
      setSelectedTestIds([...selectedTestIds, id]);
    }
  };

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatientId || selectedTestIds.length === 0) return;

    try {
      await labService.createOrder({
        patientId: selectedPatientId,
        labTestIds: selectedTestIds,
      });
      setMsg('Laboratory order dispatched to Diagnostic Center!');
      setSelectedTestIds([]);
    } catch {
      setMsg('Failed to order lab tests.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Order Diagnostic Lab Tests</h1>
        <p className="text-sm text-slate-500">Request clinical pathology, hematology, and biochemistry panels</p>
      </div>

      {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}

      <form onSubmit={handleOrder} className="space-y-6">
        <Card className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Patient</label>
            <select
              value={selectedPatientId}
              onChange={(e) => setSelectedPatientId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:outline-none"
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>{p.user?.firstName} {p.user?.lastName}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-sm font-medium text-slate-700">Select Lab Tests from Catalog</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {catalog.map((test) => (
                <div
                  key={test.id}
                  onClick={() => toggleTest(test.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex justify-between items-center ${
                    selectedTestIds.includes(test.id)
                      ? 'border-brand-500 bg-brand-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{test.name}</h4>
                    <p className="text-[11px] text-slate-400">{test.category} • {test.sampleType}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600">${test.price}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Button type="submit" size="lg" className="w-full" disabled={selectedTestIds.length === 0}>
          Dispatch Laboratory Order
        </Button>
      </form>
    </div>
  );
};
