import React, { useState, useEffect } from 'react';
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
