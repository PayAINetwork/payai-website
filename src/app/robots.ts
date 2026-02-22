import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/metrics/",
    },
    sitemap: "https://payai.network/sitemap_index.xml",
  };
}
