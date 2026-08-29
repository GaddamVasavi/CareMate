import os

def generate(write_file):
    # PATIENT APPOINTMENTS
    write_file("frontend/src/pages/patient/PatientAppointmentsPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { appointmentService } from '../../services/appointmentService';
import { Calendar, Clock, Stethoscope, Video, XCircle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PatientAppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAppointment, setSelectedAppointment] = useState<any | null>(null);
  const [cancelReason, setCancelReason] = useState('');
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const fetchAppointments = async () => {
    setIsLoading(true);
    try {
      const res = await appointmentService.list();
      if (res.data?.appointments) {
        setAppointments(res.data.appointments);
      }
    } catch {
      // Fallback
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleCancel = async () => {
    if (!selectedAppointment || !cancelReason) return;
    try {
      await appointmentService.cancel(selectedAppointment.id, cancelReason);
      setIsCancelModalOpen(false);
      setCancelReason('');
      fetchAppointments();
    } catch {
      // Error handling
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Consultation Schedule</h1>
          <p className="text-sm text-slate-500">Track and manage upcoming and past medical appointments</p>
        </div>
        <Link to="/patient/book-appointment">
          <Button variant="primary">Book New Appointment</Button>
        </Link>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="divide-y divide-slate-100">
          {appointments.length === 0 && !isLoading ? (
            <div className="p-12 text-center text-slate-500">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="font-bold text-slate-700">No appointments scheduled</p>
              <p className="text-xs">Find a doctor and book your consultation slot in seconds.</p>
            </div>
          ) : (
            appointments.map((apt) => (
              <div key={apt.id} className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold flex-shrink-0">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900">
                        Dr. {apt.doctor?.user?.firstName} {apt.doctor?.user?.lastName}
                      </h3>
                      <Badge variant={apt.status === 'CONFIRMED' ? 'success' : apt.status === 'CANCELLED' ? 'danger' : 'info'} size="sm">
                        {apt.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-brand-600 font-semibold">
                      {apt.doctor?.specializations?.[0]?.specialization?.name || 'Specialist'}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" /> {new Date(apt.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> {apt.startTime} - {apt.endTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-auto">
                  {apt.status === 'CONFIRMED' && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-rose-600 hover:bg-rose-50"
                      onClick={() => {
                        setSelectedAppointment(apt);
                        setIsCancelModalOpen(true);
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                  {apt.invoice && (
                    <Badge variant={apt.invoice.status === 'PAID' ? 'success' : 'warning'}>
                      {apt.invoice.status} (${apt.invoice.netAmount})
                    </Badge>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </Card>

      <Modal isOpen={isCancelModalOpen} onClose={() => setIsCancelModalOpen(false)} title="Cancel Appointment">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Please provide a reason for cancelling your consultation with Dr. {selectedAppointment?.doctor?.user?.lastName}:
          </p>
          <textarea
            rows={3}
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none"
            placeholder="Reason for cancellation..."
          />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setIsCancelModalOpen(false)}>Keep Appointment</Button>
            <Button variant="danger" onClick={handleCancel} disabled={!cancelReason}>Confirm Cancellation</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
""")

    # BOOK APPOINTMENT
    write_file("frontend/src/pages/patient/BookAppointmentPage.tsx", """import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { doctorService } from '../../services/doctorService';
import { appointmentService } from '../../services/appointmentService';
import { Stethoscope, Calendar, Clock } from 'lucide-react';

const sampleSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00', '15:30', '16:00'];

export const BookAppointmentPage: React.FC = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [type, setType] = useState('IN_PERSON');
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    doctorService.search().then((res) => {
      if (res.data?.doctors) {
        setDoctors(res.data.doctors);
        if (res.data.doctors.length > 0) {
          setSelectedDoctorId(res.data.doctors[0].id);
        }
      }
    });
  }, []);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctorId || !selectedDate || !selectedSlot) return;

    setIsLoading(true);
    try {
      const [hours, mins] = selectedSlot.split(':').map(Number);
      const endMins = mins + 30;
      const endHours = endMins >= 60 ? hours + 1 : hours;
      const formattedEndTime = `${String(endHours).padStart(2, '0')}:${String(endMins % 60).padStart(2, '0')}`;

      await appointmentService.create({
        doctorId: selectedDoctorId,
        date: selectedDate,
        startTime: selectedSlot,
        endTime: formattedEndTime,
        type,
        reason,
      });

      navigate('/patient/appointments');
    } catch {
      // Error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Book Medical Consultation</h1>
        <p className="text-sm text-slate-500">Choose your physician, appointment date, and convenient time slot</p>
      </div>

      <form onSubmit={handleBooking} className="space-y-6">
        <Card className="space-y-4">
          <h3 className="font-bold text-slate-900">1. Select Physician</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                onClick={() => setSelectedDoctorId(doc.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                  selectedDoctorId === doc.id
                    ? 'border-brand-500 bg-brand-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold">
                  {doc.user?.firstName?.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Dr. {doc.user?.firstName} {doc.user?.lastName}</h4>
                  <p className="text-xs text-brand-600 font-semibold">{doc.specializations?.[0]?.specialization?.name || 'General'}</p>
                  <p className="text-xs text-slate-500">Fee: ${doc.consultationFee}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="font-bold text-slate-900">2. Date & Time Slot</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Select Consultation Date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">Consultation Mode</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:outline-none"
              >
                <option value="IN_PERSON">In-Person Clinic Visit</option>
                <option value="VIDEO_CONSULTATION">Telehealth Video Call</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-sm font-medium text-slate-700">Available Slots</label>
            <div className="grid grid-cols-5 gap-2">
              {sampleSlots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedSlot === slot
                      ? 'bg-brand-500 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="font-bold text-slate-900">3. Visit Information</h3>
          <textarea
            rows={3}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none"
            placeholder="Describe your symptoms, reason for visit, or concerns..."
          />
        </Card>

        <Button type="submit" size="lg" className="w-full" isLoading={isLoading} disabled={!selectedSlot}>
          Confirm & Book Appointment Slot
        </Button>
      </form>
    </div>
  );
};
""")

    # PATIENT MEDICAL RECORDS
    write_file("frontend/src/pages/patient/PatientMedicalRecordsPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { medicalRecordService } from '../../services/medicalRecordService';
import { FileText, Activity, Heart } from 'lucide-react';

export const PatientMedicalRecordsPage: React.FC = () => {
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    medicalRecordService.list().then((res) => {
      if (res.data?.records) setRecords(res.data.records);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Electronic Health Records (EHR)</h1>
        <p className="text-sm text-slate-500">View diagnostic summaries, vital signs, and clinical notes recorded by your doctors</p>
      </div>

      <div className="space-y-4">
        {records.length === 0 ? (
          <Card className="p-12 text-center text-slate-500">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="font-bold text-slate-700">No medical records on file yet</p>
            <p className="text-xs">Your clinical visit summaries will appear here automatically.</p>
          </Card>
        ) : (
          records.map((rec) => (
            <Card key={rec.id} hoverEffect className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Visit Summary: {rec.recordNumber}</h3>
                    <p className="text-xs text-slate-500">
                      Attending Physician: Dr. {rec.doctor?.user?.firstName} {rec.doctor?.user?.lastName}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  {new Date(rec.visitDate).toLocaleDateString()}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl">
                <div>
                  <span className="text-slate-400 font-medium block">Reported Symptoms</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{rec.symptoms}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Clinical Diagnosis</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{rec.diagnosisNote}</p>
                </div>
              </div>

              {rec.vitalSigns?.[0] && (
                <div className="flex items-center gap-4 text-xs text-slate-600 pt-1">
                  <span className="flex items-center gap-1 font-medium">
                    <Activity className="w-3.5 h-3.5 text-brand-500" /> BP: {rec.vitalSigns[0].systolicBP}/{rec.vitalSigns[0].diastolicBP} mmHg
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Heart className="w-3.5 h-3.5 text-rose-500" /> Heart Rate: {rec.vitalSigns[0].heartRate} bpm
                  </span>
                </div>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
""")

    # PATIENT PRESCRIPTIONS
    write_file("frontend/src/pages/patient/PatientPrescriptionsPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { prescriptionService } from '../../services/prescriptionService';
import { FolderOpen, Download, Pill } from 'lucide-react';

export const PatientPrescriptionsPage: React.FC = () => {
  const [prescriptions, setPrescriptions] = useState<any[]>([]);

  useEffect(() => {
    prescriptionService.list().then((res) => {
      if (res.data?.prescriptions) setPrescriptions(res.data.prescriptions);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Digital Prescriptions</h1>
        <p className="text-sm text-slate-500">Access and download verified digital prescriptions issued by your doctors</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prescriptions.map((rx) => (
          <Card key={rx.id} hoverEffect className="space-y-4">
            <div className="flex justify-between items-start pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FolderOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{rx.prescriptionNumber}</h4>
                  <p className="text-[11px] text-slate-400">Dr. {rx.doctor?.user?.lastName}</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 font-medium">{new Date(rx.issueDate).toLocaleDateString()}</span>
            </div>

            <div className="space-y-2">
              {rx.items?.map((item: any) => (
                <div key={item.id} className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span className="flex items-center gap-1.5"><Pill className="w-3.5 h-3.5 text-brand-500" /> {item.medicineName}</span>
                    <span>{item.dosage}</span>
                  </div>
                  <p className="text-slate-500">Frequency: {item.frequency} • Duration: {item.duration}</p>
                  {item.instructions && <p className="text-slate-600 italic">{item.instructions}</p>}
                </div>
              ))}
            </div>

            <Button size="sm" variant="outline" className="w-full" leftIcon={<Download className="w-3.5 h-3.5" />}>
              Download Official PDF Rx
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
""")

    # PATIENT LAB RESULTS
    write_file("frontend/src/pages/patient/PatientLabResultsPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { labService } from '../../services/labService';
import { FlaskConical, Clock } from 'lucide-react';

export const PatientLabResultsPage: React.FC = () => {
  const [labOrders, setLabOrders] = useState<any[]>([]);

  useEffect(() => {
    labService.listOrders().then((res) => {
      if (res.data?.orders) setLabOrders(res.data.orders);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Laboratory Orders & Reports</h1>
        <p className="text-sm text-slate-500">View diagnostic test results and certified pathologist findings</p>
      </div>

      <div className="space-y-4">
        {labOrders.map((order) => (
          <Card key={order.id} hoverEffect className="space-y-4">
            <div className="flex justify-between items-start pb-2 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Order #{order.orderNumber}</h3>
                  <p className="text-xs text-slate-500">Ordered by Dr. {order.doctor?.user?.lastName}</p>
                </div>
              </div>
              <Badge variant={order.status === 'COMPLETED' ? 'success' : 'warning'}>
                {order.status}
              </Badge>
            </div>

            <div className="space-y-3">
              {order.items?.map((item: any) => (
                <div key={item.id} className="p-3.5 bg-slate-50 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between items-center font-bold text-slate-800">
                    <span>{item.labTest?.name} ({item.labTest?.code})</span>
                    <span className="text-slate-500">${item.labTest?.price}</span>
                  </div>
                  {item.result ? (
                    <div className="space-y-1 pt-1 border-t border-slate-200/60">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-900">Result: {item.result.resultValue}</span>
                        {item.result.isAbnormal && (
                          <Badge variant="danger" size="sm">ABNORMAL</Badge>
                        )}
                      </div>
                      {item.result.remarks && <p className="text-slate-600">{item.result.remarks}</p>}
                      <p className="text-[11px] text-slate-400">Verified by: {item.result.verifiedBy}</p>
                    </div>
                  ) : (
                    <p className="text-amber-600 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" /> Sample processing in laboratory
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
""")

    # PATIENT BILLING
    write_file("frontend/src/pages/patient/PatientBillingPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import { billingService } from '../../services/billingService';
import { CreditCard } from 'lucide-react';

export const PatientBillingPage: React.FC = () => {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState<any | null>(null);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const fetchInvoices = async () => {
    const res = await billingService.listInvoices();
    if (res.data?.invoices) setInvoices(res.data.invoices);
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const handlePay = async () => {
    if (!selectedInvoice) return;
    setIsProcessing(true);
    try {
      await billingService.processPayment({
        invoiceId: selectedInvoice.id,
        amount: selectedInvoice.netAmount,
        method: 'STRIPE',
      });
      setIsPayModalOpen(false);
      fetchInvoices();
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Invoices & Payments</h1>
        <p className="text-sm text-slate-500">Review your itemized medical invoices and make payments securely</p>
      </div>

      <div className="space-y-4">
        {invoices.map((inv) => (
          <Card key={inv.id} hoverEffect className="space-y-4">
            <div className="flex justify-between items-start pb-2 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Invoice #{inv.invoiceNumber}</h3>
                <p className="text-xs text-slate-400">Due Date: {new Date(inv.dueDate).toLocaleDateString()}</p>
              </div>
              <Badge variant={inv.status === 'PAID' ? 'success' : 'warning'}>
                {inv.status}
              </Badge>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              {inv.items?.map((item: any) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.description} (x{item.quantity})</span>
                  <span className="font-semibold text-slate-800">${item.totalPrice}</span>
                </div>
              ))}
              <div className="flex justify-between pt-2 border-t border-slate-100 font-bold text-slate-900 text-sm">
                <span>Total Net Payable</span>
                <span className="text-emerald-600">${inv.netAmount}</span>
              </div>
            </div>

            {inv.status !== 'PAID' && (
              <Button
                size="sm"
                className="w-full"
                leftIcon={<CreditCard className="w-4 h-4" />}
                onClick={() => {
                  setSelectedInvoice(inv);
                  setIsPayModalOpen(true);
                }}
              >
                Pay Now with Credit Card / Stripe
              </Button>
            )}
          </Card>
        ))}
      </div>

      <Modal isOpen={isPayModalOpen} onClose={() => setIsPayModalOpen(false)} title="Complete Payment">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Total Amount Due: <b className="text-slate-900">${selectedInvoice?.netAmount}</b>
          </p>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <p className="text-xs font-bold text-slate-700">Stripe Card Element Simulation</p>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-200 p-2.5 text-xs font-mono"
              defaultValue="4242 •••• •••• 4242"
              disabled
            />
            <div className="grid grid-cols-2 gap-2">
              <input type="text" className="rounded-xl border border-slate-200 p-2.5 text-xs font-mono" defaultValue="12/28" disabled />
              <input type="text" className="rounded-xl border border-slate-200 p-2.5 text-xs font-mono" defaultValue="CVC 123" disabled />
            </div>
          </div>
          <Button className="w-full" size="lg" isLoading={isProcessing} onClick={handlePay}>
            Confirm Payment of ${selectedInvoice?.netAmount}
          </Button>
        </div>
      </Modal>
    </div>
  );
};
""")

    # PATIENT PROFILE
    write_file("frontend/src/pages/patient/PatientProfilePage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { patientService } from '../../services/patientService';

export const PatientProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [bloodGroup, setBloodGroup] = useState('UNKNOWN');
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(70);
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    patientService.getMyProfile().then((res) => {
      if (res.data) {
        setProfile(res.data);
        if (res.data.dateOfBirth) setDateOfBirth(res.data.dateOfBirth.split('T')[0]);
        setBloodGroup(res.data.bloodGroup || 'UNKNOWN');
        setHeight(res.data.height || 175);
        setWeight(res.data.weight || 70);
        if (res.data.emergencyContact) {
          setEmergencyName(res.data.emergencyContact.name);
          setEmergencyPhone(res.data.emergencyContact.phone);
        }
      }
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;
    setIsSaving(true);
    try {
      await patientService.updateProfile(profile.id, {
        dateOfBirth,
        bloodGroup,
        height: Number(height),
        weight: Number(weight),
        emergencyContactName: emergencyName,
        emergencyContactPhone: emergencyPhone,
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Personal Health Profile</h1>
        <p className="text-sm text-slate-500">Manage medical baseline metrics and emergency contact coordinates</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="space-y-4">
          <h3 className="font-bold text-slate-900">1. Vital Demographics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Date of Birth" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">Blood Group</label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:outline-none"
              >
                <option value="O_POSITIVE">O+</option>
                <option value="O_NEGATIVE">O-</option>
                <option value="A_POSITIVE">A+</option>
                <option value="A_NEGATIVE">A-</option>
                <option value="B_POSITIVE">B+</option>
                <option value="B_NEGATIVE">B-</option>
                <option value="AB_POSITIVE">AB+</option>
                <option value="AB_NEGATIVE">AB-</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Height (cm)" type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
            <Input label="Weight (kg)" type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="font-bold text-slate-900">2. Emergency Contact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Contact Full Name" placeholder="Jane Doe" value={emergencyName} onChange={(e) => setEmergencyName(e.target.value)} />
            <Input label="Contact Phone Number" placeholder="+1 (555) 000-0000" value={emergencyPhone} onChange={(e) => setEmergencyPhone(e.target.value)} />
          </div>
        </Card>

        <Button type="submit" size="lg" className="w-full" isLoading={isSaving}>
          Save Health Profile Changes
        </Button>
      </form>
    </div>
  );
};
""")

    # PATIENT SETTINGS
    write_file("frontend/src/pages/patient/PatientSettingsPage.tsx", """import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import api from '../../services/api';

export const PatientSettingsPage: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/auth/change-password', { currentPassword, newPassword });
      setMsg('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
    } catch {
      setMsg('Failed to update password.');
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
        <p className="text-sm text-slate-500">Manage your security credentials and notification preferences</p>
      </div>

      <Card className="space-y-4">
        <h3 className="font-bold text-slate-900">Security & Password</h3>
        {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}
        <form onSubmit={handleChangePassword} className="space-y-4">
          <Input label="Current Password" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
          <Input label="New Password (min 8 chars)" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          <Button type="submit" size="md">Update Password</Button>
        </form>
      </Card>
    </div>
  );
};
""")

    # DOCTOR APPOINTMENTS
    write_file("frontend/src/pages/doctor/DoctorAppointmentsPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { appointmentService } from '../../services/appointmentService';

export const DoctorAppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<any[]>([]);

  const fetchAppointments = async () => {
    const res = await appointmentService.list();
    if (res.data?.appointments) setAppointments(res.data.appointments);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (id: string, status: string) => {
    await appointmentService.updateStatus(id, status);
    fetchAppointments();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Doctor's Appointment Roster</h1>
        <p className="text-sm text-slate-500">Manage patient visits, change statuses, and conduct consultations</p>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="divide-y divide-slate-100">
          {appointments.map((apt) => (
            <div key={apt.id} className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                  {apt.patient?.user?.firstName?.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {apt.patient?.user?.firstName} {apt.patient?.user?.lastName}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                    <span>Date: {new Date(apt.date).toLocaleDateString()}</span>
                    <span>Time: {apt.startTime} - {apt.endTime}</span>
                  </div>
                  {apt.reason && <p className="text-xs text-slate-600 mt-1 italic">{apt.reason}</p>}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant={apt.status === 'COMPLETED' ? 'success' : apt.status === 'CONFIRMED' ? 'info' : 'warning'}>
                  {apt.status}
                </Badge>
                {apt.status === 'CONFIRMED' && (
                  <Button size="sm" variant="primary" onClick={() => handleUpdateStatus(apt.id, 'COMPLETED')}>
                    Mark Completed
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
""")

    # DOCTOR SCHEDULE
    write_file("frontend/src/pages/doctor/DoctorSchedulePage.tsx", """import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

export const DoctorSchedulePage: React.FC = () => {
  const [msg, setMsg] = useState('');

  const handleSaveWorkingHours = async () => {
    setMsg('Working hours updated for weekly rotation!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Working Hours & Availability</h1>
        <p className="text-sm text-slate-500">Configure your recurring consultation slots and duration</p>
      </div>

      {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}

      <Card className="space-y-4">
        <h3 className="font-bold text-slate-900">Weekly Shift Configuration</h3>
        <div className="space-y-3">
          {days.map((day) => (
            <div key={day} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl text-xs">
              <span className="font-bold text-slate-800 w-28">{day}</span>
              <div className="flex items-center gap-2">
                <input type="text" defaultValue="09:00" className="w-20 rounded-lg border border-slate-200 p-1.5 text-center" />
                <span>to</span>
                <input type="text" defaultValue="17:00" className="w-20 rounded-lg border border-slate-200 p-1.5 text-center" />
              </div>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-brand-500" />
                <span>Active</span>
              </label>
            </div>
          ))}
        </div>
        <Button onClick={handleSaveWorkingHours} className="w-full">Save Schedule Settings</Button>
      </Card>
    </div>
  );
};
""")

    # DOCTOR PATIENTS
    write_file("frontend/src/pages/doctor/DoctorPatientsPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { patientService } from '../../services/patientService';
import { Mail, Phone } from 'lucide-react';

export const DoctorPatientsPage: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    patientService.list().then((res) => {
      if (res.data?.patients) setPatients(res.data.patients);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Patient Directory</h1>
        <p className="text-sm text-slate-500">View patients under your clinical care</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((pat) => (
          <Card key={pat.id} hoverEffect className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                {pat.user?.firstName?.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{pat.user?.firstName} {pat.user?.lastName}</h4>
                <p className="text-xs text-slate-400">Blood: {pat.bloodGroup} • Gender: {pat.gender}</p>
              </div>
            </div>
            <div className="space-y-1 text-xs text-slate-500 border-t border-slate-100 pt-2">
              <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {pat.user?.email}</p>
              <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {pat.user?.phone || 'No phone'}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
""")

    # DOCTOR EHR CREATE
    write_file("frontend/src/pages/doctor/DoctorEHRCreatePage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { medicalRecordService } from '../../services/medicalRecordService';
import { patientService } from '../../services/patientService';

export const DoctorEHRCreatePage: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [patientId, setPatientId] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [diagnosisNote, setDiagnosisNote] = useState('');
  const [treatmentPlan, setTreatmentPlan] = useState('');
  const [systolicBP, setSystolicBP] = useState(120);
  const [diastolicBP, setDiastolicBP] = useState(80);
  const [heartRate, setHeartRate] = useState(72);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    patientService.list().then((res) => {
      if (res.data?.patients) {
        setPatients(res.data.patients);
        if (res.data.patients.length > 0) setPatientId(res.data.patients[0].id);
      }
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId) return;

    try {
      await medicalRecordService.create({
        patientId,
        symptoms,
        diagnosisNote,
        treatmentPlan,
        vitalSigns: {
          systolicBP: Number(systolicBP),
          diastolicBP: Number(diastolicBP),
          heartRate: Number(heartRate),
        },
      });
      setMsg('Clinical Record successfully filed into Patient EHR!');
      setSymptoms('');
      setDiagnosisNote('');
      setTreatmentPlan('');
    } catch {
      setMsg('Error saving record');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Create Clinical EHR Record</h1>
        <p className="text-sm text-slate-500">Record SOAP clinical findings, ICD-10 diagnoses, and patient vital signs</p>
      </div>

      {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Select Patient</label>
            <select
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:outline-none"
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>{p.user?.firstName} {p.user?.lastName} ({p.user?.email})</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Input label="Systolic BP (mmHg)" type="number" value={systolicBP} onChange={(e) => setSystolicBP(Number(e.target.value))} />
            <Input label="Diastolic BP (mmHg)" type="number" value={diastolicBP} onChange={(e) => setDiastolicBP(Number(e.target.value))} />
            <Input label="Heart Rate (bpm)" type="number" value={heartRate} onChange={(e) => setHeartRate(Number(e.target.value))} />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Reported Symptoms & Subjective History</label>
            <textarea
              rows={3}
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none"
              placeholder="Patient symptoms..."
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Diagnosis & Clinical Assessment</label>
            <textarea
              rows={3}
              value={diagnosisNote}
              onChange={(e) => setDiagnosisNote(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none"
              placeholder="Primary diagnosis..."
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Treatment Plan & Follow-up Instructions</label>
            <textarea
              rows={3}
              value={treatmentPlan}
              onChange={(e) => setTreatmentPlan(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none"
              placeholder="Recommended medication and follow up..."
            />
          </div>
        </Card>

        <Button type="submit" size="lg" className="w-full">File EHR Record</Button>
      </form>
    </div>
  );
};
""")

    # DOCTOR PRESCRIPTION CREATE
    write_file("frontend/src/pages/doctor/DoctorPrescriptionCreatePage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { prescriptionService } from '../../services/prescriptionService';
import { patientService } from '../../services/patientService';
import { Plus, Trash2 } from 'lucide-react';

export const DoctorPrescriptionCreatePage: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [patientId, setPatientId] = useState('');
  const [items, setItems] = useState([{ medicineName: 'Lisinopril 10mg', dosage: '1 Tablet', frequency: 'Once daily in morning', duration: '30 Days' }]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    patientService.list().then((res) => {
      if (res.data?.patients) {
        setPatients(res.data.patients);
        if (res.data.patients.length > 0) setPatientId(res.data.patients[0].id);
      }
    });
  }, []);

  const handleAddItem = () => {
    setItems([...items, { medicineName: '', dosage: '', frequency: '', duration: '' }]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId) return;

    try {
      await prescriptionService.create({
        patientId,
        items,
      });
      setMsg('Digital Prescription generated and signed!');
    } catch {
      setMsg('Failed to issue prescription.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Issue Electronic Prescription</h1>
        <p className="text-sm text-slate-500">Prescribe medications with automated dosage and safety guidance</p>
      </div>

      {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Patient</label>
            <select
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:outline-none"
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>{p.user?.firstName} {p.user?.lastName}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm text-slate-900">Prescription Line Items</h4>
              <Button type="button" size="sm" variant="outline" onClick={handleAddItem} leftIcon={<Plus className="w-3.5 h-3.5" />}>
                Add Drug
              </Button>
            </div>

            {items.map((item, idx) => (
              <div key={idx} className="grid grid-cols-4 gap-2 items-center bg-slate-50 p-3 rounded-xl">
                <Input
                  placeholder="Medicine Name"
                  value={item.medicineName}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[idx].medicineName = e.target.value;
                    setItems(newItems);
                  }}
                  required
                />
                <Input
                  placeholder="Dosage (e.g. 500mg)"
                  value={item.dosage}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[idx].dosage = e.target.value;
                    setItems(newItems);
                  }}
                  required
                />
                <Input
                  placeholder="Frequency (e.g. 2x/day)"
                  value={item.frequency}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[idx].frequency = e.target.value;
                    setItems(newItems);
                  }}
                  required
                />
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Duration"
                    value={item.duration}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[idx].duration = e.target.value;
                      setItems(newItems);
                    }}
                    required
                  />
                  {items.length > 1 && (
                    <button type="button" onClick={() => handleRemoveItem(idx)} className="text-rose-500 p-2 hover:bg-rose-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Button type="submit" size="lg" className="w-full">Sign & Issue Prescription</Button>
      </form>
    </div>
  );
};
""")

    # DOCTOR LAB ORDERS
    write_file("frontend/src/pages/doctor/DoctorLabOrdersPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { labService } from '../../services/labService';
import { patientService } from '../../services/patientService';

export const DoctorLabOrdersPage: React.FC = () => {
  const [catalog, setCatalog] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [selectedTestIds, setSelectedTestIds] = useState<string[]>([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    labService.getCatalog().then((res) => {
      if (res.data) setCatalog(res.data);
    });
    patientService.list().then((res) => {
      if (res.data?.patients) {
        setPatients(res.data.patients);
        if (res.data.patients.length > 0) setSelectedPatientId(res.data.patients[0].id);
      }
    });
  }, []);

  const toggleTest = (id: string) => {
    if (selectedTestIds.includes(id)) {
      setSelectedTestIds(selectedTestIds.filter((t) => t !== id));
    } else {
      setSelectedTestIds([...selectedTestIds, id]);
    }
  };

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatientId || selectedTestIds.length === 0) return;

    try {
      await labService.createOrder({
        patientId: selectedPatientId,
        labTestIds: selectedTestIds,
      });
      setMsg('Laboratory order dispatched to Diagnostic Center!');
      setSelectedTestIds([]);
    } catch {
      setMsg('Failed to order lab tests.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Order Diagnostic Lab Tests</h1>
        <p className="text-sm text-slate-500">Request clinical pathology, hematology, and biochemistry panels</p>
      </div>

      {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}

      <form onSubmit={handleOrder} className="space-y-6">
        <Card className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">Patient</label>
            <select
              value={selectedPatientId}
              onChange={(e) => setSelectedPatientId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-2.5 text-sm focus:border-brand-500 focus:outline-none"
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>{p.user?.firstName} {p.user?.lastName}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-sm font-medium text-slate-700">Select Lab Tests from Catalog</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {catalog.map((test) => (
                <div
                  key={test.id}
                  onClick={() => toggleTest(test.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex justify-between items-center ${
                    selectedTestIds.includes(test.id)
                      ? 'border-brand-500 bg-brand-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{test.name}</h4>
                    <p className="text-[11px] text-slate-400">{test.category} • {test.sampleType}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600">${test.price}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Button type="submit" size="lg" className="w-full" disabled={selectedTestIds.length === 0}>
          Dispatch Laboratory Order
        </Button>
      </form>
    </div>
  );
};
""")

    # DOCTOR PROFILE SETTINGS
    write_file("frontend/src/pages/doctor/DoctorProfileSettingsPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { doctorService } from '../../services/doctorService';

export const DoctorProfileSettingsPage: React.FC = () => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [fee, setFee] = useState(100);
  const [clinicName, setClinicName] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    doctorService.getMyProfile().then((res) => {
      if (res.data) {
        setLicenseNumber(res.data.licenseNumber || '');
        setQualifications(res.data.qualifications || '');
        setFee(res.data.consultationFee || 100);
        setClinicName(res.data.clinicName || '');
      }
    });
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('Physician credentials updated!');
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Physician Profile Settings</h1>
        <p className="text-sm text-slate-500">Manage medical license numbers, consultation fees, and practice info</p>
      </div>

      {msg && <p className="text-xs font-bold text-emerald-600">{msg}</p>}

      <Card className="space-y-4">
        <form onSubmit={handleSave} className="space-y-4">
          <Input label="Medical License Number" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} required />
          <Input label="Qualifications" value={qualifications} onChange={(e) => setQualifications(e.target.value)} required />
          <Input label="Consultation Fee ($)" type="number" value={fee} onChange={(e) => setFee(Number(e.target.value))} required />
          <Input label="Clinic Name" value={clinicName} onChange={(e) => setClinicName(e.target.value)} />
          <Button type="submit" size="md" className="w-full">Save Professional Details</Button>
        </form>
      </Card>
    </div>
  );
};
""")

    # ADMIN USERS
    write_file("frontend/src/pages/admin/AdminUsersManagementPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import api from '../../services/api';

export const AdminUsersManagementPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const res = await api.get('/users');
    if (res.data?.data?.users) setUsers(res.data.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    await api.patch(`/users/${id}/status`, { isActive: !currentStatus });
    fetchUsers();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">User Management Directory</h1>
        <p className="text-sm text-slate-500">Manage all registered patient, physician, and admin accounts</p>
      </div>

      <Card className="p-0 overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-200/80">
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Role</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900">{u.firstName} {u.lastName}</td>
                <td className="p-4"><Badge variant="info">{u.role}</Badge></td>
                <td className="p-4 text-slate-600">{u.email}</td>
                <td className="p-4">
                  <Badge variant={u.isActive ? 'success' : 'danger'}>{u.isActive ? 'Active' : 'Inactive'}</Badge>
                </td>
                <td className="p-4 text-right">
                  <Button size="sm" variant="outline" onClick={() => handleToggleStatus(u.id, u.isActive)}>
                    {u.isActive ? 'Deactivate' : 'Activate'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
""")

    # ADMIN AUDIT LOGS
    write_file("frontend/src/pages/admin/AdminAuditLogsPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { adminService } from '../../services/adminService';

export const AdminAuditLogsPage: React.FC = () => {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    adminService.getAuditLogs().then((res) => {
      if (res.data?.logs) setLogs(res.data.logs);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Security & HIPAA Access Audit Trail</h1>
        <p className="text-sm text-slate-500">Immutable ledger tracking clinical record reads, updates, and billing operations</p>
      </div>

      <Card className="p-0 overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-200/80">
            <tr>
              <th className="p-4">Timestamp</th>
              <th className="p-4">User</th>
              <th className="p-4">Action</th>
              <th className="p-4">Resource</th>
              <th className="p-4">IP Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50">
                <td className="p-4 text-slate-500">{new Date(log.createdAt).toLocaleString()}</td>
                <td className="p-4 font-bold text-slate-900">{log.user?.firstName || 'System'} ({log.user?.role || 'SYSTEM'})</td>
                <td className="p-4"><Badge variant="info">{log.action}</Badge></td>
                <td className="p-4 font-semibold text-slate-800">{log.resource}</td>
                <td className="p-4 font-mono text-slate-400">{log.ipAddress || '127.0.0.1'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
""")

    # ADMIN ANALYTICS
    write_file("frontend/src/pages/admin/AdminAnalyticsPage.tsx", """import React, { useState, useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { analyticsService } from '../../services/analyticsService';
import { TrendingUp, BarChart3 } from 'lucide-react';

export const AdminAnalyticsPage: React.FC = () => {
  const [trends, setTrends] = useState<any[]>([]);
  const [specs, setSpecs] = useState<any[]>([]);

  useEffect(() => {
    analyticsService.getAppointmentTrends().then((res) => {
      if (res.data) setTrends(res.data);
    });
    analyticsService.getSpecializationDistribution().then((res) => {
      if (res.data) setSpecs(res.data);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Hospital Analytics & Performance</h1>
        <p className="text-sm text-slate-500">Clinical utilization metrics and specialization demand curves</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="space-y-4">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-brand-500" /> Monthly Appointment Volume
          </h3>
          <div className="space-y-2 text-xs">
            {trends.map((t) => (
              <div key={t.month} className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl">
                <span className="font-bold text-slate-800">{t.month}</span>
                <span className="text-brand-600 font-semibold">{t.total} total ({t.completed} completed)</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-500" /> Specialization Distribution
          </h3>
          <div className="space-y-2 text-xs">
            {specs.map((s) => (
              <div key={s.specialization} className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl">
                <span className="font-bold text-slate-800">{s.specialization}</span>
                <span className="font-semibold text-slate-600">{s.doctorCount} Doctors</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
""")
