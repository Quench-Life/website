import { NextResponse } from "next/server";
import { cleanInput, isValidEmail } from "@/lib/form-validation";

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
  const message = cleanInput(payload.message, 1200);

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Please fill in all required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  return NextResponse.json({
    message: "Thank you for reaching out. A member of our team will follow up soon.",
  });
}
