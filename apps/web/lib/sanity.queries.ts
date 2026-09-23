import { groq } from 'next-sanity'
import type { Region } from './region.config'
import { sanityClient } from './sanity.client'

// ── Shared fragments ────────────────────────────────────────────────────────
const SEO_FIELDS = groq`
  seo {
    metaTitle,
    metaDescription,
    "ogImageUrl": ogImage.asset->url,
    canonicalUrl,
  }
`

const PORTABLE_TEXT = groq`
  ...,
  _type == "block" => { ..., markDefs[]{ ..., _type == "link" => { href } } }
`

// ── Homepage ────────────────────────────────────────────────────────────────
export const HOME_PAGE_QUERY = groq`
  *[_type == "homePage" && region == $region][0] {
    hero {
      headline,
      subheadline,
      "backgroundImageUrl": backgroundImage.asset->url,
    },
    introText,
    serviceGrid[] {
      icon,
      title,
      description,
      slug,
    },
    whyMoonbar[] {
      point,
    },
    whatToExpect,
    ${SEO_FIELDS},
  }
`

// ── Simple pages (Phone, Email, Chat, Customer Service) ────────────────────
export const SIMPLE_PAGE_QUERY = groq`
  *[_type == "simplePage" && slug.current == $slug && region == $region][0] {
    title,
    intro,
    body[] { ${PORTABLE_TEXT} },
    ${SEO_FIELDS},
  }
`

// ── Services hub ────────────────────────────────────────────────────────────
export const SERVICES_HUB_QUERY = groq`
  *[_type == "servicesHub" && region == $region][0] {
    title,
    intro,
    services[] {
      title,
      slug,
      icon,
      teaser,
    },
    ${SEO_FIELDS},
  }
`

// ── Individual service page ─────────────────────────────────────────────────
export const SERVICE_PAGE_QUERY = groq`
  *[_type == "servicePage" && slug.current == $slug && region == $region][0] {
    title,
    intro,
    body[] { ${PORTABLE_TEXT} },
    faqs[] { question, answer },
    relatedServices[] -> { title, "slug": slug.current, teaser },
    ${SEO_FIELDS},
  }
`

export const SERVICE_PAGE_SLUGS_QUERY = groq`
  *[_type == "servicePage" && region == $region] { "slug": slug.current }
`

// ── Blog ─────────────────────────────────────────────────────────────────────
export const BLOG_LIST_QUERY = groq`
  *[_type == "blogPost" && region == $region] | order(publishedAt desc) [0...20] {
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    "thumbnailUrl": thumbnail.asset->url,
    category,
    "readTime": round(length(pt::text(body)) / 1000),
  }
`

export const BLOG_POST_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug && region == $region][0] {
    title,
    publishedAt,
    updatedAt,
    excerpt,
    "thumbnailUrl": thumbnail.asset->url,
    author { name, "avatarUrl": avatar.asset->url, bio },
    category,
    body[] { ${PORTABLE_TEXT} },
    "relatedPosts": *[_type == "blogPost" && region == $region && slug.current != $slug] | order(publishedAt desc) [0...3] {
      title, "slug": slug.current, "thumbnailUrl": thumbnail.asset->url, publishedAt,
    },
    ${SEO_FIELDS},
  }
`

export const BLOG_POST_SLUGS_QUERY = groq`
  *[_type == "blogPost" && region == $region] { "slug": slug.current }
`

// ── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonialsPage" && region == $region][0] {
    title,
    intro,
    testimonials[] {
      reviewerName,
      stars,
      text,
      readerName,
      date,
    },
    aggregateRating { ratingValue, ratingCount },
    ${SEO_FIELDS},
  }
`

// ── Legal pages ───────────────────────────────────────────────────────────────
export const LEGAL_PAGE_QUERY = groq`
  *[_type == "legalPage" && slug.current == $slug && region == $region][0] {
    title,
    lastUpdated,
    body[] { ${PORTABLE_TEXT} },
    ${SEO_FIELDS},
  }
`

// ── Site settings (nav, footer) ───────────────────────────────────────────────
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings" && region == $region][0] {
    siteName,
    tagline,
    "logoUrl": logo.asset->url,
    socialLinks { facebook, twitter, instagram },
    footerText,
    nav[] { label, href, children[] { label, href } },
  }
`

// ── Helpers ───────────────────────────────────────────────────────────────────
export async function fetchPage<T>(query: string, params: Record<string, unknown> & { region: Region }): Promise<T | null> {
  try {
    return await sanityClient.fetch<T>(query, params)
  } catch (err) {
    console.error('Sanity fetch error', err)
    return null
  }
}
