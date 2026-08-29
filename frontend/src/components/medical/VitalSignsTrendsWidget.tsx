import React from 'react';
import { Card } from '../common/Card';
import { Heart, Activity, Thermometer, Wind } from 'lucide-react';

interface VitalSignItem {
  timestamp: string;
  systolic: number;
  diastolic: number;
  heartRate: number;
  temperatureF: number;
  spO2: number;
}

export const VitalSignsTrendsWidget: React.FC<{ vitals: VitalSignItem[] }> = ({ vitals }) => {
  return (
    <Card className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">Vital Signs Historical Trends</h3>
          <p className="text-xs text-slate-500">Continuous telemetry and biometric baseline tracking</p>
        </div>
        <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-lg">
          Last 5 Observations
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-200/80">
            <tr>
              <th className="p-3">Recorded Time</th>
              <th className="p-3">Blood Pressure (mmHg)</th>
              <th className="p-3">Pulse (BPM)</th>
              <th className="p-3">Temp (°F)</th>
              <th className="p-3">Oxygen (SpO2)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {vitals.map((v, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-3 text-slate-600">{v.timestamp}</td>
                <td className="p-3">
                  <span className={`font-bold ${v.systolic >= 140 || v.diastolic >= 90 ? 'text-rose-600' : 'text-slate-900'}`}>
                    {v.systolic}/{v.diastolic}
                  </span>
                </td>
                <td className="p-3 flex items-center gap-1.5 text-slate-800">
                  <Heart className="w-3.5 h-3.5 text-rose-500" /> {v.heartRate}
                </td>
                <td className="p-3 text-slate-800">{v.temperatureF}°F</td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${v.spO2 < 95 ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
                    {v.spO2}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
