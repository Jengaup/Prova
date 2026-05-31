import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Prova",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
