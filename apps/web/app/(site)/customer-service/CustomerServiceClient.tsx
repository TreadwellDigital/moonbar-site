'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PageIntro } from '@/components/shared/PageIntro'

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

type FaqItem = {
  question: string
  answer: React.ReactNode
}

const FAQS: FaqItem[] = [
  {
    question: 'Q. How do I choose a Psychic for a reading?',
    answer: (
      <>
        <p>
          A. We would encourage you to read our Psychic&apos;s profiles before your reading so that you can understand how they work, what their skills are and if there are any particular areas they specialise in. Most of our Psychics can look at any area of your life but you may decide to choose someone who can give in-depth{' '}
          <Link href="/our-psychic-services/love-and-relationship-psychic-readings" style={{ color: '#F068B5' }}>
            Psychic Love Readings
          </Link>
          , or a{' '}
          <Link href="/our-psychic-services/psychic-mediumship-reading" style={{ color: '#F068B5' }}>
            Psychic Medium reading
          </Link>{' '}
          if you wanted a more spiritually based reading.
        </p>
        <p>
          If you can&apos;t decide or you don&apos;t mind who you speak to then don&apos;t worry you will automatically be put through to the next available Psychic Reader.
        </p>
      </>
    ),
  },
  {
    question: "Q. I've never had a reading before, what should I expect?",
    answer: (
      <>
        <p>
          A. Some people find the idea of a Psychic reading intriguing yet may feel anxious about what they may be told. We think it&apos;s important to reassure everyone that a professional Psychic Reading should never tell you &lsquo;bad news&rsquo;. Our Psychics will ask you if there&apos;s a particular area you want to look at and focus on that subject for you, giving insight and guidance on the choices you have.
        </p>
        <p>
          Whether you wish to have a{' '}
          <Link href="/our-psychic-services/psychic-readings" style={{ color: '#F068B5' }}>
            Psychic Reading
          </Link>{' '}
          on your{' '}
          <Link href="/our-psychic-services/job-and-career-psychic-readings" style={{ color: '#F068B5' }}>
            Career &amp; Job
          </Link>{' '}
          or have a particular{' '}
          <Link href="/our-psychic-services/life-questions-psychic-reading" style={{ color: '#F068B5' }}>
            Life Question
          </Link>{' '}
          that you need the answer to, call today to positively look forward to your future. You can also have a general reading if you want the Psychic to tune into your current circumstances and see what&apos;s coming up for you in the next six months.
        </p>
      </>
    ),
  },
  {
    question: 'Q. How do I get the most out of my Psychic reading?',
    answer: (
      <>
        <p>
          A. Before you speak to your chosen Psychic, we suggest that you take a minute to think about the areas in your life where you need guidance. It may be worth making a few notes on the questions you may want to ask. Take a few minutes to sit quietly and clear your mind so that you feel relaxed and calm to be able to enjoy your reading.
        </p>
        <p>
          Remember that having a Psychic reading can be an enlightening and empowering experience, so feeling relaxed and open to Psychic guidance will give you a better result and encourage the peace of mind that you are looking for.
        </p>
      </>
    ),
  },
  {
    question: 'Q. I would like to speak to a Tarot reader, how do I find one?',
    answer: (
      <>
        <p>
          A. You can search for a{' '}
          <Link href="/our-psychic-services/tarot-card-readings" style={{ color: '#F068B5' }}>
            Tarot Reader
          </Link>{' '}
          or any other Psychic skill, such as a{' '}
          <Link href="/our-psychic-services/clairvoyant-readings" style={{ color: '#F068B5' }}>
            Clairvoyant
          </Link>
          ,{' '}
          <Link href="/our-psychic-services/psychic-mediumship-reading" style={{ color: '#F068B5' }}>
            Psychic Medium
          </Link>
          ,{' '}
          <Link href="/our-psychic-services/psychic-readings" style={{ color: '#F068B5' }}>
            Psychic
          </Link>{' '}
          or{' '}
          <Link href="/our-psychic-services/spiritual-readings" style={{ color: '#F068B5' }}>
            Spiritual Advisor
          </Link>{' '}
          by taking a look at their list of skills in our Psychic Phone Reader feed.
        </p>
        <p>
          The Psychic Reader feed is dynamic and when a customer is in a Credit Card call, we are able to display the end time of the call so that you know when that Psychic will be available to speak.
        </p>
      </>
    ),
  },
  {
    question: 'Q. What is the new Quick Connect button?',
    answer: (
      <>
        <p>
          A. Our new Quick Connect buttons are there to make the process of having a{' '}
          <Link href="/our-psychic-services/psychic-readings" style={{ color: '#F068B5' }}>
            Psychic Reading
          </Link>{' '}
          much more simple - by clicking this button, we automatically enter the PIN number of the Psychic Reader into the call flow so that you don&apos;t have to! This helps to get hold of your chosen agent much quicker and eliminates the need to enter the Psychics PIN.
        </p>
        <p>
          We know that customers sometimes don&apos;t realise or forgot to make a note of the Psychic Readers PIN number, at Moonbar we hope that this helps!
        </p>
      </>
    ),
  },
  {
    question: 'Q. How do I know if your Psychics are genuine?',
    answer: (
      <>
        <p>
          A. All of our Psychics are genuinely gifted and will have years&apos; experience working as a Psychic before they join our team. When a Psychic applies to work with us, they are interviewed and fully tested by having to complete a series of test readings with us. If they prove that they are genuinely talented and we are happy with their readings, then we request references and proven experience before advising them on the company and regulatory guidelines.
        </p>
        <p>
          It is important to us that our Psychics work with the right ethics, adhere to all guidelines and leave our customers feeling enlightened and satisfied after their reading. Therefore we closely monitor all of our Psychics readings as an on-going procedure.
        </p>
      </>
    ),
  },
]

