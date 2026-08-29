// Radiology Imaging Protocol: FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria
// Department: Nuclear Medicine | ACR (American College of Radiology) Appropriateness Criteria

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

export const ONCOLOGY_PET_CT_PROTOCOLS: RadiologyImagingProtocol[] = [
  {
    protocolId: 'RAD-PRT-ONCO-001',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 001',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-002',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 002',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-003',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 003',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-004',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 004',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-005',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 005',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-006',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 006',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-007',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 007',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-008',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 008',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-009',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 009',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-010',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 010',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-011',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 011',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-012',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 012',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-013',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 013',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-014',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 014',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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
    protocolId: 'RAD-PRT-ONCO-015',
    examinationTitle: 'FDG-PET/CT Whole Body Tumor Staging & Deauville Criteria Variant 015',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic nuclear medicine parenchymal pathology',
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

export function getOncologyPetCtProtocol(id: string): RadiologyImagingProtocol | undefined {
  return ONCOLOGY_PET_CT_PROTOCOLS.find((p) => p.protocolId === id);
}
