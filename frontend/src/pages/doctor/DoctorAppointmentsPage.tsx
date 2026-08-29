import React, { useState, useEffect } from 'react';
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
