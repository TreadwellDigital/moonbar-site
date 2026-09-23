import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { ServiceIntro } from '@/components/shared/ServiceIntro'

export const metadata: Metadata = {
  title: 'Spiritual Psychic Readings | Moonbar Psychic Tarot',
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

export default function SpiritualReadingsPage() {

  return (
    <>
      <ServiceIntro
        h1="Moonbar's Spiritual Psychic Readings"
        lead="By channelling Spiritual guidance, our Spiritual Psychic Mediums can help guide you in current life changes and help you make choices for a happier life."
        h3="Speak to Moonbar's Spiritual Psychic Readers now"
        secondary={`Whether you're thinking of changing career and not sure how to go about it, need help making decisions on a personal relationship or just need a bit of focus and motivation to help you move forward – we can help through our Spiritual Psychic readings. Moonbar's Spiritual Psychic Mediums have the experience of being a Life Coach with the added benefit of being able to guide you with their Psychic ability too.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/our-psychic-services' },
          { label: 'Spiritual Readings' },
        ]}
      />

      <MobileCallBlock />

      <ReaderFeed />

      <HowToSection />

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>What is a Spiritual Psychic Reading?</h2>
          <p>A Spiritual Psychic Reading can be challenging but is always illuminating. Your reader will channel guidance from Spirit Guides to bring conscious awareness to the path you&apos;re on. This awareness empowers you to reach your personal potential and assists in the evolution of your soul by identifying areas of your lives, both past and present, that must be healed. You will doubtless have several &lsquo;aha!&rsquo; moments during a spiritual reading.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Spiritual Psychic Reader Now
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>How does a Spiritual Psychic Reading work over the phone?</h2>
          <p>A Spiritual Psychic Reading is always influenced by your own level of spiritual understanding. If you need to know about the &lsquo;why&rsquo;s&rsquo; and &lsquo;how&rsquo;s&rsquo; of your life a Spiritual Psychic Reading will clarify and super-charge your personal development and growth. During a telephone consultation you are a bridge between Spirit and the Psychic reader. So long as you&apos;re open, the guidance will flow.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Spiritual Psychic Reader Now
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
