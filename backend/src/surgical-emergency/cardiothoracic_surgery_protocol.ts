// Clinical Safety Protocol: Cardiothoracic & Cardiopulmonary Bypass Safety Protocols
// Healthcare Department: Cardiothoracic Surgery | Joint Commission & ACS Verified

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

export const CARDIOTHORACIC_SURGERY_PROTOCOLS: PerioperativeSafetyProtocol[] = [
  {
    protocolCode: 'SRG-PRT-CAR-001',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 001',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-002',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 002',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-003',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 003',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-004',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 004',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-005',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 005',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-006',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 006',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-007',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 007',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-008',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 008',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-009',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 009',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-010',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 010',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-011',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 011',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-012',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 012',
    safetyPhase: 'PRE_INDUCTION',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-013',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 013',
    safetyPhase: 'PRE_INCISION_TIMEOUT',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-014',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 014',
    safetyPhase: 'POST_PROCEDURE_SIGNOUT',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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
    protocolCode: 'SRG-PRT-CAR-015',
    procedureTitle: 'Cardiothoracic Surgery Safety Protocol 015',
    safetyPhase: 'PACU_DISCHARGE',
    requiredPersonnel: [
      'Attending Cardiothoracic Surgery Physician / Surgeon',
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

export function getCardiothoracicSurgeryProtocol(code: string): PerioperativeSafetyProtocol | undefined {
  return CARDIOTHORACIC_SURGERY_PROTOCOLS.find((p) => p.protocolCode === code);
}
