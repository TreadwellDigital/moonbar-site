import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { ServiceIntro } from '@/components/shared/ServiceIntro'

export const metadata: Metadata = {
  title: 'Clairvoyant Readings | Moonbar Psychic Tarot',
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

export default function ClairvoyantReadingsPage() {

  return (
    <>
      <ServiceIntro
        h1="Moonbar's Clairvoyant Readings"
        lead="Connect with one of Moonbar's gifted Clairvoyant Readers to gain informative guidance from your past, present and your future. Moonbar's Clairvoyants tune into your energy to see places and situations you will recognise or are important to you!"
        h3="Speak to Moonbar's Clairvoyant Readers now"
        secondary={`Our new Click to Call Now buttons make it easier for you to have a Clairvoyant Reading. You can use the new "Quick Connect" button, which enters the PIN number of your chosen Clairvoyant reader, connecting you to your chosen Clairvoyant reader even quicker!`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/our-psychic-services' },
          { label: 'Clairvoyant Readings' },
        ]}
      />

      <MobileCallBlock />

      <ReaderFeed />

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>What is a Clairvoyant Reading?</h2>
          <p>Clairvoyance means &lsquo;clear sight&rsquo; and refers to the learned or natural ability to &lsquo;see&rsquo; Psychic images in the minds eye. During a Clairvoyant reading your reader may see images relating to your past, present, and future and are able to see places and situations that have been or will be important to you; they may also give you names and descriptions of people who are or will be significant in your life.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>How does a Clairvoyant Reading work over the phone?</h2>
          <p>A telephone consultation is an excellent way to have a Clairvoyant reading. Clairvoyance is best received by the reader when their eyes are closed and there are no external distractions so the reader can &lsquo;clearly see&rsquo; guidance to pass on to you. Once your reader has tuned in to your energy, they will have no trouble at all downloading guidance.</p>
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
