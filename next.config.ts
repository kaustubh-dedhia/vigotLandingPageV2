import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['13.204.45.153'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
