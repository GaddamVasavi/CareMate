// Clinical Safety Protocol: Massive Transfusion Protocol (MTP) & Blood Product Safety
// Healthcare Department: Transfusion Medicine | Joint Commission & ACS Verified

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

export const TRANSFUSION_MEDICINE_PROTOCOLS: PerioperativeSafetyProtocol[] = [
  {
    protocolCode: 'SRG-PRT-TRA-001',
    procedureTitle: 'Transfusion Medicine Safety Protocol 001',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-002',
    procedureTitle: 'Transfusion Medicine Safety Protocol 002',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-003',
    procedureTitle: 'Transfusion Medicine Safety Protocol 003',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-004',
    procedureTitle: 'Transfusion Medicine Safety Protocol 004',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-005',
    procedureTitle: 'Transfusion Medicine Safety Protocol 005',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-006',
    procedureTitle: 'Transfusion Medicine Safety Protocol 006',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-007',
    procedureTitle: 'Transfusion Medicine Safety Protocol 007',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-008',
    procedureTitle: 'Transfusion Medicine Safety Protocol 008',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-009',
    procedureTitle: 'Transfusion Medicine Safety Protocol 009',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-010',
    procedureTitle: 'Transfusion Medicine Safety Protocol 010',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-011',
    procedureTitle: 'Transfusion Medicine Safety Protocol 011',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-012',
    procedureTitle: 'Transfusion Medicine Safety Protocol 012',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-013',
    procedureTitle: 'Transfusion Medicine Safety Protocol 013',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-014',
    procedureTitle: 'Transfusion Medicine Safety Protocol 014',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-TRA-015',
    procedureTitle: 'Transfusion Medicine Safety Protocol 015',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Transfusion Medicine Physician / Surgeon',
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

export function getTransfusionMedicineProtocol(code: string): PerioperativeSafetyProtocol | undefined {
  return TRANSFUSION_MEDICINE_PROTOCOLS.find((p) => p.protocolCode === code);
}
