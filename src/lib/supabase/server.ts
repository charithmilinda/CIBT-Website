import { createClient } from '@supabase/supabase-js';

// SERVER-ONLY client using the service role key. This bypasses Row
// Level Security entirely, which is what lets the /admin panel write
// data with no login screen in front of it yet.
//
// Never import this file from a 'use client' component — it must only
// ever run inside route handlers (src/app/api/**) or other server code.
// The service role key is never sent to the browser.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: { autoRefreshToken: false, persistSession: false },
  }
);
