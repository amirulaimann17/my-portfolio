import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Ensures paths end with "/"
  images: {
    unoptimized: true, // Required if using Next.js Image component
  },
};

export default nextConfig;
