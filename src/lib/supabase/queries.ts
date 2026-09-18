import { supabase } from './client';

export interface Course {
  _id: string;
  title: string;
  slug?: string;
  category: string;
  fieldOfStudy: string;
  duration: string;
  entryRequirements: string;
  overview?: string;
  transferDetails?: string;
}

export interface University {
  _id: string;
  name: string;
  qsRank: string;
  location: string;
  logoUrl?: string;
}

export interface Testimonial {
  _id: string;
  authorName: string;
  testimonialType: 'student' | 'parent';
  details: string;
  quote: string;
  imageUrl?: string;
}

export interface Faq {
  _id: string;
  question: string;
  answer: string;
  displayOrder: number;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  coverImageUrl?: string;
}

function mapCourse(row: any): Course {
  return {
    _id: row.id,
    title: row.title,
    slug: row.slug,
    category: row.category,
    fieldOfStudy: row.field_of_study,
    duration: row.duration,
    entryRequirements: row.entry_requirements,
    overview: row.overview,
    transferDetails: row.transfer_details,
  };
}

function mapUniversity(row: any): University {
  return {
    _id: row.id,
    name: row.name,
    qsRank: row.qs_rank,
    location: row.location,
    logoUrl: row.logo_url,
  };
}

function mapTestimonial(row: any): Testimonial {
  return {
    _id: row.id,
    authorName: row.author_name,
    testimonialType: row.testimonial_type,
    details: row.details,
    quote: row.quote,
    imageUrl: row.image_url,
  };
}

function mapFaq(row: any): Faq {
  return {
    _id: row.id,
    question: row.question,
    answer: row.answer,
    displayOrder: row.display_order,
  };
}

function mapBlog(row: any): Blog {
  return {
    _id: row.id,
    title: row.title,
    slug: row.slug,
    publishedAt: row.published_at,
    excerpt: row.excerpt,
    coverImageUrl: row.cover_image_url,
  };
}

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    console.error('getCourses error:', error.message);
    return [];
  }
  return (data ?? []).map(mapCourse);
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();
  if (error || !data) return null;
  return mapCourse(data);
}

export async function getUniversities(): Promise<University[]> {
  const { data, error } = await supabase
    .from('universities')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    console.error('getUniversities error:', error.message);
    return [];
  }
  return (data ?? []).map(mapUniversity);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    console.error('getTestimonials error:', error.message);
    return [];
  }
  return (data ?? []).map(mapTestimonial);
}

export async function getFaqs(): Promise<Faq[]> {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .order('display_order', { ascending: true });
  if (error) {
    console.error('getFaqs error:', error.message);
    return [];
  }
  return (data ?? []).map(mapFaq);
}

export async function getBlogs(): Promise<Blog[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('published_at', { ascending: false });
  if (error) {
    console.error('getBlogs error:', error.message);
    return [];
  }
  return (data ?? []).map(mapBlog);
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();
  if (error || !data) return null;
  return mapBlog(data);
}
