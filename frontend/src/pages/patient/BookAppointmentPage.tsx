import React, { useState, useEffect } from 'react';
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
