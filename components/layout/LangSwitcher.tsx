"use client";

import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

// UI only — real navigation between /es and /en lands with the i18n
// wiring pass, once nav content and per-locale routes are in place.
export default function LangSwitcher({ locale }: { locale: Locale }) {
  const options: Locale[] = ["es", "en"];

  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1 text-xs font-medium">
      {options.map((option) => (
        <span
          key={option}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors",
            option === locale
              ? "bg-primary text-white"
              : "text-white/50",
          )}
        >
          {option}
        </span>
      ))}
    </div>
  );
}
