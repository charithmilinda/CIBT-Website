'use client';

import { useEffect, useState } from 'react';
import WhyIcon from './WhyIcon';

const SLIDES = [
  {
    title: 'Business & Management',
    copy: 'Direct credit transfer into NZ bachelor and diploma programs with globally recognised business qualifications.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200',
  },
  {
    title: 'IT & Software Engineering',
    copy: 'Fast-growing tech pathways with strong post-study work rights across New Zealand\'s digital industries.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200',
  },
  {
    title: 'Engineering & Technology',
    copy: 'Hands-on engineering degrees with industry placements and direct articulation into accredited universities.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200',
  },
  {
    title: 'Hospitality & Tourism',
    copy: 'Study in a country built on tourism, with practical training pathways into hospitality careers.',
    img: 'https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1200',
  },
];

export default function StudyPathwaysSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const slide = SLIDES[index];

  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="text-center pt-16 pb-8 px-6">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
          Popular Pathways
        </span>
        <h2 className="font-heading text-2xl lg:text-3xl font-extrabold uppercase tracking-tight">
          Study Pathways Our Students Choose
        </h2>
      </div>

      <div className="relative h-[360px] lg:h-[440px] w-full">
        {SLIDES.map((s, i) => (
          <div
            key={s.title}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/10" />
          </div>
        ))}

        <div className="relative z-10 h-full flex flex-col justify-end max-w-3xl mx-auto px-6 lg:px-8 pb-10 text-center">
          <h3 className="font-heading text-2xl lg:text-3xl font-extrabold">{slide.title}</h3>
          <p className="text-gray-200 text-sm mt-3 max-w-xl mx-auto">{slide.copy}</p>
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm"
        >
          <WhyIcon name="chevronLeft" className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm"
        >
          <WhyIcon name="chevronRight" className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === index ? 'bg-gold w-6' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
