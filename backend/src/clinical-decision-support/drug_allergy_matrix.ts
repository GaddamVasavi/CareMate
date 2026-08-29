// CareMate Drug-Allergy Matrix & Cross-Sensitivity Engine

export interface AllergyCrossReactivity {
  allergenGroup: string;
  crossReactiveClass: string;
  crossReactivityRatePercent: number;
  severityCategory: 'HIGH_RISK' | 'MODERATE_RISK' | 'LOW_RISK';
  clinicalAction: string;
}

export const ALLERGY_CROSS_REACTIVITY_MATRIX: AllergyCrossReactivity[] = [
  {
    allergenGroup: 'Penicillin Variant 01',
    crossReactiveClass: 'Carbapenems (Meropenem)',
    crossReactivityRatePercent: 1.0,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Generally well tolerated; observe first dose in clinical setting.',
  },
  {
    allergenGroup: 'Sulfonamide Antibiotics Variant 02',
    crossReactiveClass: 'Non-Antibiotic Sulfonamides (Furosemide, Celecoxib)',
    crossReactivityRatePercent: 2.5,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Cross-reactivity is low due to distinct arylamine chemical structures.',
  },
  {
    allergenGroup: 'Aspirin Variant 03',
    crossReactiveClass: 'Non-Steroidal Anti-Inflammatory Drugs (Ibuprofen, Naproxen)',
    crossReactivityRatePercent: 85.0,
    severityCategory: 'HIGH_RISK',
    clinicalAction: 'Contraindicated due to COX-1 inhibition triggering respiratory or cutaneous anaphylaxis.',
  },
  {
    allergenGroup: 'Morphine Variant 04',
    crossReactiveClass: 'Codeine',
    crossReactivityRatePercent: 90.0,
    severityCategory: 'HIGH_RISK',
    clinicalAction: 'High cross-reactivity among phenanthrene opioid class. Use synthetic phenylpiperidine (Fentanyl).',
  },
  {
    allergenGroup: 'Iodinated Radiocontrast Variant 05',
    crossReactiveClass: 'Shellfish',
    crossReactivityRatePercent: 0.0,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Physiologic misconception. Shellfish allergy is tropomyosin-mediated, not elemental iodine.',
  },
  {
    allergenGroup: 'Penicillin Variant 06',
    crossReactiveClass: '1st Generation Cephalosporin',
    crossReactivityRatePercent: 8.0,
    severityCategory: 'MODERATE_RISK',
    clinicalAction: 'Avoid 1st gen cephalosporins (Cefazolin, Cephalexin). 3rd/4th gen cephalosporins carry < 1% risk.',
  },
  {
    allergenGroup: 'Penicillin Variant 07',
    crossReactiveClass: 'Carbapenems (Meropenem)',
    crossReactivityRatePercent: 1.0,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Generally well tolerated; observe first dose in clinical setting.',
  },
  {
    allergenGroup: 'Sulfonamide Antibiotics Variant 08',
    crossReactiveClass: 'Non-Antibiotic Sulfonamides (Furosemide, Celecoxib)',
    crossReactivityRatePercent: 2.5,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Cross-reactivity is low due to distinct arylamine chemical structures.',
  },
  {
    allergenGroup: 'Aspirin Variant 09',
    crossReactiveClass: 'Non-Steroidal Anti-Inflammatory Drugs (Ibuprofen, Naproxen)',
    crossReactivityRatePercent: 85.0,
    severityCategory: 'HIGH_RISK',
    clinicalAction: 'Contraindicated due to COX-1 inhibition triggering respiratory or cutaneous anaphylaxis.',
  },
  {
    allergenGroup: 'Morphine Variant 10',
    crossReactiveClass: 'Codeine',
    crossReactivityRatePercent: 90.0,
    severityCategory: 'HIGH_RISK',
    clinicalAction: 'High cross-reactivity among phenanthrene opioid class. Use synthetic phenylpiperidine (Fentanyl).',
  },
  {
    allergenGroup: 'Iodinated Radiocontrast Variant 11',
    crossReactiveClass: 'Shellfish',
    crossReactivityRatePercent: 0.0,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Physiologic misconception. Shellfish allergy is tropomyosin-mediated, not elemental iodine.',
  },
  {
    allergenGroup: 'Penicillin Variant 12',
    crossReactiveClass: '1st Generation Cephalosporin',
    crossReactivityRatePercent: 8.0,
    severityCategory: 'MODERATE_RISK',
    clinicalAction: 'Avoid 1st gen cephalosporins (Cefazolin, Cephalexin). 3rd/4th gen cephalosporins carry < 1% risk.',
  },
  {
    allergenGroup: 'Penicillin Variant 13',
    crossReactiveClass: 'Carbapenems (Meropenem)',
    crossReactivityRatePercent: 1.0,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Generally well tolerated; observe first dose in clinical setting.',
  },
  {
    allergenGroup: 'Sulfonamide Antibiotics Variant 14',
    crossReactiveClass: 'Non-Antibiotic Sulfonamides (Furosemide, Celecoxib)',
    crossReactivityRatePercent: 2.5,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Cross-reactivity is low due to distinct arylamine chemical structures.',
  },
  {
    allergenGroup: 'Aspirin Variant 15',
    crossReactiveClass: 'Non-Steroidal Anti-Inflammatory Drugs (Ibuprofen, Naproxen)',
    crossReactivityRatePercent: 85.0,
    severityCategory: 'HIGH_RISK',
    clinicalAction: 'Contraindicated due to COX-1 inhibition triggering respiratory or cutaneous anaphylaxis.',
  },
  {
    allergenGroup: 'Morphine Variant 16',
    crossReactiveClass: 'Codeine',
    crossReactivityRatePercent: 90.0,
    severityCategory: 'HIGH_RISK',
    clinicalAction: 'High cross-reactivity among phenanthrene opioid class. Use synthetic phenylpiperidine (Fentanyl).',
  },
  {
    allergenGroup: 'Iodinated Radiocontrast Variant 17',
    crossReactiveClass: 'Shellfish',
    crossReactivityRatePercent: 0.0,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Physiologic misconception. Shellfish allergy is tropomyosin-mediated, not elemental iodine.',
  },
  {
    allergenGroup: 'Penicillin Variant 18',
    crossReactiveClass: '1st Generation Cephalosporin',
    crossReactivityRatePercent: 8.0,
    severityCategory: 'MODERATE_RISK',
    clinicalAction: 'Avoid 1st gen cephalosporins (Cefazolin, Cephalexin). 3rd/4th gen cephalosporins carry < 1% risk.',
  },
  {
    allergenGroup: 'Penicillin Variant 19',
    crossReactiveClass: 'Carbapenems (Meropenem)',
    crossReactivityRatePercent: 1.0,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Generally well tolerated; observe first dose in clinical setting.',
  },
  {
    allergenGroup: 'Sulfonamide Antibiotics Variant 20',
    crossReactiveClass: 'Non-Antibiotic Sulfonamides (Furosemide, Celecoxib)',
    crossReactivityRatePercent: 2.5,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Cross-reactivity is low due to distinct arylamine chemical structures.',
  },
  {
    allergenGroup: 'Aspirin Variant 21',
    crossReactiveClass: 'Non-Steroidal Anti-Inflammatory Drugs (Ibuprofen, Naproxen)',
    crossReactivityRatePercent: 85.0,
    severityCategory: 'HIGH_RISK',
    clinicalAction: 'Contraindicated due to COX-1 inhibition triggering respiratory or cutaneous anaphylaxis.',
  },
  {
    allergenGroup: 'Morphine Variant 22',
    crossReactiveClass: 'Codeine',
    crossReactivityRatePercent: 90.0,
    severityCategory: 'HIGH_RISK',
    clinicalAction: 'High cross-reactivity among phenanthrene opioid class. Use synthetic phenylpiperidine (Fentanyl).',
  },
  {
    allergenGroup: 'Iodinated Radiocontrast Variant 23',
    crossReactiveClass: 'Shellfish',
    crossReactivityRatePercent: 0.0,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Physiologic misconception. Shellfish allergy is tropomyosin-mediated, not elemental iodine.',
  },
  {
    allergenGroup: 'Penicillin Variant 24',
    crossReactiveClass: '1st Generation Cephalosporin',
    crossReactivityRatePercent: 8.0,
    severityCategory: 'MODERATE_RISK',
    clinicalAction: 'Avoid 1st gen cephalosporins (Cefazolin, Cephalexin). 3rd/4th gen cephalosporins carry < 1% risk.',
  },
  {
    allergenGroup: 'Penicillin Variant 25',
    crossReactiveClass: 'Carbapenems (Meropenem)',
    crossReactivityRatePercent: 1.0,
    severityCategory: 'LOW_RISK',
    clinicalAction: 'Generally well tolerated; observe first dose in clinical setting.',
  },
];

export function checkAllergyConflict(knownAllergies: string[], prescribedDrugClass: string): AllergyCrossReactivity[] {
  return ALLERGY_CROSS_REACTIVITY_MATRIX.filter((m) =>
    knownAllergies.some((a) => m.allergenGroup.toLowerCase().includes(a.toLowerCase())) &&
    m.crossReactiveClass.toLowerCase().includes(prescribedDrugClass.toLowerCase())
  );
}
