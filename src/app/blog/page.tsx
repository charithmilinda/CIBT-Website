import { getBlogs, Blog } from "@/lib/supabase/queries";
import Logo from "@/components/Logo";

export const revalidate = 0;

export default async function BlogIndexPage() {
  const blogs: Blog[] = await getBlogs();

  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      {/* Header / Navigation */}
      <nav className="bg-white border-b border-gray-200 py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/"><Logo /></a>
          <a href="/" className="text-xs font-semibold text-slate hover:text-navy">
            &larr; Back to Home
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-navy text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 px-3 py-1 rounded-full inline-block mb-3">
            Latest News & Updates
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-extrabold mb-4">
            New Zealand Education Insights
          </h1>
          <p className="text-gray-300 text-sm lg:text-base max-w-2xl">
            Stay up to date with student visa policies, university announcements, and success stories.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((article) => (
              <article
                key={article._id}
                className="bg-white rounded-xl border border-gray-200 shadow-card hover:shadow-card-hover transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {article.coverImageUrl && (
                    <img
                      src={article.coverImageUrl}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <p className="text-[11px] font-semibold text-gold uppercase tracking-wider mb-2">
                      {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'Recent'}
                    </p>
                    <h2 className="font-heading font-bold text-lg text-navy mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-slate text-xs leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {article.slug && (
                  <div className="px-6 pb-6 pt-0">
                    <a
                      href={`/blog/${article.slug}`}
                      className="text-xs font-bold text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
                    >
                      Read Article &rarr;
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-slate text-sm">
              No articles published yet. Add blog posts in <code className="bg-canvas px-2 py-1 rounded text-navy font-bold">/admin</code>!
            </p>
          </div>
        )}
      </section>
    </main>
  );
}