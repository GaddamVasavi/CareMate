import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { medicalRecordService } from '../../services/medicalRecordService';
import { patientService } from '../../services/patientService';

export const DoctorEHRCreatePage: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [patientId, setPatientId] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [diagnosisNote, setDiagnosisNote] = useState('');
  const [treatmentPlan, setTreatmentPlan] = useState('');
  const [systolicBP, setSystolicBP] = useState(120);
  const [diastolicBP, setDiastolicBP] = useState(80);
  const [heartRate, setHeartRate] = useState(72);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    patientService.list().then((res) => {
      if (res.data?.patients) {
        setPatients(res.data.patients);
        if (res.data.patients.length > 0) setPatientId(res.data.patients[0].id);
      }
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId) return;

    try {
      await medicalRecordService.create({
        patientId,
        symptoms,
        diagnosisNote,
        treatmentPlan,
        vitalSigns: {
          systolicBP: Number(systolicBP),
          diastolicBP: Number(diastolicBP),
          heartRate: Number(heartRate),
        },
      });
      setMsg('Clinical Record successfully filed into Patient EHR!');
      setSymptoms('');
      setDiagnosisNote('');
      setTreatmentPlan('');
    } catch {
      setMsg('Error saving record');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Create Clinical EHR Record</h1>
        <p className="text-sm text-slate-500">Record SOAP clinical findings, ICD-10 diagnoses, and patient vital signs</p>
      </div>

      {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Select Patient</label>
            <select
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:outline-none"
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>{p.user?.firstName} {p.user?.lastName} ({p.user?.email})</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Input label="Systolic BP (mmHg)" type="number" value={systolicBP} onChange={(e) => setSystolicBP(Number(e.target.value))} />
            <Input label="Diastolic BP (mmHg)" type="number" value={diastolicBP} onChange={(e) => setDiastolicBP(Number(e.target.value))} />
            <Input label="Heart Rate (bpm)" type="number" value={heartRate} onChange={(e) => setHeartRate(Number(e.target.value))} />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Reported Symptoms & Subjective History</label>
            <textarea
              rows={3}
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none"
              placeholder="Patient symptoms..."
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Diagnosis & Clinical Assessment</label>
            <textarea
              rows={3}
              value={diagnosisNote}
              onChange={(e) => setDiagnosisNote(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none"
              placeholder="Primary diagnosis..."
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Treatment Plan & Follow-up Instructions</label>
            <textarea
              rows={3}
              value={treatmentPlan}
              onChange={(e) => setTreatmentPlan(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none"
              placeholder="Recommended medication and follow up..."
            />
          </div>
        </Card>

        <Button type="submit" size="lg" className="w-full">File EHR Record</Button>
      </form>
    </div>
  );
};
