// Clinical Safety Protocol: Contrast Media Safety & Interventional Radiology Protocols
// Healthcare Department: Radiology | Joint Commission & ACS Verified

export interface PerioperativeSafetyProtocol {
  protocolCode: string;
  procedureTitle: string;
  safetyPhase: 'PRE_INDUCTION' | 'PRE_INCISION_TIMEOUT' | 'POST_PROCEDURE_SIGNOUT' | 'PACU_DISCHARGE';
  requiredPersonnel: string[];
  mandatoryChecklistItems: string[];
  contraindicationsOrHaltTriggers: string[];
  criticalMedicationDosing: string;
  expectedBloodLossEstimateMl: number;
  escalationChainOfCommand: string[];
}

export const RADIOLOGY_PROTOCOLS_PROTOCOLS: PerioperativeSafetyProtocol[] = [
  {
    protocolCode: 'SRG-PRT-RAD-001',
    procedureTitle: 'Radiology Safety Protocol 001',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 100,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-002',
    procedureTitle: 'Radiology Safety Protocol 002',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 150,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-003',
    procedureTitle: 'Radiology Safety Protocol 003',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 200,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-004',
    procedureTitle: 'Radiology Safety Protocol 004',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 250,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-005',
    procedureTitle: 'Radiology Safety Protocol 005',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 300,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-006',
    procedureTitle: 'Radiology Safety Protocol 006',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 350,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-007',
    procedureTitle: 'Radiology Safety Protocol 007',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 400,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-008',
    procedureTitle: 'Radiology Safety Protocol 008',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 50,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-009',
    procedureTitle: 'Radiology Safety Protocol 009',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 100,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-010',
    procedureTitle: 'Radiology Safety Protocol 010',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 150,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-011',
    procedureTitle: 'Radiology Safety Protocol 011',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 200,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-012',
    procedureTitle: 'Radiology Safety Protocol 012',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 250,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-013',
    procedureTitle: 'Radiology Safety Protocol 013',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 300,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-014',
    procedureTitle: 'Radiology Safety Protocol 014',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 350,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
  {
    protocolCode: 'SRG-PRT-RAD-015',
    procedureTitle: 'Radiology Safety Protocol 015',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Radiology Physician / Surgeon',
      'Certified Registered Nurse Anesthetist / Anesthesiologist',
      'Circulating Perioperative Registered Nurse',
      'Certified Surgical Technologist / Scrub Nurse',
    ],
    mandatoryChecklistItems: [
      'Patient identity, surgical site marking, and consent form verified',
      'Prophylactic antibiotic infusion completed within 60 min prior to incision',
      'Airway and aspiration risk evaluated with difficult airway cart in room',
      'Sponge, needle, and instrument count verified correct and complete',
    ],
    contraindicationsOrHaltTriggers: [
      'Unresolved discrepancy in surgical site marking or patient consent',
      'Acute hemodynamic instability prior to anesthesia induction',
    ],
    criticalMedicationDosing: 'Cefazolin 2g IV (3g if weight > 120kg) or Vancomycin 15mg/kg if MRSA colonized.',
    expectedBloodLossEstimateMl: 400,
    escalationChainOfCommand: [
      'Operating Room Charge Nurse',
      'Chief of Surgical Services',
      'Chief Medical Officer (CMO)',
    ],
  },
];

export function getRadiologyProtocolsProtocol(code: string): PerioperativeSafetyProtocol | undefined {
  return RADIOLOGY_PROTOCOLS_PROTOCOLS.find((p) => p.protocolCode === code);
}
