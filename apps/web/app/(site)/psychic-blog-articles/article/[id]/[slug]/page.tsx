import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { HowToSection } from '@/components/shared/HowToSection'

export const revalidate = 3600

// PLACEHOLDER DATA — replace with CMS fetch before launch
const PLACEHOLDER_ARTICLES = [
  { id: 1, slug: 'your-spirit-guides-are-calling', title: 'Your Spirit Guides are calling', date: 'August 2019', excerpt: 'Our Spirit Guides find all kinds of wonderful ways to communicate with us. Even if we sometimes feel...', image: 'https://moonbar.com.au/images/blog/blog1.jpg' },
  { id: 2, slug: 'the-5-steps-for-happy-healing', title: 'The 5 Steps for Happy Healing', date: 'August 2019', excerpt: 'Healing takes work. It takes focus, discipline, honesty and the recognition that we deserve to be happy. We...', image: 'https://moonbar.com.au/images/blog/blog2.jpg' },
  { id: 3, slug: 'the-purpose-of-shining-your-inner-light', title: 'The purpose of shining your inner light', date: 'August 2019', excerpt: "We all have an inner light. It starts off when we're little children like a blazing sun...", image: 'https://moonbar.com.au/images/blog/blog3.jpg' },
  { id: 4, slug: 'how-to-channel-your-psychic-ability', title: 'How to channel your Psychic ability', date: 'August 2019', excerpt: 'Channelling our Psychic abilities is a bit like downloading information from the internet. We have this huge source...', image: 'https://moonbar.com.au/images/blog/blog4.jpg' },
  { id: 5, slug: 'how-to-speak-your-intuitive-truth', title: 'How to speak your intuitive truth', date: 'July 2019', excerpt: 'If you intuitively feel that the time has come to be honest and tell the truth about something...', image: 'https://moonbar.com.au/images/blog/blog5.jpg' },
  { id: 6, slug: 'letting-go-with-grace', title: 'Letting go with grace', date: 'July 2019', excerpt: 'When my sister said she was having a spiritual divorce, I leant in with raised eyebrows and asked...', image: 'https://moonbar.com.au/images/blog/blog6.jpg' },
  { id: 7, slug: 'how-to-sense-spiritual-guidance', title: 'How to sense Spiritual Guidance', date: 'July 2019', excerpt: 'In the middle of our busy, stressful, noisy lives, hearing our Spiritual Guidance can be almost impossible to...', image: 'https://moonbar.com.au/images/blog/blog7.jpg' },
  { id: 8, slug: 'how-do-i-know-if-im-psychic', title: "How do I know if I'm Psychic?", date: 'July 2019', excerpt: 'Most of us have some form of psychic ability but being psychic means different things to different people...', image: 'https://moonbar.com.au/images/blog/blog8.jpg' },
]

type Params = { id: string; slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return PLACEHOLDER_ARTICLES.map((a) => ({ id: String(a.id), slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const article = PLACEHOLDER_ARTICLES.find((a) => String(a.id) === params.id && a.slug === params.slug)
  return {
    title: article ? `${article.title} | Moonbar Psychic Tarot` : 'Blog Article | Moonbar Psychic Tarot',
  }
}

function BackToTop() {
  return (
    <div className="back-to-top-block text-center">
      <a href="#" className="back-to-top inline-block" aria-label="Back to top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://moonbar.com.au/templates/moonbar/images/backtotop.svg" alt="" aria-hidden="true" style={{ width: '2.813rem', height: '2.813rem' }} />
      </a>
    </div>
  )
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = PLACEHOLDER_ARTICLES.find((a) => String(a.id) === params.id && a.slug === params.slug)

  if (!article) {
    return (
      <main style={{ maxWidth: '980px', margin: '0 auto', padding: '3.75rem 1rem', fontFamily: '"Overpass", sans-serif' }}>
        <h1 style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 900 }}>Article not found</h1>
        <Link href="/psychic-blog-articles" style={{ color: '#F068B5' }}>
          &larr; Back to all Blogs
        </Link>
      </main>
    )
  }

  return (
    <>
      <main style={{ background: '#fff', maxWidth: '980px', margin: '0 auto', padding: '3rem 1rem' }}>
        <h1
          style={{
            fontFamily: '"Raleway", sans-serif',
            fontWeight: 900,
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
          }}
        >
          {article.title}
        </h1>

        <div style={{ width: '100%', maxHeight: '400px', overflow: 'hidden', marginBottom: '1rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt={article.title}
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <p style={{ color: '#999', fontStyle: 'italic', fontFamily: '"Overpass", sans-serif', fontSize: '0.875rem', marginBottom: '2rem' }}>
          {article.date}
        </p>

        {/* CMS rich-text body placeholder */}
        <div
          style={{
            padding: '1.5rem',
            background: '#fdf0f8',
            border: '2px dashed #F068B5',
            fontFamily: '"Overpass", sans-serif',
            color: '#626262',
            marginBottom: '2.5rem',
          }}
        >
          <p style={{ margin: 0 }}>
            <strong>CMS body content loads here.</strong> Replace this placeholder with the full article body fetched from the CMS before launch.
          </p>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <Link
            href="/psychic-blog-articles"
            style={{
              color: '#F068B5',
              fontFamily: '"Raleway", sans-serif',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            &larr; Back to all Blogs
          </Link>
        </div>
      </main>

      <ReaderFeed heading="Moonbar's Available Psychic Readers" />

      <HowToSection />

      <BackToTop />
    </>
  )
}