export default function CustomerServiceClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    honeypot: '',
  })

  function toggleFaq(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target
    const value = target instanceof HTMLInputElement && target.type === 'checkbox'
      ? (target as HTMLInputElement).checked
      : target.value
    setFormData((prev) => ({ ...prev, [target.name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (formData.honeypot) return // spam trap
    // Backend not yet wired — show success as placeholder
    setFormStatus('success')
  }

  const prose: React.CSSProperties = {
    fontFamily: '"Overpass", sans-serif',
    fontSize: '0.938rem',
    lineHeight: 1.55,
    color: '#626262',
  }

  const sectionWrap: React.CSSProperties = {
    maxWidth: '980px',
    margin: '0 auto',
    padding: '2.5rem 1rem',
  }

  const h1Style: React.CSSProperties = {
    fontFamily: '"Raleway", sans-serif',
    fontWeight: 900,
    fontSize: '2rem',
    color: '#626262',
    marginBottom: '1rem',
  }

  const h2Style: React.CSSProperties = {
    fontFamily: '"Raleway", sans-serif',
    fontWeight: 900,
    fontSize: '1.5rem',
    color: '#626262',
    marginBottom: '1rem',
    marginTop: '2.5rem',
  }

  const faqQuestionStyle: React.CSSProperties = {
    fontFamily: '"Raleway", sans-serif',
    fontWeight: 700,
    fontSize: '1rem',
    color: '#333',
    cursor: 'pointer',
    padding: '1rem 1.25rem',
    background: '#f9f0f5',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: '"Overpass", sans-serif',
    fontWeight: 600,
    fontSize: '0.875rem',
    color: '#626262',
    marginBottom: '0.3rem',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.6rem 0.75rem',
    border: '1px solid #ddd',
    fontFamily: '"Overpass", sans-serif',
    fontSize: '0.9rem',
    color: '#333',
    marginBottom: '1rem',
    boxSizing: 'border-box',
  }

  return (
    <>
      <PageIntro breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Help' },
      ]}>
        <h1 style={h1Style}>FAQs</h1>
        <p style={prose}>
          Have a read of Moonbar&apos;s FAQs if you need some assistance on how to have a Psychic Reading or what options are available with Moonbar.
        </p>
      </PageIntro>

      {/* FAQs */}
      <section style={{ ...sectionWrap }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {FAQS.map((faq, index) => (
            <div key={index} style={{ border: '1px solid #f0dcea' }}>
              <button
                style={faqQuestionStyle}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span style={{ fontSize: '1.2rem', color: '#F068B5', marginLeft: '1rem', flexShrink: 0 }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  style={{
                    padding: '1rem 1.25rem',
                    background: '#fff',
                    ...prose,
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Customer Services */}
      <section style={{ background: '#f9f0f5', padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <h2 style={h2Style}>Customer Services</h2>
          <p style={prose}>
            If you need further support from one of Moonbar&apos;s Customer Care team, please select from one of the options below OR, use the form on the website and our team will be in touch shortly.
          </p>
          <p style={prose}>
            <strong>Phone Reading Customer Service</strong> If you would like to contact us with regards to a Psychic Phone Reading, please complete the form below or email us at{' '}
            <a href="mailto:moonbar@allstarpsychics.co.uk" style={{ color: '#F068B5' }}>moonbar@allstarpsychics.co.uk</a>
          </p>
          <p style={prose}>
            <strong>Email Reading Customer Service</strong> If you would like to contact us with regards to a Psychic Email Reading, please complete the form below, or email us at{' '}
            <a href="mailto:moonbar@allstarpsychics.co.uk" style={{ color: '#F068B5' }}>moonbar@allstarpsychics.co.uk</a>
          </p>
          <p style={prose}>For general enquiries please complete the form below and someone will be in touch shortly.</p>

          {formStatus === 'success' ? (
            <div style={{ padding: '1.5rem', background: '#e8f8ee', border: '1px solid #5cb85c', fontFamily: '"Overpass", sans-serif', color: '#333', marginTop: '1.5rem' }}>
              <p style={{ margin: 0 }}>Thank you for your message. Our team will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem', position: 'relative' }} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px' }}
                placeholder="Please leave this field blank"
                value={formData.honeypot}
                onChange={handleChange}
              />

              <div>
                <label htmlFor="cs-fullName" style={labelStyle}>Full Name <span style={{ color: '#F068B5' }}>*</span></label>
                <input
                  id="cs-fullName"
                  name="fullName"
                  type="text"
                  required
                  style={inputStyle}
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="cs-email" style={labelStyle}>Email Address <span style={{ color: '#F068B5' }}>*</span></label>
                <input
                  id="cs-email"
                  name="email"
                  type="email"
                  required
                  style={inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="cs-phone" style={labelStyle}>Phone Number</label>
                <input
                  id="cs-phone"
                  name="phone"
                  type="tel"
                  style={inputStyle}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="cs-message" style={labelStyle}>Your Message <span style={{ color: '#F068B5' }}>*</span></label>
                <textarea
                  id="cs-message"
                  name="message"
                  required
                  rows={6}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <input
                  id="cs-consent"
                  name="consent"
                  type="checkbox"
                  required
                  style={{ marginTop: '0.25rem', flexShrink: 0 }}
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <label htmlFor="cs-consent" style={{ ...labelStyle, marginBottom: 0 }}>
                  Tick this box to confirm that you agree to your data being handled in accordance with our{' '}
                  <Link href="/privacy-policy" style={{ color: '#F068B5' }}>Privacy policy</Link>{' '}
                  and{' '}
                  <Link href="/terms-conditions" style={{ color: '#F068B5' }}>Terms &amp; conditions</Link>. <span style={{ color: '#F068B5' }}>*</span>
                </label>
              </div>

              {formStatus === 'error' && (
                <p style={{ color: '#c0392b', fontFamily: '"Overpass", sans-serif', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button type="submit" className="btn-primary">
                Submit
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Recruitment */}
      <section style={sectionWrap}>
        <h2 style={h2Style}>Recruitment</h2>
        <h3 style={{ fontFamily: '"Raleway", sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#626262', marginBottom: '0.75rem' }}>
          Join The Moonbar Psychic Tarot Team
        </h3>
        <p style={prose}>
          If you&apos;re a genuinely gifted Psychic and like the idea of working from home on a self-employed basis, being able to choose your own hours and earning a competitive rate per minute we would like to hear from you. Our Psychics are paid direct to their bank accounts, have full-time support from our team and are respected and treated as part of the family.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <a
            href="https://www.psychicwork.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            Click Here for an Application Form
          </a>
        </div>
      </section>

      <BackToTop />
    </>
  )
}
