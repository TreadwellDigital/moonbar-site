import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { ServiceIntro } from '@/components/shared/ServiceIntro'

export const metadata: Metadata = {
  title: 'Love and Relationship Psychic Readings | Moonbar Psychic Tarot',
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

export default function LoveAndRelationshipPage() {

  return (
    <>
      <ServiceIntro
        h1="Moonbar's Love &amp; Relationship Readings"
        lead="Love is one of the most important aspects of our lives. Whether you're in a relationship, going through a rough patch or wondering when/if you have met your soulmate - Moonbar Psychics can give you the reassurance and guidance you need."
        h3="Speak to Moonbar's Love &amp; Relationship Readers now"
        secondary={`Need to decide whether you are in the right relationship? Waiting to meet 'the one' and wanting to know when this will happen? Our expert, compassionate Psychics will give you the answers you need.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/our-psychic-services' },
          { label: 'Love & Relationships' },
        ]}
      />

      <MobileCallBlock />

      <ReaderFeed />

      <HowToSection />

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>What is a Love &amp; Relationship Psychic Reading?</h2>
          <p>A Psychic Love and Relationship reading offers insight and guidance to help you understand your current circumstances better, as well as providing key insight to future opportunities. A Psychic reading makes you aware of the choices around you, the choices to come, which helps you to make appropriate decisions in terms of relationships and your love life.</p>
          <p>If you are currently looking for love, our Psychics can help provide insight into when your next love opportunity will come and can often say the type of person to look out for coming into your life!</p>
          <p>If you are struggling to make decisions in your relationships, our Psychic readers are able to hone in on your current situation and help you to better understand your current circumstances. The Psychic will be able to give insights into all areas of your relationship that you are currently struggling with.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>How does a Love &amp; Relationship Psychic Reading work over the phone?</h2>
          <p>Having a Love and Relationship Psychic reading over the phone is very similar to having a face-to-face Psychic reading. Some Psychic prefer to work over the phone so that the Psychic Reading is 100% intuitive and avoid reading body language. The Psychic reader &lsquo;tunes in&rsquo; using their heightened sensory skills and divination tools such at Tarot Cards, pendulums or Crystal Balls. The Psychic reader picks up on the caller&apos;s energy and delivers the guidance over the phone.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
