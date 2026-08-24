import AppointmentForm from "@/components/ui/AppointmentForm";
import {
  TELEFONO_ES,
  TELEFONO_EN,
  WHATSAPP_ES,
  WHATSAPP_EN,
} from "@/lib/constants";
import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale, ServiceContent } from "@/lib/types";

const CONTACT_OPTIONS = (locale: Locale) => [
  {
    label: locale === "es" ? "WhatsApp (español)" : "WhatsApp (Spanish)",
    value: "+34 695 266 981",
    href: WHATSAPP_ES,
  },
  {
    label: locale === "es" ? "WhatsApp (inglés)" : "WhatsApp (English)",
    value: "+34 663 208 814",
    href: WHATSAPP_EN,
  },
  {
    label: locale === "es" ? "Teléfono (español)" : "Phone (Spanish)",
    value: TELEFONO_ES,
    href: `tel:${TELEFONO_ES.replace(/\s/g, "")}`,
  },
  {
    label: locale === "es" ? "Teléfono (inglés)" : "Phone (English)",
    value: TELEFONO_EN,
    href: `tel:${TELEFONO_EN.replace(/\s/g, "")}`,
  },
];

export default async function Contact({ locale }: { locale: Locale }) {
  const [home, services] = await Promise.all([
    getContent<HomeContent>(locale, "home"),
    getContent<ServiceContent[]>(locale, "services"),
  ]);
  const { contact } = home;

  return (
    <section id="contacto" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-primary-bright">
            {contact.label}
          </span>
          <h2 className="mt-2 font-heading text-3xl text-white sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">{contact.subtitle}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CONTACT_OPTIONS(locale).map((option) => (
            <a
              key={option.label}
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-primary-bright/40 hover:bg-white/10"
            >
              <p className="text-sm text-white/50">{option.label}</p>
              <p className="mt-1 font-medium text-white">{option.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h3 className="font-heading text-xl text-white">{contact.formTitle}</h3>
          <p className="mt-1 text-sm text-white/70">{contact.formSubtitle}</p>
          <div className="mt-6">
            <AppointmentForm locale={locale} services={services} />
          </div>
        </div>
      </div>
    </section>
  );
}
