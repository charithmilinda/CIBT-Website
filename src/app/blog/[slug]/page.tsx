import { getBlogBySlug } from "@/lib/supabase/queries";
import { notFound } from "next/navigation";
import Logo from "@/components/Logo";

export const revalidate = 0;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-canvas text-charcoal">
      <nav className="bg-white border-b border-gray-200 py-6 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/"><Logo /></a>
          <a href="/blog" className="text-xs font-semibold text-slate hover:text-navy">
            &larr; Back to Blog
          </a>
        </div>
      </nav>

      <article className="py-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-xs font-bold text-gold uppercase tracking-wider mb-2">
          {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'News Update'}
        </p>
        <h1 className="font-heading text-3xl lg:text-5xl font-extrabold text-navy mb-6">
          {article.title}
        </h1>

        {article.coverImageUrl && (
          <img
            src={article.coverImageUrl}
            alt={article.title}
            className="w-full h-80 lg:h-96 object-cover rounded-2xl mb-8 shadow-card"
          />
        )}

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-card">
          <p className="text-slate text-sm lg:text-base leading-relaxed whitespace-pre-line">
            {article.excerpt}
          </p>
        </div>
      </article>
    </main>
  );
}