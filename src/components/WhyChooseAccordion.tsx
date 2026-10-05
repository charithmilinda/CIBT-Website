'use client';

import { useState } from 'react';
import WhyIcon from './WhyIcon';

const LISTS = [
  {
    title: 'Why Choose New Zealand For Study And Life?',
    items: [
      'World-Class Education',
      'Vibrant Lifestyle',
      'Natural Splendor',
      'Safe and Welcoming Environment',
      'Sustainable Living',
      'Career Opportunities',
      'Unleashed Career Potential',
      'Reliable Social Services',
      'Ease of Settlement',
      'Multi Industrial Work Pathways',
    ],
  },
  {
    title: 'Why Choose Us',
    items: [
      'Expert Guidance',
      'Reliable and Individualized Support',
      'Professional VISA Application Process',
      'Pre-Departure Guidance',
      'Post-Departure Support',
      'Onshore Agency',
      'Integrity and Transparency',
    ],
  },
];

export default function WhyChooseAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {LISTS.map((list, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={list.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-sm font-bold text-navy"
            >
              <span>{list.title}</span>
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
                <ul className="px-6 pb-6 pt-1 space-y-3 border-t border-gray-100">
                  {list.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate">
                      <WhyIcon name="checklist" className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
