import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcons";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaService from "@/components/seo/SchemaService";
import SchemaFAQ from "@/components/seo/SchemaFAQ";
import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import { getContent } from "@/lib/i18n";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE, SERVICES, LOCATIONS } from "@/lib/constants";
import type { Locale, ServiceContent, ServiceFaqContent, ServiceSlug } from "@/lib/types";

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

async function getServiceFaq(locale: Locale, slug: string) {
  const all = await getContent<ServiceFaqContent[]>(locale, "services-faq");
  return all.find((entry) => entry.slug === slug)?.faq ?? [];
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

const LABELS = {
  es: {
    form: "Pedir presupuesto",
    breadcrumbHome: "Inicio",
    breadcrumbServices: "Servicios",
    howWeWork: "Cómo trabajamos",
    steps: [
      { title: "Nos contás qué pasa", description: "Por WhatsApp, teléfono o el formulario. Nos cuentas el problema o lo que necesitás instalar." },
      { title: "Visita y diagnóstico", description: "Vamos, vemos la persiana, ventana o instalación en cuestión, y te explicamos qué hace falta." },
      { title: "Presupuesto claro", description: "Antes de tocar nada, sabés qué se va a hacer y cuánto cuesta. Sin sorpresas al final." },
      { title: "Trabajo", description: "Hacemos el trabajo acordado, con el cuidado de quien lleva 20 años haciendo esto." },
    ],
    zonesTitle: "En qué zonas ofrecemos este servicio",
    faqTitle: "Preguntas frecuentes",
  },
  en: {
    form: "Request a quote",
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    howWeWork: "How we work",
    steps: [
      { title: "Tell us what's going on", description: "By WhatsApp, phone or the form. Describe the problem or what you need installed." },
      { title: "Visit & diagnosis", description: "We come out, look at the blind, window or installation in question, and explain what's needed." },
      { title: "Clear quote", description: "Before touching anything, you know what will be done and what it costs. No surprises at the end." },
      { title: "The work", description: "We carry out the agreed job, with the care of someone who's been doing this for 20 years." },
    ],
    zonesTitle: "Where we offer this service",
    faqTitle: "Frequently asked questions",
  },
} as const;

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const [service, faq] = await Promise.all([
    getService(locale, slug),
    getServiceFaq(locale, slug),
  ]);

  if (!service) {
    notFound();
  }

  const labels = LABELS[locale];
  const coreZones = LOCATIONS.filter((location) => !location.extended);

  return (
    <main>
      <SchemaService
        locale={locale}
        serviceName={service.title}
        description={service.longDescription}
        slug={service.slug}
      />
      {faq.length > 0 && <SchemaFAQ items={faq} />}
      <SchemaBreadcrumb
        items={[
          { name: labels.breadcrumbHome, url: `${SITE.domain}/${locale}` },
          { name: labels.breadcrumbServices, url: `${SITE.domain}/${locale}/servicios` },
          { name: service.title, url: `${SITE.domain}/${locale}/servicios/${slug}` },
        ]}
      />

      <section className="bg-gradient-to-b from-primary/10 to-transparent px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <ServiceIcon slug={service.slug} className="mx-auto h-16 w-16" />
          <h1 className="mt-5 font-heading text-4xl text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {service.longDescription}
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
              {labels.form}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl text-white sm:text-3xl">
            {labels.howWeWork}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {labels.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="font-heading text-2xl text-primary-bright">
                  {index + 1}
                </span>
                <h3 className="mt-3 font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl text-white sm:text-3xl">
            {labels.zonesTitle}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {coreZones.map((location) => (
              <Link
                key={location.slug}
                href={`/${locale}/zonas/${location.slug}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:border-primary-bright/40 hover:bg-white/10"
              >
                {location.slug
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {faq.length > 0 && (
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-2xl text-white sm:text-3xl">
              {labels.faqTitle}
            </h2>
            <div className="mt-8">
              <FAQAccordion items={faq} />
            </div>
          </div>
        </section>
      )}

      <section className="bg-primary px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl text-white sm:text-4xl">
            {service.title}
          </h2>
          <p className="mt-3 text-white/80">{service.shortDescription}</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              locale={locale}
              className="justify-center bg-white px-6 py-3 text-base text-primary hover:bg-white/90"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
