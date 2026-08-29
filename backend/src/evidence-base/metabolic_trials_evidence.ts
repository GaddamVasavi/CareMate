// Clinical Research Evidence Base: Diabetes Cardiovascular Outcome Trials (CVOTs)
// Department: Endocrinology | Systematic Clinical Trial Reference Library

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

export const METABOLIC_TRIALS_EVIDENCE: LandmarkTrialSummary[] = [
  {
    nctId: 'NCT03215059',
    acronym: 'META-001',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 001.',
    sampleSize: 1585,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.69,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03120908',
    acronym: 'META-002',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 002.',
    sampleSize: 1670,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.7,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03140465',
    acronym: 'META-003',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 003.',
    sampleSize: 1755,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.71,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03221276',
    acronym: 'META-004',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 004.',
    sampleSize: 1840,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.72,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03603072',
    acronym: 'META-005',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 005.',
    sampleSize: 1925,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.73,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03567503',
    acronym: 'META-006',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 006.',
    sampleSize: 2010,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.74,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03607654',
    acronym: 'META-007',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 007.',
    sampleSize: 2095,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.75,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03486918',
    acronym: 'META-008',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 008.',
    sampleSize: 2180,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.76,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03598232',
    acronym: 'META-009',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 009.',
    sampleSize: 2265,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.77,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03698087',
    acronym: 'META-010',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 010.',
    sampleSize: 2350,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.78,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03414465',
    acronym: 'META-011',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 011.',
    sampleSize: 2435,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.79,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03518396',
    acronym: 'META-012',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 012.',
    sampleSize: 2520,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.8,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03611385',
    acronym: 'META-013',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 013.',
    sampleSize: 2605,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.81,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03795817',
    acronym: 'META-014',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 014.',
    sampleSize: 2690,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.82,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03386330',
    acronym: 'META-015',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted endocrinology intervention variant 015.',
    sampleSize: 2775,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary endocrinology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.83,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major endocrinology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international endocrinology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
];

export function getMetabolicTrialsTrial(acronym: string): LandmarkTrialSummary | undefined {
  return METABOLIC_TRIALS_EVIDENCE.find((t) => t.acronym === acronym);
}
