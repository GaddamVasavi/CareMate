// CareMate Clinical Decision Support — Nephrology & Renal Care Protocols
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

export const NEPHROLOGY_GUIDELINES: ClinicalGuidelineRule[] = [
  {
    ruleId: 'CDS-NEP-01',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 01',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for nephrology management variant 01.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 4 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 01.',
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
    ruleId: 'CDS-NEP-02',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 02',
    evidenceGrade: 'B',
    indication: 'Clinical indication for nephrology management variant 02.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 5 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 02.',
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
    ruleId: 'CDS-NEP-03',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 03',
    evidenceGrade: 'A',
    indication: 'Clinical indication for nephrology management variant 03.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 6 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 03.',
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
    ruleId: 'CDS-NEP-04',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 04',
    evidenceGrade: 'B',
    indication: 'Clinical indication for nephrology management variant 04.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 7 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 04.',
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
    ruleId: 'CDS-NEP-05',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 05',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for nephrology management variant 05.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 8 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 05.',
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
    ruleId: 'CDS-NEP-06',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 06',
    evidenceGrade: 'A',
    indication: 'Clinical indication for nephrology management variant 06.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 9 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 06.',
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
    ruleId: 'CDS-NEP-07',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 07',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for nephrology management variant 07.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 10 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 07.',
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
    ruleId: 'CDS-NEP-08',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 08',
    evidenceGrade: 'B',
    indication: 'Clinical indication for nephrology management variant 08.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 11 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 08.',
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
    ruleId: 'CDS-NEP-09',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 09',
    evidenceGrade: 'A',
    indication: 'Clinical indication for nephrology management variant 09.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 12 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 09.',
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
    ruleId: 'CDS-NEP-10',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 10',
    evidenceGrade: 'B',
    indication: 'Clinical indication for nephrology management variant 10.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 13 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 10.',
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
    ruleId: 'CDS-NEP-11',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 11',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for nephrology management variant 11.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 14 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 11.',
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
    ruleId: 'CDS-NEP-12',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 12',
    evidenceGrade: 'A',
    indication: 'Clinical indication for nephrology management variant 12.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 15 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 12.',
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
    ruleId: 'CDS-NEP-13',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 13',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for nephrology management variant 13.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 16 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 13.',
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
    ruleId: 'CDS-NEP-14',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 14',
    evidenceGrade: 'B',
    indication: 'Clinical indication for nephrology management variant 14.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 17 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 14.',
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
    ruleId: 'CDS-NEP-15',
    clinicalTopic: 'Nephrology Evidence-Based Care Protocol 15',
    evidenceGrade: 'A',
    indication: 'Clinical indication for nephrology management variant 15.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for nephrology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 18 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for nephrology 15.',
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

export function getNephrologyGuideline(ruleId: string): ClinicalGuidelineRule | undefined {
  return NEPHROLOGY_GUIDELINES.find((g) => g.ruleId === ruleId);
}
