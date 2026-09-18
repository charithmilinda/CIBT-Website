import { MetadataRoute } from 'next';
import { getCourses, getBlogs } from '@/lib/supabase/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fallback placeholder — set NEXT_PUBLIC_SITE_URL to your real domain once confirmed.
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.example';

  const courses = await getCourses();
  const blogs = await getBlogs();

  const courseUrls = courses
    .filter((c) => c.slug)
    .map((c) => ({
      url: `${siteUrl}/courses/${c.slug}`,
      lastModified: new Date(),
    }));

  const blogUrls = blogs
    .filter((b) => b.slug)
    .map((b) => ({
      url: `${siteUrl}/blog/${b.slug}`,
      lastModified: b.publishedAt ? new Date(b.publishedAt) : new Date(),
    }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
    },
    ...courseUrls,
    ...blogUrls,
  ];
}