const path = require('path');

module.exports = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@pages": path.resolve(__dirname, "src/presentation/pages"), // Alias pour pages
    };
    return config;
  },
};
