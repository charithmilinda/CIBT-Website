import { getCourseBySlug, getCourses } from "@/lib/supabase/queries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const revalidate = 0;

// Dynamic Metadata Generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.example";
  const title = `${course.title} (${course.category})`;
  const description =
    course.overview?.slice(0, 160) ||
    `Enroll in ${course.title} at Impact Education. Duration: ${course.duration}. Entry criteria: ${course.entryRequirements}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/courses/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const allCourses = await getCourses();
  const relatedCourses = allCourses
    .filter((c) => c.slug !== course.slug && c.category === course.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      {/* Existing Course Page Layout */}
      <nav className="bg-white border-b border-gray-200 py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/"><Logo /></a>
          <a href="/#pathways" className="text-xs font-semibold text-slate hover:text-navy">
            &larr; Back to Pathways
          </a>
        </div>
      </nav>

      <section className="bg-navy text-white py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-4">
            {course.category}
          </span>
          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold mb-4">{course.title}</h1>
          <p className="text-gray-300 text-sm">Duration: {course.duration}</p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy mb-3">Program Overview</h2>
            <p className="text-slate text-sm leading-relaxed whitespace-pre-line">
              {course.overview || "Full curriculum details coming soon."}
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-navy mb-3">Entry Criteria</h2>
            <p className="text-slate text-sm leading-relaxed whitespace-pre-line">
              {course.entryRequirements}
            </p>
          </div>
          {course.transferDetails && (
            <div>
              <h2 className="font-heading text-xl font-bold text-navy mb-3">New Zealand Transfer Structure</h2>
              <p className="text-slate text-sm leading-relaxed whitespace-pre-line">
                {course.transferDetails}
              </p>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-card h-fit">
          <h3 className="font-heading font-bold text-lg text-navy mb-2">Interested in this course?</h3>
          <a
            href="/#consultation"
            className="block text-center bg-emerald hover:bg-emerald/90 text-white font-bold text-xs py-3 rounded-lg transition-colors mt-4"
          >
            Apply / Book Consultation
          </a>
        </div>
      </section>

      {relatedCourses.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-200 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-xl font-bold text-navy mb-6">Related Pathways</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((rc) => (
                <a
                  key={rc._id}
                  href={`/courses/${rc.slug}`}
                  className="bg-canvas p-5 rounded-xl border border-gray-200 hover:border-navy/40 hover:shadow-card transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-slate px-2 py-0.5 rounded inline-block mb-2">
                    {rc.category}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-navy">{rc.title}</h3>
                  <p className="text-xs text-slate mt-1">{rc.duration}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}