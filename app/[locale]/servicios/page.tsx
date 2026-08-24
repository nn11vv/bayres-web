import type { Metadata } from "next";
import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcons";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getContent } from "@/lib/i18n";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE, LOCATIONS } from "@/lib/constants";
import type { Locale, ReviewContent, ServiceContent } from "@/lib/types";

const META = {
  es: {
    label: "Lo que hacemos",
    title: "Nuestros servicios",
    description:
      "Persianas, mosquiteras, aire acondicionado y electricidad doméstica en Alicante. Empresa familiar con más de 20 años y +200 reseñas 5⭐.",
    intro: [
      "En Persianas Bayres empezamos hace más de 20 años reparando persianas, y ese sigue siendo el corazón del negocio: persianas y mosquiteras, hecho bien, sin atajos. Con los años sumamos instalación de aire acondicionado y pequeños trabajos de electricidad doméstica, siempre con el mismo criterio: si podemos hacerlo bien, lo hacemos; si no, te lo decimos y te recomendamos a quien corresponda.",
      "No trabajamos con un catálogo cerrado de precios fijos, porque cada persiana, cada ventana y cada instalación es distinta. Lo que sí mantenemos siempre es el mismo proceso: escuchamos qué necesitás, vamos a verlo, y te damos un presupuesto claro antes de tocar nada.",
    ],
    zonesCta: "Ver zonas donde trabajamos",
    reviewsLabel: "Lo que dicen nuestros clientes",
    ctaTitle: "¿No sabés qué servicio necesitás?",
    ctaSubtitle: "Contanos qué está pasando y te orientamos, sin compromiso.",
  },
  en: {
    label: "What we do",
    title: "Our services",
    description:
      "Blinds, fly screens, air conditioning and small home electrics in Alicante. Family-run business with 20+ years of experience and +200 five-star reviews.",
    intro: [
      "We started over 20 years ago repairing blinds, and that's still the heart of the business: blinds and fly screens, done properly, no shortcuts. Over the years we added air conditioning installation and small home electrics, always with the same approach — if we can do it well, we do it; if not, we tell you and point you to someone who can.",
      "We don't work off a fixed price list, because every blind, window and installation is different. What stays the same is the process: we listen to what you need, we come and see it, and we give you a clear quote before touching anything.",
    ],
    zonesCta: "See areas we cover",
    reviewsLabel: "What our customers say",
    ctaTitle: "Not sure which service you need?",
    ctaSubtitle: "Tell us what's going on and we'll point you in the right direction, no obligation.",
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
      className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-primary-bright/40 hover:bg-white/10"
    >
      <ServiceIcon slug={service.slug} className="h-16 w-16" />
      <h2 className="mt-5 font-heading text-2xl text-white">{service.title}</h2>
      <p className="mt-2 text-white/70">{service.longDescription}</p>
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
  const [services, reviews] = await Promise.all([
    getContent<ServiceContent[]>(locale, "services"),
    getContent<ReviewContent[]>(locale, "reviews"),
  ]);
  const current = META[locale];
  const featuredReviews = reviews.slice(0, 3);

  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-primary-bright">
            {current.label}
          </span>
          <h1 className="mt-2 font-heading text-3xl text-white sm:text-4xl">
            {current.title}
          </h1>
        </div>

        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-white/70">
          {current.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} locale={locale} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/zonas`}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {current.zonesCta} ({LOCATIONS.filter((l) => !l.extended).length})
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-sm font-medium uppercase tracking-wide text-primary-bright">
            {current.reviewsLabel}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {featuredReviews.map((review) => (
              <figure
                key={review.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div aria-hidden="true" className="text-primary-bright">
                  {"★".repeat(review.stars)}
                </div>
                <blockquote className="mt-3 text-sm text-white/80">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-white/50">
                  {review.flag} {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-primary p-10 text-center">
          <h2 className="font-heading text-2xl text-white sm:text-3xl">
            {current.ctaTitle}
          </h2>
          <p className="mt-2 text-white/80">{current.ctaSubtitle}</p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton
              locale={locale}
              className="justify-center bg-white px-6 py-3 text-base text-primary hover:bg-white/90"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
