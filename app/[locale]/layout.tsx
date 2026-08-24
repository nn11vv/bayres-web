import { LOCALES, isLocale, DEFAULT_LOCALE } from "@/lib/i18n";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import HtmlLangSync from "@/components/seo/HtmlLangSync";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  return (
    <>
      <HtmlLangSync locale={locale} />
      <Navbar locale={locale} />
      {children}
      <FloatingWhatsApp locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
