'use client';

import { useState, FormEvent } from 'react';

export default function SimpleContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to send message.');
      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
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
        <h3 className="font-heading font-extrabold text-xl text-navy mb-2">Message Sent!</h3>
        <p className="text-slate text-xs">We'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {errorMsg && (
        <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-200">{errorMsg}</div>
      )}
      <div>
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">Full Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
        <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">Message *</label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-emerald hover:bg-emerald/90 disabled:opacity-50 text-white font-bold text-xs py-4 rounded-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
