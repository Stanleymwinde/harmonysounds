import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react", "@chakra-ui/icons"],
  },
};

export default nextConfig;
