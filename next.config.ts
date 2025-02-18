import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/personal-page', // GitHub repo name
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
