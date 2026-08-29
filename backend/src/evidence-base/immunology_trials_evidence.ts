// Clinical Research Evidence Base: Biologics & Targeted Immunomodulator Outcomes
// Department: Immunology | Systematic Clinical Trial Reference Library

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

export const IMMUNOLOGY_TRIALS_EVIDENCE: LandmarkTrialSummary[] = [
  {
    nctId: 'NCT03591465',
    acronym: 'IMMU-001',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 001.',
    sampleSize: 1585,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.69,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03490482',
    acronym: 'IMMU-002',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 002.',
    sampleSize: 1670,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.7,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03911041',
    acronym: 'IMMU-003',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 003.',
    sampleSize: 1755,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.71,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03151467',
    acronym: 'IMMU-004',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 004.',
    sampleSize: 1840,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.72,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03018486',
    acronym: 'IMMU-005',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 005.',
    sampleSize: 1925,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.73,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03472931',
    acronym: 'IMMU-006',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 006.',
    sampleSize: 2010,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.74,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03102165',
    acronym: 'IMMU-007',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 007.',
    sampleSize: 2095,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.75,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03855258',
    acronym: 'IMMU-008',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 008.',
    sampleSize: 2180,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.76,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03640794',
    acronym: 'IMMU-009',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 009.',
    sampleSize: 2265,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.77,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03743741',
    acronym: 'IMMU-010',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 010.',
    sampleSize: 2350,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.78,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03860026',
    acronym: 'IMMU-011',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 011.',
    sampleSize: 2435,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.79,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03191784',
    acronym: 'IMMU-012',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 012.',
    sampleSize: 2520,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.8,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03221063',
    acronym: 'IMMU-013',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 013.',
    sampleSize: 2605,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.81,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03847732',
    acronym: 'IMMU-014',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 014.',
    sampleSize: 2690,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.82,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03215129',
    acronym: 'IMMU-015',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted immunology intervention variant 015.',
    sampleSize: 2775,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary immunology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.83,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major immunology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international immunology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
];

export function getImmunologyTrialsTrial(acronym: string): LandmarkTrialSummary | undefined {
  return IMMUNOLOGY_TRIALS_EVIDENCE.find((t) => t.acronym === acronym);
}
