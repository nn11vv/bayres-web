import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SchemaLocalBusiness from "@/components/seo/SchemaLocalBusiness";
import { getContent } from "@/lib/i18n";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE, LOCATIONS } from "@/lib/constants";
import type { Locale, ZoneContent } from "@/lib/types";

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ zona: location.slug }));
}

async function getZone(locale: Locale, slug: string): Promise<ZoneContent | undefined> {
  const zones = await getContent<ZoneContent[]>(locale, "zones");
  return zones.find((zone) => zone.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; zona: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, zona } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const zone = await getZone(locale, zona);

  if (!zone) {
    return {};
  }

  const title =
    locale === "es"
      ? `Persianista en ${zone.name}`
      : `Blind & Fly Screen Repair in ${zone.name}`;

  const description =
    locale === "es"
      ? `Reparación e instalación de persianas y mosquiteras en ${zone.name}, Alicante. Empresa familiar con más de 20 años y +200 reseñas 5⭐. Presupuesto sin compromiso.`
      : `Blind and fly screen repair & installation in ${zone.name}, Costa Blanca. Family-run business with 20+ years of experience and +200 five-star reviews. English speaking team.`;

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
      title,
      description,
      url: `${SITE.domain}/${locale}/zonas/${zona}`,
      locale: locale === "en" ? "en_GB" : "es_ES",
    },
  };
}

const CTA = {
  es: { home: "Ver todos los servicios" },
  en: { home: "See all services" },
} as const;

export default async function ZonaPage({
  params,
}: {
  params: Promise<{ locale: string; zona: string }>;
}) {
  const { locale: rawLocale, zona } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const zone = await getZone(locale, zona);

  if (!zone) {
    notFound();
  }

  const cta = CTA[locale];

  return (
    <main className="px-4 py-16 sm:px-6">
      <SchemaLocalBusiness locale={locale} areaServed={[zone.name]} />

      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl text-white sm:text-4xl">
          {locale === "es"
            ? `Persianista en ${zone.name}`
            : `Blind & fly screen repair in ${zone.name}`}
        </h1>

        {/* TODO Prompt 5: reemplazar este copy genérico por contenido hiperlocal por zona */}
        {locale === "es" ? (
          <div className="mt-6 space-y-4 text-white/70">
            <p>
              Persianas Bayres presta servicio en {zone.name} desde hace más de
              20 años. Somos una empresa familiar de Mutxamel, Alicante, con
              tres generaciones dedicadas a la reparación, instalación y
              motorización de persianas, además de la instalación de
              mosquiteras a medida.
            </p>
            <p>
              Si vivís en {zone.name} y tenés una persiana que no sube, una
              cinta rota, un motor que dejó de funcionar, o simplemente
              querés instalar mosquiteras nuevas, podemos ayudarte. También
              hacemos instalación de aire acondicionado y pequeños trabajos
              de electricidad doméstica en la zona.
            </p>
            <p>
              Trabajamos con presupuesto claro antes de empezar, sin
              sorpresas ni cobros ocultos. Priorizamos las urgencias —
              sabemos que una persiana rota no puede esperar. Y si preferís
              hablar en inglés, nuestro equipo atiende sin problema, algo que
              valoran especialmente los vecinos británicos y nórdicos de la
              Costa Blanca.
            </p>
            <p>
              Con más de 200 reseñas de 5 estrellas en Google, la mayoría de
              nuestros clientes en {zone.name} y alrededores nos conocen por
              el boca a boca. Escribinos por WhatsApp o llamanos y te
              respondemos rápido para coordinar una visita.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-4 text-white/70">
            <p>
              Persianas Bayres has been serving {zone.name} for over 20
              years. We are a family-run business based in Mutxamel,
              Alicante, with three generations dedicated to blind repair,
              installation and motorisation, as well as made-to-measure fly
              screen installation.
            </p>
            <p>
              If you live in {zone.name} and have a blind that won&apos;t
              go up, a broken strap, a motor that stopped working, or you
              simply want new fly screens fitted, we can help. We also
              install air conditioning and handle small home electrics jobs
              in the area.
            </p>
            <p>
              We work with a clear quote before starting, no surprises and
              no hidden charges. Urgent jobs get priority — we know a broken
              blind can&apos;t wait. And our team speaks English without any
              problem, something that British and Nordic residents of the
              Costa Blanca particularly value.
            </p>
            <p>
              With over 200 five-star reviews on Google, most of our
              customers in {zone.name} and the surrounding area find us
              through word of mouth. Message us on WhatsApp or give us a
              call and we&apos;ll get back to you quickly to arrange a
              visit.
            </p>
          </div>
        )}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            locale={locale}
            className="justify-center px-6 py-3 text-base"
          />
          <Link
            href={`/${locale}/servicios`}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            {cta.home}
          </Link>
        </div>
      </div>
    </main>
  );
}
