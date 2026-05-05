import { NextResponse } from "next/server";
import { cleanInput, isValidEmail } from "@/lib/form-validation";

const MIN_GUESTS = 1;
const MAX_GUESTS = 25;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendVisitNotification(payload: { name: string; email: string; guests: number }) {
  const webhookUrl = process.env.VISIT_NOTIFICATION_WEBHOOK_URL ?? process.env.STAFF_NOTIFICATION_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "plan_visit",
        submittedAt: new Date().toISOString(),
        ...payload,
      }),
    });

    if (!response.ok) {
      throw new Error("Unable to notify staff right now.");
    }

    return;
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM_EMAIL;
  const staffEmail = process.env.VISIT_NOTIFICATION_EMAIL ?? process.env.STAFF_NOTIFICATION_EMAIL;

  if (!resendApiKey || !resendFrom || !staffEmail) {
    throw new Error("Notification channel is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: resendFrom,
      to: [staffEmail],
      subject: `New Plan Your Visit submission from ${escapeHtml(payload.name)}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p><p><strong>Email:</strong> ${escapeHtml(payload.email)}</p><p><strong>Number of Guests:</strong> ${payload.guests}</p><p><strong>Submitted At:</strong> ${new Date().toISOString()}</p>`,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to notify staff right now.");
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const name = cleanInput(payload.name, 80);
  const email = cleanInput(payload.email, 120);
  const guestsRaw = cleanInput(payload.guests, 2);
  const guests = Number.parseInt(guestsRaw, 10);

  if (!name || !email || !guestsRaw) {
    return NextResponse.json({ message: "Please fill in all required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (!Number.isFinite(guests) || guests < MIN_GUESTS || guests > MAX_GUESTS) {
    return NextResponse.json({ message: "Please enter a valid number of guests (1-25)." }, { status: 400 });
  }

  try {
    await sendVisitNotification({ name, email, guests });
  } catch {
    return NextResponse.json(
      { message: "Thanks for reaching out. Please call us directly while we resolve notifications." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: `Thanks, ${name}. We’re excited to welcome you this Sunday at 11:00 AM.`,
  });
}
