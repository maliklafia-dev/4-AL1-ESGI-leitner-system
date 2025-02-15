import path from "path";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts"],
  experimental: {
    appDir: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@pages": path.resolve(process.cwd(), "src/pages"), 
    };
    return config;
  },
};

export default nextConfig;
