import type { MetadataRoute } from "next"
import { galleryPhotos, largestSize } from "@/lib/groovy-gallery"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kiosko2001.demo"

  // Las 44 fotos reales del archivo, en su resolución mayor.
  const images = galleryPhotos.map((photo) => `${base}${largestSize(photo).file}`)

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/groovy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images,
    },
  ]
}
