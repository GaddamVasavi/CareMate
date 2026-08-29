import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { prescriptionService } from '../../services/prescriptionService';
import { patientService } from '../../services/patientService';
import { Plus, Trash2 } from 'lucide-react';

export const DoctorPrescriptionCreatePage: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [patientId, setPatientId] = useState('');
  const [items, setItems] = useState([{ medicineName: 'Lisinopril 10mg', dosage: '1 Tablet', frequency: 'Once daily in morning', duration: '30 Days' }]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    patientService.list().then((res) => {
      if (res.data?.patients) {
        setPatients(res.data.patients);
        if (res.data.patients.length > 0) setPatientId(res.data.patients[0].id);
      }
    });
  }, []);

  const handleAddItem = () => {
    setItems([...items, { medicineName: '', dosage: '', frequency: '', duration: '' }]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId) return;

    try {
      await prescriptionService.create({
        patientId,
        items,
      });
      setMsg('Digital Prescription generated and signed!');
    } catch {
      setMsg('Failed to issue prescription.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Issue Electronic Prescription</h1>
        <p className="text-sm text-slate-500">Prescribe medications with automated dosage and safety guidance</p>
      </div>

      {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Patient</label>
            <select
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:outline-none"
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>{p.user?.firstName} {p.user?.lastName}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm text-slate-900">Prescription Line Items</h4>
              <Button type="button" size="sm" variant="outline" onClick={handleAddItem} leftIcon={<Plus className="w-3.5 h-3.5" />}>
                Add Drug
              </Button>
            </div>

            {items.map((item, idx) => (
              <div key={idx} className="grid grid-cols-4 gap-2 items-center bg-slate-50 p-3 rounded-xl">
                <Input
                  placeholder="Medicine Name"
                  value={item.medicineName}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[idx].medicineName = e.target.value;
                    setItems(newItems);
                  }}
                  required
                />
                <Input
                  placeholder="Dosage (e.g. 500mg)"
                  value={item.dosage}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[idx].dosage = e.target.value;
                    setItems(newItems);
                  }}
                  required
                />
                <Input
                  placeholder="Frequency (e.g. 2x/day)"
                  value={item.frequency}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[idx].frequency = e.target.value;
                    setItems(newItems);
                  }}
                  required
                />
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Duration"
                    value={item.duration}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[idx].duration = e.target.value;
                      setItems(newItems);
                    }}
                    required
                  />
                  {items.length > 1 && (
                    <button type="button" onClick={() => handleRemoveItem(idx)} className="text-rose-500 p-2 hover:bg-rose-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Button type="submit" size="lg" className="w-full">Sign & Issue Prescription</Button>
      </form>
    </div>
  );
};
