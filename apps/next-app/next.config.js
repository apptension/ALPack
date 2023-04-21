/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'fqtxlumxbzkmspqovtcw.supabase.co',

        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
