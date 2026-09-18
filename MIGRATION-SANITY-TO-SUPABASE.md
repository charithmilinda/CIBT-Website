# Migrating off Sanity → Supabase

This replaces Sanity (both the dataset and the embedded Studio admin panel at
`/admin`) with Supabase Postgres + Storage, and a custom-built admin panel at
the same `/admin` URL.

## 1. Run the database schema

In your Supabase project: **SQL Editor → New query**, paste the contents of
`supabase/schema.sql`, and run it. This creates the `courses`, `universities`,
`testimonials`, and `blogs` tables, enables Row Level Security with public
read-only policies, and creates a public `media` storage bucket for uploaded
images.

If you'd rather create the storage bucket by hand: **Storage → New bucket**,
name it exactly `media`, and mark it **Public**.

## 2. Set environment variables

Copy `.env.local.example` to `.env.local` and fill in your project's URL and
keys from **Project Settings → API**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` — keep this secret; it's only read by server-side
  code in `src/lib/supabase/server.ts` and never sent to the browser.

## 3. Update dependencies

In your project's `package.json`, remove:

```
sanity
next-sanity
@sanity/vision
@sanity/image-url
```

(and any other `@sanity/*` packages you have), then add:

```
npm install @supabase/supabase-js
```

Also delete the root-level `sanity.config.ts` / `sanity.cli.ts` files if you
have them — they aren't part of this `src/` bundle, but they're no longer
needed since the `/admin/[[...index]]` Studio route has been removed.

## 4. What changed in the code

- **Removed:** `src/sanity/` (client, queries, schema types) and the
  `/admin/[[...index]]` Sanity Studio route.
- **Added:**
  - `src/lib/supabase/client.ts` — browser Supabase client (anon key)
  - `src/lib/supabase/server.ts` — server-only Supabase client (service role
    key, bypasses RLS) — only ever imported from `src/app/api/**`
  - `src/lib/supabase/queries.ts` — drop-in replacement for
    `src/sanity/queries.ts` with the **same function names and return types**
    (`getCourses`, `getCourseBySlug`, `getUniversities`, `getTestimonials`,
    `getBlogs`, `getBlogBySlug`), so all the page/component code that
    consumed them needed only an import-path change.
  - `src/lib/admin/resources.ts` — one config object describing each content
    type's table, list columns, and form fields. This drives the whole admin
    panel generically instead of one-off pages per resource.
  - `src/app/api/admin/[resource]/route.ts` and `.../[id]/route.ts` — generic
    CRUD API routes for any resource in `resources.ts`.
  - `src/app/api/admin/upload/route.ts` — handles image uploads to the
    `media` Storage bucket and returns a public URL.
  - `src/app/admin/**` — the new admin panel: dashboard, list, create, and
    edit pages, reused across Courses, Universities, Testimonials, and Blogs.
  - `src/components/admin/**` — `AdminNav`, `ResourceTable`, `ResourceForm`,
    `ImageUploadField` — the generic building blocks the admin pages use.
- **Updated imports:** every file that did
  `import { ... } from '@/sanity/queries'` now imports from
  `@/lib/supabase/queries'` instead. No other logic in those files changed.

## 5. No login yet — heads up

Per your choice, `/admin` has no authentication in front of it right now.
The tables themselves are protected (RLS only allows public reads; all writes
go through the service-role key server-side), so nobody can write to the
database directly from the browser — but anyone who finds the `/admin` URL
can use the panel. Add a login before this goes to a public production
domain. A simple option later: Supabase Auth with a single admin user, or a
shared-password gate via middleware.

## 6. Migrating existing content

This does not automatically copy your existing Sanity documents into
Supabase. If you have live courses/universities/testimonials/blog posts in
Sanity you want to keep, you'll need to re-enter them through the new
`/admin` panel (or ask me to write a one-off script that reads from the
Sanity API and inserts into Supabase — I can do that if you share which
content needs to move over).
