import StatsBandClient from "@/components/home/StatsBandClient";
import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale } from "@/lib/types";

export default async function StatsBand({ locale }: { locale: Locale }) {
  const home = await getContent<HomeContent>(locale, "home");

  return (
    <section className="border-y border-white/[0.06] px-4 py-12 sm:px-6">
      <StatsBandClient stats={home.stats} />
    </section>
  );
}
