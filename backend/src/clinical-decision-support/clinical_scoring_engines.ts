// Comprehensive Evidence-Based Clinical Risk Scoring Calculators

export interface CHA2DS2VAScInput {
  age: number;
  gender: 'MALE' | 'FEMALE';
  congestiveHeartFailure: boolean;
  hypertension: boolean;
  strokeTIAThromboembolismHistory: boolean;
  vascularDiseaseHistory: boolean; // Prior MI, PAD, aortic plaque
  diabetesMellitus: boolean;
}

export interface CHA2DS2VAScResult {
  score: number;
  annualStrokeRiskPercent: number;
  anticoagulationRecommendation: string;
}

export function calculateCHA2DS2VASc(input: CHA2DS2VAScInput): CHA2DS2VAScResult {
  let score = 0;
  if (input.congestiveHeartFailure) score += 1;
  if (input.hypertension) score += 1;
  if (input.age >= 75) score += 2;
  else if (input.age >= 65) score += 1;
  if (input.diabetesMellitus) score += 1;
  if (input.strokeTIAThromboembolismHistory) score += 2;
  if (input.vascularDiseaseHistory) score += 1;
  if (input.gender === 'FEMALE') score += 1;

  const strokeRiskTable: Record<number, number> = {
    0: 0.2,
    1: 0.6,
    2: 2.2,
    3: 3.2,
    4: 4.8,
    5: 7.2,
    6: 9.7,
    7: 11.2,
    8: 12.5,
    9: 15.2,
  };

  const risk = strokeRiskTable[Math.min(9, score)] || 15.2;

  let recommendation = 'Low risk: No oral anticoagulant (OAC) therapy recommended.';
  if (score === 1 && input.gender === 'MALE') {
    recommendation = 'Intermediate risk: Oral anticoagulation (DOAC preferred over Warfarin) should be considered.';
  } else if ((score >= 2 && input.gender === 'MALE') || (score >= 3 && input.gender === 'FEMALE')) {
    recommendation = 'High risk: Oral anticoagulation (DOAC: Apixaban, Rivaroxaban, Dabigatran, or Edoxaban) strongly recommended.';
  }

  return {
    score,
    annualStrokeRiskPercent: risk,
    recommendation,
  };
}

export interface CURB65Input {
  confusion: boolean;
  bunMgDl: number; // BUN > 19 mg/dL
  respiratoryRate: number; // RR >= 30 breaths/min
  systolicBP: number;
  diastolicBP: number;
  age: number; // Age >= 65
}

export interface CURB65Result {
  score: number;
  riskCategory: 'LOW' | 'INTERMEDIATE' | 'HIGH';
  thirtyDayMortalityPercent: number;
  dispositionRecommendation: string;
}

export function calculateCURB65(input: CURB65Input): CURB65Result {
  let score = 0;
  if (input.confusion) score += 1;
  if (input.bunMgDl > 19) score += 1;
  if (input.respiratoryRate >= 30) score += 1;
  if (input.systolicBP < 90 || input.diastolicBP <= 60) score += 1;
  if (input.age >= 65) score += 1;

  let riskCategory: 'LOW' | 'INTERMEDIATE' | 'HIGH' = 'LOW';
  let mortality = 1.5;
  let disposition = 'Outpatient treatment usually suitable. Oral antibiotics and home recovery.';

  if (score === 2) {
    riskCategory = 'INTERMEDIATE';
    mortality = 9.2;
    disposition = 'Consider short-stay inpatient admission or closely monitored outpatient treatment.';
  } else if (score >= 3) {
    riskCategory = 'HIGH';
    mortality = 22.0;
    disposition = 'Hospital admission required. Evaluate for intensive care unit (ICU) admission if score >= 4.';
  }

  return {
    score,
    riskCategory,
    thirtyDayMortalityPercent: mortality,
    dispositionRecommendation: disposition,
  };
}

export interface WellsDVTInput {
  activeCancer: boolean;
  paralysisParesisOrImmobilization: boolean;
  bedriddenRecently3DaysOrMajorSurgery: boolean;
  localizedTendernessDeepVenousSystem: boolean;
  entireLegSwollen: boolean;
  calfSwellingGreater3cmThanAsymptomaticSide: boolean;
  pittingEdemaConfinedToSymptomaticLeg: boolean;
  collateralSuperficialVeinsNonVaricose: boolean;
  alternativeDiagnosisAtLeastAsLikelyAsDVT: boolean;
}

export function calculateWellsDVT(input: WellsDVTInput) {
  let score = 0;
  if (input.activeCancer) score += 1;
  if (input.paralysisParesisOrImmobilization) score += 1;
  if (input.bedriddenRecently3DaysOrMajorSurgery) score += 1;
  if (input.localizedTendernessDeepVenousSystem) score += 1;
  if (input.entireLegSwollen) score += 1;
  if (input.calfSwellingGreater3cmThanAsymptomaticSide) score += 1;
  if (input.pittingEdemaConfinedToSymptomaticLeg) score += 1;
  if (input.collateralSuperficialVeinsNonVaricose) score += 1;
  if (input.alternativeDiagnosisAtLeastAsLikelyAsDVT) score -= 2;

  const isDVTProbable = score >= 2;
  return {
    score,
    probabilityCategory: isDVTProbable ? 'DVT PROBABLE' : 'DVT UNLIKELY',
    nextDiagnosticStep: isDVTProbable
      ? 'Perform Compression Duplex Ultrasound of symptomatic lower extremity.'
      : 'Order High-Sensitivity D-Dimer test to rule out deep vein thrombosis.',
  };
}
