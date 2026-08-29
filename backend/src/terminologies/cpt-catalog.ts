export interface CPTEntry {
  code: string;
  description: string;
  category: string;
  standardFee: number;
}

export const CPT_CODES: CPTEntry[] = [
  // Evaluation & Management (E/M)
  { code: '99202', description: 'Office or other outpatient visit for new patient, 15-29 minutes', category: 'Evaluation & Management', standardFee: 75.0 },
  { code: '99203', description: 'Office or other outpatient visit for new patient, 30-44 minutes (Moderate Complexity)', category: 'Evaluation & Management', standardFee: 110.0 },
  { code: '99204', description: 'Office or other outpatient visit for new patient, 45-59 minutes (High Complexity)', category: 'Evaluation & Management', standardFee: 165.0 },
  { code: '99212', description: 'Office or other outpatient visit for established patient, 10-19 minutes', category: 'Evaluation & Management', standardFee: 55.0 },
  { code: '99213', description: 'Office or other outpatient visit for established patient, 20-29 minutes (Low Complexity)', category: 'Evaluation & Management', standardFee: 90.0 },
  { code: '99214', description: 'Office or other outpatient visit for established patient, 30-39 minutes (Moderate Complexity)', category: 'Evaluation & Management', standardFee: 130.0 },
  { code: '99215', description: 'Office or other outpatient visit for established patient, 40-54 minutes (High Complexity)', category: 'Evaluation & Management', standardFee: 180.0 },
  { code: '99441', description: 'Telehealth telephone evaluation and management service, 5-10 minutes', category: 'Telemedicine', standardFee: 45.0 },
  { code: '99442', description: 'Telehealth telephone evaluation and management service, 11-20 minutes', category: 'Telemedicine', standardFee: 75.0 },
  { code: '99443', description: 'Telehealth telephone evaluation and management service, 21-30 minutes', category: 'Telemedicine', standardFee: 110.0 },

  // Diagnostic & Radiology
  { code: '71045', description: 'Chest X-ray, single view', category: 'Radiology', standardFee: 85.0 },
  { code: '71046', description: 'Chest X-ray, 2 views (Frontal and Lateral)', category: 'Radiology', standardFee: 120.0 },
  { code: '93000', description: 'Electrocardiogram (ECG/EKG), routine with at least 12 leads; with interpretation and report', category: 'Cardiovascular Diagnostics', standardFee: 65.0 },
  { code: '93306', description: 'Echocardiography, transthoracic, real-time with image documentation (2D), complete with spectral Doppler', category: 'Cardiovascular Diagnostics', standardFee: 350.0 },
  { code: '70450', description: 'Computed tomography (CT scan), head or brain; without contrast material', category: 'Radiology', standardFee: 420.0 },
  { code: '72148', description: 'Magnetic resonance imaging (MRI), lumbar spine; without contrast', category: 'Radiology', standardFee: 650.0 },

  // Laboratory & Pathology CPT Codes
  { code: '80053', description: 'Comprehensive metabolic panel (CMP)', category: 'Laboratory & Pathology', standardFee: 45.0 },
  { code: '80061', description: 'Lipid panel (Total Cholesterol, HDL, Triglycerides, LDL)', category: 'Laboratory & Pathology', standardFee: 40.0 },
  { code: '85025', description: 'Blood count; complete (CBC) with automated differential', category: 'Laboratory & Pathology', standardFee: 35.0 },
  { code: '83036', description: 'Hemoglobin; glycosylated (A1C)', category: 'Laboratory & Pathology', standardFee: 30.0 },
  { code: '84443', description: 'Thyroid stimulating hormone (TSH)', category: 'Laboratory & Pathology', standardFee: 50.0 },
  { code: '81002', description: 'Urinalysis, non-automated, without microscopy', category: 'Laboratory & Pathology', standardFee: 20.0 },
];

export function searchCPTCodes(query: string): CPTEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return CPT_CODES;
  return CPT_CODES.filter((c) => c.code.includes(q) || c.description.toLowerCase().includes(q));
}
