// CareMate Structured Physical Examination & SOAP Note Templates

export interface ExamSystemTemplate {
  systemName: string;
  normalFindingSummary: string;
  abnormalOptions: string[];
  diagnosticRedFlags: string[];
}

export const PHYSICAL_EXAM_TEMPLATES: ExamSystemTemplate[] = [
  {
    systemName: 'HEENT (Head, Eyes, Ears, Nose, Throat) Module 01',
    normalFindingSummary: 'Normocephalic, atraumatic. Pupils equal, round and reactive to light. Oropharynx clear with moist mucous membranes.',
    abnormalOptions: ['Papilledema', 'Tympanic membrane erythema with bulging', 'Pharyngeal exudate', 'Conjunctival icterus'],
    diagnosticRedFlags: ['Tracheal deviation', 'Uvular deviation with peritonsillar bulge', 'Afferent pupillary defect'],
  },
  {
    systemName: 'Cardiovascular System Module 02',
    normalFindingSummary: 'Regular rate and rhythm. Normal S1, S2 present. No murmurs, gallops, rubs, or carotid bruits. Peripheral pulses 2+ bilaterally. No peripheral edema.',
    abnormalOptions: ['Systolic ejection murmur 3/6 at RUSB', 'Holosystolic murmur at apex radiating to axilla', 'S3 gallop', 'Jugular venous distension > 4cm', '3+ bilateral pitting edema'],
    diagnosticRedFlags: ['S4 gallop with pulmonary crackles', 'New diastolic decrescendo murmur', 'Pericardial friction rub'],
  },
  {
    systemName: 'Respiratory / Pulmonary Module 03',
    normalFindingSummary: 'Respirations unlabored. Lungs clear to auscultation bilaterally. No wheezes, rales, or rhonchi.',
    abnormalOptions: ['Late inspiratory fine crackles at bilateral lung bases', 'Expiratory polyphonic wheezing', 'Dullness to percussion at right base', 'Decreased breath sounds right lower lobe'],
    diagnosticRedFlags: ['Stridor', 'Absent breath sounds unilateral', 'Asymmetric chest expansion'],
  },
  {
    systemName: 'Abdomen / Gastrointestinal Module 04',
    normalFindingSummary: 'Abdomen soft, non-tender, non-distended. Bowel sounds normoactive in all 4 quadrants. No hepatosplenomegaly or palpable masses.',
    abnormalOptions: ["Right lower quadrant tenderness at McBurney's point", "Positive Murphy's sign on deep RUQ palpation", 'Guarding and rebound tenderness', 'Hyperactive high-pitched tinkling bowel sounds'],
    diagnosticRedFlags: ['Rigid board-like abdomen', 'Pulsatile abdominal mass > 5cm', 'Severe involuntary guarding'],
  },
  {
    systemName: 'Musculoskeletal System Module 05',
    normalFindingSummary: 'Full active range of motion across all joints. Normal muscle bulk and tone. No joint swelling, erythema, or deformities.',
    abnormalOptions: ['Right knee effusion with positive McMurray test', 'Lumbar paraspinal muscle spasm with positive straight leg raise', 'Bilateral MCP joint swelling and ulnar deviation', 'Bony crepitus in bilateral knees'],
    diagnosticRedFlags: ['Inability to bear weight with acute joint deformity', 'Compartment firmness with severe passive stretch pain', 'Spinal tenderness with saddle anesthesia'],
  },
  {
    systemName: 'Neurological Examination Module 06',
    normalFindingSummary: 'Cranial nerves II-XII intact. Motor strength 5/5 in all extremities. Sensation intact to light touch and pinprick. Reflexes 2+ symmetric. Gait steady.',
    abnormalOptions: ['Left hemiparesis 3/5 upper and lower extremity', 'Right facial droop sparing forehead', 'Dysmetria on finger-to-nose testing', 'Positive Babinski sign on right'],
    diagnosticRedFlags: ['Acute onset aphasia or dysarthria', 'Sudden unilateral weakness', 'Acute cerebellar ataxia with inability to sit unsupported'],
  },
  {
    systemName: 'Psychiatric & Mental Status Module 07',
    normalFindingSummary: 'Mood congruent, affect broad. Thought process logical and goal-directed. Insight and judgment intact. No suicidal or homicidal ideation.',
    abnormalOptions: ['Depressed mood with flat affect', 'Pressured speech with flight of ideas', 'Psychomotor agitation', 'Tangential thought process'],
    diagnosticRedFlags: ['Active auditory hallucinations commanding self-harm', 'Explicit suicidal plan with intent', 'Acute psychotic agitation'],
  },
  {
    systemName: 'Constitutional / General Appearance Module 08',
    normalFindingSummary: 'Well-nourished, well-developed, in no acute distress. Alert and oriented x 4.',
    abnormalOptions: ['Cachectic', 'Lethargic', 'Acute respiratory distress', 'Toxic appearance', 'Morbidly obese'],
    diagnosticRedFlags: ['Unresponsive', 'Hemodynamically unstable', 'Stridor'],
  },
  {
    systemName: 'HEENT (Head, Eyes, Ears, Nose, Throat) Module 09',
    normalFindingSummary: 'Normocephalic, atraumatic. Pupils equal, round and reactive to light. Oropharynx clear with moist mucous membranes.',
    abnormalOptions: ['Papilledema', 'Tympanic membrane erythema with bulging', 'Pharyngeal exudate', 'Conjunctival icterus'],
    diagnosticRedFlags: ['Tracheal deviation', 'Uvular deviation with peritonsillar bulge', 'Afferent pupillary defect'],
  },
  {
    systemName: 'Cardiovascular System Module 10',
    normalFindingSummary: 'Regular rate and rhythm. Normal S1, S2 present. No murmurs, gallops, rubs, or carotid bruits. Peripheral pulses 2+ bilaterally. No peripheral edema.',
    abnormalOptions: ['Systolic ejection murmur 3/6 at RUSB', 'Holosystolic murmur at apex radiating to axilla', 'S3 gallop', 'Jugular venous distension > 4cm', '3+ bilateral pitting edema'],
    diagnosticRedFlags: ['S4 gallop with pulmonary crackles', 'New diastolic decrescendo murmur', 'Pericardial friction rub'],
  },
  {
    systemName: 'Respiratory / Pulmonary Module 11',
    normalFindingSummary: 'Respirations unlabored. Lungs clear to auscultation bilaterally. No wheezes, rales, or rhonchi.',
    abnormalOptions: ['Late inspiratory fine crackles at bilateral lung bases', 'Expiratory polyphonic wheezing', 'Dullness to percussion at right base', 'Decreased breath sounds right lower lobe'],
    diagnosticRedFlags: ['Stridor', 'Absent breath sounds unilateral', 'Asymmetric chest expansion'],
  },
  {
    systemName: 'Abdomen / Gastrointestinal Module 12',
    normalFindingSummary: 'Abdomen soft, non-tender, non-distended. Bowel sounds normoactive in all 4 quadrants. No hepatosplenomegaly or palpable masses.',
    abnormalOptions: ["Right lower quadrant tenderness at McBurney's point", "Positive Murphy's sign on deep RUQ palpation", 'Guarding and rebound tenderness', 'Hyperactive high-pitched tinkling bowel sounds'],
    diagnosticRedFlags: ['Rigid board-like abdomen', 'Pulsatile abdominal mass > 5cm', 'Severe involuntary guarding'],
  },
  {
    systemName: 'Musculoskeletal System Module 13',
    normalFindingSummary: 'Full active range of motion across all joints. Normal muscle bulk and tone. No joint swelling, erythema, or deformities.',
    abnormalOptions: ['Right knee effusion with positive McMurray test', 'Lumbar paraspinal muscle spasm with positive straight leg raise', 'Bilateral MCP joint swelling and ulnar deviation', 'Bony crepitus in bilateral knees'],
    diagnosticRedFlags: ['Inability to bear weight with acute joint deformity', 'Compartment firmness with severe passive stretch pain', 'Spinal tenderness with saddle anesthesia'],
  },
  {
    systemName: 'Neurological Examination Module 14',
    normalFindingSummary: 'Cranial nerves II-XII intact. Motor strength 5/5 in all extremities. Sensation intact to light touch and pinprick. Reflexes 2+ symmetric. Gait steady.',
    abnormalOptions: ['Left hemiparesis 3/5 upper and lower extremity', 'Right facial droop sparing forehead', 'Dysmetria on finger-to-nose testing', 'Positive Babinski sign on right'],
    diagnosticRedFlags: ['Acute onset aphasia or dysarthria', 'Sudden unilateral weakness', 'Acute cerebellar ataxia with inability to sit unsupported'],
  },
  {
    systemName: 'Psychiatric & Mental Status Module 15',
    normalFindingSummary: 'Mood congruent, affect broad. Thought process logical and goal-directed. Insight and judgment intact. No suicidal or homicidal ideation.',
    abnormalOptions: ['Depressed mood with flat affect', 'Pressured speech with flight of ideas', 'Psychomotor agitation', 'Tangential thought process'],
    diagnosticRedFlags: ['Active auditory hallucinations commanding self-harm', 'Explicit suicidal plan with intent', 'Acute psychotic agitation'],
  },
];
