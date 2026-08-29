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
