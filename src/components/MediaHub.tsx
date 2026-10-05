import WhyIcon from './WhyIcon';

const VIDEOS = [
  { title: 'Student Life in Auckland', thumb: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800' },
  { title: 'Our Campus Partners', thumb: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800' },
  { title: 'Visa & Arrival Guide', thumb: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800' },
];

export default function MediaHub() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
          Media Hub
        </span>
        <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">
          Watch & Learn
        </h2>
        <p className="text-xs text-slate mt-1">Real stories and guidance from our student community.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VIDEOS.map((video) => (
          <div
            key={video.title}
            className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-card-hover transition-all aspect-video bg-navy"
          >
            <img
              src={video.thumb}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0 bg-navy/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <WhyIcon name="play" className="w-7 h-7 text-navy" />
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-navy/90 to-transparent">
              <p className="text-white text-xs font-bold">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-slate/70 text-center mt-6">
        Video content coming soon — this section will embed our official video library.
      </p>
    </section>
  );
}
