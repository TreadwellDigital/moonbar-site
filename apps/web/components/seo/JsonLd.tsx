import { getRegionConfig } from '@/lib/region.config'

/**
 * Injects JSON-LD structured data into the page <head>.
 * Supports multiple schemas per page.
 */
export function JsonLd({ schemas }: { schemas: Record<string, unknown>[] }) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

// ── Schema builders ───────────────────────────────────────────────────────

export function buildOrganizationSchema() {
  const rc = getRegionConfig()
  return {
    '@context':  'https://schema.org',
    '@type':     'Organization',
    name:        'Moonbar Psychic Tarot',
    url:         `https://${rc.domain}`,
    logo:        `https://${rc.domain}/images/logo.png`,
    sameAs: [
      'https://www.facebook.com/moonbarpsychics',
      'https://twitter.com/moonbarpsychics',
    ],
    contactPoint: {
      '@type':             'ContactPoint',
      telephone:            rc.phoneSpecial,
      contactType:          'customer service',
      availableLanguage:    'English',
      hoursAvailable:       'Mo-Su 00:00-23:59',
    },
  }
}

export function buildWebSiteSchema() {
  const rc = getRegionConfig()
  return {
    '@context': 'https://schema.org',
    '@type':    'WebSite',
    name:       'Moonbar Psychic Tarot',
    url:        `https://${rc.domain}`,
    potentialAction: {
      '@type':       'SearchAction',
      target:        `https://${rc.domain}/psychic-blog-articles?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function buildLocalBusinessSchema() {
  const rc = getRegionConfig()
  return {
    '@context':    'https://schema.org',
    '@type':       'LocalBusiness',
    name:          'Moonbar Psychic Tarot',
    url:           `https://${rc.domain}`,
    telephone:     rc.phoneSpecial,
    priceRange:    '$$',
    description:   'Live Psychic & Tarot readings by phone, chat, and email. Available 24/7.',
    openingHours:  'Mo-Su 00:00-23:59',
    areaServed: {
      '@type': 'Country',
      name:    rc.region === 'AU' ? 'Australia' : rc.region === 'UK' ? 'United Kingdom' : 'New Zealand',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Psychic Reading Services',
    },
  }
}

export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type':          'Question',
      name:              question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    answer,
      },
    })),
  }
}

export function buildServiceSchema(name: string, description: string, price?: string) {
  const rc = getRegionConfig()
  return {
    '@context':   'https://schema.org',
    '@type':      'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name:    'Moonbar Psychic Tarot',
      url:     `https://${rc.domain}`,
    },
    areaServed: {
      '@type': 'Country',
      name:    rc.region === 'AU' ? 'Australia' : rc.region === 'UK' ? 'United Kingdom' : 'New Zealand',
    },
    ...(price ? {
      offers: {
        '@type':         'Offer',
        price,
        priceCurrency:   rc.currency,
        availability:    'https://schema.org/InStock',
      },
    } : {}),
  }
}

export function buildArticleSchema(post: {
  title: string
  excerpt: string
  publishedAt: string
  updatedAt?: string
  thumbnailUrl?: string
  author: { name: string }
  slug: string
}) {
  const rc = getRegionConfig()
  return {
    '@context':      'https://schema.org',
    '@type':         'Article',
    headline:         post.title,
    description:      post.excerpt,
    datePublished:    post.publishedAt,
    dateModified:     post.updatedAt ?? post.publishedAt,
    image:            post.thumbnailUrl ?? `https://${rc.domain}/images/og-default.jpg`,
    author: {
      '@type': 'Person',
      name:    post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name:    'Moonbar Psychic Tarot',
      logo: {
        '@type': 'ImageObject',
        url:     `https://${rc.domain}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':   `https://${rc.domain}/psychic-blog-articles/${post.slug}`,
    },
  }
}

export function buildBreadcrumbSchema(items: Array<{ name: string; href: string }>) {
  const rc = getRegionConfig()
  return {
    '@context':        'https://schema.org',
    '@type':           'BreadcrumbList',
    itemListElement:   items.map(({ name, href }, i) => ({
      '@type':    'ListItem',
      position:    i + 1,
      name,
      item:        `https://${rc.domain}${href}`,
    })),
  }
}

export function buildAggregateRatingSchema(ratingValue: number, ratingCount: number) {
  return {
    '@context':   'https://schema.org',
    '@type':      'Product',
    name:         'Moonbar Psychic Reading',
    aggregateRating: {
      '@type':      'AggregateRating',
      ratingValue:   ratingValue.toFixed(1),
      ratingCount:   String(ratingCount),
      bestRating:   '5',
      worstRating:  '1',
    },
  }
}
