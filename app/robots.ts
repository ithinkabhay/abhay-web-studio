import type { MetadataRoute } from "next"

const SITE_URL = "https://www.abhaywebstudio.in"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          // Block common tracking-parameter URLs from being indexed as
          // separate URLs. Canonical tags still handle this, this is belt-and-braces.
          "/*?*utm_*",
          "/*?*fbclid=*",
          "/*?*gclid=*",
          "/*?*ref=*",
          "/*?*source=*",
        ],
      },
      {
        // Be explicit with Googlebot
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
