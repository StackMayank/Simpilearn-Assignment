import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow optional quality={95} for hero / large photos; default stays 75.
    qualities: [75, 95],
  },
};

export default nextConfig;
