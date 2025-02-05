/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: typeof process !== 'undefined' && process.env.NODE_ENV === 'production' ? '/Nexus-Cloud' : '',
  assetPrefix: typeof process !== 'undefined' && process.env.NODE_ENV === 'production' ? '/Nexus-Cloud/' : '',
};

export default nextConfig;
