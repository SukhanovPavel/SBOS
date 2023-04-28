/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '4.downloader.disk.yandex.ru',
        port: '',
        pathname: '',
      },
    ],
  },
}

module.exports = nextConfig
