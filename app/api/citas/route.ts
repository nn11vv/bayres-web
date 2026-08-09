import { NextResponse } from "next/server";

interface CitaPayload {
  locale?: string;
  name?: string;
  phone?: string;
  service?: string;
  time?: string;
  description?: string;
}

// Resend email delivery lands with the email-integration pass — for now
// this validates the payload so the form's success/error states are real.
export async function POST(request: Request) {
  let body: CitaPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
