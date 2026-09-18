'use client'

import { useState } from 'react';
import { Testimonial } from '@/lib/supabase/queries';

export default function TestimonialSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeTab, setActiveTab] = useState<'student' | 'parent'>('student');

  const filteredTestimonials = testimonials.filter((t) => t.testimonialType === activeTab);

  return (
    <section className="py-20 bg-canvas border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
            Real Stories & Experiences
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-navy">What Our Community Says</h2>
          <p className="text-slate text-sm mt-2">Hear directly from our successful students and proud parents.</p>

          {/* Toggle Buttons */}
          <div className="inline-flex mt-6 bg-gray-200 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('student')}
              className={`px-6 py-2.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'student' ? 'bg-navy text-white shadow' : 'text-slate hover:text-navy'
              }`}
            >
              Student Stories
            </button>
            <button
              onClick={() => setActiveTab('parent')}
              className={`px-6 py-2.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'parent' ? 'bg-navy text-white shadow' : 'text-slate hover:text-navy'
              }`}
            >
              Parent Experiences
            </button>
          </div>
        </div>

        {/* Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.length > 0 ? (
            filteredTestimonials.map((item) => (
              <div key={item._id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all">
                <p className="text-slate text-xs italic leading-relaxed mb-6">"{item.quote}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.authorName} className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center font-bold text-navy text-xs">
                      {item.authorName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy">{item.authorName}</h4>
                    <p className="text-[11px] text-slate">{item.details}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center bg-white p-8 rounded-lg border border-dashed border-gray-300 text-slate text-xs">
              No {activeTab} testimonials published yet. Add them in <code className="bg-canvas px-2 py-1 rounded text-navy font-bold">/admin</code>!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}