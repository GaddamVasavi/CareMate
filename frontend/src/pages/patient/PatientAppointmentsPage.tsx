import React, { useState, useEffect } from 'react';
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
