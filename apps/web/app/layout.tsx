import type { Metadata } from 'next'
import './globals.css'
import { getRegionConfig } from '@/lib/region.config'
import { SiteSettings } from '@/components/layout/SiteSettings'

const rc = getRegionConfig()

export const metadata: Metadata = {
  title: {
    template: '%s | Moonbar Psychic Tarot',
    default:  'Moonbar Psychic Tarot | Live Psychic & Spiritual Readings',
  },
  description:
    'Get guidance on all areas of your life. Speak to one of our handpicked, gifted live Psychic Readers today. Phone, chat and email readings available 24/7.',
  metadataBase: new URL(`https://${rc.domain}`),
  alternates: {
    languages: Object.fromEntries(
      rc.hreflangs.map(({ hreflang, href }) => [hreflang, href])
    ),
  },
  openGraph: {
    siteName:  'Moonbar Psychic Tarot',
    type:      'website',
    locale:    rc.locale,
  },
  twitter: {
    card:    'summary_large_image',
    creator: '@moonbarpsychics',
    site:    '@moonbarpsychics',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        {/* hreflang for international SEO */}
        {rc.hreflangs.map(({ hreflang, href }) => (
          <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
        ))}
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,500;0,900;1,500;1,900&family=Overpass:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <SiteSettings>
          {children}
        </SiteSettings>
      </body>
    </html>
  )
}
