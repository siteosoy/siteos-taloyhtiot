import type { MetadataRoute } from "next";

const paths = [
  "/",
  "/control",
  "/dashboard",
  "/talous",
  "/historia",
  "/asukas",
  "/huolto",
  "/hallitus",
  "/toiveet",
  "/hata",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
