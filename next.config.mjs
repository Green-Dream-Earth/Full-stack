/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "**.images.shiksha.com/**",
        port: "",
      },

      {
        protocol: "https",
        hostname: "img.clerk.com/**",
        port: "",
      },

      {
        protocol: "https",
        hostname: "greendreamearth.org/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
