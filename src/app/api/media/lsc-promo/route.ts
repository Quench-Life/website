import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const filePath = path.join(process.cwd(), "media", "lsc", "2026_LSC Promo.mp4");

  try {
    const file = await fs.readFile(filePath);
    return new Response(file, {
      headers: {
        "Content-Type": "video/mp4",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json({ message: "Promo video not found." }, { status: 404 });
  }
}
