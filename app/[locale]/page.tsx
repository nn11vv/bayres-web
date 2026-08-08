import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Reviews from "@/components/home/Reviews";
import Zones from "@/components/home/Zones";
import Contact from "@/components/home/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  return (
    <main>
      <Hero locale={locale} />
      <Services locale={locale} />
      <WhyUs locale={locale} />
      <Reviews locale={locale} />
      <Zones locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
