// Clinical Research Evidence Base: Neurological Therapeutics & Neuroprotection Protocols
// Department: Neurology | Systematic Clinical Trial Reference Library

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

export const NEUROLOGY_TRIALS_EVIDENCE: LandmarkTrialSummary[] = [
  {
    nctId: 'NCT03703908',
    acronym: 'NEUR-001',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 001.',
    sampleSize: 1585,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.69,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03029535',
    acronym: 'NEUR-002',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 002.',
    sampleSize: 1670,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.7,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03159973',
    acronym: 'NEUR-003',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 003.',
    sampleSize: 1755,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.71,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03855328',
    acronym: 'NEUR-004',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 004.',
    sampleSize: 1840,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.72,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03261558',
    acronym: 'NEUR-005',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 005.',
    sampleSize: 1925,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.73,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03742017',
    acronym: 'NEUR-006',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 006.',
    sampleSize: 2010,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.74,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03527581',
    acronym: 'NEUR-007',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 007.',
    sampleSize: 2095,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.75,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03055346',
    acronym: 'NEUR-008',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 008.',
    sampleSize: 2180,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.76,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03550340',
    acronym: 'NEUR-009',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 009.',
    sampleSize: 2265,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.77,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03480575',
    acronym: 'NEUR-010',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 010.',
    sampleSize: 2350,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.78,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03024368',
    acronym: 'NEUR-011',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 011.',
    sampleSize: 2435,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.79,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03861298',
    acronym: 'NEUR-012',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 012.',
    sampleSize: 2520,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.8,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03901163',
    acronym: 'NEUR-013',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 013.',
    sampleSize: 2605,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.81,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03000745',
    acronym: 'NEUR-014',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 014.',
    sampleSize: 2690,
    studyDesign: 'DOUBLE_BLIND_RCT',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.82,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
  {
    nctId: 'NCT03350964',
    acronym: 'NEUR-015',
    primaryHypothesis: 'Evaluating therapeutic efficacy and safety of targeted neurology intervention variant 015.',
    sampleSize: 2775,
    studyDesign: 'NON_INFERIORITY',
    primaryEndpoint: 'Composite of primary neurology disease progression or all-cause mortality.',
    hazardRatioOrRelativeRisk: 0.83,
    pValue: 'p < 0.001',
    practiceChangingConclusion: 'Demonstrated statistically significant reduction in major neurology events with favorable safety profile.',
    guidelineRecommendationImpact: 'Incorporated as Class I, Level A evidence in standard international neurology clinical practice guidelines.',
    contraindicatedSubgroups: [
      'Severe uncompensated hepatic impairment (Child-Pugh C)',
      'Known severe anaphylactic sensitivity to investigational compound',
    ],
  },
];

export function getNeurologyTrialsTrial(acronym: string): LandmarkTrialSummary | undefined {
  return NEUROLOGY_TRIALS_EVIDENCE.find((t) => t.acronym === acronym);
}
