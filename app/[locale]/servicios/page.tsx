import type { Metadata } from "next";
import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcons";
import { getContent } from "@/lib/i18n";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE } from "@/lib/constants";
import type { Locale, ServiceContent } from "@/lib/types";

const META = {
  es: {
    title: "Servicios",
    description:
      "Persianas, mosquiteras, aire acondicionado y electricidad doméstica en Alicante. Empresa familiar con más de 20 años y +200 reseñas 5⭐.",
  },
  en: {
    title: "Services",
    description:
      "Blinds, fly screens, air conditioning and small home electrics in Alicante. Family-run business with 20+ years of experience and +200 five-star reviews.",
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
      canonical: `${SITE.domain}/${locale}/servicios`,
      languages: {
        "es-ES": `${SITE.domain}/es/servicios`,
        "en-GB": `${SITE.domain}/en/servicios`,
      },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `${SITE.domain}/${locale}/servicios`,
      locale: locale === "en" ? "en_GB" : "es_ES",
    },
  };
}

function ServiceCard({ service, locale }: { service: ServiceContent; locale: Locale }) {
  return (
    <Link
      href={`/${locale}/servicios/${service.slug}`}
      className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-primary-light/40 hover:bg-white/10"
    >
      <ServiceIcon slug={service.slug} className="h-16 w-16" />
      <h2 className="mt-5 font-heading text-2xl text-white">{service.title}</h2>
      <p className="mt-2 text-white/70">{service.shortDescription}</p>
    </Link>
  );
}

export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const services = await getContent<ServiceContent[]>(locale, "services");
  const current = META[locale];

  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-white sm:text-4xl">
            {current.title}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            {current.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} locale={locale} />
          ))}
        </div>
      </div>
    </main>
  );
}
