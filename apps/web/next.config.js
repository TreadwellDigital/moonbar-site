/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: '*.allstarpsychics.co.uk' },
    ],
  },
  async redirects() {
    return [
      // Legacy homepage alias
      { source: '/home', destination: '/', permanent: true },

      // Email Readings temporarily suspended — redirect all three routes to SMS
      // permanent: false → 307 (can be promoted to 308 when email is reinstated/retired)
      { source: '/psychic-email-readings',                               destination: '/psychic-sms-readings', permanent: false },
      { source: '/psychic-email-readings/silver-email-readings',         destination: '/psychic-sms-readings', permanent: false },
      { source: '/psychic-email-readings/gold-email-readings',           destination: '/psychic-sms-readings', permanent: false },
    ]
  },
}

module.exports = nextConfig
