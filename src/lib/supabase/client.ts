import { createClient } from '@supabase/supabase-js';

// Public, browser-safe client. Uses the anon key, which is restricted
// by the RLS policies in supabase/schema.sql (read-only for anon).
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
