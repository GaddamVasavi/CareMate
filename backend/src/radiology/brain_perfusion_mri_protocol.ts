// Radiology Imaging Protocol: Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch
// Department: Neuroradiology | ACR (American College of Radiology) Appropriateness Criteria

export interface RadiologyImagingProtocol {
  protocolId: string;
  examinationTitle: string;
  modalityType: 'CT' | 'MRI' | 'ULTRASOUND' | 'PET_CT' | 'MAMMOGRAPHY' | 'X_RAY';
  clinicalIndications: string[];
  patientPreparationInstructions: string;
  contrastAgentRequirements: string;
  estimatedRadiationDoseMsv: number;
  reconstructionSeries: string[];
  criticalDiagnosticCheckpoints: string[];
}

export const BRAIN_PERFUSION_MRI_PROTOCOLS: RadiologyImagingProtocol[] = [
  {
    protocolId: 'RAD-PRT-BRAI-001',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 001',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 2.3,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-002',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 002',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 3.1,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-003',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 003',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 3.9,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-004',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 004',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 4.7,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-005',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 005',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 5.5,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-006',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 006',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 6.3,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-007',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 007',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 7.1,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-008',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 008',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 7.9,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-009',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 009',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 8.7,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-010',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 010',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 9.5,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-011',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 011',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 10.3,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-012',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 012',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 1.5,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-013',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 013',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 2.3,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-014',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 014',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 3.1,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
  {
    protocolId: 'RAD-PRT-BRAI-015',
    examinationTitle: 'Acute Stroke Neuro-Perfusion MRI & DWI/FLAIR Mismatch Variant 015',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic neuroradiology parenchymal pathology',
      'Follow-up response assessment according to standardized imaging criteria',
    ],
    patientPreparationInstructions: 'NPO for 4 hours prior to scan. Ensure IV cannula 18-gauge in antecubital fossa.',
    contrastAgentRequirements: 'Non-ionic low-osmolar iodinated contrast (350 mg I/mL) at 4.5 mL/sec with saline chaser.',
    estimatedRadiationDoseMsv: 3.9,
    reconstructionSeries: [
      'Axial 0.625mm standard kernel slices',
      'Coronal and Sagittal multiplanar reformations (MPR)',
      '3D Volume-Rendered MIP reconstructions',
    ],
    criticalDiagnosticCheckpoints: [
      'Assess for target organ parenchymal enhancement defects',
      'Verify absence of acute vascular dissection or thrombosis',
    ],
  },
];

export function getBrainPerfusionMriProtocol(id: string): RadiologyImagingProtocol | undefined {
  return BRAIN_PERFUSION_MRI_PROTOCOLS.find((p) => p.protocolId === id);
}
