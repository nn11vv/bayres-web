import Link from "next/link";
import { CheckCircle, Languages, MapPin, Zap } from "lucide-react";
import AppointmentForm from "@/components/ui/AppointmentForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale, ServiceContent } from "@/lib/types";

// Fixed order, matches hero.trustPills in content/{locale}/home.ts.
const TRUST_ICONS = [Zap, CheckCircle, Languages, MapPin];

export default async function Hero({ locale }: { locale: Locale }) {
  const [home, services] = await Promise.all([
    getContent<HomeContent>(locale, "home"),
    getContent<ServiceContent[]>(locale, "services"),
  ]);
  const { hero } = home;

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(15,18,210,0.15), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(95,136,231,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/80">
            {hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
            {hero.headline}{" "}
            <span className="font-accent bg-gradient-to-r from-soft to-bright bg-clip-text italic text-transparent">
              {hero.headlineAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg font-normal text-white/70">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              locale={locale}
              label={hero.ctaWhatsApp}
              className="justify-center px-6 py-3 text-base"
            />
            <Link
              href={`/${locale}/contacto`}
              className="inline-flex items-center justify-center rounded-full border border-bright/30 bg-bright/10 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-bright/20"
            >
              {hero.ctaForm}
            </Link>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {hero.trustPills.map((label, index) => {
              const Icon = TRUST_ICONS[index];
              return (
                <li key={label} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    {Icon && <Icon className="h-4 w-4 text-primary-soft" aria-hidden />}
                  </span>
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <AppointmentForm locale={locale} services={services} />
        </div>
      </div>
    </section>
  );
}
