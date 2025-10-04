/** @type {import('next').NextConfig} */
const nextConfig = {
  // Commented out export mode for development
  // output: "export",
  images: {
    domains: ["avatars.githubusercontent.com", "i.postimg.cc"],
    unoptimized: true,
  },
  // Custom port for development
  async rewrites() {
    return [];
  },
};

export default nextConfig;
