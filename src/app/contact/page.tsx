import Logo from "@/components/Logo";
import SimpleContactForm from "@/components/SimpleContactForm";
import WhyIcon from "@/components/WhyIcon";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Impact Education for questions about studying, working, and settling in New Zealand.",
};

export default function ContactPage() {
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
            Get In Touch
          </span>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-3">Contact Us</h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Questions about pathways, courses, or visas? Reach out and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact details */}
        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-6">Contact Details</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                <WhyIcon name="phone" className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate uppercase tracking-wider">Phone / WhatsApp</p>
                <p className="text-sm text-navy font-semibold">[PHONE NUMBER]</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                <WhyIcon name="mail" className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate uppercase tracking-wider">Email</p>
                <p className="text-sm text-navy font-semibold">info@impacteducation.example</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                <WhyIcon name="pin" className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate uppercase tracking-wider">Office</p>
                <p className="text-sm text-navy font-semibold">[OFFICE ADDRESS, SRI LANKA]</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                <WhyIcon name="clock" className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate uppercase tracking-wider">Office Hours</p>
                <p className="text-sm text-navy font-semibold">[OPENING HOURS]</p>
              </div>
            </div>
          </div>

          <div className="mt-8 w-full h-56 bg-gray-200 border border-dashed border-gray-400 rounded-xl flex items-center justify-center text-xs text-slate">
            Map placeholder — embed your office location once the address is confirmed
          </div>

          <p className="text-[11px] text-slate/70 mt-4">
            Replace the bracketed placeholders above with your real contact details.
          </p>
        </div>

        {/* Contact form */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-card h-fit">
          <h2 className="font-heading text-xl font-bold text-navy mb-6">Send Us a Message</h2>
          <SimpleContactForm />
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
