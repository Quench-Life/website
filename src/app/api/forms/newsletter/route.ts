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
  const email = cleanInput(payload.email, 120);

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  return NextResponse.json({
    message: "You’re in. We’ll keep you updated on upcoming messages and events.",
  });
}
