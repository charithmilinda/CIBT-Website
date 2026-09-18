export type FieldType = 'text' | 'textarea' | 'select' | 'date' | 'image';

export interface FieldDef {
  name: string; // matches the Supabase column name (snake_case)
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { label: string; value: string }[]; // for 'select'
}

export interface ResourceDef {
  key: string; // used in the URL: /admin/[key]
  table: string; // Supabase table name
  label: string; // plural display name
  singular: string;
  columns: { key: string; label: string }[]; // shown in the list table
  fields: FieldDef[]; // shown in the create/edit form
}

export const RESOURCES: Record<string, ResourceDef> = {
  courses: {
    key: 'courses',
    table: 'courses',
    label: 'Courses & Pathways',
    singular: 'Course',
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'category', label: 'Category' },
      { key: 'duration', label: 'Duration' },
    ],
    fields: [
      { name: 'title', label: 'Course Title', type: 'text', required: true },
      { name: 'slug', label: 'URL Slug (e.g. business-foundation)', type: 'text', required: true },
      {
        name: 'category',
        label: 'Target Category',
        type: 'select',
        required: true,
        options: [
          { label: 'After O/L', value: 'after-ol' },
          { label: 'After A/L', value: 'after-al' },
          { label: 'Undergrad Transfer', value: 'undergrad' },
        ],
      },
      {
        name: 'field_of_study',
        label: 'Field of Study',
        type: 'select',
        required: true,
        options: [
          { label: 'Business & Management', value: 'business' },
          { label: 'IT & Computing', value: 'it' },
          { label: 'Engineering', value: 'engineering' },
        ],
      },
      { name: 'duration', label: 'Duration', type: 'text' },
      { name: 'entry_requirements', label: 'Entry Requirements', type: 'textarea' },
      { name: 'overview', label: 'Full Program Overview', type: 'textarea' },
      { name: 'transfer_details', label: 'New Zealand Transfer Structure', type: 'textarea' },
    ],
  },
  universities: {
    key: 'universities',
    table: 'universities',
    label: 'Partner Universities',
    singular: 'University',
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'location', label: 'Location' },
      { key: 'qs_rank', label: 'QS Rank' },
    ],
    fields: [
      { name: 'name', label: 'University Name', type: 'text', required: true },
      { name: 'qs_rank', label: 'QS Rank Badge Text', type: 'text' },
      { name: 'location', label: 'City Location', type: 'text' },
      { name: 'logo_url', label: 'University Logo', type: 'image' },
    ],
  },
  testimonials: {
    key: 'testimonials',
    table: 'testimonials',
    label: 'Testimonials',
    singular: 'Testimonial',
    columns: [
      { key: 'author_name', label: 'Author' },
      { key: 'testimonial_type', label: 'Type' },
    ],
    fields: [
      { name: 'author_name', label: 'Author Name', type: 'text', required: true },
      {
        name: 'testimonial_type',
        label: 'Testimonial Type',
        type: 'select',
        required: true,
        options: [
          { label: 'Student', value: 'student' },
          { label: 'Parent', value: 'parent' },
        ],
      },
      { name: 'details', label: 'Subtitle / Relation Details', type: 'text' },
      { name: 'quote', label: 'Testimonial / Quote', type: 'textarea' },
      { name: 'image_url', label: 'Photo', type: 'image' },
    ],
  },
  faqs: {
    key: 'faqs',
    table: 'faqs',
    label: 'FAQs',
    singular: 'FAQ',
    columns: [
      { key: 'question', label: 'Question' },
      { key: 'display_order', label: 'Order' },
    ],
    fields: [
      { name: 'question', label: 'Question', type: 'text', required: true },
      { name: 'answer', label: 'Answer', type: 'textarea', required: true },
      { name: 'display_order', label: 'Display Order (lower shows first)', type: 'text' },
    ],
  },
  blogs: {
    key: 'blogs',
    table: 'blogs',
    label: 'Blog Articles & News',
    singular: 'Article',
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'published_at', label: 'Published' },
    ],
    fields: [
      { name: 'title', label: 'Article Title', type: 'text', required: true },
      { name: 'slug', label: 'URL Slug (e.g. visa-updates-2026)', type: 'text', required: true },
      { name: 'published_at', label: 'Published Date', type: 'date' },
      { name: 'excerpt', label: 'Short Summary / Excerpt', type: 'textarea' },
      { name: 'cover_image_url', label: 'Cover Image', type: 'image' },
    ],
  },
};

export function getResource(key: string): ResourceDef | undefined {
  return RESOURCES[key];
}
