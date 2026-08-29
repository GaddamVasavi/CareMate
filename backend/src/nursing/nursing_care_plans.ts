// CareMate Inpatient Nursing Care Plans & Patient Safety Bundles
// JCAHO & Magnet Hospital Quality Compliance Standards

export interface NursingCarePlan {
  planId: string;
  nursingDiagnosis: string;
  relatedEtiology: string;
  definingCharacteristics: string[];
  expectedPatientOutcomes: string[];
  nursingInterventions: string[];
  evaluationCriteria: string;
  monitoringFrequencyHours: number;
  safetyAlertLevel: 'ROUTINE' | 'ELEVATED' | 'HIGH_FALL_RISK' | 'CRITICAL_ISOLATION';
}

export const NURSING_CARE_PLANS: NursingCarePlan[] = [
  {
    planId: 'NCP-PLN-0001',
    nursingDiagnosis: 'Decreased Cardiac Output Protocol Variant 01',
    relatedEtiology: 'Altered inotropic contractility and preload insufficiency',
    definingCharacteristics: ['Hypotension BP < 90/60', 'Oliguria < 30 mL/hr', 'Cold clammy extremities', 'S3 heart sound'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 4,
    safetyAlertLevel: 'ROUTINE',
  },
  {
    planId: 'NCP-PLN-0002',
    nursingDiagnosis: 'Risk for Acute Kidney Injury Protocol Variant 02',
    relatedEtiology: 'Hypovolemia and decreased renal perfusion pressure',
    definingCharacteristics: ['BUN/Creatinine elevation', 'Urine output < 0.5 mL/kg/hr for 6 hours', 'Metabolic acidosis'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 6,
    safetyAlertLevel: 'ELEVATED',
  },
  {
    planId: 'NCP-PLN-0003',
    nursingDiagnosis: 'Acute Pain Protocol Variant 03',
    relatedEtiology: 'Biological injury agent and tissue inflammatory response',
    definingCharacteristics: ['Verbal pain score >= 7/10', 'Guarding behavior', 'Diaphoresis', 'Tachycardia'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 8,
    safetyAlertLevel: 'ROUTINE',
  },
  {
    planId: 'NCP-PLN-0004',
    nursingDiagnosis: 'Risk for Infection Protocol Variant 04',
    relatedEtiology: 'Invasive intravenous central venous catheter and immunosuppression',
    definingCharacteristics: ['Erythema at insertion site', 'Temperature > 38.3 C', 'Leukocytosis WBC > 12,000'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 2,
    safetyAlertLevel: 'HIGH_FALL_RISK',
  },
  {
    planId: 'NCP-PLN-0005',
    nursingDiagnosis: 'Impaired Physical Mobility Protocol Variant 05',
    relatedEtiology: 'Neuromuscular impairment and post-surgical joint immobilization',
    definingCharacteristics: ['Limited active range of motion', 'Gait instability', 'Muscle weakness'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 4,
    safetyAlertLevel: 'ROUTINE',
  },
  {
    planId: 'NCP-PLN-0006',
    nursingDiagnosis: 'Impaired Gas Exchange Protocol Variant 06',
    relatedEtiology: 'Alveolar-capillary membrane changes secondary to pulmonary consolidation',
    definingCharacteristics: ['SpO2 < 92%', 'Dyspnea on minimal exertion', 'Restlessness', 'Tachypnea RR > 26'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 6,
    safetyAlertLevel: 'ELEVATED',
  },
  {
    planId: 'NCP-PLN-0007',
    nursingDiagnosis: 'Decreased Cardiac Output Protocol Variant 07',
    relatedEtiology: 'Altered inotropic contractility and preload insufficiency',
    definingCharacteristics: ['Hypotension BP < 90/60', 'Oliguria < 30 mL/hr', 'Cold clammy extremities', 'S3 heart sound'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 8,
    safetyAlertLevel: 'CRITICAL_ISOLATION',
  },
  {
    planId: 'NCP-PLN-0008',
    nursingDiagnosis: 'Risk for Acute Kidney Injury Protocol Variant 08',
    relatedEtiology: 'Hypovolemia and decreased renal perfusion pressure',
    definingCharacteristics: ['BUN/Creatinine elevation', 'Urine output < 0.5 mL/kg/hr for 6 hours', 'Metabolic acidosis'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 2,
    safetyAlertLevel: 'HIGH_FALL_RISK',
  },
  {
    planId: 'NCP-PLN-0009',
    nursingDiagnosis: 'Acute Pain Protocol Variant 09',
    relatedEtiology: 'Biological injury agent and tissue inflammatory response',
    definingCharacteristics: ['Verbal pain score >= 7/10', 'Guarding behavior', 'Diaphoresis', 'Tachycardia'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 4,
    safetyAlertLevel: 'ROUTINE',
  },
  {
    planId: 'NCP-PLN-0010',
    nursingDiagnosis: 'Risk for Infection Protocol Variant 10',
    relatedEtiology: 'Invasive intravenous central venous catheter and immunosuppression',
    definingCharacteristics: ['Erythema at insertion site', 'Temperature > 38.3 C', 'Leukocytosis WBC > 12,000'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 6,
    safetyAlertLevel: 'ELEVATED',
  },
  {
    planId: 'NCP-PLN-0011',
    nursingDiagnosis: 'Impaired Physical Mobility Protocol Variant 11',
    relatedEtiology: 'Neuromuscular impairment and post-surgical joint immobilization',
    definingCharacteristics: ['Limited active range of motion', 'Gait instability', 'Muscle weakness'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 8,
    safetyAlertLevel: 'ROUTINE',
  },
  {
    planId: 'NCP-PLN-0012',
    nursingDiagnosis: 'Impaired Gas Exchange Protocol Variant 12',
    relatedEtiology: 'Alveolar-capillary membrane changes secondary to pulmonary consolidation',
    definingCharacteristics: ['SpO2 < 92%', 'Dyspnea on minimal exertion', 'Restlessness', 'Tachypnea RR > 26'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 2,
    safetyAlertLevel: 'HIGH_FALL_RISK',
  },
  {
    planId: 'NCP-PLN-0013',
    nursingDiagnosis: 'Decreased Cardiac Output Protocol Variant 13',
    relatedEtiology: 'Altered inotropic contractility and preload insufficiency',
    definingCharacteristics: ['Hypotension BP < 90/60', 'Oliguria < 30 mL/hr', 'Cold clammy extremities', 'S3 heart sound'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 4,
    safetyAlertLevel: 'ROUTINE',
  },
  {
    planId: 'NCP-PLN-0014',
    nursingDiagnosis: 'Risk for Acute Kidney Injury Protocol Variant 14',
    relatedEtiology: 'Hypovolemia and decreased renal perfusion pressure',
    definingCharacteristics: ['BUN/Creatinine elevation', 'Urine output < 0.5 mL/kg/hr for 6 hours', 'Metabolic acidosis'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 6,
    safetyAlertLevel: 'CRITICAL_ISOLATION',
  },
  {
    planId: 'NCP-PLN-0015',
    nursingDiagnosis: 'Acute Pain Protocol Variant 15',
    relatedEtiology: 'Biological injury agent and tissue inflammatory response',
    definingCharacteristics: ['Verbal pain score >= 7/10', 'Guarding behavior', 'Diaphoresis', 'Tachycardia'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 8,
    safetyAlertLevel: 'ROUTINE',
  },
  {
    planId: 'NCP-PLN-0016',
    nursingDiagnosis: 'Risk for Infection Protocol Variant 16',
    relatedEtiology: 'Invasive intravenous central venous catheter and immunosuppression',
    definingCharacteristics: ['Erythema at insertion site', 'Temperature > 38.3 C', 'Leukocytosis WBC > 12,000'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 2,
    safetyAlertLevel: 'HIGH_FALL_RISK',
  },
  {
    planId: 'NCP-PLN-0017',
    nursingDiagnosis: 'Impaired Physical Mobility Protocol Variant 17',
    relatedEtiology: 'Neuromuscular impairment and post-surgical joint immobilization',
    definingCharacteristics: ['Limited active range of motion', 'Gait instability', 'Muscle weakness'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 4,
    safetyAlertLevel: 'ROUTINE',
  },
  {
    planId: 'NCP-PLN-0018',
    nursingDiagnosis: 'Impaired Gas Exchange Protocol Variant 18',
    relatedEtiology: 'Alveolar-capillary membrane changes secondary to pulmonary consolidation',
    definingCharacteristics: ['SpO2 < 92%', 'Dyspnea on minimal exertion', 'Restlessness', 'Tachypnea RR > 26'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 6,
    safetyAlertLevel: 'ELEVATED',
  },
  {
    planId: 'NCP-PLN-0019',
    nursingDiagnosis: 'Decreased Cardiac Output Protocol Variant 19',
    relatedEtiology: 'Altered inotropic contractility and preload insufficiency',
    definingCharacteristics: ['Hypotension BP < 90/60', 'Oliguria < 30 mL/hr', 'Cold clammy extremities', 'S3 heart sound'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 8,
    safetyAlertLevel: 'ROUTINE',
  },
  {
    planId: 'NCP-PLN-0020',
    nursingDiagnosis: 'Risk for Acute Kidney Injury Protocol Variant 20',
    relatedEtiology: 'Hypovolemia and decreased renal perfusion pressure',
    definingCharacteristics: ['BUN/Creatinine elevation', 'Urine output < 0.5 mL/kg/hr for 6 hours', 'Metabolic acidosis'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 2,
    safetyAlertLevel: 'HIGH_FALL_RISK',
  },
  {
    planId: 'NCP-PLN-0021',
    nursingDiagnosis: 'Acute Pain Protocol Variant 21',
    relatedEtiology: 'Biological injury agent and tissue inflammatory response',
    definingCharacteristics: ['Verbal pain score >= 7/10', 'Guarding behavior', 'Diaphoresis', 'Tachycardia'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 4,
    safetyAlertLevel: 'CRITICAL_ISOLATION',
  },
  {
    planId: 'NCP-PLN-0022',
    nursingDiagnosis: 'Risk for Infection Protocol Variant 22',
    relatedEtiology: 'Invasive intravenous central venous catheter and immunosuppression',
    definingCharacteristics: ['Erythema at insertion site', 'Temperature > 38.3 C', 'Leukocytosis WBC > 12,000'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 6,
    safetyAlertLevel: 'ELEVATED',
  },
  {
    planId: 'NCP-PLN-0023',
    nursingDiagnosis: 'Impaired Physical Mobility Protocol Variant 23',
    relatedEtiology: 'Neuromuscular impairment and post-surgical joint immobilization',
    definingCharacteristics: ['Limited active range of motion', 'Gait instability', 'Muscle weakness'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 8,
    safetyAlertLevel: 'ROUTINE',
  },
  {
    planId: 'NCP-PLN-0024',
    nursingDiagnosis: 'Impaired Gas Exchange Protocol Variant 24',
    relatedEtiology: 'Alveolar-capillary membrane changes secondary to pulmonary consolidation',
    definingCharacteristics: ['SpO2 < 92%', 'Dyspnea on minimal exertion', 'Restlessness', 'Tachypnea RR > 26'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 2,
    safetyAlertLevel: 'HIGH_FALL_RISK',
  },
  {
    planId: 'NCP-PLN-0025',
    nursingDiagnosis: 'Decreased Cardiac Output Protocol Variant 25',
    relatedEtiology: 'Altered inotropic contractility and preload insufficiency',
    definingCharacteristics: ['Hypotension BP < 90/60', 'Oliguria < 30 mL/hr', 'Cold clammy extremities', 'S3 heart sound'],
    expectedPatientOutcomes: [
      'Patient maintains hemodynamic and respiratory parameters within target baseline',
      'Demonstrates absence of secondary hospital-acquired complications',
    ],
    nursingInterventions: [
      'Perform comprehensive head-to-toe physical assessment every shift',
      'Administer physician-prescribed pharmacotherapy and monitor for adverse effects',
      'Reposition patient every 2 hours and maintain skin integrity precautions',
    ],
    evaluationCriteria: 'Target clinical goals achieved and documented within electronic health record.',
    monitoringFrequencyHours: 4,
    safetyAlertLevel: 'ROUTINE',
  },
];

export function getNursingCarePlan(id: string): NursingCarePlan | undefined {
  return NURSING_CARE_PLANS.find((p) => p.planId === id);
}
