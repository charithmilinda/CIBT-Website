import Logo from "@/components/Logo";
import FaqAccordion from "@/components/FaqAccordion";
import { getFaqs, Faq } from "@/lib/supabase/queries";

export const revalidate = 0;

export const metadata = {
  title: "FAQ",
  description: "Answers to common questions about studying, working, and settling in New Zealand with Impact Education.",
};

export default async function FaqPage() {
  const faqs: Faq[] = await getFaqs();

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

      <section className="bg-navy text-white py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
            Frequently Asked Questions
          </span>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-3">
            Got Questions? We've Got Answers.
          </h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Common questions from students and parents about pathways, visas, and life in New Zealand.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 max-w-3xl mx-auto">
        <FaqAccordion faqs={faqs} />

        <div className="mt-12 text-center bg-white p-8 rounded-2xl border border-gray-200 shadow-card">
          <h2 className="font-heading font-bold text-lg text-navy mb-2">Still have questions?</h2>
          <p className="text-slate text-xs mb-4">Our counsellors are happy to talk through your specific situation.</p>
          <a
            href="/contact"
            className="inline-block bg-emerald hover:bg-emerald/90 text-white font-bold text-xs px-6 py-3 rounded-lg transition-colors hover:scale-[1.03] active:scale-[0.98]"
          >
            Contact Us
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
