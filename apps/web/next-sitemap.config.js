/** @type {import('next-sitemap').IConfig} */
const regionDomains = {
  AU: 'https://moonbar.com.au',
  UK: 'https://moonbar.co.uk',
  NZ: 'https://moonbar.co.nz',
}

const region = process.env.NEXT_PUBLIC_REGION ?? 'AU'

module.exports = {
  siteUrl: regionDomains[region],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/'],
      },
    ],
  },
  exclude: ['/api/*', '/studio/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Higher priority for homepage and main service pages
    const highPriority = ['/', '/psychic-phone-readings', '/our-psychic-services']
    return {
      loc: path,
      changefreq: highPriority.includes(path) ? 'daily' : config.changefreq,
      priority: highPriority.includes(path) ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
