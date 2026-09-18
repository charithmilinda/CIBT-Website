'use client'

import { useState, FormEvent } from 'react';

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    applicantType: 'student',
    currentLevel: 'after-al',
    preferredField: 'business',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit consultation request.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-navy text-white px-6 lg:px-8 border-t border-navy/20" id="consultation">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
            Free Academic Counseling
          </span>
          <h2 className="font-heading text-3xl font-extrabold">Book Your Personalized Consultation</h2>
          <p className="text-gray-300 text-sm mt-2 max-w-xl mx-auto">
            Speak directly with our academic advisors to map out your credit transfer, university selection, and visa requirements.
          </p>
        </div>

        <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-card-hover text-charcoal">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-navy mb-2">Consultation Requested!</h3>
              <p className="text-slate text-xs max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our counselors will contact you within 24 hours to confirm your scheduled appointment.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs text-navy font-bold underline hover:text-gold transition-colors"
              >
                Book another session
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {errorMsg && (
                <div className="md:col-span-2 bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kasun Perera"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+94 7X XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>

              {/* Applicant Type */}
              <div>
                <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
                  I am a...
                </label>
                <select
                  value={formData.applicantType}
                  onChange={(e) => setFormData({ ...formData, applicantType: e.target.value })}
                  className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
                >
                  <option value="student">Prospective Student</option>
                  <option value="parent">Parent / Guardian</option>
                </select>
              </div>

              {/* Qualification */}
              <div>
                <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
                  Highest Qualification
                </label>
                <select
                  value={formData.currentLevel}
                  onChange={(e) => setFormData({ ...formData, currentLevel: e.target.value })}
                  className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
                >
                  <option value="after-al">GCE A/L Completed / Pending</option>
                  <option value="after-ol">GCE O/L Completed</option>
                  <option value="undergrad">Undergraduate / Diploma Holder</option>
                </select>
              </div>

              {/* Field */}
              <div>
                <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
                  Preferred Field of Interest
                </label>
                <select
                  value={formData.preferredField}
                  onChange={(e) => setFormData({ ...formData, preferredField: e.target.value })}
                  className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-navy"
                >
                  <option value="business">Business & Management</option>
                  <option value="it">IT & Software Engineering</option>
                  <option value="engineering">Engineering & Technology</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald hover:bg-emerald/90 disabled:opacity-50 text-white font-bold text-xs py-4 rounded-lg transition-colors shadow-card"
                >
                  {loading ? 'Sending Request...' : 'Confirm Free Booking →'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}