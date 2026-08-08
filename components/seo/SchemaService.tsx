import type { Locale, ServiceSlug } from "@/lib/types";

// Placeholder — JSON-LD Service schema lands in the SEO pass.
export default function SchemaService({
  locale,
  slug,
}: {
  locale: Locale;
  slug: ServiceSlug;
}) {
  void locale;
  void slug;
  return null;
}
