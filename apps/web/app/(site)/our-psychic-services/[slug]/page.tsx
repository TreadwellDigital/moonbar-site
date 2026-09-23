import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getRegionConfig } from '@/lib/region.config'
import { sanityClient } from '@/lib/sanity.client'
import { SERVICE_PAGE_QUERY, SERVICE_PAGE_SLUGS_QUERY } from '@/lib/sanity.queries'
import { CallBoxes } from '@/components/phone/CallBoxes'
import { JsonLd, buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from '@/components/seo/JsonLd'

export const revalidate = 3600

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const rc = getRegionConfig()
  const slugs = await sanityClient
    .fetch(SERVICE_PAGE_SLUGS_QUERY, { region: rc.region })
    .catch(() => [] as Array<{ slug: string }>)
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const rc = getRegionConfig()
  const page = await sanityClient
    .fetch(SERVICE_PAGE_QUERY, { slug: params.slug, region: rc.region })
    .catch(() => null)

  if (!page) return { title: 'Service | Moonbar' }

  return {
    title:       page.seo?.metaTitle ?? `${page.title} | Moonbar`,
    description: page.seo?.metaDescription ?? page.intro,
  }
}

export default async function ServicePage({ params }: Props) {
  const rc = getRegionConfig()
  const page = await sanityClient
    .fetch(SERVICE_PAGE_QUERY, { slug: params.slug, region: rc.region })
    .catch(() => null)

  if (!page) notFound()

  const schemas = [
    buildBreadcrumbSchema([
      { name: 'Home',         href: '/' },
      { name: 'Our Services', href: '/our-psychic-services' },
      { name: page.title,     href: `/our-psychic-services/${params.slug}` },
    ]),
    buildServiceSchema(page.title, page.intro ?? page.title),
    ...(page.faqs?.length ? [buildFaqSchema(page.faqs)] : []),
  ]

  return (
    <>
      <JsonLd schemas={schemas} />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-moonbar-gold transition-colors">Home</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/our-psychic-services" className="hover:text-moonbar-gold transition-colors">Our Services</Link></li>
          <li aria-hidden>›</li>
          <li className="text-moonbar-gold">{page.title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="bg-hero-gradient py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">{page.title}</h1>
          {page.intro && <p className="text-gray-300 text-lg leading-relaxed">{page.intro}</p>}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Body content */}
        {page.body && (
          <div className="prose-moonbar">
            {/* Portable text renderer — install @portabletext/react for full rendering */}
            {/* For now, render as plain text */}
            {page.body.map((block: any, i: number) =>
              block._type === 'block' ? (
                <p key={i} className="text-gray-300 leading-relaxed">
                  {block.children?.map((c: any) => c.text).join('') ?? ''}
                </p>
              ) : null
            )}
          </div>
        )}

        {/* Call boxes */}
        <div>
          <h2 className="font-display text-2xl text-white mb-4 text-center">
            Speak to a {page.title} Reader Now
          </h2>
          <CallBoxes />
        </div>

        {/* FAQ — AEO optimised */}
        {page.faqs?.length > 0 && (
          <div>
            <h2 className="font-display text-2xl text-white mb-6">
              Frequently Asked Questions about {page.title}
            </h2>
            <div className="space-y-2">
              {page.faqs.map(({ question, answer }: { question: string; answer: string }) => (
                <details key={question} className="faq-item card px-6 py-1">
                  <summary>{question}</summary>
                  <p className="text-gray-400 text-sm leading-relaxed pb-4">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Related services */}
        {page.relatedServices?.length > 0 && (
          <div>
            <h2 className="font-display text-2xl text-white mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {page.relatedServices.map((s: any) => (
                <Link
                  key={s.slug}
                  href={`/our-psychic-services/${s.slug}`}
                  className="card p-4 hover:border-moonbar-gold/40 transition-colors"
                >
                  <h3 className="text-white font-semibold text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-xs line-clamp-2">{s.teaser}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
