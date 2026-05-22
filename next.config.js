/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "agileageing.org" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

module.exports = nextConfig;
