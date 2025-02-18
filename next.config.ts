import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personal-page' : '', // GitHub repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-page' : '',
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
