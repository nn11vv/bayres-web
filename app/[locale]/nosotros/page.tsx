import type { Metadata } from "next";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import { SITE } from "@/lib/constants";

const META = {
  es: {
    title: "Nosotros",
    description:
      "Persianas Bayres: empresa familiar de Mutxamel, Alicante, con tres generaciones — Julián, Juan y Valentín — y más de 20 años reparando e instalando persianas y mosquiteras.",
  },
  en: {
    title: "About us",
    description:
      "Persianas Bayres: a family-run business from Mutxamel, Alicante, spanning three generations — Julián, Juan and Valentín — with over 20 years repairing and installing blinds and fly screens.",
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
      canonical: `${SITE.domain}/${locale}/nosotros`,
      languages: {
        "es-ES": `${SITE.domain}/es/nosotros`,
        "en-GB": `${SITE.domain}/en/nosotros`,
      },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `${SITE.domain}/${locale}/nosotros`,
      locale: locale === "en" ? "en_GB" : "es_ES",
    },
  };
}

export default async function NosotrosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const current = META[locale];

  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl text-white sm:text-4xl">
          {current.title}
        </h1>

        {locale === "es" ? (
          <div className="mt-6 space-y-4 text-white/70">
            <p>
              Persianas Bayres nació en Mutxamel, Alicante, hace más de 20
              años, cuando Julián empezó a reparar e instalar persianas para
              vecinos y conocidos. Con el tiempo, ese trabajo de confianza se
              convirtió en una empresa familiar.
            </p>
            <p>
              Hoy, la segunda generación —Juan y Valentín, hijos de
              Julián— trabaja codo a codo con él. No es solo un cambio de
              nombre en la puerta: siguen yendo juntos a las visitas, siguen
              decidiendo entre los tres qué hacer con cada persiana, y
              siguen sin recomendar cambiar algo que se puede arreglar.
            </p>
            <p>
              Empezamos reparando persianas de PVC y aluminio, y con los
              años sumamos instalación de mosquiteras a medida, motorización
              de persianas, instalación de aire acondicionado y pequeños
              trabajos de electricidad doméstica. Pero el núcleo del negocio
              sigue siendo el mismo: persianas y mosquiteras, hecho bien, sin
              atajos.
            </p>
            <p>
              Trabajamos en Alicante y la Costa Blanca — Playa San Juan, El
              Campello, Mutxamel, Bussot, Benidorm— y atendemos consultas en
              zonas ampliadas como Jávea, Altea y Villajoyosa. Buena parte de
              nuestros clientes son residentes británicos y nórdicos de la
              zona, así que también atendemos en inglés sin problema.
            </p>
            <p>
              Cuando nos llamás, primero escuchamos qué está pasando.
              Después vamos, miramos la persiana o la ventana en cuestión, y
              te explicamos las opciones antes de tocar nada. El presupuesto
              queda claro antes de empezar, sin sorpresas al final. Si es
              una urgencia, la priorizamos: sabemos que una persiana
              atascada un fin de semana no es solo una molestia.
            </p>
            <p>
              Con más de 200 reseñas de 5 estrellas en Google, sabemos que
              la reputación se construye visita por visita, no con
              publicidad. Preferimos decirte la verdad sobre lo que necesita
              tu persiana —aunque eso signifique un trabajo más chico y más
              barato— que venderte algo que no hace falta.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-4 text-white/70">
            <p>
              Persianas Bayres started in Mutxamel, Alicante, over 20 years
              ago, when Julián began repairing and installing blinds for
              neighbours and acquaintances. Over time, that trusted work
              grew into a family business.
            </p>
            <p>
              Today, the second generation — Juan and Valentín, Julián&apos;s
              sons — works alongside him. It&apos;s not just a name change
              on the door: they still go to visits together, still decide
              between the three of them what each blind actually needs, and
              still won&apos;t recommend replacing something that can be
              repaired.
            </p>
            <p>
              We started out repairing PVC and aluminium blinds, and over
              the years added made-to-measure fly screen installation,
              blind motorisation, air conditioning installation and small
              home electrics jobs. But the core of the business is still
              the same: blinds and fly screens, done properly, no shortcuts.
            </p>
            <p>
              We work across Alicante and the Costa Blanca — Playa San
              Juan, El Campello, Mutxamel, Bussot, Benidorm — and take
              enquiries from extended areas like Jávea, Altea and
              Villajoyosa. A good share of our customers are British and
              Nordic residents of the area, so we handle English calls and
              visits without any issue.
            </p>
            <p>
              When you call, we listen first to what&apos;s going on. Then
              we come out, look at the blind or window in question, and
              explain the options before touching anything. The quote is
              clear before we start, no surprises at the end. If it&apos;s
              urgent, we prioritise it — a jammed blind on a weekend isn&apos;t
              just an inconvenience.
            </p>
            <p>
              With over 200 five-star reviews on Google, we know reputation
              is built visit by visit, not through advertising. We&apos;d
              rather tell you the truth about what your blind actually
              needs — even if that means a smaller, cheaper job — than sell
              you something you don&apos;t.
            </p>
          </div>
        )}

        <div className="mt-10">
          <WhatsAppButton locale={locale} className="px-6 py-3 text-base" />
        </div>
      </div>
    </main>
  );
}
