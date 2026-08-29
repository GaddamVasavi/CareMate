import React, { useState, useEffect } from 'react';
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
