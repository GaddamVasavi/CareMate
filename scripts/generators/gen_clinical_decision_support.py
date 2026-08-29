import os

def generate(write_file):
    write_file("backend/src/clinical-decision-support/hypertension-evaluator.ts", """
export interface BloodPressureReading {
  systolic: number;
  diastolic: number;
}

export type HypertensionCategory =
  | 'NORMAL'
  | 'ELEVATED'
  | 'STAGE_1_HYPERTENSION'
  | 'STAGE_2_HYPERTENSION'
  | 'HYPERTENSIVE_CRISIS';

export interface BPEvaluationResult {
  category: HypertensionCategory;
  description: string;
  recommendation: string;
  isUrgent: boolean;
}

export function evaluateBloodPressure(reading: BloodPressureReading): BPEvaluationResult {
  const { systolic, diastolic } = reading;

  if (systolic > 180 || diastolic > 120) {
    return {
      category: 'HYPERTENSIVE_CRISIS',
      description: 'Hypertensive Crisis (Systolic > 180 and/or Diastolic > 120 mmHg)',
      recommendation: 'Immediate emergency medical attention required. Check for target organ damage.',
      isUrgent: true,
    };
  }

  if (systolic >= 140 || diastolic >= 90) {
    return {
      category: 'STAGE_2_HYPERTENSION',
      description: 'Stage 2 Hypertension (Systolic >= 140 or Diastolic >= 90 mmHg)',
      recommendation: 'Initiate dual antihypertensive therapy (e.g., ACEi/ARB + CCB or Diuretic) and lifestyle counseling.',
      isUrgent: false,
    };
  }

  if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
    return {
      category: 'STAGE_1_HYPERTENSION',
      description: 'Stage 1 Hypertension (Systolic 130-139 or Diastolic 80-89 mmHg)',
      recommendation: 'Calculate ASCVD 10-year risk. If ASCVD >= 10%, initiate pharmacotherapy and dietary DASH intervention.',
      isUrgent: false,
    };
  }

  if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
    return {
      category: 'ELEVATED',
      description: 'Elevated Blood Pressure (Systolic 120-129 and Diastolic < 80 mmHg)',
      recommendation: 'Non-pharmacological lifestyle therapy: reduce sodium, increase potassium, 150 min aerobic exercise weekly.',
      isUrgent: false,
    };
  }

  return {
    category: 'NORMAL',
    description: 'Normal Blood Pressure (Systolic < 120 and Diastolic < 80 mmHg)',
    recommendation: 'Maintain healthy lifestyle and evaluate annually.',
    isUrgent: false,
  };
}
""")

    write_file("backend/src/clinical-decision-support/drug-interaction-matrix.ts", """
export interface DrugInteraction {
  drugA: string;
  drugB: string;
  severity: 'MAJOR' | 'MODERATE' | 'MINOR';
  clinicalRisk: string;
  recommendation: string;
}

export const DRUG_INTERACTION_DATABASE: DrugInteraction[] = [
  {
    drugA: 'Lisinopril',
    drugB: 'Spironolactone',
    severity: 'MAJOR',
    clinicalRisk: 'Severe Hyperkalemia',
    recommendation: 'Monitor serum potassium and renal function closely. Avoid co-administration if baseline K+ > 5.0 mEq/L.',
  },
  {
    drugA: 'Warfarin',
    drugB: 'Aspirin',
    severity: 'MAJOR',
    clinicalRisk: 'Severe gastrointestinal and intracranial bleeding risk',
    recommendation: 'Avoid combination unless indicated for mechanical heart valves or ACS with high ischemic risk.',
  },
  {
    drugA: 'Metformin',
    drugB: 'Contrast Media',
    severity: 'MAJOR',
    clinicalRisk: 'Lactic Acidosis and Contrast-Induced Nephropathy',
    recommendation: 'Withhold Metformin at the time of or prior to iodinated contrast imaging and for 48 hours post-procedure.',
  },
  {
    drugA: 'Atorvastatin',
    drugB: 'Clarithromycin',
    severity: 'MAJOR',
    clinicalRisk: 'Rhabdomyolysis and severe myopathy due to CYP3A4 inhibition',
    recommendation: 'Temporarily suspend Atorvastatin during macrolide antibiotic course or switch to Pravastatin.',
  },
  {
    drugA: 'Fluoxetine',
    drugB: 'Tramadol',
    severity: 'MAJOR',
    clinicalRisk: 'Serotonin Syndrome and lowered seizure threshold',
    recommendation: 'Avoid co-administration. Monitor for autonomic instability, hyperreflexia, and agitation.',
  },
  {
    drugA: 'Ibuprofen',
    drugB: 'Lisinopril',
    severity: 'MODERATE',
    clinicalRisk: 'Attenuated antihypertensive effect and acute kidney injury',
    recommendation: 'Limit NSAID usage. Consider Acetaminophen as alternative analgesic.',
  },
];

export function checkDrugInteractions(prescribedDrugs: string[]): DrugInteraction[] {
  const detectedInteractions: DrugInteraction[] = [];
  const normalized = prescribedDrugs.map((d) => d.toLowerCase());

  for (const interaction of DRUG_INTERACTION_DATABASE) {
    const aMatch = normalized.some((d) => d.includes(interaction.drugA.toLowerCase()));
    const bMatch = normalized.some((d) => d.includes(interaction.drugB.toLowerCase()));

    if (aMatch && bMatch) {
      detectedInteractions.push(interaction);
    }
  }

  return detectedInteractions;
}
""")

    write_file("backend/src/clinical-decision-support/cardiac-risk-calculator.ts", """
export interface ASCVDRiskParams {
  age: number; // 20-79
  gender: 'MALE' | 'FEMALE';
  totalCholesterol: number; // mg/dL
  hdlCholesterol: number; // mg/dL
  systolicBP: number; // mmHg
  isTreatedForBP: boolean;
  isSmoker: boolean;
  hasDiabetes: boolean;
}

export interface ASCVDRiskScore {
  tenYearRiskPercent: number;
  riskCategory: 'LOW' | 'BORDERLINE' | 'INTERMEDIATE' | 'HIGH';
  guidelineRecommendation: string;
}

export function calculateASCVD10YearRisk(params: ASCVDRiskParams): ASCVDRiskScore {
  let baseScore = (params.age - 40) * 0.4;

  if (params.gender === 'MALE') baseScore += 2.5;
  if (params.isSmoker) baseScore += 3.0;
  if (params.hasDiabetes) baseScore += 3.5;

  const cholRatio = params.totalCholesterol / Math.max(20, params.hdlCholesterol);
  if (cholRatio > 5.0) baseScore += 2.0;
  else if (cholRatio > 4.0) baseScore += 1.0;

  if (params.systolicBP >= 140) baseScore += 2.0;
  if (params.isTreatedForBP) baseScore += 1.0;

  const riskPercent = Math.max(1.0, Math.min(65.0, Number((baseScore * 1.8).toFixed(1))));

  let riskCategory: 'LOW' | 'BORDERLINE' | 'INTERMEDIATE' | 'HIGH' = 'LOW';
  let guidelineRecommendation = 'Emphasize lifestyle modifications (diet, exercise, smoking cessation).';

  if (riskPercent >= 20.0) {
    riskCategory = 'HIGH';
    guidelineRecommendation = 'Initiate high-intensity statin therapy (Atorvastatin 40-80mg or Rosuvastatin 20-40mg) and strict BP control.';
  } else if (riskPercent >= 7.5) {
    riskCategory = 'INTERMEDIATE';
    guidelineRecommendation = 'Initiate moderate-intensity statin therapy. Consider coronary artery calcium (CAC) scoring if decision is uncertain.';
  } else if (riskPercent >= 5.0) {
    riskCategory = 'BORDERLINE';
    guidelineRecommendation = 'Discuss moderate-intensity statin if risk-enhancing factors present (family history of premature ASCVD, chronic kidney disease).';
  }

  return {
    tenYearRiskPercent: riskPercent,
    riskCategory,
    guidelineRecommendation,
  };
}
""")
