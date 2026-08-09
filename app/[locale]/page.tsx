import type { Metadata } from "next";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE } from "@/lib/constants";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Reviews from "@/components/home/Reviews";
import Zones from "@/components/home/Zones";
import Contact from "@/components/home/Contact";
import SchemaLocalBusiness from "@/components/seo/SchemaLocalBusiness";

const META = {
  es: {
    title:
      "Persianista en Alicante · Reparación e instalación de persianas y mosquiteras",
    description:
      "Empresa familiar en Alicante con más de 20 años. Reparación, instalación y motorización de persianas y mosquiteras. +200 reseñas 5⭐. Presupuesto sin compromiso.",
  },
  en: {
    title: "Blind & Fly Screen Repair Alicante · English-speaking service",
    description:
      "Family-run business in Alicante with 20+ years of experience. Blind repair, installation and motorisation, plus fly screens. +200 five-star reviews. English speaking team.",
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
      canonical: `${SITE.domain}/${locale}`,
      languages: {
        "es-ES": `${SITE.domain}/es`,
        "en-GB": `${SITE.domain}/en`,
      },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `${SITE.domain}/${locale}`,
      locale: locale === "en" ? "en_GB" : "es_ES",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  return (
    <main>
      <SchemaLocalBusiness locale={locale} />
      <Hero locale={locale} />
      <Services locale={locale} />
      <WhyUs locale={locale} />
      <Reviews locale={locale} />
      <Zones locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
