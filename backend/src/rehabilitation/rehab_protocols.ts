// CareMate Physical & Occupational Therapy Rehabilitation Protocols

export interface RehabExercisePhase {
  protocolId: string;
  conditionTitle: string;
  rehabSpecialty: 'ORTHOPEDIC' | 'NEUROLOGICAL' | 'CARDIAC_PULMONARY' | 'PEDIATRIC';
  phaseNumber: number;
  phaseName: string;
  durationWeeks: number;
  rangeOfMotionGoals: string;
  weightBearingStatus: 'NON_WEIGHT_BEARING' | 'PARTIAL_50_PERCENT' | 'WEIGHT_BEARING_AS_TOLERATED' | 'FULL_UNRESTRICTED';
  prescribedExercises: Array<{
    exerciseName: string;
    sets: number;
    repetitions: number;
    frequencyPerDay: number;
  }>;
  contraindicatedMovements: string[];
  progressionMilestones: string[];
}

export const REHAB_PROTOCOLS: RehabExercisePhase[] = [
  {
    protocolId: 'RHB-PRT-0001',
    conditionTitle: 'Rotator Cuff Tendon Repair (Supraspinatus) Tier 01',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 2,
    phaseName: 'Passive Range of Motion & Scapular Stabilization',
    durationWeeks: 3,
    rangeOfMotionGoals: 'Passive forward flexion to 120 deg',
    weightBearingStatus: 'NON_WEIGHT_BEARING',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 01',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0002',
    conditionTitle: 'Post-Ischemic Stroke Motor Recovery Tier 02',
    rehabSpecialty: 'NEUROLOGICAL',
    phaseNumber: 3,
    phaseName: 'Neuroplasticity & Functional Task Re-training',
    durationWeeks: 4,
    rangeOfMotionGoals: 'Active-assisted upper extremity reach',
    weightBearingStatus: 'WEIGHT_BEARING_AS_TOLERATED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 02',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0003',
    conditionTitle: 'Phase II Outpatient Cardiac Rehabilitation Tier 03',
    rehabSpecialty: 'CARDIAC_PULMONARY',
    phaseNumber: 4,
    phaseName: 'Aerobic Conditioning & MET Escalation',
    durationWeeks: 5,
    rangeOfMotionGoals: 'Full unencumbered mobility',
    weightBearingStatus: 'FULL_UNRESTRICTED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 03',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0004',
    conditionTitle: 'Total Knee Arthroplasty (TKA) Tier 04',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 1,
    phaseName: 'Early Mobilization & Quadriceps Activation',
    durationWeeks: 6,
    rangeOfMotionGoals: 'Active flexion >= 110 deg, extension 0 deg',
    weightBearingStatus: 'FULL_UNRESTRICTED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 04',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0005',
    conditionTitle: 'Anterior Cruciate Ligament (ACL) Reconstruction Tier 05',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 2,
    phaseName: 'Maximum Protection & Graft Integration',
    durationWeeks: 7,
    rangeOfMotionGoals: 'Full extension (0 deg) to 90 deg flexion',
    weightBearingStatus: 'PARTIAL_50_PERCENT',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 05',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0006',
    conditionTitle: 'Rotator Cuff Tendon Repair (Supraspinatus) Tier 06',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 3,
    phaseName: 'Passive Range of Motion & Scapular Stabilization',
    durationWeeks: 2,
    rangeOfMotionGoals: 'Passive forward flexion to 120 deg',
    weightBearingStatus: 'NON_WEIGHT_BEARING',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 06',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0007',
    conditionTitle: 'Post-Ischemic Stroke Motor Recovery Tier 07',
    rehabSpecialty: 'NEUROLOGICAL',
    phaseNumber: 4,
    phaseName: 'Neuroplasticity & Functional Task Re-training',
    durationWeeks: 3,
    rangeOfMotionGoals: 'Active-assisted upper extremity reach',
    weightBearingStatus: 'WEIGHT_BEARING_AS_TOLERATED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 07',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0008',
    conditionTitle: 'Phase II Outpatient Cardiac Rehabilitation Tier 08',
    rehabSpecialty: 'CARDIAC_PULMONARY',
    phaseNumber: 1,
    phaseName: 'Aerobic Conditioning & MET Escalation',
    durationWeeks: 4,
    rangeOfMotionGoals: 'Full unencumbered mobility',
    weightBearingStatus: 'FULL_UNRESTRICTED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 08',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0009',
    conditionTitle: 'Total Knee Arthroplasty (TKA) Tier 09',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 2,
    phaseName: 'Early Mobilization & Quadriceps Activation',
    durationWeeks: 5,
    rangeOfMotionGoals: 'Active flexion >= 110 deg, extension 0 deg',
    weightBearingStatus: 'FULL_UNRESTRICTED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 09',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0010',
    conditionTitle: 'Anterior Cruciate Ligament (ACL) Reconstruction Tier 10',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 3,
    phaseName: 'Maximum Protection & Graft Integration',
    durationWeeks: 6,
    rangeOfMotionGoals: 'Full extension (0 deg) to 90 deg flexion',
    weightBearingStatus: 'PARTIAL_50_PERCENT',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 10',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0011',
    conditionTitle: 'Rotator Cuff Tendon Repair (Supraspinatus) Tier 11',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 4,
    phaseName: 'Passive Range of Motion & Scapular Stabilization',
    durationWeeks: 7,
    rangeOfMotionGoals: 'Passive forward flexion to 120 deg',
    weightBearingStatus: 'NON_WEIGHT_BEARING',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 11',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0012',
    conditionTitle: 'Post-Ischemic Stroke Motor Recovery Tier 12',
    rehabSpecialty: 'NEUROLOGICAL',
    phaseNumber: 1,
    phaseName: 'Neuroplasticity & Functional Task Re-training',
    durationWeeks: 2,
    rangeOfMotionGoals: 'Active-assisted upper extremity reach',
    weightBearingStatus: 'WEIGHT_BEARING_AS_TOLERATED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 12',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0013',
    conditionTitle: 'Phase II Outpatient Cardiac Rehabilitation Tier 13',
    rehabSpecialty: 'CARDIAC_PULMONARY',
    phaseNumber: 2,
    phaseName: 'Aerobic Conditioning & MET Escalation',
    durationWeeks: 3,
    rangeOfMotionGoals: 'Full unencumbered mobility',
    weightBearingStatus: 'FULL_UNRESTRICTED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 13',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0014',
    conditionTitle: 'Total Knee Arthroplasty (TKA) Tier 14',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 3,
    phaseName: 'Early Mobilization & Quadriceps Activation',
    durationWeeks: 4,
    rangeOfMotionGoals: 'Active flexion >= 110 deg, extension 0 deg',
    weightBearingStatus: 'FULL_UNRESTRICTED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 14',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0015',
    conditionTitle: 'Anterior Cruciate Ligament (ACL) Reconstruction Tier 15',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 4,
    phaseName: 'Maximum Protection & Graft Integration',
    durationWeeks: 5,
    rangeOfMotionGoals: 'Full extension (0 deg) to 90 deg flexion',
    weightBearingStatus: 'PARTIAL_50_PERCENT',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 15',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0016',
    conditionTitle: 'Rotator Cuff Tendon Repair (Supraspinatus) Tier 16',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 1,
    phaseName: 'Passive Range of Motion & Scapular Stabilization',
    durationWeeks: 6,
    rangeOfMotionGoals: 'Passive forward flexion to 120 deg',
    weightBearingStatus: 'NON_WEIGHT_BEARING',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 16',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0017',
    conditionTitle: 'Post-Ischemic Stroke Motor Recovery Tier 17',
    rehabSpecialty: 'NEUROLOGICAL',
    phaseNumber: 2,
    phaseName: 'Neuroplasticity & Functional Task Re-training',
    durationWeeks: 7,
    rangeOfMotionGoals: 'Active-assisted upper extremity reach',
    weightBearingStatus: 'WEIGHT_BEARING_AS_TOLERATED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 17',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0018',
    conditionTitle: 'Phase II Outpatient Cardiac Rehabilitation Tier 18',
    rehabSpecialty: 'CARDIAC_PULMONARY',
    phaseNumber: 3,
    phaseName: 'Aerobic Conditioning & MET Escalation',
    durationWeeks: 2,
    rangeOfMotionGoals: 'Full unencumbered mobility',
    weightBearingStatus: 'FULL_UNRESTRICTED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 18',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0019',
    conditionTitle: 'Total Knee Arthroplasty (TKA) Tier 19',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 4,
    phaseName: 'Early Mobilization & Quadriceps Activation',
    durationWeeks: 3,
    rangeOfMotionGoals: 'Active flexion >= 110 deg, extension 0 deg',
    weightBearingStatus: 'FULL_UNRESTRICTED',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 19',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
  {
    protocolId: 'RHB-PRT-0020',
    conditionTitle: 'Anterior Cruciate Ligament (ACL) Reconstruction Tier 20',
    rehabSpecialty: 'ORTHOPEDIC',
    phaseNumber: 1,
    phaseName: 'Maximum Protection & Graft Integration',
    durationWeeks: 4,
    rangeOfMotionGoals: 'Full extension (0 deg) to 90 deg flexion',
    weightBearingStatus: 'PARTIAL_50_PERCENT',
    prescribedExercises: [
      {
        exerciseName: 'Targeted Rehabilitation Movement 20',
        sets: 3,
        repetitions: 12,
        frequencyPerDay: 2,
      },
    ],
    contraindicatedMovements: [
      'Avoid aggressive end-range passive stretching past pain threshold',
      'No open kinetic chain high-resistance shear stress exercises',
    ],
    progressionMilestones: [
      'Demonstrates minimal effusion without joint warmth',
      'Normal symmetrical gait without antalgic compensation',
    ],
  },
];

export function getRehabProtocol(id: string): RehabExercisePhase | undefined {
  return REHAB_PROTOCOLS.find((r) => r.protocolId === id);
}
