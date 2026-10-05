import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Impact Education's mission to guide students to study, succeed, and settle in New Zealand.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      <Navbar />

      <section className="bg-navy text-white pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-4">
            About Us
          </span>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-4">
            Your Trusted Education Partner
          </h1>
          <p className="text-gray-300 text-sm lg:text-base max-w-2xl mx-auto">
            Impact Education helps students build a clear, affordable pathway from local
            study straight into accredited New Zealand institutions — and supports them
            all the way through to life after graduation.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl font-extrabold text-navy mb-4">Who We Are</h2>
        <p className="text-slate text-sm leading-relaxed mb-8">
          Impact Education is a New Zealand-based education consultancy dedicated to
          connecting international students with trusted pathways into New Zealand&apos;s
          university and institutional network. Led by our Chairman, Gary Winter, our
          team combines on-the-ground New Zealand knowledge with first-hand experience
          of what it takes for a student to move country, start a new qualification,
          and settle in with confidence.
        </p>

        <h2 className="font-heading text-2xl font-extrabold text-navy mb-4">Our Mission</h2>
        <p className="text-slate text-sm leading-relaxed mb-8">
          We exist to make world-class New Zealand education genuinely reachable. That
          means honest guidance from your very first conversation, transparent advice on
          costs and pathways, and a team that stays with you through admissions, visa
          processing, arrival, and settling into everyday life in New Zealand.
        </p>

        <h2 className="font-heading text-2xl font-extrabold text-navy mb-4">Our Approach</h2>
        <p className="text-slate text-sm leading-relaxed mb-8">
          Every student&apos;s background and goals are different, so we start with a real
          conversation, not a sales pitch. We assess your qualifications, match you to
          pathways with direct institutional relationships, and stay involved at every
          stage — course selection, application, visa lodgment, and your eventual
          arrival and settlement in New Zealand.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-gray-200">
          {[
            { stat: "[X]+", label: "Years Guiding Students" },
            { stat: "[X]+", label: "Students Placed" },
            { stat: "[X]+", label: "Partner Institutions" },
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
            Book a free appointment and let&apos;s map out your pathway to New Zealand.
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-gold hover:bg-gold/90 text-navy font-bold text-xs px-6 py-3 rounded-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            Book Appointment
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
