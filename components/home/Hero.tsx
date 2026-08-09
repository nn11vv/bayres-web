import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale } from "@/lib/types";

export default async function Hero({ locale }: { locale: Locale }) {
  const home = await getContent<HomeContent>(locale, "home");
  const { hero } = home;

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80">
          {hero.badge}
        </span>

        <h1 className="mt-6 font-heading text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          {hero.headline}{" "}
          <span className="text-primary-light">{hero.headlineAccent}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
          {hero.subheadline}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton
            locale={locale}
            className="justify-center px-6 py-3 text-base"
          />
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            {hero.ctaForm}
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-white/70">
          {hero.trustPills.map((pill) => (
            <li
              key={pill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
            >
              {pill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
