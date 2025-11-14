import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    rules: {
      "react/jsx-key": "error"
    }
  }
];

export default config;
