export default function BookAppointmentCTA() {
  return (
    <section className="py-20 bg-navy text-white px-6 lg:px-8 border-t border-navy/20" id="book">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-4">
          Take The Next Step
        </span>
        <h2 className="font-heading text-3xl font-extrabold">Book Your Personalised Appointment</h2>
        <p className="text-gray-300 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
          Speak directly with our advisors about your pathway, university selection, and visa requirements —
          free of charge, with no obligation.
        </p>
        <a
          href="/book-appointment"
          className="inline-block mt-8 bg-gold hover:bg-gold/90 text-navy font-bold text-sm px-8 py-4 rounded-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
        >
          Book Appointment →
        </a>
      </div>
    </section>
  );
}
