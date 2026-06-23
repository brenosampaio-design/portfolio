// Sitemap — the four real, indexable routes. Cases change rarely; the landing
// and about a little more often. Domain mirrors metadataBase in layout.jsx.
export default function sitemap() {
  const base = "https://brenosampaio.com";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/service-operations`, lastModified, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/work/triageai`, lastModified, changeFrequency: "yearly", priority: 0.9 },
  ];
}
