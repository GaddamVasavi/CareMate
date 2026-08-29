import React, { useState, useEffect } from 'react';
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
