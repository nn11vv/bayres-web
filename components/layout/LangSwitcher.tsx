"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { cn, setCookie } from "@/lib/utils";

export default function LangSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(target: Locale) {
    if (target === locale) return;

    const rest = pathname.split("/").slice(2).join("/");
    const nextPath = `/${target}${rest ? `/${rest}` : ""}`;

    setCookie("NEXT_LOCALE", target, 31536000);
    router.push(nextPath);
  }

  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1 text-xs font-medium">
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => switchTo(option)}
          aria-current={option === locale}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors",
            option === locale ? "bg-primary text-white" : "text-white/50 hover:text-white/80",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
