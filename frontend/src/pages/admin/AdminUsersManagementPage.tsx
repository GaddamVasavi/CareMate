import React, { useState, useEffect } from 'react';
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
