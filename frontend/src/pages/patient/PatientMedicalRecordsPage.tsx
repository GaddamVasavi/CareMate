import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { medicalRecordService } from '../../services/medicalRecordService';
import { FileText, Activity, Heart } from 'lucide-react';

export const PatientMedicalRecordsPage: React.FC = () => {
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    medicalRecordService.list().then((res) => {
      if (res.data?.records) setRecords(res.data.records);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Electronic Health Records (EHR)</h1>
        <p className="text-sm text-slate-500">View diagnostic summaries, vital signs, and clinical notes recorded by your doctors</p>
      </div>

      <div className="space-y-4">
        {records.length === 0 ? (
          <Card className="p-12 text-center text-slate-500">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="font-bold text-slate-700">No medical records on file yet</p>
            <p className="text-xs">Your clinical visit summaries will appear here automatically.</p>
          </Card>
        ) : (
          records.map((rec) => (
            <Card key={rec.id} hoverEffect className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Visit Summary: {rec.recordNumber}</h3>
                    <p className="text-xs text-slate-500">
                      Attending Physician: Dr. {rec.doctor?.user?.firstName} {rec.doctor?.user?.lastName}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  {new Date(rec.visitDate).toLocaleDateString()}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl">
                <div>
                  <span className="text-slate-400 font-medium block">Reported Symptoms</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{rec.symptoms}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Clinical Diagnosis</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{rec.diagnosisNote}</p>
                </div>
              </div>

              {rec.vitalSigns?.[0] && (
                <div className="flex items-center gap-4 text-xs text-slate-600 pt-1">
                  <span className="flex items-center gap-1 font-medium">
                    <Activity className="w-3.5 h-3.5 text-brand-500" /> BP: {rec.vitalSigns[0].systolicBP}/{rec.vitalSigns[0].diastolicBP} mmHg
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Heart className="w-3.5 h-3.5 text-rose-500" /> Heart Rate: {rec.vitalSigns[0].heartRate} bpm
                  </span>
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
