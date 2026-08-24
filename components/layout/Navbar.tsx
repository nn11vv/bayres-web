import Link from "next/link";
import { LogoLockup } from "@/components/ui/Logo";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LangSwitcher from "@/components/layout/LangSwitcher";
import { getContent } from "@/lib/i18n";
import type { Locale, NavContent } from "@/lib/types";

export default async function Navbar({ locale }: { locale: Locale }) {
  const nav = await getContent<NavContent>(locale, "nav");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="shrink-0">
          {/* Forced to pure white so the blue wordmark reads on the
              primary-blue bar. */}
          <LogoLockup
            variant="transparent"
            height={52}
            priority
            className="brightness-0 invert"
            wrapperClassName="[--logo-h:42px] sm:[--logo-h:52px]"
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <LangSwitcher locale={locale} />
          <WhatsAppButton
            locale={locale}
            label={nav.ctaWhatsApp}
            variant="onPrimary"
            className="px-5 py-2.5"
          />
        </div>
      </div>
    </header>
  );
}
