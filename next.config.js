/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['oihiwvcevdrmejwqviwd.supabase.co'],
  },
};

module.exports = nextConfig;
