import ServiceCard from "@/components/home/ServiceCard";
import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale, ServiceContent } from "@/lib/types";

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
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
