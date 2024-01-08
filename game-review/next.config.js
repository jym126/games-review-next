/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
      env: {
        apiKey: process.env.apiKey,
        url: process.env.url,
      },
}

module.exports = nextConfig
