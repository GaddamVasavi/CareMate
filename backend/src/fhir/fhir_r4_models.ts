// HL7 FHIR Release 4 Standard Clinical Resource Definitions
// Compliant with US Core Implementation Guide (USCDI v3)

export interface FHIRIdentifier {
  use?: 'usual' | 'official' | 'temp' | 'secondary';
  system?: string;
  value: string;
}

export interface FHIRHumanName {
  use?: 'usual' | 'official' | 'temp' | 'nickname' | 'maiden';
  text?: string;
  family?: string;
  given?: string[];
  prefix?: string[];
  suffix?: string[];
}

export interface FHIRContactPoint {
  system?: 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms';
  value?: string;
  use?: 'home' | 'work' | 'temp' | 'old' | 'mobile';
}

export interface FHIRAddress {
  use?: 'home' | 'work' | 'temp' | 'billing';
  line?: string[];
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface FHIRCoding {
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;
}

export interface FHIRCodeableConcept {
  coding?: FHIRCoding[];
  text?: string;
}

export interface FHIRReference {
  reference?: string;
  type?: string;
  display?: string;
}

export interface FHIRPatient {
  resourceType: 'Patient';
  id: string;
  identifier?: FHIRIdentifier[];
  active?: boolean;
  name?: FHIRHumanName[];
  telecom?: FHIRContactPoint[];
  gender?: 'male' | 'female' | 'other' | 'unknown';
  birthDate?: string; // YYYY-MM-DD
  address?: FHIRAddress[];
}

export interface FHIRObservation {
  resourceType: 'Observation';
  id: string;
  status: 'registered' | 'preliminary' | 'final' | 'amended' | 'corrected' | 'cancelled';
  category?: FHIRCodeableConcept[];
  code: FHIRCodeableConcept;
  subject: FHIRReference;
  effectiveDateTime?: string;
  valueQuantity?: {
    value?: number;
    unit?: string;
    system?: string;
    code?: string;
  };
  valueString?: string;
  interpretation?: FHIRCodeableConcept[];
  referenceRange?: Array<{
    low?: { value?: number; unit?: string };
    high?: { value?: number; unit?: string };
    text?: string;
  }>;
}

export interface FHIRMedicationRequest {
  resourceType: 'MedicationRequest';
  id: string;
  status: 'active' | 'on-hold' | 'cancelled' | 'completed' | 'entered-in-error' | 'stopped' | 'draft';
  intent: 'proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order';
  medicationCodeableConcept?: FHIRCodeableConcept;
  subject: FHIRReference;
  requester?: FHIRReference;
  authoredOn?: string;
  dosageInstruction?: Array<{
    text?: string;
    timing?: { repeat?: { frequency?: number; period?: number; periodUnit?: string } };
    doseAndRate?: Array<{ doseQuantity?: { value?: number; unit?: string } }>;
  }>;
}

export function convertPatientToFHIR(patient: any): FHIRPatient {
  return {
    resourceType: 'Patient',
    id: patient.id,
    identifier: [
      {
        use: 'official',
        system: 'urn:oid:caremate.patient.id',
        value: patient.id,
      },
    ],
    active: patient.user?.isActive ?? true,
    name: [
      {
        use: 'official',
        family: patient.user?.lastName || '',
        given: [patient.user?.firstName || ''],
      },
    ],
    telecom: [
      { system: 'email', value: patient.user?.email, use: 'home' },
      { system: 'phone', value: patient.user?.phone, use: 'mobile' },
    ],
    gender: patient.gender === 'MALE' ? 'male' : patient.gender === 'FEMALE' ? 'female' : 'other',
    birthDate: patient.dateOfBirth ? new Date(patient.dateOfBirth).toISOString().split('T')[0] : undefined,
    address: patient.user?.address
      ? [
          {
            use: 'home',
            line: [patient.user.address.street],
            city: patient.user.address.city,
            state: patient.user.address.state,
            postalCode: patient.user.address.postalCode,
            country: patient.user.address.country,
          },
        ]
      : undefined,
  };
}
