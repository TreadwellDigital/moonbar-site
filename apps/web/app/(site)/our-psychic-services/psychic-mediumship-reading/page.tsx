import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { ServiceIntro } from '@/components/shared/ServiceIntro'

export const metadata: Metadata = {
  title: 'Psychic Medium Readings | Moonbar Psychic Tarot',
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

export default function PsychicMediumshipPage() {

  return (
    <>
      <ServiceIntro
        h1="Moonbar's Psychic Mediums"
        lead="Moonbar's gifted Psychic Medium Readers are able to connect to the Spirit world, passing on messages from Spirit in a reading."
        h3="Speak to Moonbar's Psychic Mediums now"
        secondary="A reading with Moonbar's Psychic Mediums combines Psychic skill with an ability to effectively channel energies and receive messages from the Spirit world. If you want to discover what messages the Spirit world has for you, call today for a Psychic Medium reading."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/our-psychic-services' },
          { label: 'Psychic Mediums' },
        ]}
      />

      <MobileCallBlock />

      <ReaderFeed />

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>What is a Psychic Medium Reading?</h2>
          <p>A reading with a Psychic Medium combines Psychic skill with the ability to communicate with and receive messages from your loved ones in Spirit World. The reader strengthens the Psychic information they receive with the support of your loved ones in Spirit and delivers insight and evidence for your reading. Remember, not all Psychics are Mediums and not all Mediums are Psychic!</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>How does a Psychic Medium Reading work over the phone?</h2>
          <p>A Psychic Medium will attune themselves to your energy and deliver intuitive guidance plus they have the additional ability to seek and deliver evidence from your loved ones in Spirit World. As with all other telephone consultations there are no barriers to the quality or depth of the guidance you receive, and once Spirit are presented with an appropriate way to channel information (your reader) there will be no stopping the flow of love and guidance!</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />

      <HowToSection />
    </>
  )
}
