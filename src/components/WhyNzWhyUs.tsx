'use client';

import { useState } from 'react';
import WhyIcon from './WhyIcon';

type Icon = 'graduationCap' | 'globe' | 'home' | 'checklist' | 'target' | 'briefcase' | 'institution' | 'handshake' | 'phone' | 'pin' | 'star' | 'clock' | 'mail' | 'calendar';

const GROUPS: {
  key: string;
  tab: string;
  heading: string;
  intro: string;
  items: { icon: Icon; title: string; copy: string }[];
}[] = [
  {
    key: 'nz',
    tab: 'Why New Zealand',
    heading: 'Why Choose New Zealand For Study And Life?',
    intro:
      'New Zealand pairs internationally recognised qualifications with a relaxed, safe and outdoors-focused way of life — a place where you can build both a career and a future.',
    items: [
      { icon: 'graduationCap', title: 'World-Class Education', copy: 'Qualifications recognised worldwide, with a strong focus on practical, industry-relevant learning and small, supportive class environments.' },
      { icon: 'star', title: 'Vibrant Lifestyle', copy: 'Multicultural cities, a thriving food, arts and sports scene, and a balanced pace of life that students love.' },
      { icon: 'globe', title: 'Natural Splendor', copy: 'Beaches, mountains, lakes and national parks are on your doorstep — perfect for weekends and holidays.' },
      { icon: 'checklist', title: 'Safe and Welcoming Environment', copy: 'One of the most peaceful countries in the world, known for friendly communities and a warm welcome to international students.' },
      { icon: 'home', title: 'Sustainable Living', copy: 'A national culture of clean energy, recycling and respect for the environment shapes everyday life.' },
      { icon: 'briefcase', title: 'Career Opportunities', copy: 'Growing sectors including technology, healthcare, construction, agriculture and hospitality are looking for skilled graduates.' },
      { icon: 'target', title: 'Unleashed Career Potential', copy: 'Practical learning and industry connections help you graduate ready to step into the workforce.' },
      { icon: 'institution', title: 'Reliable Social Services', copy: 'Dependable healthcare, public services and student support systems you can count on while you live and study.' },
      { icon: 'handshake', title: 'Ease of Settlement', copy: 'Clear processes, English-speaking communities and established support networks make settling in smoother.' },
      { icon: 'briefcase', title: 'Multi Industrial Work Pathways', copy: 'Study and work options across many industries, giving you flexibility to shape the career you want.' },
    ],
  },
  {
    key: 'us',
    tab: 'Why Impact Education',
    heading: 'Why Choose Us',
    intro:
      'We are with you at every stage — before you apply, while you study, and after you arrive — with honest advice and a team on the ground in New Zealand.',
    items: [
      { icon: 'target', title: 'Expert Guidance', copy: 'Experienced advisors who match your goals, budget and background to the right course and institution.' },
      { icon: 'handshake', title: 'Reliable and Individualized Support', copy: 'No one-size-fits-all advice — every plan is built around you and your family.' },
      { icon: 'checklist', title: 'Professional VISA Application Process', copy: 'Careful preparation and review of your documents so your visa application is complete and accurate.' },
      { icon: 'calendar', title: 'Pre-Departure Guidance', copy: 'Practical briefings on travel, accommodation, money and what to expect before you fly.' },
      { icon: 'phone', title: 'Post-Departure Support', copy: 'Help doesn’t stop at the airport — we stay in touch as you settle in and start your studies.' },
      { icon: 'pin', title: 'Onshore Agency', copy: 'A real office in Auckland, so support is local, accessible and accountable.' },
      { icon: 'institution', title: 'Integrity and Transparency', copy: 'Clear, honest advice on options, costs and timelines — no hidden surprises.' },
    ],
  },
];

export default function WhyNzWhyUs() {
  const [active, setActive] = useState(0);
  const group = GROUPS[active];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">
          Why New Zealand, Why Us
        </h2>
        <div className="inline-flex mt-6 bg-gray-200 p-1 rounded-lg">
          {GROUPS.map((g, i) => (
            <button
              key={g.key}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 text-xs font-semibold rounded-md transition-all ${
                active === i ? 'bg-navy text-white shadow' : 'text-slate hover:text-navy'
              }`}
            >
              {g.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="font-heading text-lg font-bold text-navy mb-2">{group.heading}</h3>
        <p className="text-slate text-sm leading-relaxed">{group.intro}</p>
      </div>

      <div key={group.key} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
        {group.items.map((item) => (
          <div
            key={item.title}
            className="bg-canvas p-6 rounded-xl border border-gray-200 hover:shadow-card-hover hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
              <WhyIcon name={item.icon} className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-heading font-bold text-sm text-navy mb-1">{item.title}</h4>
            <p className="text-slate text-xs leading-relaxed">{item.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/book-appointment"
          className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold text-xs px-6 py-3 rounded-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}
