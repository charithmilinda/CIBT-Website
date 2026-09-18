'use client'

import { useState } from 'react';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  keyAction: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "1. Academic Counseling",
    subtitle: "Pathway Selection",
    description: "Meet with CIBT counselors to evaluate your O/L or A/L results, discuss career ambitions, and select your ideal foundation or degree pathway.",
    keyAction: "Free 1-on-1 Session & Transcript Review"
  },
  {
    id: 2,
    title: "2. CIBT Enrolment",
    subtitle: "Commence Local Phase",
    description: "Begin your foundation or initial transfer coursework at CIBT's campus in Sri Lanka, saving up to 60% on initial tuition costs.",
    keyAction: "Offer Letter Issued & Onboarding"
  },
  {
    id: 3,
    title: "3. University Offer",
    subtitle: "Conditional / Unconditional Entry",
    description: "Upon completing required credits, CIBT directly facilitates your application and transfer to your chosen partner university in New Zealand.",
    keyAction: "Official NZ University Admission Letter"
  },
  {
    id: 4,
    title: "4. Visa & Financial Prep",
    subtitle: "Immigration Guidance",
    description: "Our dedicated visa team assists with financial documentation, Funds Transfer Scheme (FTS), health checks, and New Zealand Student Visa lodgment.",
    keyAction: "Complete Student Visa Documentation"
  },
  {
    id: 5,
    title: "5. Arrival & Support",
    subtitle: "Land in New Zealand",
    description: "Receive pre-departure briefings, airport pickup arrangements, and accommodation guidance as you transition into university life in NZ.",
    keyAction: "Airport Pickup & Campus Settlement"
  }
];

export default function VisaRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
            Clear Guidance
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-navy">Your 5-Step Journey to New Zealand</h2>
          <p className="text-slate text-sm mt-2">A structured pathway from your first consultation in Sri Lanka to your first day on campus.</p>
        </div>

        {/* Timeline Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'border-navy bg-navy text-white shadow-card-hover'
                    : 'border-gray-200 bg-canvas text-charcoal hover:border-navy/40'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${isActive ? 'text-gold' : 'text-slate'}`}>
                    Step 0{step.id}
                  </span>
                  <h3 className="font-heading font-bold text-xs leading-snug">{step.subtitle}</h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Detail Card */}
        {steps.map((step) => {
          if (step.id !== activeStep) return null;
          return (
            <div key={step.id} className="bg-canvas border border-gray-200 p-8 rounded-2xl shadow-card grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <span className="text-xs font-bold text-gold uppercase tracking-wider bg-gold/10 px-3 py-1 rounded-full inline-block mb-3">
                  Step {step.id} of 5
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-navy mb-3">{step.title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-6">{step.description}</p>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald bg-emerald/10 px-3.5 py-2 rounded-lg w-fit">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Key Output: {step.keyAction}</span>
                </div>
              </div>

              <div className="bg-navy p-6 rounded-xl text-white text-center flex flex-col justify-center items-center">
                <p className="text-xs text-gray-300 mb-4">Ready to start this step?</p>
                <a
                  href="#consultation"
                  className="bg-gold hover:bg-gold/90 text-navy font-bold text-xs px-6 py-3 rounded-lg transition-all w-full"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}