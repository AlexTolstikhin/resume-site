import type { NextConfig } from "next";

// GitHub Pages serves this project at /resume-site/, but local dev
// and builds outside CI should stay at the root.
const basePath = process.env.GITHUB_ACTIONS ? "/resume-site" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Static export has no server to run the Image Optimization API. Note that
  // with the loader disabled a string `src` is emitted verbatim, without
  // basePath — so images are imported statically instead, which picks up the
  // prefix from assetPrefix.
  images: { unoptimized: true },
};

export default nextConfig;
