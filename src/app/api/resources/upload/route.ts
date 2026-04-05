import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function sanitizeFilename(input: string): string {
  return input.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
}

export async function POST(request: NextRequest) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ message: "BLOB_READ_WRITE_TOKEN is not configured." }, { status: 500 });
  }

  const incomingKey = request.headers.get("x-admin-key");
  const expectedKey = process.env.CHURCH_ADMIN_UPLOAD_KEY;
  if (!expectedKey || incomingKey !== expectedKey) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ message: "File is required." }, { status: 400 });
  }

  if (!file.name.toLowerCase().endsWith(".pdf") || file.type !== "application/pdf") {
    return NextResponse.json({ message: "Only PDF uploads are allowed." }, { status: 400 });
  }

  const filename = `${Date.now()}-${sanitizeFilename(file.name)}`;
  const blob = await put(`resources/${filename}`, file, { access: "public" });

  return NextResponse.json({ url: blob.url, message: "Upload successful." }, { status: 201 });
}
