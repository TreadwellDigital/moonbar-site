import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { ServiceIntro } from '@/components/shared/ServiceIntro'

export const metadata: Metadata = {
  title: 'Live Psychic Readings | Moonbar Psychic Tarot',
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

export default function PsychicReadingsPage() {

  return (
    <>
      <ServiceIntro
        h1="Moonbar's Live Psychic Readings"
        lead="Speak with one of Moonbar's gifted Psychic Readers to gain informative, Psychic guidance. Connecting with the right Psychic reader will help for you to get the most out of your Psychic Reading."
        h3="Speak to Moonbar's Psychic Readers now"
        secondary={`Our new Click to Call Now buttons make it easier for you to have a Psychic Reading. You can use the new "Quick Connect" button, which enters the PIN number of your chosen Psychic, connecting you to your chosen Psychic Reader even quicker!`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/our-psychic-services' },
          { label: 'Psychic Readings' },
        ]}
      />

      <MobileCallBlock />

      <ReaderFeed />

      <HowToSection />

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>What is a Psychic Reading?</h2>
          <p>A Psychic reading offers insight and guidance to help you understand yourself and your circumstances better. A Psychic reading makes you aware of the choices available to you and you can then make appropriate decisions for your highest good and wellbeing. A Psychic reading opens you up to possibilities you could not have imagined for yourself and lifts doubt and worry from your life.</p>
          <p>Take your time browsing our available Psychics, read their profiles, testimonials and have a look at their skills. Each Psychic conducts their readings in different ways. If you are new to the service, it&apos;s always good to have a Psychic Reading with a few of our Psychics and then stick with the Psychic that you connect with.</p>
          <p>We have a huge range of incredibly gifted Psychic readers and we are adding new Psychic readers to Moonbar every week as our popularity grows. If you have never had a Psychic Reading before, then why not do it today, we are sure you won&apos;t regret it.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>How does a Psychic Reading work over the phone?</h2>
          <p>In a very similar way to a face-to-face reading. Some Psychics prefer to work on the telephone so they can avoid reading body language and then the reading is 100% intuitive. The Psychic &lsquo;tunes in&rsquo; to the caller&apos;s energy using their heightened sensory skills and divination tools such as Tarot cards or pendulums. Once a connection is established the Psychic then delivers guidance to the client.</p>
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
