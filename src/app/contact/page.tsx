import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SimpleContactForm from "@/components/SimpleContactForm";
import WhyIcon from "@/components/WhyIcon";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Impact Education for questions about studying, working, and settling in New Zealand.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      <Navbar />

      <section className="bg-navy text-white pt-40 pb-16 px-6 lg:px-8">
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
                <p className="text-sm text-navy font-semibold">027 770 2228</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                <WhyIcon name="mail" className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate uppercase tracking-wider">Email</p>
                <p className="text-sm text-navy font-semibold">info@impacteducation.co.nz</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                <WhyIcon name="pin" className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate uppercase tracking-wider">Office</p>
                <p className="text-sm text-navy font-semibold">21a Formby Avenue, Point Chevalier, Auckland, New Zealand</p>
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

          <div className="mt-8 w-full h-56 rounded-xl overflow-hidden border border-gray-200">
            <iframe
              title="Impact Education office location"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=21a+Formby+Avenue,+Point+Chevalier,+Auckland,+New+Zealand&output=embed"
            />
          </div>

          <p className="text-[11px] text-slate/70 mt-4">
            Confirm your real office hours to replace the placeholder above.
          </p>
        </div>

        {/* Contact form */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-card h-fit">
          <h2 className="font-heading text-xl font-bold text-navy mb-6">Send Us a Message</h2>
          <SimpleContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
