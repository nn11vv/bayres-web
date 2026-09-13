import Link from "next/link";
import { LogoLockup } from "@/components/ui/Logo";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LangSwitcher from "@/components/layout/LangSwitcher";
import NavbarShell from "@/components/layout/NavbarShell";
import { getContent } from "@/lib/i18n";
import type { Locale, NavContent } from "@/lib/types";

export default async function Navbar({ locale }: { locale: Locale }) {
  const nav = await getContent<NavContent>(locale, "nav");

  return (
    <NavbarShell>
      <Link href={`/${locale}`} className="shrink-0">
        <LogoLockup
          variant="white"
          height={44}
          priority
          wrapperClassName="[--logo-h:36px] sm:[--logo-h:44px]"
        />
      </Link>

      <div className="flex items-center gap-3 sm:gap-4">
        <LangSwitcher locale={locale} />
        <WhatsAppButton
          locale={locale}
          label={nav.ctaWhatsApp}
          className="px-5 py-2.5"
        />
      </div>
    </NavbarShell>
  );
}
