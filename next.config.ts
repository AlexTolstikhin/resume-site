import type { NextConfig } from "next";

// GitHub Pages serves this project at /resume-site/, but local dev
// and builds outside CI should stay at the root.
const basePath = process.env.GITHUB_ACTIONS ? "/resume-site" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Static export has no server to run the Image Optimization API.
  images: { unoptimized: true },
};

export default nextConfig;
