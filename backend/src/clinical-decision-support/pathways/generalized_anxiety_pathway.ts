// Clinical Care Pathway: Generalized Anxiety Disorder (GAD)
// ICD-10 Code: F41.1 | Specialty: Psychiatry
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

export const GENERALIZED_ANXIETY_PATHWAY: ClinicalPathwayStep[] = [
  {
    stepId: 'CP-GENE-01',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 01',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-02',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 02',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-03',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 03',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-04',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 04',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase TRIAGE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-05',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 05',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-06',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 06',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-07',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 07',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-08',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 08',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase DIAGNOSTIC.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-09',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 09',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-10',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 10',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-11',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 11',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-12',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 12',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase ACUTE_INTERVENTION.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-13',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 13',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase MAINTENANCE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-14',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 14',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase MAINTENANCE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-15',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 15',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase MAINTENANCE.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-16',
    phase: 'MONITORING',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 16',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase MONITORING.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-17',
    phase: 'MONITORING',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 17',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase MONITORING.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
  {
    stepId: 'CP-GENE-18',
    phase: 'MONITORING',
    clinicalActionTitle: 'Generalized Anxiety Disorder (GAD) Management Protocol Step 18',
    actionDetails: 'Execute targeted clinical protocol for generalized anxiety disorder (gad) under phase MONITORING.',
    orderedDiagnostics: [
      'Targeted laboratory diagnostic panel for psychiatry',
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
    escalationProtocol: 'Immediate escalation to attending Psychiatry physician and rapid response team.',
  },
];

export function getGeneralizedAnxietyStep(stepId: string): ClinicalPathwayStep | undefined {
  return GENERALIZED_ANXIETY_PATHWAY.find((s) => s.stepId === stepId);
}
