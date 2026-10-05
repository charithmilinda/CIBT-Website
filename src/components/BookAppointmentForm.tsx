'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import WhyIcon from './WhyIcon';

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB

export default function BookAppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fullName, setFullName] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    dob: '',
    subject: '',
    message: '',
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > MAX_FILE_SIZE) {
      setErrorMsg('CV file must be under 8MB.');
      e.target.value = '';
      setCvFile(null);
      return;
    }
    setErrorMsg('');
    setCvFile(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
      if (cvFile) payload.append('cv', cvFile);

      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) throw new Error('Failed to submit your appointment request.');

      setFullName(`${formData.firstName} ${formData.lastName}`.trim());
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-navy mb-2">Appointment Requested!</h3>
        <p className="text-slate text-xs max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{fullName || 'there'}</strong>. Our team will contact you within 24 hours to confirm
          your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" encType="multipart/form-data">
      {errorMsg && (
        <div className="md:col-span-2 bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-200">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">First Name *</label>
        <input
          type="text"
          required
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">Last Name *</label>
        <input
          type="text"
          required
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">Email Address *</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">Phone Number *</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
          WhatsApp Number <span className="text-slate/50 font-normal">(if different)</span>
        </label>
        <input
          type="tel"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">Date of Birth</label>
        <div className="relative">
          <input
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>
      </div>

      <div className="md:col-span-2">
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
          What Is Your Enquiry About? *
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Business pathway, student visa, course selection..."
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
          Upload CV <span className="text-slate/50 font-normal">(jpg, png, pdf or docx — up to 8MB)</span>
        </label>
        <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-lg px-4 py-4 text-xs text-slate cursor-pointer hover:border-navy/40 transition-colors">
          <WhyIcon name="upload" className="w-5 h-5 text-gold shrink-0" />
          <span>{cvFile ? cvFile.name : 'Click to choose a file'}</span>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      <div className="md:col-span-2">
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">Message *</label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>

      <div className="md:col-span-2 mt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald hover:bg-emerald/90 disabled:opacity-50 text-white font-bold text-xs py-4 rounded-lg transition-colors shadow-card"
        >
          {loading ? 'Sending Request...' : 'Book Appointment →'}
        </button>
      </div>
    </form>
  );
}
