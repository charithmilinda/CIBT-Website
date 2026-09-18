import {
  getCourses,
  getUniversities,
  getTestimonials,
  Course,
  University,
  Testimonial,
} from "@/lib/supabase/queries";
import TestimonialSection from "@/components/TestimonialSection";
import EligibilityChecker from "@/components/EligibilityChecker";
import ConsultationForm from "@/components/ConsultationForm";
import VisaAccordion from "@/components/VisaAccordion";
import CareerStories from "@/components/CareerStories";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import RevealOnScroll from "@/components/RevealOnScroll";
import WhyIcon from "@/components/WhyIcon";

export const revalidate = 0;

export default async function Home() {
  const courses: Course[] = await getCourses();
  const universities: University[] = await getUniversities();
  const testimonials: Testimonial[] = await getTestimonials();

  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Full-Bleed Hero Banner with Inline Search */}
      <section className="relative bg-navy text-white overflow-hidden">
        {/* Background photo — dark negative space is baked into the left side of the image itself */}
        <img
          src="/images/hero-campus.jpg"
          alt="Students on a New Zealand university campus"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
        {/* Extra gradient safety net so text stays legible at every crop/breakpoint */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 sm:via-navy/60 to-navy/10 sm:to-transparent" />

        <div className="relative z-10 pt-32 pb-24 sm:pb-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl space-y-6">
              <div className="flex gap-4 items-center text-xs text-gray-300 animate-fade-in-up">
                <span className="font-semibold text-gold">IELTS Partner</span>
                <span>|</span>
                <span>Direct Credit Pathways</span>
              </div>
              <h1 className="font-heading text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight animate-fade-in-up [animation-delay:100ms]">
                YOUR PREMIER PATHWAY TO NEW ZEALAND EXCELLENCE
              </h1>
              <p className="text-gray-300 text-sm max-w-xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                Complete academic pathways from secondary education in Sri Lanka to accredited degrees at top-ranked New Zealand universities.
              </p>

              {/* Inline Search Bar */}
              <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex flex-wrap lg:flex-nowrap gap-2 items-center backdrop-blur-md animate-fade-in-up [animation-delay:300ms]">
                <input
                  type="text"
                  placeholder="FIND YOUR ACADEMIC PATHWAY (e.g. Post A/L)"
                  className="bg-white text-charcoal px-4 py-2.5 rounded-lg text-xs w-full lg:w-1/2 focus:outline-none"
                />
                <select className="bg-white text-charcoal px-3 py-2.5 rounded-lg text-xs focus:outline-none">
                  <option>FIELD</option>
                  <option>Business</option>
                  <option>IT & Computing</option>
                </select>
                <button className="bg-gold text-navy font-bold px-6 py-2.5 rounded-lg text-xs hover:bg-gold/90 transition-all w-full lg:w-auto">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Overlapping Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 -mb-52 relative z-10 px-6 lg:px-8">
          <div className="bg-white text-charcoal p-6 rounded-2xl shadow-xl border border-gray-100 animate-fade-in-up [animation-delay:350ms] hover:-translate-y-1 transition-transform">
            <WhyIcon name="graduationCap" className="w-10 h-10 text-gold mb-3" />
            <h3 className="font-heading font-bold text-sm text-navy">STUDY PATHWAYS</h3>
            <p className="text-slate text-xs mt-1">Explore top-quality qualifications for international students.</p>
          </div>
          <div className="bg-white text-charcoal p-6 rounded-2xl shadow-xl border border-gray-100 animate-fade-in-up [animation-delay:450ms] hover:-translate-y-1 transition-transform">
            <WhyIcon name="institution" className="w-10 h-10 text-gold mb-3" />
            <h3 className="font-heading font-bold text-sm text-navy">NZ UNIVERSITIES</h3>
            <p className="text-slate text-xs mt-1">Direct articulation into accredited NZ university degrees.</p>
          </div>
          <div className="bg-white text-charcoal p-6 rounded-2xl shadow-xl border border-gray-100 animate-fade-in-up [animation-delay:550ms] hover:-translate-y-1 transition-transform">
            <WhyIcon name="checklist" className="w-10 h-10 text-gold mb-3" />
            <h3 className="font-heading font-bold text-sm text-navy">STUDENT VISA GUIDANCE</h3>
            <p className="text-slate text-xs mt-1">Full support for financial setup and visa processing.</p>
          </div>
        </div>
      </section>

      <div className="pt-24" />

      {/* 2b. Why Choose Impact Education */}
      <RevealOnScroll>
        <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
              Why Impact Education
            </span>
            <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">
              Your Pathway to New Zealand Starts Here
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "target" as const, title: "Expert Advice", copy: "Experienced counsellors who know NZ pathways inside out." },
              { icon: "handshake" as const, title: "End-to-End Support", copy: "From your first consultation through arrival and settling in." },
              { icon: "globe" as const, title: "Local & Global Reach", copy: "Sri Lanka-based guidance backed by NZ university partnerships." },
              { icon: "institution" as const, title: "Trusted Institutions", copy: "Direct articulation agreements with accredited NZ universities." },
              { icon: "briefcase" as const, title: "Career Pathways", copy: "Guidance on work rights, internships, and life after graduation." },
              { icon: "home" as const, title: "Settlement Support", copy: "Accommodation, visa, and day-to-day life guidance once you land." },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-card-hover hover:-translate-y-1 transition-all"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <WhyIcon name={item.icon} className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-heading font-bold text-sm text-navy mb-1">{item.title}</h3>
                <p className="text-slate text-xs leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      {/* 3. Guided Pathways & Interactive Checker */}
      <RevealOnScroll>
        <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8" id="pathways">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">
              GUIDED HIGHER EDUCATION PATHWAYS
            </h2>
            <p className="text-xs text-slate mt-1">Select your background to inspect custom university transfer options.</p>
          </div>

          <EligibilityChecker courses={courses} />
        </section>
      </RevealOnScroll>

      {/* 4. Complete Admissions & Visa Guidance Accordion */}
      <RevealOnScroll>
        <section className="py-16 bg-white border-t border-gray-200 px-6 lg:px-8" id="admissions">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl font-extrabold text-navy uppercase tracking-tight">
                COMPLETE ADMISSIONS & STUDENT VISA GUIDANCE
              </h2>
            </div>
            <VisaAccordion />
          </div>
        </section>
      </RevealOnScroll>

      {/* 5. NZ Partner Universities */}
      <RevealOnScroll>
        <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8" id="universities">
          <h2 className="font-heading text-2xl font-extrabold text-navy mb-8 text-center uppercase tracking-tight">
            New Zealand Partner Universities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {universities.length > 0 ? (
              universities.map((uni, idx) => (
                <div
                  key={uni._id}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-card-hover hover:-translate-y-1 transition-all"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <h3 className="font-heading font-bold text-base text-navy">{uni.name}</h3>
                  <p className="text-gold text-xs font-semibold my-1">{uni.qsRank}</p>
                  <p className="text-slate text-xs">{uni.location}</p>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-slate text-xs py-8 border border-dashed rounded-lg bg-white">
                No partner universities published yet in /admin.
              </div>
            )}
          </div>
        </section>
      </RevealOnScroll>

      {/* 6. NZ Career Stories */}
      <RevealOnScroll>
        <CareerStories />
      </RevealOnScroll>

      {/* 7. Testimonials */}
      <RevealOnScroll>
        <div id="testimonials">
          <TestimonialSection testimonials={testimonials} />
        </div>
      </RevealOnScroll>

      {/* 8. Consultation Form */}
      <RevealOnScroll>
        <ConsultationForm />
      </RevealOnScroll>

      {/* 9. Footer */}
      <footer className="bg-navy text-gray-400 py-12 border-t border-navy/20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div>
            <Logo variant="light" className="text-white" />
            <p className="mt-1">Premier New Zealand Higher Education Pathways.</p>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/admin" className="hover:text-white transition-colors">CMS Login</a>
          </div>
          <p>© {new Date().getFullYear()} Impact Education. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}