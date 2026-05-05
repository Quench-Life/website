import { NextResponse } from "next/server";
import { cleanInput, isValidEmail } from "@/lib/form-validation";

const allowedInterests = new Set([
  "I'm new here and would like more information about Quench.",
  "I made the decision to follow Jesus today.",
  "I'm considering opening my life to Jesus.",
  "I want to know how I can become a member of Quench Life (Class 101).",
  "I'd like to learn more about growing spiritually (Class 201).",
  "I want to serve others in the body of Christ by volunteering with Quench Life.",
]);

function parseInterests(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => cleanInput(item, 160))
    .filter((item) => item && allowedInterests.has(item))
    .slice(0, allowedInterests.size);
}

function isLikelyPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
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
  const firstName = cleanInput(payload.firstName, 80);
  const lastName = cleanInput(payload.lastName, 80);
  const email = cleanInput(payload.email, 120);
  const phone = cleanInput(payload.phone, 40);
  const details = cleanInput(payload.details, 1200);
  const interests = parseInterests(payload.interests);

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json({ message: "Please fill in all required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (!isLikelyPhone(phone)) {
    return NextResponse.json({ message: "Please enter a valid phone number." }, { status: 400 });
  }

  return NextResponse.json({
    message:
      interests.length > 0 || details
        ? "Thank you for completing the connection card. A member of our team will follow up soon."
        : "Thank you for connecting with us. A member of our team will follow up soon.",
  });
}
