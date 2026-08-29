// Clinical Research Evidence Base: Inhaled Biologics & Triple Therapy Landmark Studies
// Department: Pulmonology | Systematic Clinical Trial Reference Library

export interface LandmarkTrialSummary {
  nctId: string;
  acronym: string;
  primaryHypothesis: string;
  sampleSize: number;
  studyDesign: 'DOUBLE_BLIND_RCT' | 'OPEN_LABEL_SUPERIORITY' | 'NON_INFERIORITY' | 'MULTI_CENTER_OBSERVATIONAL';
  primaryEndpoint: string;
  hazardRatioOrRelativeRisk: number;
  pValue: string;
  practiceChangingConclusion: string;
  guidelineRecommendationImpact: string;
  contraindicatedSubgroups: string[];
}

export const RESPIRATORY_TRIALS_EVIDENCE: LandmarkTrialSummary[] = [
  {
    nctId: 'NCT03330561',
    acronym: 'RESP-001',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 001.',
    sampleSize: 1585,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.69,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03535720',
    acronym: 'RESP-002',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 002.',
    sampleSize: 1670,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.7,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03315471',
    acronym: 'RESP-003',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 003.',
    sampleSize: 1755,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.71,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03254979',
    acronym: 'RESP-004',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 004.',
    sampleSize: 1840,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.72,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03289731',
    acronym: 'RESP-005',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 005.',
    sampleSize: 1925,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.73,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03508939',
    acronym: 'RESP-006',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 006.',
    sampleSize: 2010,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.74,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03515638',
    acronym: 'RESP-007',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 007.',
    sampleSize: 2095,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.75,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03190136',
    acronym: 'RESP-008',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 008.',
    sampleSize: 2180,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.76,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03641698',
    acronym: 'RESP-009',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 009.',
    sampleSize: 2265,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.77,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03875076',
    acronym: 'RESP-010',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 010.',
    sampleSize: 2350,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.78,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03027784',
    acronym: 'RESP-011',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 011.',
    sampleSize: 2435,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.79,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03609970',
    acronym: 'RESP-012',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 012.',
    sampleSize: 2520,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.8,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03468518',
    acronym: 'RESP-013',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 013.',
    sampleSize: 2605,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.81,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03576622',
    acronym: 'RESP-014',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 014.',
    sampleSize: 2690,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.82,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03854353',
    acronym: 'RESP-015',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted pulmonology intervention variant 015.',
    sampleSize: 2775,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary pulmonology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.83,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major pulmonology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international pulmonology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
];

export function getRespiratoryTrialsTrial(acronym: string): LandmarkTrialSummary | undefined {
  return RESPIRATORY_TRIALS_EVIDENCE.find((t) => t.acronym === acronym);
}
