/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Export estático: genera `out/` y se sirve desde cualquier hosting de ficheros.
  // Los redirects de next.config no existen con export; viven en public/_redirects.
  output: "export",
  images: { unoptimized: true },
}

export default nextConfig
