import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationProcess from "@/components/ApplicationProcess";
import WhyChooseAccordion from "@/components/WhyChooseAccordion";
import FaqAccordion from "@/components/FaqAccordion";
import SimpleContactForm from "@/components/SimpleContactForm";
import { getUniversities, getFaqs, University, Faq } from "@/lib/supabase/queries";

export const revalidate = 0;

export const metadata = {
  title: "Study in New Zealand",
  description:
    "Discover why New Zealand is the right place to study and live, and how Impact Education guides you through every step of the journey.",
};

export default async function StudyInNewZealandPage() {
  const universities: University[] = await getUniversities();
  const faqs: Faq[] = await getFaqs();

  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1600"
          alt="New Zealand landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        <div className="relative z-10 pt-40 pb-24 px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-4">
            Study In New Zealand
          </span>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-5 uppercase tracking-tight">
            Your Global Vision Is Possible With Impact Education
          </h1>
          <p className="text-gray-200 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Under the leadership of our Chairman, Gary Winter, Impact Education was built to make
            a New Zealand education a realistic, achievable goal — not just a dream. We combine
            genuine local knowledge of New Zealand with honest, end-to-end guidance, so every
            student who works with us moves forward with a clear, confident plan.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
            How It Works
          </span>
          <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">
            Application Process
          </h2>
        </div>
        <ApplicationProcess />
      </section>

      {/* Why Choose NZ / Why Choose Us */}
      <section className="py-16 bg-white border-t border-gray-200 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">
              Why New Zealand, Why Us
            </h2>
          </div>
          <WhyChooseAccordion />
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-extrabold text-navy mb-3 text-center uppercase tracking-tight">
          Where Can You Study In New Zealand?
        </h2>
        <p className="text-xs text-slate text-center mb-8">Our partner institutions across New Zealand.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {universities.length > 0 ? (
            universities.map((uni) => (
              <div
                key={uni._id}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-card-hover hover:-translate-y-1 transition-all"
              >
                <h3 className="font-heading font-bold text-base text-navy">{uni.name}</h3>
                <p className="text-gold text-xs font-semibold my-1">{uni.qsRank}</p>
                <p className="text-slate text-xs">{uni.location}</p>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-slate text-xs py-8 border border-dashed rounded-lg bg-white">
              No partner institutions published yet in /admin.
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-gray-200 px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl font-extrabold text-navy mb-8 text-center uppercase tracking-tight">
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* Contact form */}
      <section className="py-16 px-6 lg:px-8 max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-card">
          <h2 className="font-heading text-xl font-bold text-navy mb-2 text-center">Still Have Questions?</h2>
          <p className="text-slate text-xs text-center mb-6">Send us a message and our team will get back to you.</p>
          <SimpleContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
