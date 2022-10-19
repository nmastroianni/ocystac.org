/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.prismic.io', 'images.unsplash.com'],
  },
  i18n: {
    locales: ['en-us'],
    defaultLocale: 'en-us',
  },
}

module.exports = nextConfig
