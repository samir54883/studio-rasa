/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  trailingSlash: true,

  basePath: "/studio-rasa",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;