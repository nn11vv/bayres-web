import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcons";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SchemaService from "@/components/seo/SchemaService";
import { getContent } from "@/lib/i18n";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE, SERVICES } from "@/lib/constants";
import type { Locale, ServiceContent, ServiceSlug } from "@/lib/types";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

const SEO_TITLE: Record<Locale, Record<ServiceSlug, string>> = {
  es: {
    persianas: "Reparación e instalación de persianas en Alicante",
    mosquiteras: "Instalación de mosquiteras en Alicante",
    "aire-acondicionado": "Instalación de aire acondicionado en Alicante",
    electricidad: "Electricidad doméstica en Alicante",
  },
  en: {
    persianas: "Blind repair & installation in Alicante",
    mosquiteras: "Fly screen installation in Alicante",
    "aire-acondicionado": "Air conditioning installation in Alicante",
    electricidad: "Small home electrics in Alicante",
  },
};

const SEO_DESCRIPTION_SUFFIX: Record<Locale, string> = {
  es: " +200 reseñas 5⭐. Presupuesto sin compromiso.",
  en: " +200 five-star reviews. English speaking team.",
};

async function getService(locale: Locale, slug: string): Promise<ServiceContent | undefined> {
  const services = await getContent<ServiceContent[]>(locale, "services");
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const service = await getService(locale, slug);

  if (!service) {
    return {};
  }

  const title = SEO_TITLE[locale][service.slug];
  const description = `${service.shortDescription}${SEO_DESCRIPTION_SUFFIX[locale]}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.domain}/${locale}/servicios/${slug}`,
      languages: {
        "es-ES": `${SITE.domain}/es/servicios/${slug}`,
        "en-GB": `${SITE.domain}/en/servicios/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE.domain}/${locale}/servicios/${slug}`,
      locale: locale === "en" ? "en_GB" : "es_ES",
    },
  };
}

const CTA = {
  es: { form: "Pedir presupuesto" },
  en: { form: "Request a quote" },
} as const;

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const service = await getService(locale, slug);

  if (!service) {
    notFound();
  }

  const cta = CTA[locale];

  return (
    <main className="px-4 py-16 sm:px-6">
      <SchemaService
        locale={locale}
        serviceName={service.title}
        description={service.longDescription}
        slug={service.slug}
      />

      <div className="mx-auto max-w-3xl">
        <ServiceIcon slug={service.slug} className="h-16 w-16" />
        <h1 className="mt-5 font-heading text-3xl text-white sm:text-4xl">
          {service.title}
        </h1>
        <p className="mt-4 text-lg text-white/70">{service.longDescription}</p>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            locale={locale}
            className="justify-center px-6 py-3 text-base"
          />
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            {cta.form}
          </Link>
        </div>
      </div>
    </main>
  );
}
