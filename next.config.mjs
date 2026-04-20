/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce a single URL shape for every page:
  //  - no trailing slash (e.g. /info, not /info/)
  //  - www canonical host (www.abhaywebstudio.in)
  // Prevents duplicate URLs in Google Search Console.
  trailingSlash: false,
  skipTrailingSlashRedirect: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect apex → www (canonical host)
      {
        source: "/:path*",
        has: [{ type: "host", value: "abhaywebstudio.in" }],
        destination: "https://www.abhaywebstudio.in/:path*",
        permanent: true,
      },
      // Strip common tracking query params so their canonical form is indexed
      {
        source: "/:path*",
        has: [{ type: "query", key: "utm_source" }],
        destination: "/:path*",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "query", key: "fbclid" }],
        destination: "/:path*",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "query", key: "gclid" }],
        destination: "/:path*",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "query", key: "ref" }],
        destination: "/:path*",
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        // Global security + SEO-friendly headers
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        // Tell Google to not index or follow the generated sitemap/robots files' META
        // (the files themselves are served as text/xml etc., this is defensive)
        source: "/sitemap.xml",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/robots.txt",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ]
  },
}

export default nextConfig
