// CareMate Oncology Chemotherapy & Targeted Biotherapy Regimen Library
// NCCN (National Comprehensive Cancer Network) Category 1 Protocols

export interface ChemotherapyRegimen {
  regimenCode: string;
  regimenName: string;
  cancerType: string;
  cycleLengthDays: number;
  totalCyclesPlanned: number;
  emetogenicPotential: 'MINIMAL' | 'LOW' | 'MODERATE' | 'HIGH';
  preMedications: string[];
  chemotherapyAgents: Array<{
    agentName: string;
    standardDoseM2OrKg: string;
    administrationRoute: 'INTRAVENOUS_INFUSION' | 'IV_BOLUS' | 'ORAL' | 'SUBCUTANEOUS';
    infusionDurationMinutes: number;
    dayOfCycle: number[];
  }>;
  doseModificationGuidelines: string;
  mandatoryLabClearance: string[];
}

export const CHEMOTHERAPY_REGIMENS: ChemotherapyRegimen[] = [
  {
    regimenCode: 'ONC-REG-0001',
    regimenName: 'AC-T Modified Protocol 01',
    cancerType: 'Invasive Breast Carcinoma (HER2 Negative)',
    cycleLengthDays: 21,
    totalCyclesPlanned: 8,
    emetogenicPotential: 'HIGH',
    preMedications: ['Dexamethasone 20mg IV', 'Palonosetron 0.25mg IV', 'Fosaprepitant 150mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 01',
        standardDoseM2OrKg: '65 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 120,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0002',
    regimenName: 'R-CHOP Modified Protocol 02',
    cancerType: 'Diffuse Large B-Cell Lymphoma',
    cycleLengthDays: 21,
    totalCyclesPlanned: 6,
    emetogenicPotential: 'HIGH',
    preMedications: ['Diphenhydramine 50mg IV', 'Acetaminophen 650mg PO', 'Dexamethasone 20mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 02',
        standardDoseM2OrKg: '80 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 180,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0003',
    regimenName: 'FOLFIRINOX Modified Protocol 03',
    cancerType: 'Pancreatic Ductal Adenocarcinoma',
    cycleLengthDays: 14,
    totalCyclesPlanned: 12,
    emetogenicPotential: 'HIGH',
    preMedications: ['Atropine 0.5mg SC for cholinergic syndrome', 'Ondansetron 16mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 03',
        standardDoseM2OrKg: '95 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 240,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0004',
    regimenName: 'Cisplatin-Pemetrexed Modified Protocol 04',
    cancerType: 'Non-Small Cell Lung Cancer (Adenocarcinoma)',
    cycleLengthDays: 21,
    totalCyclesPlanned: 4,
    emetogenicPotential: 'HIGH',
    preMedications: ['Folic Acid 1mg PO daily', 'Vitamin B12 1000mcg IM q9w', 'Dexamethasone 4mg PO BID'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 04',
        standardDoseM2OrKg: '110 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 60,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0005',
    regimenName: 'FOLFOX-6 Modified Protocol 05',
    cancerType: 'Colorectal Adenocarcinoma',
    cycleLengthDays: 14,
    totalCyclesPlanned: 12,
    emetogenicPotential: 'MODERATE',
    preMedications: ['Dexamethasone 12mg IV', 'Ondansetron 16mg IV', 'Aprepitant 125mg PO'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 05',
        standardDoseM2OrKg: '125 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 120,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0006',
    regimenName: 'AC-T Modified Protocol 06',
    cancerType: 'Invasive Breast Carcinoma (HER2 Negative)',
    cycleLengthDays: 21,
    totalCyclesPlanned: 8,
    emetogenicPotential: 'HIGH',
    preMedications: ['Dexamethasone 20mg IV', 'Palonosetron 0.25mg IV', 'Fosaprepitant 150mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 06',
        standardDoseM2OrKg: '140 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 180,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0007',
    regimenName: 'R-CHOP Modified Protocol 07',
    cancerType: 'Diffuse Large B-Cell Lymphoma',
    cycleLengthDays: 21,
    totalCyclesPlanned: 6,
    emetogenicPotential: 'HIGH',
    preMedications: ['Diphenhydramine 50mg IV', 'Acetaminophen 650mg PO', 'Dexamethasone 20mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 07',
        standardDoseM2OrKg: '155 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 240,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0008',
    regimenName: 'FOLFIRINOX Modified Protocol 08',
    cancerType: 'Pancreatic Ductal Adenocarcinoma',
    cycleLengthDays: 14,
    totalCyclesPlanned: 12,
    emetogenicPotential: 'HIGH',
    preMedications: ['Atropine 0.5mg SC for cholinergic syndrome', 'Ondansetron 16mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 08',
        standardDoseM2OrKg: '170 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 60,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0009',
    regimenName: 'Cisplatin-Pemetrexed Modified Protocol 09',
    cancerType: 'Non-Small Cell Lung Cancer (Adenocarcinoma)',
    cycleLengthDays: 21,
    totalCyclesPlanned: 4,
    emetogenicPotential: 'HIGH',
    preMedications: ['Folic Acid 1mg PO daily', 'Vitamin B12 1000mcg IM q9w', 'Dexamethasone 4mg PO BID'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 09',
        standardDoseM2OrKg: '185 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 120,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0010',
    regimenName: 'FOLFOX-6 Modified Protocol 10',
    cancerType: 'Colorectal Adenocarcinoma',
    cycleLengthDays: 14,
    totalCyclesPlanned: 12,
    emetogenicPotential: 'MODERATE',
    preMedications: ['Dexamethasone 12mg IV', 'Ondansetron 16mg IV', 'Aprepitant 125mg PO'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 10',
        standardDoseM2OrKg: '50 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 180,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0011',
    regimenName: 'AC-T Modified Protocol 11',
    cancerType: 'Invasive Breast Carcinoma (HER2 Negative)',
    cycleLengthDays: 21,
    totalCyclesPlanned: 8,
    emetogenicPotential: 'HIGH',
    preMedications: ['Dexamethasone 20mg IV', 'Palonosetron 0.25mg IV', 'Fosaprepitant 150mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 11',
        standardDoseM2OrKg: '65 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 240,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0012',
    regimenName: 'R-CHOP Modified Protocol 12',
    cancerType: 'Diffuse Large B-Cell Lymphoma',
    cycleLengthDays: 21,
    totalCyclesPlanned: 6,
    emetogenicPotential: 'HIGH',
    preMedications: ['Diphenhydramine 50mg IV', 'Acetaminophen 650mg PO', 'Dexamethasone 20mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 12',
        standardDoseM2OrKg: '80 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 60,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0013',
    regimenName: 'FOLFIRINOX Modified Protocol 13',
    cancerType: 'Pancreatic Ductal Adenocarcinoma',
    cycleLengthDays: 14,
    totalCyclesPlanned: 12,
    emetogenicPotential: 'HIGH',
    preMedications: ['Atropine 0.5mg SC for cholinergic syndrome', 'Ondansetron 16mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 13',
        standardDoseM2OrKg: '95 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 120,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0014',
    regimenName: 'Cisplatin-Pemetrexed Modified Protocol 14',
    cancerType: 'Non-Small Cell Lung Cancer (Adenocarcinoma)',
    cycleLengthDays: 21,
    totalCyclesPlanned: 4,
    emetogenicPotential: 'HIGH',
    preMedications: ['Folic Acid 1mg PO daily', 'Vitamin B12 1000mcg IM q9w', 'Dexamethasone 4mg PO BID'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 14',
        standardDoseM2OrKg: '110 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 180,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0015',
    regimenName: 'FOLFOX-6 Modified Protocol 15',
    cancerType: 'Colorectal Adenocarcinoma',
    cycleLengthDays: 14,
    totalCyclesPlanned: 12,
    emetogenicPotential: 'MODERATE',
    preMedications: ['Dexamethasone 12mg IV', 'Ondansetron 16mg IV', 'Aprepitant 125mg PO'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 15',
        standardDoseM2OrKg: '125 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 240,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0016',
    regimenName: 'AC-T Modified Protocol 16',
    cancerType: 'Invasive Breast Carcinoma (HER2 Negative)',
    cycleLengthDays: 21,
    totalCyclesPlanned: 8,
    emetogenicPotential: 'HIGH',
    preMedications: ['Dexamethasone 20mg IV', 'Palonosetron 0.25mg IV', 'Fosaprepitant 150mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 16',
        standardDoseM2OrKg: '140 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 60,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0017',
    regimenName: 'R-CHOP Modified Protocol 17',
    cancerType: 'Diffuse Large B-Cell Lymphoma',
    cycleLengthDays: 21,
    totalCyclesPlanned: 6,
    emetogenicPotential: 'HIGH',
    preMedications: ['Diphenhydramine 50mg IV', 'Acetaminophen 650mg PO', 'Dexamethasone 20mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 17',
        standardDoseM2OrKg: '155 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 120,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0018',
    regimenName: 'FOLFIRINOX Modified Protocol 18',
    cancerType: 'Pancreatic Ductal Adenocarcinoma',
    cycleLengthDays: 14,
    totalCyclesPlanned: 12,
    emetogenicPotential: 'HIGH',
    preMedications: ['Atropine 0.5mg SC for cholinergic syndrome', 'Ondansetron 16mg IV'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 18',
        standardDoseM2OrKg: '170 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 180,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0019',
    regimenName: 'Cisplatin-Pemetrexed Modified Protocol 19',
    cancerType: 'Non-Small Cell Lung Cancer (Adenocarcinoma)',
    cycleLengthDays: 21,
    totalCyclesPlanned: 4,
    emetogenicPotential: 'HIGH',
    preMedications: ['Folic Acid 1mg PO daily', 'Vitamin B12 1000mcg IM q9w', 'Dexamethasone 4mg PO BID'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 19',
        standardDoseM2OrKg: '185 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 240,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
  {
    regimenCode: 'ONC-REG-0020',
    regimenName: 'FOLFOX-6 Modified Protocol 20',
    cancerType: 'Colorectal Adenocarcinoma',
    cycleLengthDays: 14,
    totalCyclesPlanned: 12,
    emetogenicPotential: 'MODERATE',
    preMedications: ['Dexamethasone 12mg IV', 'Ondansetron 16mg IV', 'Aprepitant 125mg PO'],
    chemotherapyAgents: [
      {
        agentName: 'Primary Antineoplastic Compound 20',
        standardDoseM2OrKg: '50 mg/m2 BSA',
        administrationRoute: 'INTRAVENOUS_INFUSION',
        infusionDurationMinutes: 60,
        dayOfCycle: [1, 2],
      },
    ],
    doseModificationGuidelines: 'Withhold cycle if Absolute Neutrophil Count (ANC) < 1,500/uL or Platelets < 100,000/uL. Reduce dose by 20% for Grade 3/4 neuropathy.',
    mandatoryLabClearance: ['Complete Blood Count with Differential', 'Comprehensive Metabolic Panel (Creatinine / Total Bilirubin)', 'Baseline Left Ventricular Ejection Fraction (LVEF)'],
  },
];

export function getChemoRegimen(code: string): ChemotherapyRegimen | undefined {
  return CHEMOTHERAPY_REGIMENS.find((r) => r.regimenCode === code);
}
