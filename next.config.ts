// next.config.js or next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
