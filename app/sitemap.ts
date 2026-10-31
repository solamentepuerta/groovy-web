import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kiosko2001.demo"
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/groovy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ]
}
