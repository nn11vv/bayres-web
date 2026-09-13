import { Languages, MapPin, Users, Wallet, Wrench, Zap } from "lucide-react";
import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale } from "@/lib/types";

const ICONS: Record<string, typeof Zap> = {
  zap: Zap,
  users: Users,
  wallet: Wallet,
  languages: Languages,
  wrench: Wrench,
  pin: MapPin,
};

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
          {whyUs.pillars.map((pillar) => {
            const Icon = ICONS[pillar.icon];
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                  {Icon && <Icon className="h-5 w-5 text-primary-soft" aria-hidden />}
                </span>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
