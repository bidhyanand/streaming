/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    minimumCacheTTL : 10000000
  }
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: ['api.fifa.com'],
//   },
// }



