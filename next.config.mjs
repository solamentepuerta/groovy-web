/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [{ source: "/groovy", destination: "/", permanent: true }]
  },
}

export default nextConfig
