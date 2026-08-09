import type { Metadata } from "next";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE } from "@/lib/constants";

const META = {
  es: {
    title: "Blog",
    description:
      "Consejos sobre persianas, mosquiteras y mantenimiento del hogar en Alicante. Próximamente.",
    heading: "Próximamente",
    body: "Estamos preparando artículos con consejos prácticos sobre persianas, mosquiteras y mantenimiento del hogar. Mientras tanto, si tenés una consulta, escribinos por WhatsApp.",
  },
  en: {
    title: "Blog",
    description:
      "Tips on blinds, fly screens and home maintenance in Alicante. Coming soon.",
    heading: "Coming soon",
    body: "We're preparing articles with practical tips on blinds, fly screens and home maintenance. In the meantime, if you have a question, message us on WhatsApp.",
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
      canonical: `${SITE.domain}/${locale}/blog`,
      languages: {
        "es-ES": `${SITE.domain}/es/blog`,
        "en-GB": `${SITE.domain}/en/blog`,
      },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `${SITE.domain}/${locale}/blog`,
      locale: locale === "en" ? "en_GB" : "es_ES",
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const current = META[locale];

  return (
    <main className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl text-white sm:text-4xl">
          {current.heading}
        </h1>
        <p className="mt-4 text-white/70">{current.body}</p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton locale={locale} className="px-6 py-3 text-base" />
        </div>
      </div>
    </main>
  );
}
