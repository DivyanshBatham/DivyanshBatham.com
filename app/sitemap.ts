import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://divyanshbatham.com";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
  ];
}

