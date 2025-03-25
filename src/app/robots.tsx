import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all crawlers
        allow: "/", // Allow indexing of all pages
      },
    ],
    sitemap: "https://onedesignersdesign.com/sitemap.xml", // Your sitemap URL
  };
}
