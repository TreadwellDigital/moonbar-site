import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy',
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

const h2Style: React.CSSProperties = {
  fontFamily: '"Raleway", sans-serif',
  fontSize: '1.25rem',
  fontWeight: 900,
  marginTop: '2rem',
  marginBottom: '0.75rem',
  color: '#626262',
}

const pStyle: React.CSSProperties = {
  marginBottom: '1rem',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <main style={{ maxWidth: '980px', margin: '0 auto', padding: '3.75rem 1rem', fontFamily: '"Overpass", sans-serif', fontSize: '0.938rem', lineHeight: 1.45, color: '#626262' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]} />
        <h1 style={{ fontFamily: '"Raleway", sans-serif', fontSize: '1.875rem', fontWeight: 900, color: '#626262', marginBottom: '1.5rem', marginTop: '2rem' }}>
          Privacy Policy
        </h1>

        <p style={pStyle}>
          This privacy policy sets out how Allstar Psychics Ltd (trading as Moonbar Psychic Tarot) uses and protects any information that you give us when you use this website. Allstar Psychics Ltd is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
        </p>
        <p style={pStyle}>
          Allstar Psychics Ltd may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from May 2018.
        </p>

        <h2 style={h2Style}>What we collect</h2>
        <p style={pStyle}>
          We may collect the following information when you use our website or contact us:
        </p>

        <h2 style={h2Style}>Full list of the information we collect</h2>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.4rem' }}>Name and job title</li>
          <li style={{ marginBottom: '0.4rem' }}>Contact information including email address and telephone number</li>
          <li style={{ marginBottom: '0.4rem' }}>Demographic information such as postcode, preferences and interests</li>
          <li style={{ marginBottom: '0.4rem' }}>Payment details (processed securely and not stored by us)</li>
          <li style={{ marginBottom: '0.4rem' }}>Records of any correspondence between us</li>
          <li style={{ marginBottom: '0.4rem' }}>Details of transactions you carry out through our website and of the fulfilment of your orders</li>
          <li style={{ marginBottom: '0.4rem' }}>Details of your visits to our website including, but not limited to, traffic data, location data, weblogs and other communication data</li>
          <li style={{ marginBottom: '0.4rem' }}>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h2 style={h2Style}>How we store the information</h2>
        <p style={pStyle}>
          We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
        </p>
        <p style={pStyle}>
          All data is stored on secure servers and we use encryption where appropriate. We retain your personal data only for as long as necessary for the purposes set out in this privacy policy and as required by law.
        </p>

        <h2 style={h2Style}>What we do with the information</h2>
        <p style={pStyle}>
          We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.4rem' }}>Internal record keeping</li>
          <li style={{ marginBottom: '0.4rem' }}>To improve our products and services</li>
          <li style={{ marginBottom: '0.4rem' }}>To process payments and orders</li>
          <li style={{ marginBottom: '0.4rem' }}>To send promotional emails about new products, special offers or other information which we think you may find interesting, using the email address you have provided (where you have consented to this)</li>
          <li style={{ marginBottom: '0.4rem' }}>To contact you for market research purposes. We may contact you by email, phone or post</li>
          <li style={{ marginBottom: '0.4rem' }}>To customise the website according to your interests</li>
          <li style={{ marginBottom: '0.4rem' }}>To comply with our legal obligations</li>
        </ul>

        <h2 style={h2Style}>Mailing List</h2>
        <p style={pStyle}>
          If you have agreed to receive marketing emails from us, you will receive occasional emails from Moonbar Psychic Tarot about our latest offers, new readers, and special promotions. We will always provide you with a clear and simple way to opt out of receiving future emails.
        </p>
        <p style={pStyle}>
          We will never sell, distribute or lease your personal information to third parties for their own marketing purposes unless we have your permission or are required by law to do so.
        </p>

        <h2 style={h2Style}>Opting into our Services</h2>
        <p style={pStyle}>
          When you register with us or use our services, you will be given the option to opt in to receive marketing communications from us. You are not required to opt in as a condition of using our services. We will only send you marketing communications if you have clearly expressed a preference to receive them.
        </p>
        <p style={pStyle}>
          We rely on consent as the lawful basis for sending marketing emails. We will keep a record of the consents you have given us.
        </p>

        <h2 style={h2Style}>Opting out of Services</h2>
        <p style={pStyle}>
          You may choose to stop receiving our newsletter or marketing emails at any time by following the unsubscribe instructions included in these emails or by <Link href="/customer-service" style={{ color: '#F068B5' }}>clicking here</Link> to contact us directly.
        </p>
        <p style={pStyle}>
          You can also update your preferences or request deletion of your personal data by contacting our customer services team. We will process your request within a reasonable timeframe and in any event within 30 days.
        </p>

        <h2 style={h2Style}>What we don&apos;t and won&apos;t ever do</h2>
        <p style={pStyle}>
          We will never sell, rent or trade your personal information to any third parties for their marketing purposes.
        </p>
        <p style={pStyle}>
          We will never share your personal data with third parties unless it is necessary to provide you with a service you have requested, we are required to do so by law, or we have your explicit consent.
        </p>
        <p style={pStyle}>
          We will never store your payment card details on our systems. All payment processing is handled by a secure third-party payment processor.
        </p>
        <p style={pStyle}>
          We will never knowingly collect personal data from children under the age of 18. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information.
        </p>

        <h2 style={h2Style}>Updates to this policy</h2>
        <p style={pStyle}>
          We keep our privacy policy under regular review and we will place any updates on this web page. This privacy policy was last updated in May 2018. Where we make significant changes to this policy, we may notify you by email or by a notice on our website.
        </p>
        <p style={pStyle}>
          We recommend that you check this page periodically to ensure you are aware of our current privacy practices.
        </p>

        <h2 style={h2Style}>Any questions?</h2>
        <p style={pStyle}>
          If you have any questions about this privacy policy or how we handle your personal data, please do not hesitate to <Link href="/customer-service" style={{ color: '#F068B5' }}>contact us</Link>. You can also email us at{' '}
          <a href="mailto:info@allstarpsychics.co.uk" style={{ color: '#F068B5' }}>info@allstarpsychics.co.uk</a>.
        </p>
        <p style={pStyle}>
          You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe we have not complied with the requirements of the GDPR with regards to your personal data.
        </p>
        <p style={pStyle}>
          Allstar Psychics Ltd<br />
          Unit 1, 6 Ching Court<br />
          London<br />
          WC2H 0JA<br />
          United Kingdom
        </p>
      </main>

      <BackToTop />
    </>
  )
}
