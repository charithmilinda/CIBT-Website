'use client';

import { useState } from 'react';
import { Faq } from '@/lib/supabase/queries';

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?._id ?? null);

  if (faqs.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
        <p className="text-slate text-sm">
          No FAQs published yet. Add them in{' '}
          <code className="bg-canvas px-2 py-1 rounded text-navy font-bold">/admin</code>!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = openId === faq._id;
        return (
          <div key={faq._id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenId(isOpen ? null : faq._id)}
              className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 text-sm font-bold text-navy"
            >
              <span>{faq.question}</span>
              <span
                className="text-gold shrink-0 transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                ▼
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 text-sm text-slate border-t border-gray-100 pt-4 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
