/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: "incremental",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e1.pxfuel.com",
      },
      {
        protocol: "https",
        hostname: "e0.pxfuel.com",
      },
    ],
  },
};

export default nextConfig;
