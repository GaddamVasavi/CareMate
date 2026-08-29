// Clinical Care Pathway: Atrial Fibrillation Rate/Rhythm Control
// ICD-10 Code: I48.91 | Specialty: Cardiovascular
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

export const ATRIAL_FIBRILLATION_PATHWAY: ClinicalPathwayStep[] = [
  {
    stepId: 'CP-ATRI-01',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 01',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase TRIAGE.',
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
    stepId: 'CP-ATRI-02',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 02',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase TRIAGE.',
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
    stepId: 'CP-ATRI-03',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 03',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase TRIAGE.',
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
    stepId: 'CP-ATRI-04',
    phase: 'TRIAGE',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 04',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase TRIAGE.',
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
    stepId: 'CP-ATRI-05',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 05',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase DIAGNOSTIC.',
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
    stepId: 'CP-ATRI-06',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 06',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase DIAGNOSTIC.',
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
    stepId: 'CP-ATRI-07',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 07',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase DIAGNOSTIC.',
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
    stepId: 'CP-ATRI-08',
    phase: 'DIAGNOSTIC',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 08',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase DIAGNOSTIC.',
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
    stepId: 'CP-ATRI-09',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 09',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase ACUTE_INTERVENTION.',
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
    stepId: 'CP-ATRI-10',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 10',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase ACUTE_INTERVENTION.',
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
    stepId: 'CP-ATRI-11',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 11',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase ACUTE_INTERVENTION.',
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
    stepId: 'CP-ATRI-12',
    phase: 'ACUTE_INTERVENTION',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 12',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase ACUTE_INTERVENTION.',
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
    stepId: 'CP-ATRI-13',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 13',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase MAINTENANCE.',
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
    stepId: 'CP-ATRI-14',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 14',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase MAINTENANCE.',
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
    stepId: 'CP-ATRI-15',
    phase: 'MAINTENANCE',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 15',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase MAINTENANCE.',
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
    stepId: 'CP-ATRI-16',
    phase: 'MONITORING',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 16',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase MONITORING.',
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
    stepId: 'CP-ATRI-17',
    phase: 'MONITORING',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 17',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase MONITORING.',
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
    stepId: 'CP-ATRI-18',
    phase: 'MONITORING',
    clinicalActionTitle: 'Atrial Fibrillation Rate/Rhythm Control Management Protocol Step 18',
    actionDetails: 'Execute targeted clinical protocol for atrial fibrillation rate/rhythm control under phase MONITORING.',
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

export function getAtrialFibrillationStep(stepId: string): ClinicalPathwayStep | undefined {
  return ATRIAL_FIBRILLATION_PATHWAY.find((s) => s.stepId === stepId);
}
