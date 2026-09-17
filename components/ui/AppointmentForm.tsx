"use client";

import { useState, type FormEvent } from "react";
import type { Locale, ServiceContent } from "@/lib/types";
import { isServiceAvailable } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

const LABELS: Record<Locale, Record<string, string>> = {
  es: {
    name: "Nombre",
    phone: "Teléfono",
    service: "Servicio",
    servicePlaceholder: "Elige un servicio",
    time: "Hora preferida",
    timePlaceholder: "Elige una franja",
    description: "Cuéntanos más (opcional)",
    submit: "Enviar solicitud",
    submitting: "Enviando…",
    success: "Recibido. Te contactamos por WhatsApp para confirmar la visita.",
    error: "No se pudo enviar. Probá de nuevo o escribinos por WhatsApp.",
  },
  en: {
    name: "Name",
    phone: "Phone",
    service: "Service",
    servicePlaceholder: "Choose a service",
    time: "Preferred time",
    timePlaceholder: "Choose a time slot",
    description: "Tell us more (optional)",
    submit: "Send request",
    submitting: "Sending…",
    success: "Got it. We'll contact you on WhatsApp to confirm the visit.",
    error: "Couldn't send it. Try again or message us on WhatsApp.",
  },
};

const TIME_SLOTS: Record<Locale, { value: string; label: string }[]> = {
  es: [
    { value: "manana", label: "Mañana (9 a 13h)" },
    { value: "tarde", label: "Tarde (15 a 18h)" },
    { value: "cualquiera", label: "Me van bien ambas" },
  ],
  en: [
    { value: "manana", label: "Morning (9am–1pm)" },
    { value: "tarde", label: "Afternoon (3–6pm)" },
    { value: "cualquiera", label: "Either works for me" },
  ],
};

const fieldClass =
  "w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-primary-bright focus:outline-none";

const labelClass = "mb-1.5 block text-[11px] uppercase tracking-wide text-white/50";

export default function AppointmentForm({
  locale,
  services,
}: {
  locale: Locale;
  services: ServiceContent[];
}) {
  const labels = LABELS[locale];
  const [status, setStatus] = useState<FormStatus>("idle");
  const bookableServices = services.filter((service) => isServiceAvailable(service.slug));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    setStatus("loading");

    const form = new FormData(formEl);
    const payload = {
      locale,
      name: form.get("name"),
      phone: form.get("phone"),
      service: form.get("service"),
      time: form.get("time"),
      description: form.get("description"),
    };

    try {
      const response = await fetch("/api/citas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("request_failed");
      }

      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-primary-bright">{labels.success}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className={labelClass}>
          {labels.name}
        </label>
        <input id="name" name="name" type="text" required className={fieldClass} />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className={labelClass}>
          {labels.phone}
        </label>
        <input id="phone" name="phone" type="tel" required className={fieldClass} />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="service" className={labelClass}>
          {labels.service}
        </label>
        <select id="service" name="service" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            {labels.servicePlaceholder}
          </option>
          {bookableServices.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="time" className={labelClass}>
          {labels.time}
        </label>
        <select id="time" name="time" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            {labels.timePlaceholder}
          </option>
          {TIME_SLOTS[locale].map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.label}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="description" className={labelClass}>
          {labels.description}
        </label>
        <textarea id="description" name="description" rows={3} className={fieldClass} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-primary-bright hover:brightness-110 disabled:opacity-60 disabled:hover:scale-100",
          )}
        >
          {status === "loading" ? labels.submitting : labels.submit}
        </button>
        {status === "error" && (
          <p className="mt-2 text-sm text-red-400">{labels.error}</p>
        )}
      </div>
    </form>
  );
}
