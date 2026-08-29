// Clinical Safety Protocol: Anesthesia Induction & Airway Management Algorithms
// Healthcare Department: Anesthesiology | Joint Commission & ACS Verified

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

export const ANESTHESIA_PROTOCOLS_PROTOCOLS: PerioperativeSafetyProtocol[] = [
  {
    protocolCode: 'SRG-PRT-ANE-001',
    procedureTitle: 'Anesthesiology Safety Protocol 001',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-002',
    procedureTitle: 'Anesthesiology Safety Protocol 002',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-003',
    procedureTitle: 'Anesthesiology Safety Protocol 003',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-004',
    procedureTitle: 'Anesthesiology Safety Protocol 004',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-005',
    procedureTitle: 'Anesthesiology Safety Protocol 005',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-006',
    procedureTitle: 'Anesthesiology Safety Protocol 006',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-007',
    procedureTitle: 'Anesthesiology Safety Protocol 007',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-008',
    procedureTitle: 'Anesthesiology Safety Protocol 008',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-009',
    procedureTitle: 'Anesthesiology Safety Protocol 009',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-010',
    procedureTitle: 'Anesthesiology Safety Protocol 010',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-011',
    procedureTitle: 'Anesthesiology Safety Protocol 011',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-012',
    procedureTitle: 'Anesthesiology Safety Protocol 012',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-013',
    procedureTitle: 'Anesthesiology Safety Protocol 013',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-014',
    procedureTitle: 'Anesthesiology Safety Protocol 014',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-ANE-015',
    procedureTitle: 'Anesthesiology Safety Protocol 015',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Anesthesiology Physician / Surgeon',
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

export function getAnesthesiaProtocolsProtocol(code: string): PerioperativeSafetyProtocol | undefined {
  return ANESTHESIA_PROTOCOLS_PROTOCOLS.find((p) => p.protocolCode === code);
}
