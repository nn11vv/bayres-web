import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_ES, WHATSAPP_EN } from "@/lib/constants";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

const WHATSAPP_URL: Record<Locale, string> = {
  es: WHATSAPP_ES,
  en: WHATSAPP_EN,
};

// Every CTA that opens a wa.me chat wears WhatsApp green, so the channel is
// recognisable at a glance. "onPrimary" is the one exception: the navbar keeps
// the brand's white-on-blue lockup.
type WhatsAppVariant = "whatsapp" | "onPrimary";

const VARIANT_STYLES: Record<WhatsAppVariant, string> = {
  whatsapp:
    "bg-whatsapp font-bold text-black shadow-lg shadow-whatsapp/20 hover:bg-whatsapp-dark hover:scale-105",
  onPrimary: "bg-white font-medium text-primary hover:bg-primary-soft hover:text-white",
};

export default function WhatsAppButton({
  locale,
  label = "WhatsApp",
  variant = "whatsapp",
  className,
}: {
  locale: Locale;
  label?: string;
  variant?: WhatsAppVariant;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL[locale]}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all",
        VARIANT_STYLES[variant],
        className,
      )}
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      {/* The navbar is tight on phones, so only that variant drops its label. */}
      <span className={cn(variant === "onPrimary" && "hidden sm:inline")}>
        {label}
      </span>
    </a>
  );
}
