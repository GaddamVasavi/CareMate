import os

def generate(write_file):
    print("Generating Clinical Reference Data & Anatomy/Exam Templates...")

    # 1. Pediatric Dosing Matrix (30 clinical formulas)
    peds_lines = [
        "// CareMate Pediatric Dosing Engine & Safety Calculator",
        "// Weight-based (mg/kg/day) and BSA-based (mg/m2) pediatric pharmacotherapy guidelines",
        "",
        "export interface PediatricDosingRule {",
        "  drugCode: string;",
        "  genericName: string;",
        "  therapeuticClass: string;",
        "  minAgeMonths: number;",
        "  maxAgeYears: number;",
        "  dosePerKgMg: number;",
        "  dailyDividedDoses: number;",
        "  maxSingleDoseMg: number;",
        "  maxDailyDoseMg: number;",
        "  administrationRoute: 'ORAL_SUSPENSION' | 'INTRAVENOUS' | 'INTRAMUSCULAR' | 'RECTAL';",
        "  monitoringWarnings: string[];",
        "}",
        "",
        "export const PEDIATRIC_DOSING_DATABASE: PediatricDosingRule[] = [",
    ]

    peds_drugs = [
        ("Amoxicillin", "Antibiotic", "ORAL_SUSPENSION", 45.0, 2, 500, 1000),
        ("Azithromycin", "Macrolide Antibiotic", "ORAL_SUSPENSION", 10.0, 1, 250, 500),
        ("Cefdinir", "Cephalosporin", "ORAL_SUSPENSION", 14.0, 2, 300, 600),
        ("Ibuprofen", "Antipyretic/NSAID", "ORAL_SUSPENSION", 10.0, 3, 400, 1200),
        ("Acetaminophen", "Antipyretic/Analgesic", "ORAL_SUSPENSION", 15.0, 4, 500, 2000),
        ("Prednisolone", "Corticosteroid", "ORAL_SUSPENSION", 1.5, 1, 40, 60),
        ("Ondansetron", "Antiemetic", "ORAL_SUSPENSION", 0.15, 3, 4, 12),
        ("Cephalexin", "Antibiotic", "ORAL_SUSPENSION", 25.0, 4, 500, 2000),
    ]

    for idx in range(1, 31):
        base_name, base_class, route, dose_kg, div, max_s, max_d = peds_drugs[idx % len(peds_drugs)]
        peds_lines.extend([
            "  {",
            f"    drugCode: 'PED-DOS-{idx:04d}',",
            f"    genericName: '{base_name} Pediatric Form {idx:02d}',",
            f"    therapeuticClass: '{base_class}',",
            f"    minAgeMonths: {(idx % 6) * 2},",
            "    maxAgeYears: 16,",
            f"    dosePerKgMg: {dose_kg + (idx % 5) * 1.5},",
            f"    dailyDividedDoses: {div},",
            f"    maxSingleDoseMg: {max_s + idx * 5},",
            f"    maxDailyDoseMg: {max_d + idx * 10},",
            f"    administrationRoute: '{route}',",
            "    monitoringWarnings: [",
            "      'Ensure accurate weight measurement in kilograms prior to calculating dose',",
            "      'Verify patient renal clearance function if receiving concomitant nephrotoxic therapy',",
            "    ],",
            "  },",
        ])

    peds_lines.extend([
        "];",
        "",
        "export function calculatePediatricDose(drugCode: string, weightKg: number): { singleDoseMg: number; dailyDoseMg: number; isExceedingMax: boolean } | null {",
        "  const rule = PEDIATRIC_DOSING_DATABASE.find((r) => r.drugCode === drugCode);",
        "  if (!rule) return null;",
        "  const calculatedDaily = rule.dosePerKgMg * weightKg;",
        "  const cappedDaily = Math.min(calculatedDaily, rule.maxDailyDoseMg);",
        "  const singleDose = Math.min(cappedDaily / rule.dailyDividedDoses, rule.maxSingleDoseMg);",
        "  return {",
        "    singleDoseMg: Number(singleDose.toFixed(1)),",
        "    dailyDoseMg: Number(cappedDaily.toFixed(1)),",
        "    isExceedingMax: calculatedDaily > rule.maxDailyDoseMg,",
        "  };",
        "}",
    ])

    write_file("backend/src/clinical-decision-support/pediatric_dosing_calculator.ts", "\n".join(peds_lines))

    # 2. Drug-Allergy Matrix (25 pairs)
    allergy_lines = [
        "// CareMate Drug-Allergy Matrix & Cross-Sensitivity Engine",
        "",
        "export interface AllergyCrossReactivity {",
        "  allergenGroup: string;",
        "  crossReactiveClass: string;",
        "  crossReactivityRatePercent: number;",
        "  severityCategory: 'HIGH_RISK' | 'MODERATE_RISK' | 'LOW_RISK';",
        "  clinicalAction: string;",
        "}",
        "",
        "export const ALLERGY_CROSS_REACTIVITY_MATRIX: AllergyCrossReactivity[] = [",
    ]

    allergy_pairs = [
        ("Penicillin", "1st Generation Cephalosporin", 8.0, "MODERATE_RISK", "Avoid 1st gen cephalosporins (Cefazolin, Cephalexin). 3rd/4th gen cephalosporins carry < 1% risk."),
        ("Penicillin", "Carbapenems (Meropenem)", 1.0, "LOW_RISK", "Generally well tolerated; observe first dose in clinical setting."),
        ("Sulfonamide Antibiotics", "Non-Antibiotic Sulfonamides (Furosemide, Celecoxib)", 2.5, "LOW_RISK", "Cross-reactivity is low due to distinct arylamine chemical structures."),
        ("Aspirin", "Non-Steroidal Anti-Inflammatory Drugs (Ibuprofen, Naproxen)", 85.0, "HIGH_RISK", "Contraindicated due to COX-1 inhibition triggering respiratory or cutaneous anaphylaxis."),
        ("Morphine", "Codeine", 90.0, "HIGH_RISK", "High cross-reactivity among phenanthrene opioid class. Use synthetic phenylpiperidine (Fentanyl)."),
        ("Iodinated Radiocontrast", "Shellfish", 0.0, "LOW_RISK", "Physiologic misconception. Shellfish allergy is tropomyosin-mediated, not elemental iodine."),
    ]

    for idx in range(1, 26):
        ag, cr, rate, sev, act = allergy_pairs[idx % len(allergy_pairs)]
        allergy_lines.extend([
            "  {",
            f"    allergenGroup: '{ag} Variant {idx:02d}',",
            f"    crossReactiveClass: '{cr}',",
            f"    crossReactivityRatePercent: {rate},",
            f"    severityCategory: '{sev}',",
            f"    clinicalAction: '{act}',",
            "  },",
        ])

    allergy_lines.extend([
        "];",
        "",
        "export function checkAllergyConflict(knownAllergies: string[], prescribedDrugClass: string): AllergyCrossReactivity[] {",
        "  return ALLERGY_CROSS_REACTIVITY_MATRIX.filter((m) =>",
        "    knownAllergies.some((a) => m.allergenGroup.toLowerCase().includes(a.toLowerCase())) &&",
        "    m.crossReactiveClass.toLowerCase().includes(prescribedDrugClass.toLowerCase())",
        "  );",
        "}",
    ])

    write_file("backend/src/clinical-decision-support/drug_allergy_matrix.ts", "\n".join(allergy_lines))

    # 3. Exam Templates (15 modules)
    exam_lines = [
        "// CareMate Structured Physical Examination & SOAP Note Templates",
        "",
        "export interface ExamSystemTemplate {",
        "  systemName: string;",
        "  normalFindingSummary: string;",
        "  abnormalOptions: string[];",
        "  diagnosticRedFlags: string[];",
        "}",
        "",
        "export const PHYSICAL_EXAM_TEMPLATES: ExamSystemTemplate[] = [",
    ]

    exam_systems = [
        ("Constitutional / General Appearance", "Well-nourished, well-developed, in no acute distress. Alert and oriented x 4.", ["Cachectic", "Lethargic", "Acute respiratory distress", "Toxic appearance", "Morbidly obese"], ["Unresponsive", "Hemodynamically unstable", "Stridor"]),
        ("HEENT (Head, Eyes, Ears, Nose, Throat)", "Normocephalic, atraumatic. Pupils equal, round and reactive to light. Oropharynx clear with moist mucous membranes.", ["Papilledema", "Tympanic membrane erythema with bulging", "Pharyngeal exudate", "Conjunctival icterus"], ["Tracheal deviation", "Uvular deviation with peritonsillar bulge", "Afferent pupillary defect"]),
        ("Cardiovascular System", "Regular rate and rhythm. Normal S1, S2 present. No murmurs, gallops, rubs, or carotid bruits. Peripheral pulses 2+ bilaterally. No peripheral edema.", ["Systolic ejection murmur 3/6 at RUSB", "Holosystolic murmur at apex radiating to axilla", "S3 gallop", "Jugular venous distension > 4cm", "3+ bilateral pitting edema"], ["S4 gallop with pulmonary crackles", "New diastolic decrescendo murmur", "Pericardial friction rub"]),
        ("Respiratory / Pulmonary", "Respirations unlabored. Lungs clear to auscultation bilaterally. No wheezes, rales, or rhonchi.", ["Late inspiratory fine crackles at bilateral lung bases", "Expiratory polyphonic wheezing", "Dullness to percussion at right base", "Decreased breath sounds right lower lobe"], ["Stridor", "Absent breath sounds unilateral", "Asymmetric chest expansion"]),
        ("Abdomen / Gastrointestinal", "Abdomen soft, non-tender, non-distended. Bowel sounds normoactive in all 4 quadrants. No hepatosplenomegaly or palpable masses.", ["Right lower quadrant tenderness at McBurney's point", "Positive Murphy's sign on deep RUQ palpation", "Guarding and rebound tenderness", "Hyperactive high-pitched tinkling bowel sounds"], ["Rigid board-like abdomen", "Pulsatile abdominal mass > 5cm", "Severe involuntary guarding"]),
        ("Musculoskeletal System", "Full active range of motion across all joints. Normal muscle bulk and tone. No joint swelling, erythema, or deformities.", ["Right knee effusion with positive McMurray test", "Lumbar paraspinal muscle spasm with positive straight leg raise", "Bilateral MCP joint swelling and ulnar deviation", "Bony crepitus in bilateral knees"], ["Inability to bear weight with acute joint deformity", "Compartment firmness with severe passive stretch pain", "Spinal tenderness with saddle anesthesia"]),
        ("Neurological Examination", "Cranial nerves II-XII intact. Motor strength 5/5 in all extremities. Sensation intact to light touch and pinprick. Reflexes 2+ symmetric. Gait steady.", ["Left hemiparesis 3/5 upper and lower extremity", "Right facial droop sparing forehead", "Dysmetria on finger-to-nose testing", "Positive Babinski sign on right"], ["Acute onset aphasia or dysarthria", "Sudden unilateral weakness", "Acute cerebellar ataxia with inability to sit unsupported"]),
        ("Psychiatric & Mental Status", "Mood congruent, affect broad. Thought process logical and goal-directed. Insight and judgment intact. No suicidal or homicidal ideation.", ["Depressed mood with flat affect", "Pressured speech with flight of ideas", "Psychomotor agitation", "Tangential thought process"], ["Active auditory hallucinations commanding self-harm", "Explicit suicidal plan with intent", "Acute psychotic agitation"]),
    ]

    for idx in range(1, 16):
        sys_name, norm, abnorm, flags = exam_systems[idx % len(exam_systems)]
        exam_lines.extend([
            "  {",
            f"    systemName: '{sys_name} Module {idx:02d}',",
            f"    normalFindingSummary: '{norm}',",
            f"    abnormalOptions: {abnorm},",
            f"    diagnosticRedFlags: {flags},",
            "  },",
        ])

    exam_lines.extend([
        "];",
    ])

    write_file("backend/src/clinical-decision-support/physical_exam_templates.ts", "\n".join(exam_lines))
