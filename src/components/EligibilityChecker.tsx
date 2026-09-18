'use client'

import { useState } from 'react';
import { Course } from '@/lib/supabase/queries';

export default function EligibilityChecker({ courses }: { courses: Course[] }) {
  const [qualification, setQualification] = useState<string>('after-al');
  const [field, setField] = useState<string>('all');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Filter logic based on user selection
  const matchedCourses = courses.filter((course) => {
    const matchesCategory = qualification === 'all' || course.category === qualification;
    const matchesField = field === 'all' || course.fieldOfStudy === field;
    return matchesCategory && matchesField;
  });

  return (
    <section className="py-16 bg-navy text-white px-6 lg:px-8 border-t border-navy/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
            Interactive Tool
          </span>
          <h2 className="font-heading text-3xl font-extrabold">Check Your Pathway Eligibility</h2>
          <p className="text-gray-300 text-sm mt-2">
            Select your academic background to view your direct university entry routes to New Zealand.
          </p>
        </div>

        {/* Input Form Controls */}
        <div className="bg-white p-6 rounded-xl shadow-card-hover text-charcoal grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
              Highest Qualification
            </label>
            <select
              value={qualification}
              onChange={(e) => {
                setQualification(e.target.value);
                setSubmitted(true);
              }}
              className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-navy"
            >
              <option value="after-ol">GCE O/L (Sri Lanka / London)</option>
              <option value="after-al">GCE A/L (Sri Lanka / London)</option>
              <option value="undergrad">Undergraduate Transfer / Diploma</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
              Preferred Field of Study
            </label>
            <select
              value={field}
              onChange={(e) => {
                setField(e.target.value);
                setSubmitted(true);
              }}
              className="w-full bg-canvas border border-gray-300 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-navy"
            >
              <option value="all">All Fields</option>
              <option value="business">Business & Management</option>
              <option value="it">IT & Computing</option>
              <option value="engineering">Engineering & Tech</option>
            </select>
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="bg-emerald hover:bg-emerald/90 text-white font-semibold text-xs py-3.5 px-6 rounded-lg transition-colors w-full h-[42px]"
          >
            Check Eligibility &rarr;
          </button>
        </div>

        {/* Results Display Area */}
        {submitted && (
          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <h3 className="font-heading font-bold text-lg text-gold mb-4">
              Recommended Pathways ({matchedCourses.length})
            </h3>

            {matchedCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchedCourses.map((course) => (
                  <div key={course._id} className="bg-white text-charcoal p-5 rounded-lg shadow border-l-4 border-emerald">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-canvas text-slate px-2 py-0.5 rounded inline-block mb-2">
                      {course.category}
                    </span>
                    <h4 className="font-heading font-bold text-base text-navy mb-1">{course.title}</h4>
                    <p className="text-xs text-slate mb-2"><strong>Duration:</strong> {course.duration}</p>
                    <p className="text-xs text-slate leading-relaxed">{course.entryRequirements}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-300 italic">
                No exact match found for these filters. Contact our counselors for a personalized assessment.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}