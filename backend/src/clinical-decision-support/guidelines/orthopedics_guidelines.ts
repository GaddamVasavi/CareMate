// CareMate Clinical Decision Support — Musculoskeletal Rehabilitation Protocols
// Clinical Practice Guidelines & Escalation Criteria

export interface ClinicalGuidelineRule {
  ruleId: string;
  clinicalTopic: string;
  evidenceGrade: 'A' | 'B' | 'C' | 'EXPERT_CONSENSUS';
  indication: string;
  inclusionCriteria: string[];
  exclusionCriteria: string[];
  firstLineTherapy: string;
  secondLineTherapy: string;
  monitoringParameters: string[];
  criticalAlertThresholds: string[];
  contraindications: string[];
  recommendedFollowUpWeeks: number;
}

export const ORTHOPEDICS_GUIDELINES: ClinicalGuidelineRule[] = [
  {
    ruleId: 'CDS-ORT-01',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 01',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for orthopedics management variant 01.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 4 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 01.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 3,
  },
  {
    ruleId: 'CDS-ORT-02',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 02',
    evidenceGrade: 'B',
    indication: 'Clinical indication for orthopedics management variant 02.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 5 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 02.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 4,
  },
  {
    ruleId: 'CDS-ORT-03',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 03',
    evidenceGrade: 'A',
    indication: 'Clinical indication for orthopedics management variant 03.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 6 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 03.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 5,
  },
  {
    ruleId: 'CDS-ORT-04',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 04',
    evidenceGrade: 'B',
    indication: 'Clinical indication for orthopedics management variant 04.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 7 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 04.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 6,
  },
  {
    ruleId: 'CDS-ORT-05',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 05',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for orthopedics management variant 05.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 8 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 05.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 7,
  },
  {
    ruleId: 'CDS-ORT-06',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 06',
    evidenceGrade: 'A',
    indication: 'Clinical indication for orthopedics management variant 06.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 9 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 06.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 2,
  },
  {
    ruleId: 'CDS-ORT-07',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 07',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for orthopedics management variant 07.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 10 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 07.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 3,
  },
  {
    ruleId: 'CDS-ORT-08',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 08',
    evidenceGrade: 'B',
    indication: 'Clinical indication for orthopedics management variant 08.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 11 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 08.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 4,
  },
  {
    ruleId: 'CDS-ORT-09',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 09',
    evidenceGrade: 'A',
    indication: 'Clinical indication for orthopedics management variant 09.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 12 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 09.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 5,
  },
  {
    ruleId: 'CDS-ORT-10',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 10',
    evidenceGrade: 'B',
    indication: 'Clinical indication for orthopedics management variant 10.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 13 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 10.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 6,
  },
  {
    ruleId: 'CDS-ORT-11',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 11',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for orthopedics management variant 11.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 14 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 11.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 7,
  },
  {
    ruleId: 'CDS-ORT-12',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 12',
    evidenceGrade: 'A',
    indication: 'Clinical indication for orthopedics management variant 12.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 15 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 12.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 2,
  },
  {
    ruleId: 'CDS-ORT-13',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 13',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for orthopedics management variant 13.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 16 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 13.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 3,
  },
  {
    ruleId: 'CDS-ORT-14',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 14',
    evidenceGrade: 'B',
    indication: 'Clinical indication for orthopedics management variant 14.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 17 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 14.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 4,
  },
  {
    ruleId: 'CDS-ORT-15',
    clinicalTopic: 'Orthopedics Evidence-Based Care Protocol 15',
    evidenceGrade: 'A',
    indication: 'Clinical indication for orthopedics management variant 15.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for orthopedics condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 18 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for orthopedics 15.',
    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',
    monitoringParameters: [
      'Complete blood count and basic metabolic panel at 4 weeks',
      'Target organ symptom score assessment at each visit',
    ],
    criticalAlertThresholds: [
      'Serum Creatinine elevation > 50% from baseline',
      'Abnormal vital sign instability',
    ],
    contraindications: [
      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',
      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',
    ],
    recommendedFollowUpWeeks: 5,
  },
];

export function getOrthopedicsGuideline(ruleId: string): ClinicalGuidelineRule | undefined {
  return ORTHOPEDICS_GUIDELINES.find((g) => g.ruleId === ruleId);
}
