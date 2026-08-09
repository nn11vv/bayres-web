import type { Metadata } from "next";
import Contact from "@/components/home/Contact";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE } from "@/lib/constants";

const META = {
  es: {
    title: "Contacto",
    description:
      "Pedí presupuesto sin compromiso para persianas, mosquiteras, aire acondicionado o electricidad doméstica en Alicante. WhatsApp, teléfono o formulario — te respondemos rápido.",
  },
  en: {
    title: "Contact",
    description:
      "Request a no-obligation quote for blinds, fly screens, air conditioning or home electrics in Alicante. WhatsApp, phone or form — we reply quickly.",
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
      canonical: `${SITE.domain}/${locale}/contacto`,
      languages: {
        "es-ES": `${SITE.domain}/es/contacto`,
        "en-GB": `${SITE.domain}/en/contacto`,
      },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `${SITE.domain}/${locale}/contacto`,
      locale: locale === "en" ? "en_GB" : "es_ES",
    },
  };
}

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  return (
    <main>
      <Contact locale={locale} />
    </main>
  );
}
