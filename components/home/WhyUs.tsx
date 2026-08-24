import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale } from "@/lib/types";

export default async function WhyUs({ locale }: { locale: Locale }) {
  const home = await getContent<HomeContent>(locale, "home");
  const { whyUs } = home;

  return (
    <section className="px-4 py-16 sm:px-6">
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

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="text-3xl">{pillar.icon}</span>
              <h3 className="mt-4 font-heading text-lg text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
