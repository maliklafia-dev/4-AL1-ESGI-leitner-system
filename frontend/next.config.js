import path from "path";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@pages": path.resolve(process.cwd(), "src/presentation/pages"), 
    };
    return config;
  },
};

export default nextConfig;
