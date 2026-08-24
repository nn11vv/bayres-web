import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/lib/types";

const LABEL: Record<Locale, string> = {
  es: "Chatear por WhatsApp",
  en: "Chat on WhatsApp",
};

// Sits tighter into the corner on short phones, where a 56px bubble at
// bottom-6 lands on top of the hero CTAs.
export default function FloatingWhatsApp({ locale }: { locale: Locale }) {
  return (
    <a
      href={SITE.whatsapp[locale]}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={LABEL[locale]}
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-2xl shadow-whatsapp/30 transition-transform hover:scale-110 hover:bg-whatsapp-dark sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
