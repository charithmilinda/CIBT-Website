'use client';

import { useState } from 'react';
import NzPhoto from './NzPhoto';

type Item = { title: string; copy: string };

const WHY_NZ: Item[] = [
  {
    title: 'World-Class Education',
    copy: 'New Zealand’s universities and institutes offer a wide range of Bachelor’s degrees, Diplomas, Master’s programmes and PhDs. Qualifications are internationally recognised, teaching is practical and industry-aware, and many programmes come with post-study work options that can help you build a career.',
  },
  {
    title: 'Vivid and Dynamic Living',
    copy: 'Student life here is full of energy — multicultural cities, great food and cafe culture, live music, sport and festivals all year round. It is easy to meet people, join clubs and feel at home quickly.',
  },
  {
    title: 'All in One Landscape',
    copy: 'Beaches, mountains, lakes, forests and city life sit within a short trip of each other. Whether you want a weekend hike, a ski day or a harbour walk after class, it is all close by.',
  },
  {
    title: 'Safe and Welcoming',
    copy: 'New Zealand is consistently regarded as one of the safest and most peaceful countries in the world, with friendly communities and strong support for international students.',
  },
  {
    title: 'Unleashed Career Potential',
    copy: 'Growing industries such as technology, healthcare, construction, agriculture and hospitality value skilled graduates. Practical learning and local industry connections help you move from study into work with confidence.',
  },
  {
    title: 'Reliable Social Services',
    copy: 'Dependable healthcare, public services and student support systems mean you can focus on your studies knowing the essentials are looked after.',
  },
  {
    title: 'Ease of Settlement',
    copy: 'English-speaking communities, clear processes and established support networks make it simpler to settle in, find accommodation and start building your life in a new country.',
  },
  {
    title: 'Multi Industrial Work Pathways',
    copy: 'Study and work pathways span many industries, giving you the flexibility to shape the career you want rather than being limited to a single route.',
  },
];

const WHY_US: Item[] = [
  {
    title: 'Expert Guidance',
    copy: 'Our advisors match your goals, budget and background to the right course and institution, and explain every option clearly before you decide.',
  },
  {
    title: 'Reliable and Individualized Support',
    copy: 'There is no one-size-fits-all plan. Every student and family gets advice built around their own situation, with a consistent point of contact throughout.',
  },
  {
    title: 'Professional VISA Application Process',
    copy: 'We prepare and carefully review your documents so your student visa application is complete, accurate and submitted with confidence.',
  },
  {
    title: 'Pre-Departure Guidance',
    copy: 'Practical briefings on travel, accommodation, budgeting and what to expect on arrival, so you land in New Zealand prepared.',
  },
  {
    title: 'Post-Departure Support',
    copy: 'Our help does not stop at the airport. We stay in touch as you settle in and begin your studies.',
  },
  {
    title: 'Onshore Agency',
    copy: 'With an office in Auckland, our support is local, accessible and accountable — you can speak to a real team in New Zealand.',
  },
  {
    title: 'Integrity and Transparency',
    copy: 'Honest advice on options, costs and timelines, with no hidden surprises.',
  },
];

function Accordion({ items, initialOpen }: { items: Item[]; initialOpen: number | null }) {
  const [open, setOpen] = useState<number | null>(initialOpen);

  return (
    <div className="space-y-2">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={item.title}
            className={`bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm ${
              isOpen ? 'border-l-4 border-l-emerald' : ''
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 text-xs font-bold text-navy"
            >
              <span>{item.title}</span>
              <span
                className="w-6 h-6 shrink-0 rounded-full bg-emerald text-white flex items-center justify-center text-base leading-none transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-xs text-slate leading-relaxed">{item.copy}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function WhyNzWhyUs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-canvas p-6 lg:p-10 rounded-2xl">
      <div>
        <h2 className="font-heading text-2xl font-extrabold text-navy mb-6">
          Why Choose New Zealand
          <br />
          For Study And Life?
        </h2>
        <NzPhoto file="queenstown-lake.jpg" caption="Adventure on your doorstep" className="h-56 mb-5" />
        <Accordion items={WHY_NZ} initialOpen={0} />
      </div>

      <div>
        <h2 className="font-heading text-2xl font-extrabold text-navy mb-1">Why Choose Us</h2>
        <p className="text-slate text-xs mb-5">Our services include:</p>
        <NzPhoto file="why-choose-us.jpg" caption="Our team is with you every step" className="h-56 mb-5" />
        <Accordion items={WHY_US} initialOpen={0} />
      </div>
    </div>
  );
}
