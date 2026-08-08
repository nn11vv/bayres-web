import Link from "next/link";
import Logo from "@/components/ui/Logo";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LangSwitcher from "@/components/layout/LangSwitcher";
import type { Locale } from "@/lib/types";

export default function Navbar({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="shrink-0">
          <Logo variant="white" size="md" priority />
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <LangSwitcher locale={locale} />
          <WhatsAppButton locale={locale} />
        </div>
      </div>
    </header>
  );
}
