import os

def generate(write_file):
    print("Generating Advanced Frontend Medical UI Components & Widgets...")

    # 1. ECG Waveform Canvas Viewer
    write_file("frontend/src/components/medical/ECGWaveformViewer.tsx", """
import React, { useEffect, useRef } from 'react';

interface ECGWaveformViewerProps {
  heartRate?: number;
  rhythmTitle?: string;
  className?: string;
}

export const ECGWaveformViewer: React.FC<ECGWaveformViewerProps> = ({
  heartRate = 72,
  rhythmTitle = 'Normal Sinus Rhythm (NSR)',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const drawGrid = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawWaveform = () => {
      drawGrid();
      const width = canvas.width;
      const height = canvas.height;
      const midY = height / 2;

      ctx.strokeStyle = '#10b981'; // Medical neon green
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const t = (x + offset) % 200;
        let y = midY;

        // P Wave
        if (t > 20 && t < 40) {
          y -= Math.sin(((t - 20) / 20) * Math.PI) * 8;
        }
        // Q Wave
        else if (t >= 45 && t < 50) {
          y += 6;
        }
        // R Wave (Spike)
        else if (t >= 50 && t < 60) {
          y -= 45;
        }
        // S Wave
        else if (t >= 60 && t < 68) {
          y += 12;
        }
        // T Wave
        else if (t >= 90 && t < 130) {
          y -= Math.sin(((t - 90) / 40) * Math.PI) * 14;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
      offset = (offset + 2) % 10000;
      animationFrameId = requestAnimationFrame(drawWaveform);
    };

    drawWaveform();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [heartRate]);

  return (
    <div className={`p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 ${className}`}>
      <div className="flex justify-between items-center text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-slate-200">Lead II Real-time Telemetry</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">{rhythmTitle}</span>
          <span className="font-mono font-bold text-emerald-400">{heartRate} BPM</span>
        </div>
      </div>
      <canvas ref={canvasRef} width={600} height={120} className="w-full h-28 rounded-xl bg-slate-950" />
    </div>
  );
};
""")

    # 2. Vital Signs Trend Widget
    write_file("frontend/src/components/medical/VitalSignsTrendsWidget.tsx", """
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
""")

    # 3. Interactive Human Body Anatomical Symptom Map
    write_file("frontend/src/components/medical/AnatomicalSymptomPicker.tsx", """
import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export interface BodyRegion {
  id: string;
  name: string;
  system: string;
  commonSymptoms: string[];
}

const BODY_REGIONS: BodyRegion[] = [
  { id: 'head', name: 'Head & Neurological', system: 'Central Nervous System', commonSymptoms: ['Cephalea / Migraine', 'Dizziness / Vertigo', 'Visual Disturbances', 'Facial Numbness'] },
  { id: 'throat', name: 'Throat & Neck', system: 'Otolaryngology', commonSymptoms: ['Sore Throat', 'Dysphagia', 'Neck Stiffness', 'Thyroid Tenderness'] },
  { id: 'chest', name: 'Chest & Cardiovascular', system: 'Cardiopulmonary', commonSymptoms: ['Substernal Chest Pain', 'Shortness of Breath', 'Palpitations', 'Pleuritic Pain'] },
  { id: 'abdomen', name: 'Abdomen & GI', system: 'Gastrointestinal', commonSymptoms: ['Epigastric Burning', 'RUQ Colic', 'Nausea / Vomiting', 'Lower Abdominal Cramping'] },
  { id: 'spine', name: 'Spine & Lumbar', system: 'Musculoskeletal', commonSymptoms: ['Lumbar Radiculopathy', 'Sciatica', 'Cervical Strain', 'Muscle Spasm'] },
  { id: 'limbs', name: 'Arms, Hands & Legs', system: 'Orthopedics / Vascular', commonSymptoms: ['Joint Swelling (Arthralgia)', 'Calf Swelling / DVT Risk', 'Paresthesia', 'Restless Legs'] },
];

export const AnatomicalSymptomPicker: React.FC<{ onSelectSymptom?: (symptom: string) => void }> = ({ onSelectSymptom }) => {
  const [selectedRegionId, setSelectedRegionId] = useState('chest');

  const selectedRegion = BODY_REGIONS.find((r) => r.id === selectedRegionId) || BODY_REGIONS[0];

  return (
    <Card className="space-y-4">
      <div>
        <h3 className="font-bold text-slate-900 text-sm">Interactive Anatomical Symptom Locator</h3>
        <p className="text-xs text-slate-500">Select affected anatomical region to review characteristic presentation markers</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {BODY_REGIONS.map((region) => (
          <button
            key={region.id}
            type="button"
            onClick={() => setSelectedRegionId(region.id)}
            className={`p-3 rounded-xl text-left transition-all border text-xs font-semibold ${
              selectedRegionId === region.id
                ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm'
                : 'border-slate-200 text-slate-700 hover:border-slate-300'
            }`}
          >
            <p className="font-bold">{region.name}</p>
            <p className="text-[11px] text-slate-400 font-normal">{region.system}</p>
          </button>
        ))}
      </div>

      <div className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-100">
        <h4 className="text-xs font-bold text-slate-800">Frequent Diagnostic Presentations:</h4>
        <div className="flex flex-wrap gap-2">
          {selectedRegion.commonSymptoms.map((sym, idx) => (
            <span
              key={idx}
              onClick={() => onSelectSymptom && onSelectSymptom(sym)}
              className="cursor-pointer px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:border-brand-500 hover:text-brand-600 transition-colors shadow-xs"
            >
              + {sym}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};
""")
