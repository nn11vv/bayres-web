import Link from "next/link";
import { LogoLockup } from "@/components/ui/Logo";
import type { Locale } from "@/lib/types";

// Policy/social links are placeholders — real copy lands with the
// content pass.
export default function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-dark text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link href={`/${locale}`} className="shrink-0 opacity-80 transition-opacity hover:opacity-100">
          <LogoLockup
            variant="transparent"
            height={34}
            className="brightness-0 invert"
            wrapperClassName="[--logo-h:30px] sm:[--logo-h:34px]"
          />
        </Link>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="#" className="hover:text-white">
            Política de privacidad
          </Link>
          <Link href="#" className="hover:text-white">
            Términos y condiciones
          </Link>
          <Link href="#" className="hover:text-white">
            Facebook
          </Link>
          <Link href="#" className="hover:text-white">
            Instagram
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs sm:px-6">
        © {year} Persianas Bayres. Todos los derechos reservados.
      </div>
    </footer>
  );
}
