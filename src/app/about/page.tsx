import Logo from "@/components/Logo";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Impact Education's mission to guide Sri Lankan students to study, succeed, and settle in New Zealand.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      <nav className="bg-white border-b border-gray-200 py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/"><Logo /></a>
          <a href="/" className="text-xs font-semibold text-slate hover:text-navy">
            &larr; Back to Home
          </a>
        </div>
      </nav>

      <section className="bg-navy text-white py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-4">
            About Us
          </span>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-4">
            Study. Succeed. Settle.
          </h1>
          <p className="text-gray-300 text-sm lg:text-base max-w-2xl mx-auto">
            Impact Education helps Sri Lankan students build a clear, affordable pathway
            from local study straight into accredited New Zealand universities — and
            supports them all the way through to life after graduation.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl font-extrabold text-navy mb-4">Our Mission</h2>
        <p className="text-slate text-sm leading-relaxed mb-8">
          We exist to make world-class New Zealand education genuinely reachable for
          Sri Lankan students. That means honest guidance from your very first
          consultation, a foundation pathway that costs a fraction of studying abroad
          from day one, and a team that stays with you through admissions, visa
          processing, arrival, and settling into life in New Zealand.
        </p>

        <h2 className="font-heading text-2xl font-extrabold text-navy mb-4">Our Approach</h2>
        <p className="text-slate text-sm leading-relaxed mb-8">
          Every student's background and goals are different, so we start with a real
          conversation, not a sales pitch. We assess your qualifications, match you to
          pathways with direct university articulation, and stay involved at every
          stage — coursework in Sri Lanka, university transfer, visa lodgment, and
          eventually your arrival in New Zealand.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-gray-200">
          {[
            { stat: "[X]+", label: "Years Guiding Students" },
            { stat: "[X]+", label: "Students Placed" },
            { stat: "[X]+", label: "Partner Universities" },
            { stat: "[X]%", label: "Visa Success Rate" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-navy">{s.stat}</p>
              <p className="text-xs text-slate mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate/70 text-center mt-3">
          Update the figures above once you have your real numbers.
        </p>
      </section>

      <section className="py-16 bg-white border-t border-gray-200 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-extrabold text-navy mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-slate text-sm mb-6">
            Book a free consultation and let's map out your pathway to New Zealand.
          </p>
          <a
            href="/#consultation"
            className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold text-xs px-6 py-3 rounded-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            Book Free Consultation
          </a>
        </div>
      </section>

      <footer className="bg-navy text-gray-400 py-12 border-t border-navy/20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <Logo variant="light" className="text-white" />
          <div className="flex gap-6">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p>© {new Date().getFullYear()} Impact Education. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
