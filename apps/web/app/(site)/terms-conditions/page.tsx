import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
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

export default function TermsConditionsPage() {
  return (
    <>
      <main style={{ maxWidth: '980px', margin: '0 auto', padding: '3.75rem 1rem', fontFamily: '"Overpass", sans-serif', fontSize: '0.938rem', lineHeight: 1.45, color: '#626262' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Terms & Conditions' },
        ]} />
        <h1 style={{ fontFamily: '"Raleway", sans-serif', fontSize: '1.875rem', fontWeight: 900, color: '#626262', marginBottom: '1.5rem', marginTop: '2rem' }}>
          Terms &amp; Conditions
        </h1>

        <p style={pStyle}>
          The following terms and conditions govern the use of the Moonbar Psychic Tarot website and our services. By accessing this website and/or using any of our services, you are agreeing to be bound by these terms and conditions. Please read them carefully. If you disagree with any part of these terms and conditions, please do not use our website or services. Please also read our <Link href="/privacy-policy" style={{ color: '#F068B5' }}>privacy policy</Link>, which also governs your visit to our website.
        </p>

        <h2 style={h2Style}>Our Sites</h2>
        <p style={pStyle}>
          Moonbar Psychic Tarot is a trading name of Allstar Psychics Ltd. Allstar Psychics Ltd is a company incorporated in England and Wales under registered company number 07959492. Our registered office address is Unit 1, 6 Ching Court, London, WC2H 0JA.
        </p>
        <p style={pStyle}>
          These terms and conditions apply to all websites operated by Allstar Psychics Ltd including moonbar.com.au and any sub-domains or related domains.
        </p>

        <h2 style={h2Style}>Moonbar Psychic Tarot&apos;s Information Provider Disclaimer</h2>
        <p style={pStyle}>
          The services provided by Moonbar Psychic Tarot are for entertainment purposes only. The readings, guidance and information given are not a substitute for professional advice in legal, financial, medical or psychological matters. Any decisions made by you as a result of a Psychic reading or any other service provided by Moonbar Psychic Tarot are your own responsibility.
        </p>
        <p style={pStyle}>
          Moonbar Psychic Tarot does not guarantee the accuracy of information given during a reading. Results can vary from person to person. By using our services, you acknowledge that you are 18 years of age or over.
        </p>
        <p style={pStyle}>
          Allstar Psychics Ltd makes no warranty that the information contained on the website is accurate, complete or up to date. The website is provided on an &ldquo;as is&rdquo; basis without any representations or warranties, express or implied. Allstar Psychics Ltd shall not be liable for any loss or damage arising directly or indirectly from your use of or inability to use this website or any information provided on the website.
        </p>

        <h2 style={h2Style}>Indemnification</h2>
        <p style={pStyle}>
          You agree to indemnify and hold harmless Allstar Psychics Ltd, its officers, directors, employees, agents, licensors, suppliers and any third party information providers to the service from and against all losses, expenses, damages and costs, including reasonable lawyers&apos; fees, resulting from any violation of these terms and conditions (including negligent or wrongful conduct) by you or your use and access of the service.
        </p>

        <h2 style={h2Style}>Credit Card Psychic Readings</h2>
        <p style={pStyle}>
          Moonbar Psychic Tarot offers Credit Card Psychic Readings via our website. Readings are charged per minute and the rate is clearly shown before you confirm your booking. You must be 18 years or older to use this service and must be the bill payer or have the bill payer&apos;s permission to use the credit or debit card.
        </p>
        <p style={pStyle}>
          By proceeding with a credit card reading, you confirm that you are 18 years of age or over and that you are authorised to use the payment card provided. All credit card transactions are processed securely. Payment will be taken at the end of your reading.
        </p>
        <p style={pStyle}>
          Your credit card statement will show a charge from Allstar Psychics Ltd or a related entity. Moonbar Psychic Tarot reserves the right to refuse service to any person at any time.
        </p>

        <h2 style={h2Style}>Credit Card Refund Policy</h2>
        <p style={pStyle}>
          If you are unhappy with any aspect of a Credit Card reading, please contact our customer services team within 14 days of the reading taking place. We will review the recording of the reading and if we agree that the reading was below our expected standards, we may offer a partial or full refund at our discretion.
        </p>
        <p style={pStyle}>
          Refunds will be processed to the original payment method and may take 3&ndash;5 working days to appear on your statement. We are unable to offer refunds if the full duration of the reading has been consumed and no complaint was raised during the reading itself.
        </p>

        <h2 style={h2Style}>Premium Rate Services Terms and Conditions</h2>
        <p style={pStyle}>
          Moonbar Psychic Tarot offers Premium Rate telephone services. Calls to our premium rate numbers are charged at the rate stated when you access the service. Charges are per minute from BT landlines. Charges from other networks and mobiles may vary. Please check with your network provider.
        </p>
        <p style={pStyle}>
          You must be 18 years or older and must be the bill payer or have the bill payer&apos;s permission to call our premium rate services. By calling a premium rate number you confirm that you are 18 years of age or over and that you are the bill payer or have the bill payer&apos;s permission.
        </p>
        <p style={pStyle}>
          Premium rate services are regulated by the Phone-paid Services Authority (PSA). Our registration number with the PSA is available on request. All services provided must comply with the PSA Code of Practice.
        </p>

        <h2 style={h2Style}>Premium Rate Services Refund Policy</h2>
        <p style={pStyle}>
          If you are unhappy with a premium rate reading, please contact our customer services team. We will review your complaint and if we agree that the reading was below our expected standards, we may offer a credit note or a refund at our discretion. We are regulated by the Phone-paid Services Authority and will comply with all relevant regulations in handling complaints and refunds.
        </p>

        <h2 style={h2Style}>Promotional Messages</h2>
        <p style={pStyle}>
          From time to time, Moonbar Psychic Tarot may send promotional messages to customers who have opted in to receive them. If you no longer wish to receive promotional messages, you can opt out at any time by <Link href="/customer-service" style={{ color: '#F068B5' }}>clicking this link</Link> and completing the contact form to request removal from our mailing list.
        </p>
        <p style={pStyle}>
          We will process your opt-out request within a reasonable timeframe. Please note that you may still receive transactional messages relating to services you have purchased.
        </p>

        <h2 style={h2Style}>Chargebacks</h2>
        <p style={pStyle}>
          If you initiate a chargeback with your bank or card provider without first contacting our customer services team, we reserve the right to dispute the chargeback. We record all readings and will provide evidence to your bank if required. We strongly encourage you to contact us first as we are committed to resolving disputes quickly and fairly.
        </p>
        <p style={pStyle}>
          Fraudulent chargeback claims may result in your account being suspended and may be reported to the relevant authorities.
        </p>

        <h2 style={h2Style}>Email readings</h2>
        <p style={pStyle}>
          Moonbar Psychic Tarot offers email readings as a paid service. Email readings are completed within the stated turnaround time. Email readings are not refundable once the reading has been completed and delivered to you. If you have not received your email reading within the stated turnaround time, please contact our customer services team by <Link href="/customer-service" style={{ color: '#F068B5' }}>clicking here</Link>.
        </p>
        <p style={pStyle}>
          Email readings are intended for entertainment purposes only. The accuracy of email readings cannot be guaranteed. Results may vary.
        </p>

        <h2 style={h2Style}>Customer Services</h2>
        <p style={pStyle}>
          If you have any questions or concerns about our services, please contact our customer services team by <Link href="/customer-service" style={{ color: '#F068B5' }}>clicking here</Link>. We aim to respond to all enquiries within 48 hours during business hours (Monday to Friday, 9am&ndash;5pm GMT).
        </p>
        <p style={pStyle}>
          <Link href="/privacy-policy" style={{ color: '#F068B5' }}>Read our Privacy Policy by clicking here</Link>.
        </p>

        <h2 style={h2Style}>Our Address Details</h2>
        <p style={pStyle}>
          Allstar Psychics Ltd<br />
          Unit 1, 6 Ching Court<br />
          London<br />
          WC2H 0JA<br />
          United Kingdom
        </p>
        <p style={pStyle}>
          Registered in England and Wales. Company number: 07959492.
        </p>
      </main>

      <BackToTop />
    </>
  )
}
