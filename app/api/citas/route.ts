import { NextResponse } from "next/server";

// Placeholder — wired to Resend in the appointment-form prompt.
export async function POST() {
  return NextResponse.json({ ok: false, error: "not_implemented" }, { status: 501 });
}
