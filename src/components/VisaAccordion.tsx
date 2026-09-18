'use client'

import { useState } from 'react';

export default function VisaAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordions = [
    { 
      title: "Document Checklist", 
      content: "Certified academic transcripts, passport copies, English proficiency proof (IELTS/PTE), statement of purpose, and recommendation letters." 
    },
    { 
      title: "Visa Process Roadmap", 
      content: "Stage 1: Offer Letter & Enrolment. Stage 2: Funds Transfer Scheme (FTS) Financial Setup. Stage 3: Medicals & Biometrics. Stage 4: Visa Lodgment & Decision." 
    },
    { 
      title: "Financial Requirements", 
      content: "Demonstration of living expense funds via NZ Funds Transfer Scheme (FTS) alongside fee payment receipts from Impact Education and partner universities." 
    }
  ];

  return (
    <div className="space-y-3 mt-6">
      {accordions.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full text-left px-6 py-4 flex justify-between items-center text-xs font-bold text-navy"
            >
              <span>{item.title}</span>
              <span
                className="text-gold transition-transform duration-300"
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
                <div className="px-6 pb-4 text-xs text-slate border-t border-gray-100 pt-3 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}