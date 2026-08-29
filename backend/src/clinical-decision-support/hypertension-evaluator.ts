export interface BloodPressureReading {
  systolic: number;
  diastolic: number;
}

export type HypertensionCategory =
  | 'NORMAL'
  | 'ELEVATED'
  | 'STAGE_1_HYPERTENSION'
  | 'STAGE_2_HYPERTENSION'
  | 'HYPERTENSIVE_CRISIS';

export interface BPEvaluationResult {
  category: HypertensionCategory;
  description: string;
  recommendation: string;
  isUrgent: boolean;
}

export function evaluateBloodPressure(reading: BloodPressureReading): BPEvaluationResult {
  const { systolic, diastolic } = reading;

  if (systolic > 180 || diastolic > 120) {
    return {
      category: 'HYPERTENSIVE_CRISIS',
      description: 'Hypertensive Crisis (Systolic > 180 and/or Diastolic > 120 mmHg)',
      recommendation: 'Immediate emergency medical attention required. Check for target organ damage.',
      isUrgent: true,
    };
  }

  if (systolic >= 140 || diastolic >= 90) {
    return {
      category: 'STAGE_2_HYPERTENSION',
      description: 'Stage 2 Hypertension (Systolic >= 140 or Diastolic >= 90 mmHg)',
      recommendation: 'Initiate dual antihypertensive therapy (e.g., ACEi/ARB + CCB or Diuretic) and lifestyle counseling.',
      isUrgent: false,
    };
  }

  if ((systolic >= 130 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)) {
    return {
      category: 'STAGE_1_HYPERTENSION',
      description: 'Stage 1 Hypertension (Systolic 130-139 or Diastolic 80-89 mmHg)',
      recommendation: 'Calculate ASCVD 10-year risk. If ASCVD >= 10%, initiate pharmacotherapy and dietary DASH intervention.',
      isUrgent: false,
    };
  }

  if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
    return {
      category: 'ELEVATED',
      description: 'Elevated Blood Pressure (Systolic 120-129 and Diastolic < 80 mmHg)',
      recommendation: 'Non-pharmacological lifestyle therapy: reduce sodium, increase potassium, 150 min aerobic exercise weekly.',
      isUrgent: false,
    };
  }

  return {
    category: 'NORMAL',
    description: 'Normal Blood Pressure (Systolic < 120 and Diastolic < 80 mmHg)',
    recommendation: 'Maintain healthy lifestyle and evaluate annually.',
    isUrgent: false,
  };
}
