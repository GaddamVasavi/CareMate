// Clinical Care Pathway: Congestive Heart Failure (HFrEF / HFpEF)
// ICD-10 Code: I50.9 | Specialty: Cardiovascular
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

export const CONGESTIVE_HEART_FAILURE_PATHWAY: ClinicalPathwayStep[] = [
  {
    stepId: 'CP-CONG-01',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 01',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-02',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 02',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-03',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 03',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-04',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 04',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-05',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 05',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-06',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 06',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-07',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 07',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-08',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 08',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-09',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 09',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-10',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 10',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-11',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 11',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-12',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 12',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-13',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 13',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase MAINTENANCE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-14',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 14',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase MAINTENANCE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-15',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 15',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase MAINTENANCE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-16',
    phase: 'MONITORING',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 16',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase MONITORING.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-17',
    phase: 'MONITORING',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 17',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase MONITORING.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
  {
    stepId: 'CP-CONG-18',
    phase: 'MONITORING',
    clinicalActionTitle: 'Congestive Heart Failure (HFrEF / HFpEF) Management Protocol Step 18',
    actionDetails: 'Execute targeted clinical protocol for congestive heart failure (hfref / hfpef) under phase MONITORING.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for cardiovascular',
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
    escalationProtocol: 'Immediate escalation to attending Cardiovascular physician and rapid response team.',
  },
];

export function getCongestiveHeartFailureStep(stepId: string): ClinicalPathwayStep | undefined {
  return CONGESTIVE_HEART_FAILURE_PATHWAY.find((s) => s.stepId === stepId);
}
