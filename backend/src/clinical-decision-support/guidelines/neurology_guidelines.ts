// CareMate Clinical Decision Support — Neurological Assessment Protocols
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

export const NEUROLOGY_GUIDELINES: ClinicalGuidelineRule[] = [
  {
    ruleId: 'CDS-NEU-01',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 01',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for neurology management variant 01.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 4 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 01.',
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
    ruleId: 'CDS-NEU-02',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 02',
    evidenceGrade: 'B',
    indication: 'Clinical indication for neurology management variant 02.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 5 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 02.',
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
    ruleId: 'CDS-NEU-03',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 03',
    evidenceGrade: 'A',
    indication: 'Clinical indication for neurology management variant 03.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 6 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 03.',
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
    ruleId: 'CDS-NEU-04',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 04',
    evidenceGrade: 'B',
    indication: 'Clinical indication for neurology management variant 04.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 7 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 04.',
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
    ruleId: 'CDS-NEU-05',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 05',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for neurology management variant 05.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 8 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 05.',
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
    ruleId: 'CDS-NEU-06',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 06',
    evidenceGrade: 'A',
    indication: 'Clinical indication for neurology management variant 06.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 9 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 06.',
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
    ruleId: 'CDS-NEU-07',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 07',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for neurology management variant 07.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 10 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 07.',
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
    ruleId: 'CDS-NEU-08',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 08',
    evidenceGrade: 'B',
    indication: 'Clinical indication for neurology management variant 08.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 11 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 08.',
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
    ruleId: 'CDS-NEU-09',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 09',
    evidenceGrade: 'A',
    indication: 'Clinical indication for neurology management variant 09.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 12 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 09.',
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
    ruleId: 'CDS-NEU-10',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 10',
    evidenceGrade: 'B',
    indication: 'Clinical indication for neurology management variant 10.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 13 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 10.',
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
    ruleId: 'CDS-NEU-11',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 11',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for neurology management variant 11.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 14 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 11.',
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
    ruleId: 'CDS-NEU-12',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 12',
    evidenceGrade: 'A',
    indication: 'Clinical indication for neurology management variant 12.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 15 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 12.',
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
    ruleId: 'CDS-NEU-13',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 13',
    evidenceGrade: 'EXPERT_CONSENSUS',
    indication: 'Clinical indication for neurology management variant 13.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 16 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 13.',
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
    ruleId: 'CDS-NEU-14',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 14',
    evidenceGrade: 'B',
    indication: 'Clinical indication for neurology management variant 14.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 17 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 14.',
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
    ruleId: 'CDS-NEU-15',
    clinicalTopic: 'Neurology Evidence-Based Care Protocol 15',
    evidenceGrade: 'A',
    indication: 'Clinical indication for neurology management variant 15.',
    inclusionCriteria: [
      'Confirmed diagnostic criteria for neurology condition',
      'Patient age >= 18 with confirmed baseline laboratory panel',
      'Symptom persistence greater than 18 consecutive days',
    ],
    exclusionCriteria: [
      'Severe acute organ decompensation requiring immediate ICU admission',
      'Known hypersensitivity to first-line therapeutic agents',
    ],
    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for neurology 15.',
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

export function getNeurologyGuideline(ruleId: string): ClinicalGuidelineRule | undefined {
  return NEUROLOGY_GUIDELINES.find((g) => g.ruleId === ruleId);
}
