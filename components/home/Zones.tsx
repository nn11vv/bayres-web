import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale, ZoneContent } from "@/lib/types";

export default async function Zones({ locale }: { locale: Locale }) {
  const [home, zones] = await Promise.all([
    getContent<HomeContent>(locale, "home"),
    getContent<ZoneContent[]>(locale, "zones"),
  ]);

  const CORE_ORDER = [
    "alicante",
    "san-vicente-del-raspeig",
    "san-juan-de-alicante",
    "playa-san-juan",
    "el-campello",
    "mutxamel",
    "bussot",
    "villajoyosa",
    "benidorm",
    "coveta-fuma",
  ];
  const core = CORE_ORDER.map((slug) => zones.find((zone) => zone.slug === slug)).filter(
    (zone): zone is (typeof zones)[number] => zone !== undefined,
  );

  return (
    <section className="px-4 py-24 sm:px-6 sm:py-28">
      <RevealSection className="mx-auto max-w-4xl text-center">
        <span className="text-sm font-medium uppercase tracking-wide text-primary-bright">
          {home.zones.label}
        </span>
        <h2 className="mt-2 font-heading text-3xl text-white sm:text-4xl">
          {home.zones.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">{home.zones.subtitle}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {core.map((zone) => (
            <Link
              key={zone.slug}
              href={`/${locale}/zonas/${zone.slug}`}
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/80 transition-colors duration-200 hover:border-primary/30 hover:bg-white/5"
            >
              {zone.name}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/50">{home.zones.extendedNote}</p>
      </RevealSection>
    </section>
  );
}
