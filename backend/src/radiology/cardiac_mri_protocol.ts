// Radiology Imaging Protocol: Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol
// Department: Radiology / Cardiology | ACR (American College of Radiology) Appropriateness Criteria

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

export const CARDIAC_MRI_PROTOCOLS: RadiologyImagingProtocol[] = [
  {
    protocolId: 'RAD-PRT-CARD-001',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 001',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-002',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 002',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-003',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 003',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-004',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 004',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-005',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 005',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-006',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 006',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-007',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 007',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-008',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 008',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-009',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 009',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-010',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 010',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-011',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 011',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-012',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 012',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-013',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 013',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-014',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 014',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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
    protocolId: 'RAD-PRT-CARD-015',
    examinationTitle: 'Cardiac Magnetic Resonance (CMR) Viability & Flow Protocol Variant 015',
    modalityType: 'MRI',
    clinicalIndications: [
      'Suspected acute or chronic radiology / cardiology parenchymal pathology',
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

export function getCardiacMriProtocol(id: string): RadiologyImagingProtocol | undefined {
  return CARDIAC_MRI_PROTOCOLS.find((p) => p.protocolId === id);
}
