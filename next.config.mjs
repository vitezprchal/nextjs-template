/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure that the /api/trpc route is handled by Next.js API routes
  async rewrites() {
    return [
      {
        source: '/api/trpc/:path*',
        destination: '/api/trpc/:path*',
      },
    ];
  },
};

export default nextConfig;
