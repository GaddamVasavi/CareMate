import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Get in Touch with CareMate
        </h1>
        <p className="text-slate-500 text-sm">
          Have questions regarding clinical onboarding, technical integration, or patient support?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Clinic Headquarters</h3>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>100 Medical Center Blvd, Suite 400<br />Boston, MA 02115</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 flex-shrink-0" />
                <span>+1 (800) 555-CARE (2273)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-500 flex-shrink-0" />
                <span>support@caremate.health</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-7">
          <Card className="p-6">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Message Received</h4>
                <p className="text-xs text-slate-500">Our patient coordination desk will reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Your Name" placeholder="Jane Doe" required />
                  <Input label="Email Address" type="email" placeholder="jane@example.com" required />
                </div>
                <Input label="Subject" placeholder="Inquiry regarding..." required />
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    rows={4}
                    className="block w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <Button type="submit" size="md" rightIcon={<Send className="w-4 h-4" />}>
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
