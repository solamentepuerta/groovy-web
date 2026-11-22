import type { MetadataRoute } from "next"
import { galleryPhotos, largestSize } from "@/lib/groovy-gallery"

export const dynamic = "force-static"
import { siteUrl } from "./layout"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl

  // Las 44 fotos reales del archivo, en su resolución mayor.
  const images = galleryPhotos.map((photo) => `${base}${largestSize(photo).file}`)

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1, images },
    {
      url: `${base}/enlaces`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
