// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // add any other remote hosts you use
    ],
  },

  // ✅ Skip ESLint during Vercel builds (warnings/errors won't fail the build)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
