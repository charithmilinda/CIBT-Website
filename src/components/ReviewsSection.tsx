import WhyIcon from './WhyIcon';

const REVIEWS = [
  {
    name: 'K. Fernando',
    rating: 5,
    quote: 'The team guided me through every step of my university transfer — I never felt lost in the process.',
  },
  {
    name: 'N. Jayawardena',
    rating: 5,
    quote: 'Honest advice from day one. They matched me to a pathway that actually fit my budget and goals.',
  },
  {
    name: 'S. Wickramasinghe',
    rating: 5,
    quote: 'From visa paperwork to arrival in Auckland, support was there whenever I needed it.',
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-200 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
            Reviews
          </span>
          <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">
            What People Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.name} className="bg-canvas p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <WhyIcon key={i} name="star" className="w-4 h-4 text-gold" />
                ))}
              </div>
              <p className="text-slate text-xs italic leading-relaxed mb-4">&ldquo;{review.quote}&rdquo;</p>
              <p className="font-heading font-bold text-sm text-navy">{review.name}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate/70 text-center mt-6">
          Placeholder reviews — replace with verified client reviews once collected.
        </p>
      </div>
    </section>
  );
}
