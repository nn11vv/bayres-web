import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/i18n";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE, LOCATIONS } from "@/lib/constants";
import type { Locale, ZoneDetailContent, ZoneSlug } from "@/lib/types";

const META = {
  es: {
    title: "Zonas donde trabajamos",
    description:
      "Persianas Bayres presta servicio en Alicante y la Costa Blanca: Alicante, San Vicente del Raspeig, San Juan de Alicante, Playa San Juan, El Campello, Mutxamel, Bussot, Villajoyosa y Benidorm. Zonas ampliadas bajo consulta.",
  },
  en: {
    title: "Areas we cover",
    description:
      "Persianas Bayres serves Alicante and the Costa Blanca: Alicante, San Vicente del Raspeig, San Juan de Alicante, Playa San Juan, El Campello, Mutxamel, Bussot, Villajoyosa and Benidorm. Extended areas on request.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const current = META[locale];

  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical: `${SITE.domain}/${locale}/zonas`,
      languages: {
        "es-ES": `${SITE.domain}/es/zonas`,
        "en-GB": `${SITE.domain}/en/zonas`,
        "x-default": `${SITE.domain}/es/zonas`,
      },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `${SITE.domain}/${locale}/zonas`,
      locale: locale === "en" ? "en_GB" : "es_ES",
    },
  };
}

const SECTION_LABEL = {
  es: { core: "Zonas habituales", extended: "Zonas ampliadas · bajo consulta" },
  en: { core: "Regular areas", extended: "Extended areas · on request" },
} as const;

export default async function ZonasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const zonesDetail = await getContent<Record<ZoneSlug, ZoneDetailContent>>(
    locale,
    "zones-detail",
  );
  const current = META[locale];
  const sectionLabel = SECTION_LABEL[locale];

  const core = LOCATIONS.filter((location) => !location.extended);
  const extended = LOCATIONS.filter((location) => location.extended);

  return (
    <main className="px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-white sm:text-4xl">
            {current.title}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-white/70">{current.description}</p>
        </div>

        <h2 className="mt-12 text-sm font-medium uppercase tracking-wide text-primary-bright">
          {sectionLabel.core}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {core.map((location) => {
            const zone = zonesDetail[location.slug];
            return (
              <Link
                key={location.slug}
                href={`/${locale}/zonas/${location.slug}`}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30"
              >
                <h3 className="font-heading text-xl text-white">{zone.name}</h3>
                <p className="mt-2 text-sm text-white/70">{zone.hero.subtitle}</p>
              </Link>
            );
          })}
        </div>

        <h2 className="mt-12 text-sm font-medium uppercase tracking-wide text-white/50">
          {sectionLabel.extended}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {extended.map((location) => {
            const zone = zonesDetail[location.slug];
            return (
              <Link
                key={location.slug}
                href={`/${locale}/zonas/${location.slug}`}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30"
              >
                <h3 className="font-heading text-xl text-white">{zone.name}</h3>
                <p className="mt-2 text-sm text-white/70">{zone.hero.subtitle}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
