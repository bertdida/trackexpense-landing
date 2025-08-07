/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Enable standalone output for Docker optimization
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
};

export default nextConfig;
