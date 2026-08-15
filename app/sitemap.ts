import type { MetadataRoute } from "next";
import { SITE_URL, VERIFIED_DATE_ISO } from "./content";

const routes = [
  "",
  "/beginner-guide",
  "/gameplay",
  "/progression",
  "/mistakes",
  "/faq",
  "/sources",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(VERIFIED_DATE_ISO),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/beginner-guide" ? 0.9 : 0.8,
  }));
}
