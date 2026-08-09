"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/types";

// The root <html lang> is set once in app/layout.tsx (which has no access
// to the [locale] segment). Search engines rely on hreflang <link> tags
// for locale targeting, not this attribute — this only fixes it for
// accessibility tools (screen readers) reading the live DOM.
export default function HtmlLangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
