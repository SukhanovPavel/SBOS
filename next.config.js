/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '4.downloader.disk.yandex.ru',
        port: '',
        pathname: '/preview/a0b5ffbe0815546194bd2a2f88408295c63c379906989bf89d0c424f535801ba/inf/kOVs6doKgYaeVc9m4Z1kOG3M5co5H_W_J5pjZyLn6s2IfI2dcJysiD6j6_pvTIZwDs5dkjSQaFWGrcdL4UVDxg%3D%3D?uid=336597251&filename=calc3-min.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=336597251&tknv=v2&size=2880x1244',
      },
      {
        protocol: 'https',
        hostname: 'mfs.ezvizlife.com',
        port: '',
        pathname: '/2e0cd0600028f1ca9a95880a892fd6eb_middle.png?ver=1787052924',
      },
    ],
  },
}

module.exports = nextConfig
