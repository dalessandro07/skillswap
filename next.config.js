/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/*',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        pathname: '/*',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/*',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
