/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: typeof process !== 'undefined' && process.env.NODE_ENV === 'production' ? '/Nexus-Cloud' : '',
  assetPrefix: typeof process !== 'undefined' && process.env.NODE_ENV === 'production' ? '/Nexus-Cloud/' : '',
  distDir: 'out',
  skipTrailingSlashRedirect: true
};

export default nextConfig;
