// Clinical Care Pathway: Chronic Obstructive Pulmonary Disease (COPD)
// ICD-10 Code: J44.9 | Specialty: Pulmonology
// Standard Care Protocol & Decision Tree

export interface ClinicalPathwayStep {
  stepId: string;
  phase: 'TRIAGE' | 'DIAGNOSTIC' | 'ACUTE_INTERVENTION' | 'MAINTENANCE' | 'MONITORING';
  clinicalActionTitle: string;
  actionDetails: string;
  orderedDiagnostics: string[];
  pharmacotherapyOrders: Array<{
    drugName: string;
    dosage: string;
    route: string;
    frequency: string;
    duration: string;
  }>;
  vitalSignTargets: Record<string, string>;
  redFlagAlerts: string[];
  escalationProtocol: string;
}

export const COPD_EXACERBATION_PATHWAY: ClinicalPathwayStep[] = [
  {
    stepId: 'CP-COPD-01',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 01',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 01',
        dosage: '20 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-02',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 02',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 02',
        dosage: '30 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-03',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 03',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 03',
        dosage: '40 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-04',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 04',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 04',
        dosage: '50 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-05',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 05',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 05',
        dosage: '10 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-06',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 06',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 06',
        dosage: '20 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-07',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 07',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 07',
        dosage: '30 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-08',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 08',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 08',
        dosage: '40 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-09',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 09',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 09',
        dosage: '50 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-10',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 10',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 10',
        dosage: '10 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-11',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 11',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 11',
        dosage: '20 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-12',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 12',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 12',
        dosage: '30 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-13',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 13',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase MAINTENANCE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 13',
        dosage: '40 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-14',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 14',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase MAINTENANCE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 14',
        dosage: '50 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-15',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 15',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase MAINTENANCE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 15',
        dosage: '10 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-16',
    phase: 'MONITORING',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 16',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase MONITORING.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 16',
        dosage: '20 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-17',
    phase: 'MONITORING',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 17',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase MONITORING.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 17',
        dosage: '30 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
  {
    stepId: 'CP-COPD-18',
    phase: 'MONITORING',
    clinicalActionTitle: 'Chronic Obstructive Pulmonary Disease (COPD) Management Protocol Step 18',
    actionDetails: 'Execute targeted clinical protocol for chronic obstructive pulmonary disease (copd) under phase MONITORING.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for pulmonology',
      'Comprehensive metabolic profile and complete blood count',
      'Diagnostic imaging or electrocardiography as indicated',
    ],
    pharmacotherapyOrders: [
      {
        drugName: 'Primary Therapeutic Agent 18',
        dosage: '40 mg',
        route: 'Oral / IV as clinically indicated',
        frequency: 'Daily or twice daily',
        duration: '14 to 30 days',
      },
    ],
    vitalSignTargets: {
      'Blood Pressure': '< 130/80 mmHg',
      'Heart Rate': '60-90 bpm',
      'SpO2': '>= 95%',
    },
    redFlagAlerts: [
      'Hemodynamic instability or shock index > 0.9',
      'Acute alteration in mental status or respiratory compromise',
    ],
    escalationProtocol: 'Immediate escalation to attending Pulmonology physician and rapid response team.',
  },
];

export function getCopdExacerbationStep(stepId: string): ClinicalPathwayStep | undefined {
  return COPD_EXACERBATION_PATHWAY.find((s) => s.stepId === stepId);
}
