import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { HowToSection } from '@/components/shared/HowToSection'
import { PageIntro } from '@/components/shared/PageIntro'

export const metadata: Metadata = {
  title: 'Moonbar Psychic Blog | Moonbar Psychic Tarot',
}

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

export default function BlogArchivePage() {
  return (
    <>
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 2rem 1rem;
          max-width: 1552px;
          margin: 0 auto;
        }
        @media (min-width: 600px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1121px) {
          .blog-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .blog-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid #f0dcea;
          overflow: hidden;
        }
        .blog-card__img-wrap {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          overflow: hidden;
          background: #f9f0f5;
        }
        .blog-card__img-wrap img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .blog-card__body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .blog-card__title {
          font-family: "Raleway", sans-serif;
          font-weight: 900;
          font-size: 1.1rem;
          color: #333;
          margin: 0 0 0.4rem;
        }
        .blog-card__date {
          font-size: 0.8rem;
          color: #999;
          margin: 0 0 0.75rem;
        }
        .blog-card__excerpt {
          font-family: "Overpass", sans-serif;
          font-size: 0.9rem;
          color: #626262;
          line-height: 1.5;
          flex: 1;
          margin: 0 0 1rem;
        }
        .blog-card__link {
          display: inline-block;
          color: #F068B5;
          font-family: "Raleway", sans-serif;
          font-weight: 700;
          font-size: 0.875rem;
          text-decoration: none;
          border: 2px solid #F068B5;
          padding: 0.4rem 1rem;
          align-self: flex-start;
          transition: background 0.2s, color 0.2s;
        }
        .blog-card__link:hover {
          background: #F068B5;
          color: #fff;
        }
      `}</style>

      <PageIntro breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Blog' },
      ]}>
        <h1>The Moonbar Blog</h1>
      </PageIntro>

      <section>
        <div className="blog-grid">
          {PLACEHOLDER_ARTICLES.map((article) => (
            <article key={article.id} className="blog-card">
              <div className="blog-card__img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={article.image} alt={article.title} />
              </div>
              <div className="blog-card__body">
                <h2 className="blog-card__title">{article.title}</h2>
                <p className="blog-card__date">{article.date}</p>
                <p className="blog-card__excerpt">{article.excerpt}</p>
                <Link href={`/psychic-blog-articles/article/${article.id}/${article.slug}`} className="blog-card__link">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ReaderFeed heading="Moonbar's Available Psychic Readers" />

      <HowToSection />

      <BackToTop />
    </>
  )
}
