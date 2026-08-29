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
