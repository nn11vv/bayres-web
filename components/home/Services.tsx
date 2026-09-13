import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcons";
import { getContent } from "@/lib/i18n";
import { serviceSlugFor } from "@/lib/constants";
import type { HomeContent, Locale, ServiceContent } from "@/lib/types";

const EXPLORE_LABEL: Record<Locale, string> = {
  es: "Explorar servicio",
  en: "Explore service",
};

function ServiceCard({
  service,
  locale,
}: {
  service: ServiceContent;
  locale: Locale;
}) {
  return (
    <Link
      href={`/${locale}/servicios/${serviceSlugFor(service.slug, locale)}`}
      className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30"
    >
      <ServiceIcon slug={service.slug} className="h-14 w-14" />
      <h3 className="mt-4 font-heading text-xl text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-white/70">{service.shortDescription}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-soft/60 transition-colors duration-200 group-hover:text-primary-soft">
        {EXPLORE_LABEL[locale]} →
      </span>
    </Link>
  );
}

export default async function Services({ locale }: { locale: Locale }) {
  const [home, services] = await Promise.all([
    getContent<HomeContent>(locale, "home"),
    getContent<ServiceContent[]>(locale, "services"),
  ]);

  return (
    <section className="px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-primary-bright">
            {home.services.label}
          </span>
          <h2 className="mt-2 font-heading text-3xl text-white sm:text-4xl">
            {home.services.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            {home.services.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
