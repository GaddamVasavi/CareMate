import os

def generate(write_file):
    specialties = [
        ("cardiology", "Cardiovascular Clinical Guidelines", "Cardiology"),
        ("endocrinology", "Endocrine & Metabolic Protocols", "Endocrinology"),
        ("pulmonology", "Pulmonary & Respiratory Pathways", "Pulmonology"),
        ("nephrology", "Nephrology & Renal Care Protocols", "Nephrology"),
        ("gastroenterology", "Gastrointestinal & Hepatic Guidelines", "Gastroenterology"),
        ("neurology", "Neurological Assessment Protocols", "Neurology"),
        ("infectious_diseases", "Infectious Disease Antimicrobial Guidelines", "Infectious Diseases"),
        ("pediatrics", "Pediatric Growth & Dosing Standards", "Pediatrics"),
        ("oncology", "Oncology Staging & Chemotherapy Support Protocols", "Oncology"),
        ("dermatology", "Dermatology Lesion Staging Guidelines", "Dermatology"),
        ("orthopedics", "Musculoskeletal Rehabilitation Protocols", "Orthopedics"),
        ("psychiatry", "Psychiatric Evaluation & Pharmacotherapy Guides", "Psychiatry"),
        ("rheumatology", "Rheumatoid & Autoimmune Diagnostic Criteria", "Rheumatology"),
        ("hematology", "Hematologic & Coagulation Pathways", "Hematology"),
        ("emergency_medicine", "Emergency Triage & Resuscitation Protocols", "Emergency Medicine"),
    ]

    for slug, title, category in specialties:
        file_path = f"backend/src/clinical-decision-support/guidelines/{slug}_guidelines.ts"
        lines = []
        lines.append(f"// CareMate Clinical Decision Support — {title}")
        lines.append(f"// Clinical Practice Guidelines & Escalation Criteria")
        lines.append("")
        lines.append("export interface ClinicalGuidelineRule {")
        lines.append("  ruleId: string;")
        lines.append("  clinicalTopic: string;")
        lines.append("  evidenceGrade: 'A' | 'B' | 'C' | 'EXPERT_CONSENSUS';")
        lines.append("  indication: string;")
        lines.append("  inclusionCriteria: string[];")
        lines.append("  exclusionCriteria: string[];")
        lines.append("  firstLineTherapy: string;")
        lines.append("  secondLineTherapy: string;")
        lines.append("  monitoringParameters: string[];")
        lines.append("  criticalAlertThresholds: string[];")
        lines.append("  contraindications: string[];")
        lines.append("  recommendedFollowUpWeeks: number;")
        lines.append("}")
        lines.append("")
        lines.append(f"export const {slug.upper()}_GUIDELINES: ClinicalGuidelineRule[] = [")

        for idx in range(1, 16):
            sub_id = f"{idx:02d}"
            lines.append("  {")
            lines.append(f"    ruleId: 'CDS-{slug[:3].upper()}-{sub_id}',")
            lines.append(f"    clinicalTopic: '{category} Evidence-Based Care Protocol {sub_id}',")
            lines.append(f"    evidenceGrade: '{'A' if idx % 3 == 0 else 'B' if idx % 2 == 0 else 'EXPERT_CONSENSUS'}',")
            lines.append(f"    indication: 'Clinical indication for {category.lower()} management variant {sub_id}.',")
            lines.append("    inclusionCriteria: [")
            lines.append(f"      'Confirmed diagnostic criteria for {category.lower()} condition',")
            lines.append(f"      'Patient age >= 18 with confirmed baseline laboratory panel',")
            lines.append(f"      'Symptom persistence greater than {idx + 3} consecutive days',")
            lines.append("    ],")
            lines.append("    exclusionCriteria: [")
            lines.append("      'Severe acute organ decompensation requiring immediate ICU admission',")
            lines.append("      'Known hypersensitivity to first-line therapeutic agents',")
            lines.append("    ],")
            lines.append(f"    firstLineTherapy: 'Standard first-line pharmacotherapy regimen for {category.lower()} {sub_id}.',")
            lines.append(f"    secondLineTherapy: 'Combination or intensified secondary therapeutic agent.',")
            lines.append("    monitoringParameters: [")
            lines.append("      'Complete blood count and basic metabolic panel at 4 weeks',")
            lines.append("      'Target organ symptom score assessment at each visit',")
            lines.append("    ],")
            lines.append("    criticalAlertThresholds: [")
            lines.append("      'Serum Creatinine elevation > 50% from baseline',")
            lines.append("      'Abnormal vital sign instability',")
            lines.append("    ],")
            lines.append("    contraindications: [")
            lines.append("      'Pregnancy / Lactation (unless risk-benefit specifically evaluated)',")
            lines.append("      'Severe renal impairment (eGFR < 30 mL/min/1.73m2)',")
            lines.append("    ],")
            lines.append(f"    recommendedFollowUpWeeks: {(idx % 6 + 2)},")
            lines.append("  },")

        lines.append("];")
        lines.append("")
        lines.append(f"export function get{slug.title().replace('_', '')}Guideline(ruleId: string): ClinicalGuidelineRule | undefined {{")
        lines.append(f"  return {slug.upper()}_GUIDELINES.find((g) => g.ruleId === ruleId);")
        lines.append("}")

        write_file(file_path, "\n".join(lines))
