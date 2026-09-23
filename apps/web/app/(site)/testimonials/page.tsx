import type { Metadata } from 'next'
import { PageIntro } from '@/components/shared/PageIntro'

export const metadata: Metadata = {
  title: 'Testimonials | Moonbar Psychic Tarot',
}

export const revalidate = 3600

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

export default function TestimonialsPage() {
  return (
    <>
      <PageIntro breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Testimonials' },
      ]}>
        <h1>Moonbar Psychic Tarot Testimonials</h1>
        <p className="page-intro__lead">Moonbar Psychic Tarot receives incredible feedback from customers located all over the world.</p>
        <p style={{ fontSize: '1rem', lineHeight: 1.15, marginTop: '0.5rem' }}>Have a read below of some of Moonbar&apos;s recent testimonials and reviews from customers.</p>
      </PageIntro>

      {/* Testimonials/reviews feed placeholder — connect existing feed */}
      <section style={{ padding: '2rem 1rem', maxWidth: '1552px', margin: '0 auto' }}>
        <div style={{ padding: '2rem', background: '#fdf0f8', border: '2px dashed #F068B5', textAlign: 'center', fontFamily: '"Overpass", sans-serif', borderRadius: 0 }}>
          <p style={{ color: '#626262', margin: 0 }}>
            <strong>Testimonials / Reviews feed loads here.</strong><br />
            Mount the existing reviews feed. Load-more label: &ldquo;See More Reviews&rdquo;. Do not seed with invented reviews.
          </p>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
