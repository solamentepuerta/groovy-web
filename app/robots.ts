import type { MetadataRoute } from "next"

export const dynamic = "force-static"
import { siteUrl } from "./layout"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
