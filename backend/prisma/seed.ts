import { PrismaClient, UserRole, Gender, BloodGroup, DayOfWeek, AppointmentStatus, AppointmentType, LabOrderStatus, InvoiceStatus, PaymentStatus, PaymentMethod } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting CareMate Database Seeding...');

  // 1. Clean existing data in dependency order
  await prisma.auditLog.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.refund.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.invoiceItem.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.labResult.deleteMany();
  await prisma.labOrderItem.deleteMany();
  await prisma.labOrder.deleteMany();
  await prisma.labTest.deleteMany();
  await prisma.prescriptionItem.deleteMany();
  await prisma.prescription.deleteMany();
  await prisma.medicine.deleteMany();
  await prisma.medicalDocument.deleteMany();
  await prisma.treatment.deleteMany();
  await prisma.clinicalNote.deleteMany();
  await prisma.diagnosis.deleteMany();
  await prisma.vitalSign.deleteMany();
  await prisma.medicalRecord.deleteMany();
  await prisma.appointmentStatusHistory.deleteMany();
  await prisma.appointmentSlot.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.doctorReview.deleteMany();
  await prisma.doctorLeave.deleteMany();
  await prisma.doctorSchedule.deleteMany();
  await prisma.doctorAvailability.deleteMany();
  await prisma.doctorSpecialization.deleteMany();
  await prisma.specialization.deleteMany();
  await prisma.medicalHistory.deleteMany();
  await prisma.medicalCondition.deleteMany();
  await prisma.allergy.deleteMany();
  await prisma.emergencyContact.deleteMany();
  await prisma.address.deleteMany();
  await prisma.patient.deleteMany();
  await prisma.doctor.deleteMany();
  await prisma.loginHistory.deleteMany();
  await prisma.session.deleteMany();
  await prisma.systemSetting.deleteMany();
  await prisma.user.deleteMany();

  const defaultPasswordHash = await bcrypt.hash('Password123!', 12);
  const adminPasswordHash = await bcrypt.hash('Admin123!', 12);

  // 2. System Settings
  await prisma.systemSetting.createMany({
    data: [
      { key: 'SYSTEM_NAME', value: 'CareMate Health System', category: 'GENERAL', description: 'Application brand name' },
      { key: 'ALLOW_NEW_REGISTRATIONS', value: 'true', category: 'GENERAL', description: 'Enable patient and doctor signups' },
      { key: 'TELEHEALTH_ENABLED', value: 'true', category: 'APPOINTMENT', description: 'Enable video consultations' },
      { key: 'CURRENCY', value: 'USD', category: 'BILLING', description: 'Standard billing currency' },
      { key: 'TAX_RATE_PERCENT', value: '5.0', category: 'BILLING', description: 'Default tax applied to services' },
    ],
  });

  // 3. Specializations
  const specializationsData = [
    { name: 'Cardiology', description: 'Heart, circulation, and cardiovascular health', icon: 'Heart' },
    { name: 'Dermatology', description: 'Skin, hair, and cosmetic medical treatments', icon: 'Sparkles' },
    { name: 'Neurology', description: 'Brain, spinal cord, and nervous system disorders', icon: 'Activity' },
    { name: 'Pediatrics', description: 'Infant, child, and adolescent healthcare', icon: 'Smile' },
    { name: 'Orthopedics', description: 'Musculoskeletal system, joints, and bone surgery', icon: 'Shield' },
    { name: 'General Medicine', description: 'Primary care, preventative medicine, and wellness', icon: 'UserCheck' },
    { name: 'Psychiatry', description: 'Mental health, behavioral wellness, and therapy', icon: 'Feather' },
    { name: 'Gynecology & Obstetrics', description: 'Women health and maternity care', icon: 'Users' },
  ];

  const createdSpecializations: Record<string, string> = {};
  for (const item of specializationsData) {
    const spec = await prisma.specialization.create({ data: item });
    createdSpecializations[spec.name] = spec.id;
  }

  // 4. Lab Tests Catalog
  const labTestsData = [
    { code: 'LAB-CBC-001', name: 'Complete Blood Count (CBC)', category: 'Hematology', description: 'Full count of white cells, red cells, hemoglobin, and platelets', price: 35.0, sampleType: 'Blood', normalRange: 'WBC: 4.5-11.0 K/uL, RBC: 4.3-5.9 M/uL', unit: 'Standard' },
    { code: 'LAB-CMP-002', name: 'Comprehensive Metabolic Panel (CMP)', category: 'Biochemistry', description: 'Kidney & liver function, glucose, and electrolyte balance', price: 45.0, sampleType: 'Blood', normalRange: 'Glucose: 70-99 mg/dL, BUN: 7-20 mg/dL', unit: 'mg/dL' },
    { code: 'LAB-LIP-003', name: 'Lipid Panel', category: 'Biochemistry', description: 'Cholesterol, HDL, LDL, and Triglycerides', price: 40.0, sampleType: 'Blood', normalRange: 'Total Cholesterol < 200 mg/dL', unit: 'mg/dL' },
    { code: 'LAB-TSH-004', name: 'Thyroid Stimulating Hormone (TSH)', category: 'Endocrinology', description: 'Thyroid gland activity assessment', price: 50.0, sampleType: 'Blood', normalRange: '0.4 - 4.0 uIU/mL', unit: 'uIU/mL' },
    { code: 'LAB-HBA1C-005', name: 'Hemoglobin A1c (HbA1c)', category: 'Endocrinology', description: '3-month blood sugar control average for diabetes monitoring', price: 30.0, sampleType: 'Blood', normalRange: '< 5.7 %', unit: '%' },
  ];

  const createdLabTests: Record<string, string> = {};
  for (const lab of labTestsData) {
    const created = await prisma.labTest.create({ data: lab });
    createdLabTests[lab.code] = created.id;
  }

  // 5. Medicines Catalog
  const medicinesData = [
    { name: 'Amoxicillin 500mg', genericName: 'Amoxicillin', category: 'Antibiotic', dosageForm: 'Capsule', strength: '500mg', manufacturer: 'Pfizer' },
    { name: 'Atorvastatin 20mg', genericName: 'Atorvastatin Calcium', category: 'Cardiovascular', dosageForm: 'Tablet', strength: '20mg', manufacturer: 'Lipitor Labs' },
    { name: 'Metformin 500mg', genericName: 'Metformin HCl', category: 'Antidiabetic', dosageForm: 'Tablet', strength: '500mg', manufacturer: 'Glucophage Inc' },
    { name: 'Lisinopril 10mg', genericName: 'Lisinopril', category: 'Antihypertensive', dosageForm: 'Tablet', strength: '10mg', manufacturer: 'Zestril Pharma' },
    { name: 'Ibuprofen 400mg', genericName: 'Ibuprofen', category: 'NSAID / Analgesic', dosageForm: 'Tablet', strength: '400mg', manufacturer: 'Advil Healthcare' },
  ];

  const createdMedicines: Record<string, string> = {};
  for (const med of medicinesData) {
    const created = await prisma.medicine.create({ data: med });
    createdMedicines[med.name] = created.id;
  }

  // 6. Admin User
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@caremate.health',
      passwordHash: adminPasswordHash,
      role: UserRole.ADMIN,
      firstName: 'CareMate',
      lastName: 'Administrator',
      phone: '+15550000001',
      isEmailVerified: true,
      address: {
        create: {
          street: '100 Medical Center Blvd',
          city: 'Boston',
          state: 'MA',
          postalCode: '02115',
          country: 'United States',
        },
      },
    },
  });

  // 7. Doctors
  const doctorsData = [
    {
      email: 'dr.jenkins@caremate.health',
      firstName: 'Sarah',
      lastName: 'Jenkins',
      phone: '+15551000001',
      licenseNumber: 'MD-MA-88492',
      qualifications: 'MD, FACC, Harvard Medical School',
      experienceYears: 14,
      consultationFee: 120.0,
      biography: 'Board-certified cardiologist specializing in preventive cardiology, coronary artery disease management, and echocardiography.',
      clinicName: 'Boston Heart & Vascular Institute',
      clinicAddress: '450 Brookline Ave, Suite 300, Boston, MA',
      specialization: 'Cardiology',
      ratingAverage: 4.9,
      ratingCount: 38,
    },
    {
      email: 'dr.vance@caremate.health',
      firstName: 'Marcus',
      lastName: 'Vance',
      phone: '+15551000002',
      licenseNumber: 'MD-NY-77382',
      qualifications: 'MD, PhD Neurology, Johns Hopkins',
      experienceYears: 11,
      consultationFee: 140.0,
      biography: 'Leading neurologist focusing on migraine disorders, neuropathies, cognitive health, and neuro-rehabilitation.',
      clinicName: 'Vance Neurology Center',
      clinicAddress: '120 E 64th St, New York, NY',
      specialization: 'Neurology',
      ratingAverage: 4.8,
      ratingCount: 29,
    },
    {
      email: 'dr.desai@caremate.health',
      firstName: 'Anita',
      lastName: 'Desai',
      phone: '+15551000003',
      licenseNumber: 'MD-CA-66291',
      qualifications: 'MD Internal Medicine, Stanford Medicine',
      experienceYears: 8,
      consultationFee: 75.0,
      biography: 'Compassionate primary care physician dedicated to chronic condition management, preventive screenings, and patient wellness.',
      clinicName: 'Desai Family & General Clinic',
      clinicAddress: '780 University Ave, Palo Alto, CA',
      specialization: 'General Medicine',
      ratingAverage: 5.0,
      ratingCount: 52,
    },
  ];

  const createdDoctors: Array<{ user: any; doctor: any }> = [];

  for (const doc of doctorsData) {
    const user = await prisma.user.create({
      data: {
        email: doc.email,
        passwordHash: defaultPasswordHash,
        role: UserRole.DOCTOR,
        firstName: doc.firstName,
        lastName: doc.lastName,
        phone: doc.phone,
        isEmailVerified: true,
        address: {
          create: {
            street: doc.clinicAddress,
            city: 'Metro City',
            state: 'CA',
            postalCode: '90001',
          },
        },
        doctor: {
          create: {
            licenseNumber: doc.licenseNumber,
            qualifications: doc.qualifications,
            experienceYears: doc.experienceYears,
            consultationFee: doc.consultationFee,
            biography: doc.biography,
            clinicName: doc.clinicName,
            clinicAddress: doc.clinicAddress,
            ratingAverage: doc.ratingAverage,
            ratingCount: doc.ratingCount,
            specializations: {
              create: [
                {
                  specializationId: createdSpecializations[doc.specialization],
                },
              ],
            },
          },
        },
      },
      include: {
        doctor: true,
      },
    });

    // Create Doctor Weekly Availabilities (Monday - Friday 9:00 - 17:00)
    const days: DayOfWeek[] = [DayOfWeek.MONDAY, DayOfWeek.TUESDAY, DayOfWeek.WEDNESDAY, DayOfWeek.THURSDAY, DayOfWeek.FRIDAY];
    for (const day of days) {
      await prisma.doctorAvailability.create({
        data: {
          doctorId: user.doctor!.id,
          dayOfWeek: day,
          startTime: '09:00',
          endTime: '17:00',
          slotDurationMinutes: 30,
        },
      });
    }

    createdDoctors.push({ user, doctor: user.doctor });
  }

  // 8. Patients
  const patientsData = [
    {
      email: 'patient.john@example.com',
      firstName: 'Johnathan',
      lastName: 'Miller',
      phone: '+15552000001',
      dateOfBirth: new Date('1985-04-12'),
      gender: Gender.MALE,
      bloodGroup: BloodGroup.O_POSITIVE,
      height: 180,
      weight: 78,
      street: '742 Evergreen Terrace',
      city: 'Springfield',
      state: 'IL',
      postalCode: '62704',
      emergencyName: 'Mary Miller',
      emergencyPhone: '+15552000099',
      emergencyRel: 'Spouse',
    },
    {
      email: 'patient.sophia@example.com',
      firstName: 'Sophia',
      lastName: 'Garcia',
      phone: '+15552000002',
      dateOfBirth: new Date('1992-09-24'),
      gender: Gender.FEMALE,
      bloodGroup: BloodGroup.A_POSITIVE,
      height: 165,
      weight: 60,
      street: '14 Elm Street',
      city: 'Austin',
      state: 'TX',
      postalCode: '73301',
      emergencyName: 'Carlos Garcia',
      emergencyPhone: '+15552000098',
      emergencyRel: 'Brother',
    },
  ];

  const createdPatients: Array<{ user: any; patient: any }> = [];

  for (const pat of patientsData) {
    const user = await prisma.user.create({
      data: {
        email: pat.email,
        passwordHash: defaultPasswordHash,
        role: UserRole.PATIENT,
        firstName: pat.firstName,
        lastName: pat.lastName,
        phone: pat.phone,
        isEmailVerified: true,
        address: {
          create: {
            street: pat.street,
            city: pat.city,
            state: pat.state,
            postalCode: pat.postalCode,
          },
        },
        patient: {
          create: {
            dateOfBirth: pat.dateOfBirth,
            gender: pat.gender,
            bloodGroup: pat.bloodGroup,
            height: pat.height,
            weight: pat.weight,
            emergencyContact: {
              create: {
                name: pat.emergencyName,
                phone: pat.emergencyPhone,
                relationship: pat.emergencyRel,
              },
            },
            allergies: {
              create: [
                { allergen: 'Penicillin', severity: 'SEVERE', reaction: 'Anaphylaxis / Hives' },
              ],
            },
            conditions: {
              create: [
                { name: 'Mild Hypertension', status: 'ACTIVE', notes: 'Diet controlled & monitored' },
              ],
            },
          },
        },
      },
      include: {
        patient: true,
      },
    });

    createdPatients.push({ user, patient: user.patient });
  }

  // 9. Sample Completed Appointment, Medical Record & Prescription
  const demoDoctor = createdDoctors[0].doctor;
  const demoPatient = createdPatients[0].patient;
  const today = new Date();

  const appointment = await prisma.appointment.create({
    data: {
      appointmentNumber: 'APT-2026-0001',
      doctorId: demoDoctor.id,
      patientId: demoPatient.id,
      date: today,
      startTime: '10:00',
      endTime: '10:30',
      type: AppointmentType.IN_PERSON,
      status: AppointmentStatus.COMPLETED,
      reason: 'Routine annual cardiovascular checkup and blood pressure monitoring',
      statusHistory: {
        create: [
          { status: AppointmentStatus.REQUESTED, note: 'Initial booking by patient' },
          { status: AppointmentStatus.CONFIRMED, note: 'Confirmed by clinic desk' },
          { status: AppointmentStatus.COMPLETED, note: 'Consultation concluded' },
        ],
      },
    },
  });

  // Clinical Record
  const medicalRecord = await prisma.medicalRecord.create({
    data: {
      recordNumber: 'EHR-2026-0001',
      patientId: demoPatient.id,
      doctorId: demoDoctor.id,
      appointmentId: appointment.id,
      visitDate: today,
      symptoms: 'Patient reports occasional fatigue upon heavy exertion, no chest pains.',
      diagnosisNote: 'Primary hypertension (stage 1), well-compensated.',
      treatmentPlan: 'Prescribed low-dose Lisinopril, recommend 30 min daily walking and low sodium intake.',
      vitalSigns: {
        create: {
          systolicBP: 128,
          diastolicBP: 82,
          heartRate: 72,
          respiratoryRate: 16,
          temperature: 36.8,
          oxygenSaturation: 99.0,
          bloodGlucose: 92.0,
        },
      },
      diagnoses: {
        create: {
          code: 'I10',
          description: 'Essential (primary) hypertension',
          type: 'PRIMARY',
        },
      },
      clinicalNotes: {
        create: {
          subjective: '41yo male presenting for annual cardiac evaluation. No dyspnea at rest.',
          objective: 'BP 128/82 mmHg, HR 72 regular, S1/S2 normal, no murmurs.',
          assessment: 'Stable cardiovascular baseline with mild stage 1 hypertension.',
          plan: 'Lisinopril 10mg once daily in morning. Check basic metabolic panel in 4 weeks.',
        },
      },
    },
  });

  // Prescription
  await prisma.prescription.create({
    data: {
      prescriptionNumber: 'RX-2026-0001',
      patientId: demoPatient.id,
      doctorId: demoDoctor.id,
      medicalRecordId: medicalRecord.id,
      notes: 'Take with full glass of water. Monitor home blood pressure twice weekly.',
      items: {
        create: [
          {
            medicineId: createdMedicines['Lisinopril 10mg'],
            medicineName: 'Lisinopril 10mg',
            dosage: '1 Tablet',
            frequency: 'Once daily in the morning',
            duration: '30 Days',
            instructions: 'Take after breakfast',
          },
        ],
      },
    },
  });

  // Lab Order
  await prisma.labOrder.create({
    data: {
      orderNumber: 'LAB-ORD-0001',
      patientId: demoPatient.id,
      doctorId: demoDoctor.id,
      status: LabOrderStatus.COMPLETED,
      notes: 'Fasting lipid and metabolic panel requested',
      items: {
        create: [
          {
            labTestId: createdLabTests['LAB-CMP-002'],
            result: {
              create: {
                resultValue: 'Glucose: 92 mg/dL, BUN: 14 mg/dL, Creatinine: 0.9 mg/dL',
                isAbnormal: false,
                remarks: 'All parameters within optimal reference intervals.',
                verifiedBy: 'Dr. Sarah Jenkins, MD',
                verifiedAt: today,
              },
            },
          },
        ],
      },
    },
  });

  // Invoice & Payment
  const invoice = await prisma.invoice.create({
    data: {
      invoiceNumber: 'INV-2026-0001',
      patientId: demoPatient.id,
      appointmentId: appointment.id,
      totalAmount: 120.0,
      taxAmount: 6.0,
      netAmount: 126.0,
      status: InvoiceStatus.PAID,
      dueDate: today,
      paidAt: today,
      items: {
        create: [
          {
            description: 'Specialist Cardiology Consultation',
            quantity: 1,
            unitPrice: 120.0,
            totalPrice: 120.0,
          },
        ],
      },
    },
  });

  await prisma.payment.create({
    data: {
      paymentNumber: 'PAY-2026-0001',
      invoiceId: invoice.id,
      amount: 126.0,
      method: PaymentMethod.STRIPE,
      status: PaymentStatus.SUCCESS,
      transactionRef: 'ch_test_stripe_card_398249823',
    },
  });

  // Notification for Patient
  await prisma.notification.create({
    data: {
      userId: createdPatients[0].user.id,
      type: 'APPOINTMENT_CONFIRMED',
      title: 'Appointment Confirmed',
      message: 'Your appointment with Dr. Sarah Jenkins has been scheduled and confirmed.',
      isRead: true,
    },
  });

  console.log('✅ CareMate Database Seeding Completed Successfully!');
  console.log('---------------------------------------------------------');
  console.log('👑 Admin:     admin@caremate.health       (Pass: Admin123!)');
  console.log('🩺 Doctor:    dr.jenkins@caremate.health  (Pass: Password123!)');
  console.log('🩺 Doctor:    dr.vance@caremate.health    (Pass: Password123!)');
  console.log('👤 Patient:   patient.john@example.com    (Pass: Password123!)');
  console.log('---------------------------------------------------------');
}

main()
  .catch((e) => {
    console.error('❌ Database seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
