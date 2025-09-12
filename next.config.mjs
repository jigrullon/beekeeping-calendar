/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/beek',
  assetPrefix: '/beek',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig