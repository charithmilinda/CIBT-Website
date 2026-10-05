const STEPS = [
  { step: '01', title: 'Free Consultation', copy: 'Talk through your goals, background, and budget with an advisor.' },
  { step: '02', title: 'Course & University Selection', copy: 'We match you to pathways and institutions that fit your profile.' },
  { step: '03', title: 'Application Submission', copy: 'We prepare and submit your application with all required documents.' },
  { step: '04', title: 'Offer & Enrolment', copy: 'Receive your offer letter and confirm enrolment with the institution.' },
  { step: '05', title: 'Visa & Financial Processing', copy: 'Guided support through financial setup and student visa lodgment.' },
  { step: '06', title: 'Pre-Departure & Arrival Support', copy: 'Orientation, travel prep, and settling-in support once you land.' },
];

export default function ApplicationProcess() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {STEPS.map((item) => (
        <div
          key={item.step}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all"
        >
          <span className="font-heading text-3xl font-extrabold text-gold">{item.step}</span>
          <h3 className="font-heading font-bold text-sm text-navy mt-3 mb-1">{item.title}</h3>
          <p className="text-slate text-xs leading-relaxed">{item.copy}</p>
        </div>
      ))}
    </div>
  );
}
