import type { MetadataRoute } from "next";

/**
 * Oletus: ei indeksointia (turvallinen demo / preview).
 * Julkinen esittelysivu: .env.local → NEXT_PUBLIC_ALLOW_INDEXING=true
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const allowIndex =
    process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

  if (allowIndex) {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${siteUrl}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
