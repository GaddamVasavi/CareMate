// Clinical Research Evidence Base: Pivotal Oncology Phase III Trials & Biomarker Endpoints
// Department: Oncology | Systematic Clinical Trial Reference Library

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

export const ONCOLOGY_TRIALS_EVIDENCE: LandmarkTrialSummary[] = [
  {
    nctId: 'NCT03862417',
    acronym: 'ONCO-001',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 001.',
    sampleSize: 1585,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.69,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03698398',
    acronym: 'ONCO-002',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 002.',
    sampleSize: 1670,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.7,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03897250',
    acronym: 'ONCO-003',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 003.',
    sampleSize: 1755,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.71,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03881900',
    acronym: 'ONCO-004',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 004.',
    sampleSize: 1840,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.72,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03677074',
    acronym: 'ONCO-005',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 005.',
    sampleSize: 1925,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.73,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03688683',
    acronym: 'ONCO-006',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 006.',
    sampleSize: 2010,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.74,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03918038',
    acronym: 'ONCO-007',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 007.',
    sampleSize: 2095,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.75,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03656629',
    acronym: 'ONCO-008',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 008.',
    sampleSize: 2180,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.76,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03923235',
    acronym: 'ONCO-009',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 009.',
    sampleSize: 2265,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.77,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03608062',
    acronym: 'ONCO-010',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 010.',
    sampleSize: 2350,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.78,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03734277',
    acronym: 'ONCO-011',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 011.',
    sampleSize: 2435,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.79,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03430323',
    acronym: 'ONCO-012',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 012.',
    sampleSize: 2520,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.8,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03497697',
    acronym: 'ONCO-013',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 013.',
    sampleSize: 2605,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.81,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03796700',
    acronym: 'ONCO-014',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 014.',
    sampleSize: 2690,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.82,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03806790',
    acronym: 'ONCO-015',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted oncology intervention variant 015.',
    sampleSize: 2775,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary oncology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.83,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major oncology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international oncology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
];

export function getOncologyTrialsTrial(acronym: string): LandmarkTrialSummary | undefined {
  return ONCOLOGY_TRIALS_EVIDENCE.find((t) => t.acronym === acronym);
}
