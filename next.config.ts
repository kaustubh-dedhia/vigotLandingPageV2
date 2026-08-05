import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['13.204.45.153'],
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
