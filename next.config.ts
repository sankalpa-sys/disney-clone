import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "links.papareact.com",
                protocol: "https",
            },
            {
                hostname: "image.tmdb.org",
                protocol: "http",
            }
        ]
    }
};

export default nextConfig;
