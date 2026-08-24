import Link from "next/link";
import ServiceIcon from "@/components/ui/ServiceIcons";
import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale, ServiceContent } from "@/lib/types";

function ServiceCard({
  service,
  locale,
}: {
  service: ServiceContent;
  locale: Locale;
}) {
  return (
    <Link
      href={`/${locale}/servicios/${service.slug}`}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary-bright/40 hover:bg-white/10"
    >
      <ServiceIcon slug={service.slug} className="h-14 w-14" />
      <h3 className="mt-4 font-heading text-xl text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-white/70">{service.shortDescription}</p>
    </Link>
  );
}

export default async function Services({ locale }: { locale: Locale }) {
  const [home, services] = await Promise.all([
    getContent<HomeContent>(locale, "home"),
    getContent<ServiceContent[]>(locale, "services"),
  ]);

  const core = services.filter((service) => service.category === "core");
  const secondary = services.filter((service) => service.category === "secondary");

  return (
    <section className="px-4 py-16 sm:px-6">
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

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {core.map((service) => (
            <ServiceCard key={service.slug} service={service} locale={locale} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm font-medium uppercase tracking-wide text-white/50">
          {home.services.secondaryLabel}
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {secondary.map((service) => (
            <ServiceCard key={service.slug} service={service} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
