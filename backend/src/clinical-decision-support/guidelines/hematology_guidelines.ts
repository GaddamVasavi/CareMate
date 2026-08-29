// CareMate Clinical Decision Support — Hematologic & Coagulation Pathways
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

export const HEMATOLOGY_GUIDELINES: ClinicalGuidelineRule[] = [
  {
    ruleId: 'CDS-HEM-01',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 01',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for hematology management variant 01.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 4 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 01.',
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
    ruleId: 'CDS-HEM-02',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 02',
    evidenceGrade: 'B',
    indication: 'Clinical indication for hematology management variant 02.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 5 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 02.',
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
    ruleId: 'CDS-HEM-03',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 03',
    evidenceGrade: 'A',
    indication: 'Clinical indication for hematology management variant 03.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 6 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 03.',
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
    ruleId: 'CDS-HEM-04',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 04',
    evidenceGrade: 'B',
    indication: 'Clinical indication for hematology management variant 04.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 7 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 04.',
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
    ruleId: 'CDS-HEM-05',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 05',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for hematology management variant 05.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 8 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 05.',
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
    ruleId: 'CDS-HEM-06',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 06',
    evidenceGrade: 'A',
    indication: 'Clinical indication for hematology management variant 06.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 9 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 06.',
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
    ruleId: 'CDS-HEM-07',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 07',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for hematology management variant 07.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 10 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 07.',
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
    ruleId: 'CDS-HEM-08',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 08',
    evidenceGrade: 'B',
    indication: 'Clinical indication for hematology management variant 08.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 11 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 08.',
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
    ruleId: 'CDS-HEM-09',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 09',
    evidenceGrade: 'A',
    indication: 'Clinical indication for hematology management variant 09.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 12 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 09.',
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
    ruleId: 'CDS-HEM-10',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 10',
    evidenceGrade: 'B',
    indication: 'Clinical indication for hematology management variant 10.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 13 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 10.',
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
    ruleId: 'CDS-HEM-11',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 11',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for hematology management variant 11.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 14 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 11.',
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
    ruleId: 'CDS-HEM-12',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 12',
    evidenceGrade: 'A',
    indication: 'Clinical indication for hematology management variant 12.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 15 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 12.',
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
    ruleId: 'CDS-HEM-13',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 13',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for hematology management variant 13.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 16 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 13.',
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
    ruleId: 'CDS-HEM-14',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 14',
    evidenceGrade: 'B',
    indication: 'Clinical indication for hematology management variant 14.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 17 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 14.',
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
    ruleId: 'CDS-HEM-15',
    clinicalTopic: 'Hematology Evidence-Based Care Protocol 15',
    evidenceGrade: 'A',
    indication: 'Clinical indication for hematology management variant 15.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for hematology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 18 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for hematology 15.',
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

export function getHematologyGuideline(ruleId: string): ClinicalGuidelineRule | undefined {
  return HEMATOLOGY_GUIDELINES.find((g) => g.ruleId === ruleId);
}
