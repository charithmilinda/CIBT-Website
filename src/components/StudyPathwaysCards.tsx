import WhyIcon from './WhyIcon';

const PATHWAYS = [
  { icon: 'briefcase' as const, title: 'Business & Management', copy: 'Degrees and diplomas with strong employer demand.' },
  { icon: 'globe' as const, title: 'IT & Software', copy: 'Fast-growing tech pathways across NZ industries.' },
  { icon: 'target' as const, title: 'Engineering & Technology', copy: 'Hands-on programmes with industry links.' },
  { icon: 'home' as const, title: 'Hospitality & Tourism', copy: 'Train for careers in a world-class tourism market.' },
  { icon: 'graduationCap' as const, title: 'Foundation & Diploma', copy: 'Bridge into university-level study with confidence.' },
  { icon: 'institution' as const, title: 'Postgraduate Study', copy: 'Masters and graduate programmes at NZ institutions.' },
];

export default function StudyPathwaysCards() {
  return (
    <section className="py-16 bg-canvas border-t border-gray-200 px-6 lg:px-8" id="popular-pathways">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
            Popular Pathways
          </span>
          <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">
            Study Pathways Our Students Choose
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {PATHWAYS.map((item) => (
            <a
              key={item.title}
              href="/#pathways"
              className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-card-hover hover:-translate-y-1 transition-all"
            >
              <WhyIcon name={item.icon} className="w-9 h-9 text-gold mx-auto mb-3" />
              <h3 className="font-heading font-bold text-xs text-navy mb-1">{item.title}</h3>
              <p className="text-slate text-[11px] leading-relaxed">{item.copy}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
