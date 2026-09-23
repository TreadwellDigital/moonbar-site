import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity requires a real project ID — guard so the build doesn't throw when
// the project isn't configured yet (e.g. preview deployments without Sanity).
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ''
const isSanityConfigured = Boolean(projectId && projectId !== 'placeholder')

export const sanityClient = createClient({
  projectId: isSanityConfigured ? projectId : 'unconfigured',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn:    process.env.NODE_ENV === 'production',
  // Token is only used server-side (never exposed to browser)
  token:     process.env.SANITY_API_READ_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
