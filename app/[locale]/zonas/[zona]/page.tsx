import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SchemaLocalBusiness from "@/components/seo/SchemaLocalBusiness";
import SchemaFAQ from "@/components/seo/SchemaFAQ";
import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import { getContent } from "@/lib/i18n";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE, LOCATIONS } from "@/lib/constants";
import type { Locale, ReviewContent, ZoneDetailContent, ZoneSlug } from "@/lib/types";

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ zona: location.slug }));
}

async function getZonesDetail(locale: Locale) {
  return getContent<Record<ZoneSlug, ZoneDetailContent>>(locale, "zones-detail");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; zona: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, zona } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const zonesDetail = await getZonesDetail(locale);
  const zone = zonesDetail[zona as ZoneSlug];

  if (!zone) {
    return {};
  }

  const title =
    locale === "es" ? `Persianista en ${zone.name}` : `Blind Repair in ${zone.name}`;

  const description =
    locale === "es"
      ? `Reparación e instalación de persianas y mosquiteras en ${zone.name}. Empresa familiar con más de 20 años. +200 reseñas ⭐. Consulta sin compromiso.`
      : `Blind repair, installation and fly screens in ${zone.name}. Family business with 20+ years experience. +200 five-star reviews. English-speaking team.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.domain}/${locale}/zonas/${zona}`,
      languages: {
        "es-ES": `${SITE.domain}/es/zonas/${zona}`,
        "en-GB": `${SITE.domain}/en/zonas/${zona}`,
      },
    },
    openGraph: {
      title: locale === "es" ? `Persianista en ${zone.name} — Persianas Bayres` : `Blind Repair in ${zone.name} — Persianas Bayres`,
      description: zone.intro.replace(/\n+/g, " ").slice(0, 160),
      url: `${SITE.domain}/${locale}/zonas/${zona}`,
      locale: locale === "en" ? "en_GB" : "es_ES",
    },
  };
}

const LABELS = {
  es: {
    servicesTitle: "Servicios que ofrecemos en la zona",
    faqTitle: "Preguntas frecuentes",
    reviewsLabel: "Lo que dicen nuestros clientes",
    nearbyTitle: "Otras zonas cercanas",
    breadcrumbHome: "Inicio",
    breadcrumbZones: "Zonas",
    formCta: "Pedir presupuesto",
  },
  en: {
    servicesTitle: "Services we offer in the area",
    faqTitle: "Frequently asked questions",
    reviewsLabel: "What our customers say",
    nearbyTitle: "Other nearby areas",
    breadcrumbHome: "Home",
    breadcrumbZones: "Areas",
    formCta: "Request a quote",
  },
} as const;

export default async function ZonaPage({
  params,
}: {
  params: Promise<{ locale: string; zona: string }>;
}) {
  const { locale: rawLocale, zona } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const zonesDetail = await getZonesDetail(locale);
  const zone = zonesDetail[zona as ZoneSlug];

  if (!zone) {
    notFound();
  }

  const [reviews] = await Promise.all([getContent<ReviewContent[]>(locale, "reviews")]);
  const labels = LABELS[locale];

  const currentLocation = LOCATIONS.find((location) => location.slug === zona);
  const nearby = LOCATIONS.filter((location) => location.slug !== zona).slice(0, 3);
  const review = reviews[(currentLocation?.priority ?? 0) % reviews.length];

  return (
    <main>
      <SchemaLocalBusiness locale={locale} areaServed={[zone.name]} />
      <SchemaFAQ items={zone.faq} />
      <SchemaBreadcrumb
        items={[
          { name: labels.breadcrumbHome, url: `${SITE.domain}/${locale}` },
          { name: labels.breadcrumbZones, url: `${SITE.domain}/${locale}/zonas` },
          { name: zone.name, url: `${SITE.domain}/${locale}/zonas/${zona}` },
        ]}
      />

      <section className="bg-gradient-to-b from-primary/10 to-transparent px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80">
            {zone.hero.badge}
          </span>
          <h1 className="mt-6 font-heading text-4xl text-white sm:text-5xl">
            {zone.hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {zone.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6">
        <div className="mx-auto max-w-2xl space-y-4 text-center text-white/70">
          {zone.intro.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-2xl text-white sm:text-3xl">
            {zone.localContext.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {zone.localContext.points.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="text-emerald-400" aria-hidden="true">
                  ✓
                </span>
                <p className="text-sm text-white/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl text-white sm:text-3xl">
            {labels.servicesTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {zone.servicesOffered.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary-bright/40 hover:bg-white/10"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 font-heading text-lg text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-2xl text-white sm:text-3xl">
            {labels.faqTitle}
          </h2>
          <div className="mt-8">
            <FAQAccordion items={zone.faq} />
          </div>
        </div>
      </section>

      {review && (
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-wide text-primary-bright">
              {labels.reviewsLabel}
            </span>
            <figure className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div aria-hidden="true" className="text-primary-bright">
                {"★".repeat(review.stars)}
              </div>
              <blockquote className="mt-3 text-white/80">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-white/50">
                {review.flag} {review.name} · {review.source}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      <section className="bg-primary px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl text-white sm:text-4xl">
            {zone.cta.title}
          </h2>
          <p className="mt-3 text-white/80">{zone.cta.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              locale={locale}
              className="justify-center px-6 py-3 text-base"
            />
            <Link
              href={`/${locale}/contacto`}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              {labels.formCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-2xl text-white sm:text-3xl">
            {labels.nearbyTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {nearby.map((location) => {
              const nearbyZone = zonesDetail[location.slug];
              return (
                <Link
                  key={location.slug}
                  href={`/${locale}/zonas/${location.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-primary-bright/40 hover:bg-white/10"
                >
                  <p className="font-heading text-lg text-white">{nearbyZone.name}</p>
                  <p className="mt-1 text-sm text-white/60">{nearbyZone.hero.subtitle}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
