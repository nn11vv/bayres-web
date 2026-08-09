"use client";

import { useState, type FormEvent } from "react";
import type { Locale, ServiceContent } from "@/lib/types";
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

function buildTimeSlots(): string[] {
  const slots: string[] = [];
  for (let hour = 9; hour <= 18; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    if (hour !== 18) {
      slots.push(`${String(hour).padStart(2, "0")}:30`);
    }
  }
  return slots;
}

const TIME_SLOTS = buildTimeSlots();

const fieldClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-primary-light focus:outline-none";

export default function AppointmentForm({
  locale,
  services,
}: {
  locale: Locale;
  services: ServiceContent[];
}) {
  const labels = LABELS[locale];
  const [status, setStatus] = useState<FormStatus>("idle");

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
    return <p className="text-sm text-primary-light">{labels.success}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-1.5 block text-sm text-white/70">
          {labels.name}
        </label>
        <input id="name" name="name" type="text" required className={fieldClass} />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-1.5 block text-sm text-white/70">
          {labels.phone}
        </label>
        <input id="phone" name="phone" type="tel" required className={fieldClass} />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="service" className="mb-1.5 block text-sm text-white/70">
          {labels.service}
        </label>
        <select id="service" name="service" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            {labels.servicePlaceholder}
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="time" className="mb-1.5 block text-sm text-white/70">
          {labels.time}
        </label>
        <select id="time" name="time" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            {labels.timePlaceholder}
          </option>
          {TIME_SLOTS.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="description" className="mb-1.5 block text-sm text-white/70">
          {labels.description}
        </label>
        <textarea id="description" name="description" rows={3} className={fieldClass} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light disabled:opacity-60",
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
