import React, { useState, useEffect } from 'react';
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
