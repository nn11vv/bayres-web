import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Service-role client — full table access, bypasses RLS. Only ever
// import this from server code (route handlers, server components).
// The `server-only` import above makes any accidental client-side
// import a build-time error instead of a leaked key at runtime.

let cached: SupabaseClient | null = null;

export function getSupabaseServer(): SupabaseClient {
  if (cached) {
    return cached;
  }

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars",
    );
  }

  cached = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });

  return cached;
}
