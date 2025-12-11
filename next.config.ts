import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react", "@chakra-ui/icons"],
  },
};

export default nextConfig;
