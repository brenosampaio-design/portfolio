// Robots policy — allow everything, point crawlers at the sitemap.
// Domain mirrors metadataBase in layout.jsx.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://brenosampaio.com/sitemap.xml",
    host: "https://brenosampaio.com",
  };
}
