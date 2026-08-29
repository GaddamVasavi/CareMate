import os

def generate(write_file):
    # ==========================================
    # ICD-10 DIAGNOSES DATABASE
    # ==========================================
    write_file("backend/src/terminologies/icd10-catalog.ts", """
export interface ICD10Entry {
  code: string;
  description: string;
  category: string;
  chapter: string;
}

export const ICD10_DIAGNOSES: ICD10Entry[] = [
  // Chapter 1: Infectious & Parasitic Diseases (A00-B99)
  { code: 'A00.0', description: 'Cholera due to Vibrio cholerae 01, biovar cholerae', category: 'Intestinal Infectious Diseases', chapter: 'I' },
  { code: 'A02.0', description: 'Salmonella enteritis', category: 'Intestinal Infectious Diseases', chapter: 'I' },
  { code: 'A04.7', description: 'Enterocolitis due to Clostridium difficile', category: 'Intestinal Infectious Diseases', chapter: 'I' },
  { code: 'A08.4', description: 'Viral intestinal infection, unspecified', category: 'Intestinal Infectious Diseases', chapter: 'I' },
  { code: 'A09', description: 'Infectious gastroenteritis and colitis, unspecified', category: 'Intestinal Infectious Diseases', chapter: 'I' },
  { code: 'A15.0', description: 'Tuberculosis of lung', category: 'Tuberculosis', chapter: 'I' },
  { code: 'A38.9', description: 'Scarlet fever, uncomplicated', category: 'Other Bacterial Diseases', chapter: 'I' },
  { code: 'A41.9', description: 'Sepsis, unspecified organism', category: 'Other Bacterial Diseases', chapter: 'I' },
  { code: 'A48.0', description: 'Gas gangrene', category: 'Other Bacterial Diseases', chapter: 'I' },
  { code: 'A49.01', description: 'Methicillin susceptible Staphylococcus aureus infection, unspecified site', category: 'Bacterial Infections', chapter: 'I' },
  { code: 'A49.02', description: 'Methicillin resistant Staphylococcus aureus infection, unspecified site (MRSA)', category: 'Bacterial Infections', chapter: 'I' },
  { code: 'A60.00', description: 'Herpesviral infection of genitalia and urogenital tract, unspecified', category: 'Infections with Predominantly Sexual Transmission', chapter: 'I' },
  { code: 'A69.20', description: 'Lyme disease, unspecified', category: 'Other Spirochetal Diseases', chapter: 'I' },
  { code: 'B00.9', description: 'Herpesviral infection, unspecified', category: 'Viral Infections Characterized by Skin and Mucous Membrane Lesions', chapter: 'I' },
  { code: 'B01.9', description: 'Varicella without complication (Chickenpox)', category: 'Viral Infections', chapter: 'I' },
  { code: 'B02.9', description: 'Zoster without complications (Shingles)', category: 'Viral Infections', chapter: 'I' },
  { code: 'B18.2', description: 'Chronic viral hepatitis C', category: 'Viral Hepatitis', chapter: 'I' },
  { code: 'B20', description: 'Human immunodeficiency virus [HIV] disease', category: 'Human Immunodeficiency Virus Disease', chapter: 'I' },
  { code: 'B27.00', description: 'Gammaherpesviral mononucleosis without complication', category: 'Other Viral Diseases', chapter: 'I' },
  { code: 'B34.9', description: 'Viral infection, unspecified', category: 'Other Viral Diseases', chapter: 'I' },
  { code: 'B35.0', description: 'Tinea barbae and tinea capitis', category: 'Mycoses', chapter: 'I' },
  { code: 'B37.0', description: 'Candidal stomatitis (Oral thrush)', category: 'Mycoses', chapter: 'I' },

  // Chapter 2: Neoplasms (C00-D49)
  { code: 'C18.9', description: 'Malignant neoplasm of colon, unspecified', category: 'Malignant Neoplasms of Digestive Organs', chapter: 'II' },
  { code: 'C25.9', description: 'Malignant neoplasm of pancreas, unspecified', category: 'Malignant Neoplasms of Digestive Organs', chapter: 'II' },
  { code: 'C34.90', description: 'Malignant neoplasm of unspec part of bronchus or lung', category: 'Malignant Neoplasms of Respiratory and Intrathoracic Organs', chapter: 'II' },
  { code: 'C43.9', description: 'Malignant melanoma of skin, unspecified', category: 'Melanoma and Other Malignant Neoplasms of Skin', chapter: 'II' },
  { code: 'C50.919', description: 'Malignant neoplasm of unspecified site of female breast', category: 'Malignant Neoplasms of Breast', chapter: 'II' },
  { code: 'C61', description: 'Malignant neoplasm of prostate', category: 'Malignant Neoplasms of Male Genital Organs', chapter: 'II' },
  { code: 'C71.9', description: 'Malignant neoplasm of brain, unspecified', category: 'Malignant Neoplasms of Central Nervous System', chapter: 'II' },
  { code: 'C90.00', description: 'Multiple myeloma not having achieved remission', category: 'Malignant Neoplasms of Lymphoid, Hematopoietic and Related Tissue', chapter: 'II' },
  { code: 'C91.00', description: 'Acute lymphoblastic leukemia not having achieved remission', category: 'Leukemia', chapter: 'II' },
  { code: 'D12.6', description: 'Benign neoplasm of colon, unspecified (Colonic polyp)', category: 'Benign Neoplasms', chapter: 'II' },
  { code: 'D25.9', description: 'Leiomyoma of uterus, unspecified (Uterine fibroid)', category: 'Benign Neoplasms', chapter: 'II' },

  // Chapter 3: Endocrine, Nutritional and Metabolic Diseases (E00-E89)
  { code: 'E03.9', description: 'Hypothyroidism, unspecified', category: 'Thyroid Gland Disorders', chapter: 'IV' },
  { code: 'E05.90', description: 'Thyrotoxicosis without thyrotoxic crisis or storm', category: 'Thyroid Gland Disorders', chapter: 'IV' },
  { code: 'E10.9', description: 'Type 1 diabetes mellitus without complications', category: 'Diabetes Mellitus', chapter: 'IV' },
  { code: 'E11.9', description: 'Type 2 diabetes mellitus without complications', category: 'Diabetes Mellitus', chapter: 'IV' },
  { code: 'E11.21', description: 'Type 2 diabetes mellitus with diabetic nephropathy', category: 'Diabetes Mellitus', chapter: 'IV' },
  { code: 'E11.40', description: 'Type 2 diabetes mellitus with diabetic neuropathy, unspecified', category: 'Diabetes Mellitus', chapter: 'IV' },
  { code: 'E11.65', description: 'Type 2 diabetes mellitus with hyperglycemia', category: 'Diabetes Mellitus', chapter: 'IV' },
  { code: 'E28.2', description: 'Polycystic ovarian syndrome (PCOS)', category: 'Ovarian Dysfunction', chapter: 'IV' },
  { code: 'E55.9', description: 'Vitamin D deficiency, unspecified', category: 'Nutritional Deficiencies', chapter: 'IV' },
  { code: 'E66.01', description: 'Morbid (severe) obesity due to excess calories', category: 'Overweight and Obesity', chapter: 'IV' },
  { code: 'E66.9', description: 'Obesity, unspecified', category: 'Overweight and Obesity', chapter: 'IV' },
  { code: 'E78.00', description: 'Pure hypercholesterolemia, unspecified', category: 'Disorders of Lipoprotein Metabolism', chapter: 'IV' },
  { code: 'E78.5', description: 'Hyperlipidemia, unspecified', category: 'Disorders of Lipoprotein Metabolism', chapter: 'IV' },
  { code: 'E86.0', description: 'Dehydration', category: 'Metabolic Disorders', chapter: 'IV' },
  { code: 'E87.1', description: 'Hypo-osmolality and hyponatremia', category: 'Fluid and Electrolyte Disorders', chapter: 'IV' },
  { code: 'E87.6', description: 'Hypokalemia', category: 'Fluid and Electrolyte Disorders', chapter: 'IV' },

  // Chapter 4: Circulatory System Diseases (I00-I99)
  { code: 'I10', description: 'Essential (primary) hypertension', category: 'Hypertensive Diseases', chapter: 'IX' },
  { code: 'I11.9', description: 'Hypertensive heart disease without heart failure', category: 'Hypertensive Diseases', chapter: 'IX' },
  { code: 'I20.9', description: 'Angina pectoris, unspecified', category: 'Ischemic Heart Diseases', chapter: 'IX' },
  { code: 'I21.9', description: 'Acute myocardial infarction, unspecified (Heart attack)', category: 'Ischemic Heart Diseases', chapter: 'IX' },
  { code: 'I25.10', description: 'Atherosclerotic heart disease of native coronary artery without angina', category: 'Coronary Artery Disease', chapter: 'IX' },
  { code: 'I48.0', description: 'Paroxysmal atrial fibrillation', category: 'Cardiac Arrhythmias', chapter: 'IX' },
  { code: 'I48.91', description: 'Unspecified atrial fibrillation', category: 'Cardiac Arrhythmias', chapter: 'IX' },
  { code: 'I50.9', description: 'Heart failure, unspecified', category: 'Heart Failure', chapter: 'IX' },
  { code: 'I63.9', description: 'Cerebral infarction, unspecified (Ischemic stroke)', category: 'Cerebrovascular Diseases', chapter: 'IX' },
  { code: 'I73.9', description: 'Peripheral vascular disease, unspecified', category: 'Diseases of Arteries and Capillaries', chapter: 'IX' },
  { code: 'I80.209', description: 'Phlebitis and thrombophlebitis of unspecified deep vessels of extremity (DVT)', category: 'Vein Disorders', chapter: 'IX' },

  // Chapter 5: Respiratory System Diseases (J00-J99)
  { code: 'J00', description: 'Acute nasopharyngitis [common cold]', category: 'Acute Upper Respiratory Infections', chapter: 'X' },
  { code: 'J01.90', description: 'Acute sinusitis, unspecified', category: 'Acute Upper Respiratory Infections', chapter: 'X' },
  { code: 'J02.9', description: 'Acute pharyngitis, unspecified (Sore throat)', category: 'Acute Upper Respiratory Infections', chapter: 'X' },
  { code: 'J03.90', description: 'Acute tonsillitis, unspecified', category: 'Acute Upper Respiratory Infections', chapter: 'X' },
  { code: 'J06.9', description: 'Acute upper respiratory infection, unspecified', category: 'Acute Upper Respiratory Infections', chapter: 'X' },
  { code: 'J10.1', description: 'Influenza due to other identified influenza virus with respiratory manifestations', category: 'Influenza and Pneumonia', chapter: 'X' },
  { code: 'J18.9', description: 'Pneumonia, unspecified organism', category: 'Influenza and Pneumonia', chapter: 'X' },
  { code: 'J20.9', description: 'Acute bronchitis, unspecified', category: 'Acute Lower Respiratory Infections', chapter: 'X' },
  { code: 'J44.9', description: 'Chronic obstructive pulmonary disease, unspecified (COPD)', category: 'Chronic Lower Respiratory Diseases', chapter: 'X' },
  { code: 'J45.909', description: 'Unspecified asthma, uncomplicated', category: 'Chronic Lower Respiratory Diseases', chapter: 'X' },
  { code: 'J45.41', description: 'Moderate persistent asthma with (acute) exacerbation', category: 'Chronic Lower Respiratory Diseases', chapter: 'X' },

  // Chapter 6: Musculoskeletal & Connective Tissue (M00-M99)
  { code: 'M06.9', description: 'Rheumatoid arthritis, unspecified', category: 'Inflammatory Polyarthropathies', chapter: 'XIII' },
  { code: 'M10.9', description: 'Gout, unspecified', category: 'Metabolic Arthropathies', chapter: 'XIII' },
  { code: 'M17.9', description: 'Osteoarthritis of knee, unspecified', category: 'Osteoarthritis', chapter: 'XIII' },
  { code: 'M25.561', description: 'Pain in right knee', category: 'Joint Disorders', chapter: 'XIII' },
  { code: 'M54.50', description: 'Low back pain, unspecified', category: 'Dorsopathies', chapter: 'XIII' },
  { code: 'M54.2', description: 'Cervicalgia (Neck pain)', category: 'Dorsopathies', chapter: 'XIII' },
  { code: 'M79.7', description: 'Fibromyalgia', category: 'Soft Tissue Disorders', chapter: 'XIII' },
  { code: 'M81.0', description: 'Age-related osteoporosis without current pathological fracture', category: 'Osteopathies', chapter: 'XIII' },

  // Chapter 7: Mental & Behavioral Disorders (F01-F99)
  { code: 'F10.20', description: 'Alcohol dependence, uncomplicated', category: 'Substance-Related Disorders', chapter: 'V' },
  { code: 'F32.9', description: 'Major depressive disorder, single episode, unspecified', category: 'Mood Disorders', chapter: 'V' },
  { code: 'F33.1', description: 'Major depressive disorder, recurrent, moderate', category: 'Mood Disorders', chapter: 'V' },
  { code: 'F41.1', description: 'Generalized anxiety disorder (GAD)', category: 'Anxiety Disorders', chapter: 'V' },
  { code: 'F41.9', description: 'Anxiety disorder, unspecified', category: 'Anxiety Disorders', chapter: 'V' },
  { code: 'F43.10', description: 'Post-traumatic stress disorder, unspecified (PTSD)', category: 'Stress Reaction Disorders', chapter: 'V' },
  { code: 'F51.01', description: 'Primary insomnia', category: 'Sleep Disorders', chapter: 'V' },
  { code: 'F90.9', description: 'Attention-deficit hyperactivity disorder, unspecified type (ADHD)', category: 'Behavioral and Emotional Disorders', chapter: 'V' },
];

export function searchICD10(query: string): ICD10Entry[] {
  const q = query.toLowerCase().trim();
  if (!q) return ICD10_DIAGNOSES.slice(0, 30);

  return ICD10_DIAGNOSES.filter(
    (item) =>
      item.code.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  );
}
""")

    # ==========================================
    # CPT PROCEDURES & BILLING CODES
    # ==========================================
    write_file("backend/src/terminologies/cpt-catalog.ts", """
export interface CPTEntry {
  code: string;
  description: string;
  category: string;
  standardFee: number;
}

export const CPT_CODES: CPTEntry[] = [
  // Evaluation & Management (E/M)
  { code: '99202', description: 'Office or other outpatient visit for new patient, 15-29 minutes', category: 'Evaluation & Management', standardFee: 75.0 },
  { code: '99203', description: 'Office or other outpatient visit for new patient, 30-44 minutes (Moderate Complexity)', category: 'Evaluation & Management', standardFee: 110.0 },
  { code: '99204', description: 'Office or other outpatient visit for new patient, 45-59 minutes (High Complexity)', category: 'Evaluation & Management', standardFee: 165.0 },
  { code: '99212', description: 'Office or other outpatient visit for established patient, 10-19 minutes', category: 'Evaluation & Management', standardFee: 55.0 },
  { code: '99213', description: 'Office or other outpatient visit for established patient, 20-29 minutes (Low Complexity)', category: 'Evaluation & Management', standardFee: 90.0 },
  { code: '99214', description: 'Office or other outpatient visit for established patient, 30-39 minutes (Moderate Complexity)', category: 'Evaluation & Management', standardFee: 130.0 },
  { code: '99215', description: 'Office or other outpatient visit for established patient, 40-54 minutes (High Complexity)', category: 'Evaluation & Management', standardFee: 180.0 },
  { code: '99441', description: 'Telehealth telephone evaluation and management service, 5-10 minutes', category: 'Telemedicine', standardFee: 45.0 },
  { code: '99442', description: 'Telehealth telephone evaluation and management service, 11-20 minutes', category: 'Telemedicine', standardFee: 75.0 },
  { code: '99443', description: 'Telehealth telephone evaluation and management service, 21-30 minutes', category: 'Telemedicine', standardFee: 110.0 },

  // Diagnostic & Radiology
  { code: '71045', description: 'Chest X-ray, single view', category: 'Radiology', standardFee: 85.0 },
  { code: '71046', description: 'Chest X-ray, 2 views (Frontal and Lateral)', category: 'Radiology', standardFee: 120.0 },
  { code: '93000', description: 'Electrocardiogram (ECG/EKG), routine with at least 12 leads; with interpretation and report', category: 'Cardiovascular Diagnostics', standardFee: 65.0 },
  { code: '93306', description: 'Echocardiography, transthoracic, real-time with image documentation (2D), complete with spectral Doppler', category: 'Cardiovascular Diagnostics', standardFee: 350.0 },
  { code: '70450', description: 'Computed tomography (CT scan), head or brain; without contrast material', category: 'Radiology', standardFee: 420.0 },
  { code: '72148', description: 'Magnetic resonance imaging (MRI), lumbar spine; without contrast', category: 'Radiology', standardFee: 650.0 },

  // Laboratory & Pathology CPT Codes
  { code: '80053', description: 'Comprehensive metabolic panel (CMP)', category: 'Laboratory & Pathology', standardFee: 45.0 },
  { code: '80061', description: 'Lipid panel (Total Cholesterol, HDL, Triglycerides, LDL)', category: 'Laboratory & Pathology', standardFee: 40.0 },
  { code: '85025', description: 'Blood count; complete (CBC) with automated differential', category: 'Laboratory & Pathology', standardFee: 35.0 },
  { code: '83036', description: 'Hemoglobin; glycosylated (A1C)', category: 'Laboratory & Pathology', standardFee: 30.0 },
  { code: '84443', description: 'Thyroid stimulating hormone (TSH)', category: 'Laboratory & Pathology', standardFee: 50.0 },
  { code: '81002', description: 'Urinalysis, non-automated, without microscopy', category: 'Laboratory & Pathology', standardFee: 20.0 },
];

export function searchCPTCodes(query: string): CPTEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return CPT_CODES;
  return CPT_CODES.filter((c) => c.code.includes(q) || c.description.toLowerCase().includes(q));
}
""")
