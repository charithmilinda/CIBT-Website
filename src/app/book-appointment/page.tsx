import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookAppointmentForm from "@/components/BookAppointmentForm";

export const metadata = {
  title: "Book Appointment",
  description: "Book a free, personalised appointment with Impact Education's advisors.",
};

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      <Navbar />

      <section className="bg-navy text-white pt-40 pb-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-4">
            Free Personalised Appointment
          </span>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-4">Book An Appointment</h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
            Tell us a little about yourself and your goals, and our advisors will be in touch to confirm
            your appointment within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-card-hover">
          <BookAppointmentForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
