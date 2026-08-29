// Radiology Imaging Protocol: Coronary Computed Tomography Angiography (CCTA)
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

export const CORONARY_CTA_PROTOCOLS: RadiologyImagingProtocol[] = [
  {
    protocolId: 'RAD-PRT-CORO-001',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 001',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-002',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 002',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-003',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 003',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-004',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 004',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-005',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 005',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-006',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 006',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-007',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 007',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-008',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 008',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-009',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 009',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-010',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 010',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-011',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 011',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-012',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 012',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-013',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 013',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-014',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 014',
    modalityType: 'CT',
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
    protocolId: 'RAD-PRT-CORO-015',
    examinationTitle: 'Coronary Computed Tomography Angiography (CCTA) Variant 015',
    modalityType: 'CT',
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

export function getCoronaryCtaProtocol(id: string): RadiologyImagingProtocol | undefined {
  return CORONARY_CTA_PROTOCOLS.find((p) => p.protocolId === id);
}
