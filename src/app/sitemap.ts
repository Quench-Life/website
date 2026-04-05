import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/connect",
    "/events",
    "/watch",
    "/listen",
    "/giving",
    "/prayer",
    "/who-we-are",
    "/our-beliefs",
    "/our-values",
    "/men",
    "/women",
    "/visit",
    "/resources",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
