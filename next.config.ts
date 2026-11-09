import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` produces a plain HTML/CSS/JS site in /out
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
