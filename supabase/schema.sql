-- Impact Education — Supabase schema
-- Run this in the Supabase SQL editor (Project > SQL Editor > New query)
-- Replaces the Sanity content model (course, university, testimonial, blog)

create extension if not exists pgcrypto;

-- ─────────────────────────────────────────────
-- Tables
-- ─────────────────────────────────────────────

create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null check (category in ('after-ol', 'after-al', 'undergrad')),
  field_of_study text not null check (field_of_study in ('business', 'it', 'engineering')),
  duration text,
  entry_requirements text,
  overview text,
  transfer_details text,
  created_at timestamptz not null default now()
);

create table if not exists universities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  qs_rank text,
  location text,
  logo_url text,
  created_at timestamptz not null default now()
);

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  testimonial_type text not null check (testimonial_type in ('student', 'parent')) default 'student',
  details text,
  quote text,
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  published_at date,
  excerpt text,
  cover_image_url text,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- Row Level Security
-- Public site only ever needs to READ. All writes go through
-- the admin API routes using the service-role key (server-side only),
-- which bypasses RLS entirely — so no write policy is defined here.
-- This keeps the tables safe from public writes even with no login
-- screen on /admin yet.
-- ─────────────────────────────────────────────

alter table courses enable row level security;
alter table universities enable row level security;
alter table testimonials enable row level security;
alter table faqs enable row level security;
alter table blogs enable row level security;

drop policy if exists "Public read courses" on courses;
create policy "Public read courses" on courses for select using (true);

drop policy if exists "Public read universities" on universities;
create policy "Public read universities" on universities for select using (true);

drop policy if exists "Public read testimonials" on testimonials;
create policy "Public read testimonials" on testimonials for select using (true);

drop policy if exists "Public read blogs" on blogs;
create policy "Public read blogs" on blogs for select using (true);

drop policy if exists "Public read faqs" on faqs;
create policy "Public read faqs" on faqs for select using (true);

-- ─────────────────────────────────────────────
-- Storage bucket for uploaded images
-- (Go to Storage > New bucket if you'd rather do this in the UI —
-- name it exactly "media" and mark it Public.)
-- ─────────────────────────────────────────────

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "Public read media" on storage.objects;
create policy "Public read media" on storage.objects
  for select using (bucket_id = 'media');
