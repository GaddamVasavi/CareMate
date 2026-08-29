export interface DrugInteraction {
  drugA: string;
  drugB: string;
  severity: 'MAJOR' | 'MODERATE' | 'MINOR';
  clinicalRisk: string;
  recommendation: string;
}

export const DRUG_INTERACTION_DATABASE: DrugInteraction[] = [
  {
    drugA: 'Lisinopril',
    drugB: 'Spironolactone',
    severity: 'MAJOR',
    clinicalRisk: 'Severe Hyperkalemia',
    recommendation: 'Monitor serum potassium and renal function closely. Avoid co-administration if baseline K+ > 5.0 mEq/L.',
  },
  {
    drugA: 'Warfarin',
    drugB: 'Aspirin',
    severity: 'MAJOR',
    clinicalRisk: 'Severe gastrointestinal and intracranial bleeding risk',
    recommendation: 'Avoid combination unless indicated for mechanical heart valves or ACS with high ischemic risk.',
  },
  {
    drugA: 'Metformin',
    drugB: 'Contrast Media',
    severity: 'MAJOR',
    clinicalRisk: 'Lactic Acidosis and Contrast-Induced Nephropathy',
    recommendation: 'Withhold Metformin at the time of or prior to iodinated contrast imaging and for 48 hours post-procedure.',
  },
  {
    drugA: 'Atorvastatin',
    drugB: 'Clarithromycin',
    severity: 'MAJOR',
    clinicalRisk: 'Rhabdomyolysis and severe myopathy due to CYP3A4 inhibition',
    recommendation: 'Temporarily suspend Atorvastatin during macrolide antibiotic course or switch to Pravastatin.',
  },
  {
    drugA: 'Fluoxetine',
    drugB: 'Tramadol',
    severity: 'MAJOR',
    clinicalRisk: 'Serotonin Syndrome and lowered seizure threshold',
    recommendation: 'Avoid co-administration. Monitor for autonomic instability, hyperreflexia, and agitation.',
  },
  {
    drugA: 'Ibuprofen',
    drugB: 'Lisinopril',
    severity: 'MODERATE',
    clinicalRisk: 'Attenuated antihypertensive effect and acute kidney injury',
    recommendation: 'Limit NSAID usage. Consider Acetaminophen as alternative analgesic.',
  },
];

export function checkDrugInteractions(prescribedDrugs: string[]): DrugInteraction[] {
  const detectedInteractions: DrugInteraction[] = [];
  const normalized = prescribedDrugs.map((d) => d.toLowerCase());

  for (const interaction of DRUG_INTERACTION_DATABASE) {
    const aMatch = normalized.some((d) => d.includes(interaction.drugA.toLowerCase()));
    const bMatch = normalized.some((d) => d.includes(interaction.drugB.toLowerCase()));

    if (aMatch && bMatch) {
      detectedInteractions.push(interaction);
    }
  }

  return detectedInteractions;
}
