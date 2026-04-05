import { list } from "@vercel/blob";
import { readdir } from "node:fs/promises";
import path from "node:path";

export type ResourceItem = {
  name: string;
  url: string;
  source: "blob" | "local";
  uploadedAt?: string;
};

async function getBlobResources(): Promise<ResourceItem[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];

  try {
    const { blobs } = await list({ prefix: "resources/" });
    return blobs
      .filter((item) => item.pathname.toLowerCase().endsWith(".pdf"))
      .map((item) => ({
        name: item.pathname.split("/").pop() ?? item.pathname,
        url: item.url,
        source: "blob",
        uploadedAt: item.uploadedAt?.toISOString(),
      }));
  } catch {
    return [];
  }
}

async function getLocalResources(): Promise<ResourceItem[]> {
  try {
    const dir = path.join(process.cwd(), "public", "resources");
    const files = await readdir(dir);
    return files
      .filter((file) => file.toLowerCase().endsWith(".pdf"))
      .map((file) => ({
        name: file,
        url: `/resources/${file}`,
        source: "local",
      }));
  } catch {
    return [];
  }
}

export async function getResources(): Promise<ResourceItem[]> {
  const [blobResources, localResources] = await Promise.all([getBlobResources(), getLocalResources()]);
  const merged = [...blobResources, ...localResources];
  const unique = new Map(merged.map((item) => [item.url, item]));
  return Array.from(unique.values()).sort((a, b) => a.name.localeCompare(b.name));
}
