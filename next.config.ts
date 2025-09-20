import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.hotelbeds.com",
        pathname: "/**", // all paths
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**", // Wikimedia images
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**", // Freepik images
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**", // placeholder images
      },
    ],
  },
};

export default nextConfig;
