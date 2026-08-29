// Radiology Imaging Protocol: Cervicothoracolumbar High-Resolution Spine Trauma CT
// Department: Emergency Radiology | ACR (American College of Radiology) Appropriateness Criteria

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

export const SPINE_TRAUMA_CT_PROTOCOLS: RadiologyImagingProtocol[] = [
  {
    protocolId: 'RAD-PRT-SPIN-001',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 001',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-002',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 002',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-003',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 003',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-004',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 004',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-005',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 005',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-006',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 006',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-007',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 007',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-008',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 008',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-009',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 009',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-010',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 010',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-011',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 011',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-012',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 012',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-013',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 013',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-014',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 014',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-SPIN-015',
    examinationTitle: 'Cervicothoracolumbar High-Resolution Spine Trauma CT Variant 015',
    modalityType: 'CT',
    clinicalIndications: [
      'Suspected acute or chronic emergency radiology parenchymal pathology',
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

export function getSpineTraumaCtProtocol(id: string): RadiologyImagingProtocol | undefined {
  return SPINE_TRAUMA_CT_PROTOCOLS.find((p) => p.protocolId === id);
}
