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
      
      {
        protocol: "http",
        hostname: "greendreamearth.org/**",
        port: "",
      },

      {
        protocol: "https",
        hostname: "images.pexels.com/**",
        port: "",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.m?js$/,
        include: /node_modules\/rc-util/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-transform-modules-commonjs"]],
          },
        },
      });
    }
    return config;
  },
};

export default nextConfig;
