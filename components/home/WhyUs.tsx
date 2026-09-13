import PillarCard from "@/components/home/PillarCard";
import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale } from "@/lib/types";

export default async function WhyUs({ locale }: { locale: Locale }) {
  const home = await getContent<HomeContent>(locale, "home");
  const { whyUs } = home;

  return (
    <section className="px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-primary-bright">
            {whyUs.label}
          </span>
          <h2 className="mt-2 font-heading text-3xl text-white sm:text-4xl">
            {whyUs.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">{whyUs.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
