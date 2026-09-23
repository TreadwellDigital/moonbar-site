import type { Metadata } from 'next'
import Link from 'next/link'
import { ReaderFeed } from '@/components/readers/ReaderFeed'
import { MobileCallBlock } from '@/components/phone/MobileCallBlock'
import { HowToSection } from '@/components/shared/HowToSection'
import { ServiceIntro } from '@/components/shared/ServiceIntro'

export const metadata: Metadata = {
  title: 'Job & Career Psychic Readings | Moonbar Psychic Tarot',
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

export default function JobAndCareerPage() {

  return (
    <>
      <ServiceIntro
        h1="Moonbar's Job &amp; Career Readings"
        lead="Looking for work or changing jobs can be an extremely worrying and stressful time in your life. Feeling undervalued and overlooked can also add to this feeling of stress and dissatisfaction in your job. Our gifted psychics are here to tune into your career life and give you the most in-depth and insightful guidance you need."
        h3="Speak to Moonbar's Job &amp; Career Readers now"
        secondary="Moonbar's Psychic Readers will be able to see what options are coming up, and how your future career looks, enabling you to make the best decisions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Services', href: '/our-psychic-services' },
          { label: 'Job & Career' },
        ]}
      />

      <MobileCallBlock />

      <ReaderFeed />

      <HowToSection />

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>What is a Job &amp; Career Reading?</h2>
          <p>A job and career reading really focuses in on your work life, and what&apos;s coming around the corner for you. Our gifted readers can help to solve any issues you may face in your career, along with seeing what may be to come. Could there be a promotion in store for you? Maybe you&apos;re considering changing your role? No problem, our Psychic readers are here to answer all of your itching questions around your career.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/psychic-phone-readings" className="btn-primary" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              Call a Psychic Now
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#fff' }}>
        <div className="prose-narrow">
          <h2>How does a Job &amp; Career Reading work over the phone?</h2>
          <p>Our lovely, gifted Psychic readers will link in with you over the phone and connect with their own guides for information. Using their intuition and Psychic instruments, they will provide you with an honest and genuine reading. You are welcome to ask a specific question about your work life for the reader to focus in on; alternatively, you can simply ask for a general career reading.</p>
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
