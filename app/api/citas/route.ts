import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseServer } from "@/lib/supabase-server";
import { SERVICES } from "@/lib/constants";

interface CitaPayload {
  locale?: string;
  name?: string;
  phone?: string;
  service?: string;
  time?: string;
  description?: string;
}

const TIME_EMAIL_LABEL: Record<string, string> = {
  manana: "Mañana (9 a 13h)",
  tarde: "Tarde (15 a 18h)",
  cualquiera: "Cualquiera",
};

const VALID_SERVICE_IDS = SERVICES.filter((service) => service.available).map(
  (service) => service.id,
);

// AppointmentForm's "Hora preferida" now sends the bucket directly
// ("manana" | "tarde" | "cualquiera") instead of an exact clock time —
// "cualquiera" (no preference) stores as null, same as no selection.
const FRANJA_LABEL: Record<string, "manana" | "tarde"> = {
  manana: "manana",
  tarde: "tarde",
};

function franjaFromTime(time: string): "manana" | "tarde" | null {
  return FRANJA_LABEL[time] ?? null;
}

export async function POST(request: Request) {
  let body: CitaPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const time = typeof body.time === "string" ? body.time.trim() : "";
  const description = typeof body.description === "string" ? body.description.trim() : "";
  const locale = body.locale === "en" ? "en" : "es";

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 400 },
    );
  }

  if (!VALID_SERVICE_IDS.includes(service as (typeof VALID_SERVICE_IDS)[number])) {
    return NextResponse.json(
      { ok: false, error: "invalid_service" },
      { status: 400 },
    );
  }

  const franja = time ? franjaFromTime(time) : null;

  const supabase = getSupabaseServer();
  const { data: cita, error: insertError } = await supabase
    .from("citas")
    .insert({
      nombre: name,
      telefono: phone,
      idioma: locale,
      servicio: service,
      descripcion: description || null,
      franja,
      // The form no longer collects an exact hour (just manana/tarde/no
      // preference) — hora_pref stays in the schema but new inserts leave
      // it null instead of a granular value.
      hora_pref: null,
      // `notas` is reserved for Julián/Juan's own notes from the
      // management panel — the form never writes to it.
      notas: null,
      origen: locale === "en" ? "web-en" : "web-es",
    })
    .select("id")
    .single();

  if (insertError || !cita) {
    // Real Supabase error stays server-side only — the client gets a
    // generic message so we don't leak schema/infra details.
    console.error("[api/citas] Supabase insert failed:", insertError);
    return NextResponse.json(
      { ok: false, error: "internal_error" },
      { status: 500 },
    );
  }

  // Best-effort notification — Julián's email is a courtesy, not the
  // record of truth (that's the `citas` row, already saved above). A
  // Resend failure (e.g. RESEND_API_KEY not set yet) is logged but does
  // not fail the request.
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (resendApiKey && notificationEmail) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        // resend.dev works without a verified domain for testing; swap
        // for a persianasbayres.com address once that domain is
        // verified in Resend.
        from: "Persianas Bayres <onboarding@resend.dev>",
        to: notificationEmail,
        subject: `Nueva cita (${locale}) — ${name}`,
        text: [
          `Nombre: ${name}`,
          `Teléfono: ${phone}`,
          `Servicio: ${service}`,
          time ? `Hora preferida: ${TIME_EMAIL_LABEL[time] ?? time}` : null,
          description ? `Descripción: ${description}` : null,
          `Idioma: ${locale}`,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch (emailError) {
      console.error("[api/citas] Resend notification failed:", emailError);
    }
  } else {
    console.warn(
      "[api/citas] Skipping notification email — RESEND_API_KEY or NOTIFICATION_EMAIL not set.",
    );
  }

  return NextResponse.json({ ok: true });
}
