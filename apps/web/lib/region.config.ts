/**
 * Region configuration — all region-specific values live here.
 * Set NEXT_PUBLIC_REGION=AU|UK|NZ in Vercel project environment variables.
 */

export type Region = 'AU' | 'UK' | 'NZ'

export interface RegionConfig {
  region: Region
  locale: string
  currency: string
  currencySymbol: string
  domain: string
  walletUrl: string
  chatUrl: string
  phoneSpecial: string
  phoneSpecialOffer: string
  phoneStandard: string
  phoneStandardOffer: string
  // Optional extras — UK has SMS, NZ has phonebill
  phoneSms?: string
  phoneSmsKeyword?: string
  phonePhonebill?: string
  phonePhonebillOffer?: string
  termsShort: string
  termsLong: string
  sp: string
  optOut: string
  hreflangs: Array<{ hreflang: string; href: string; slug?: string }>
}

export const REGION_CONFIG: Record<Region, RegionConfig> = {
  AU: {
    region:              'AU',
    locale:              'en-AU',
    currency:            'AUD',
    currencySymbol:      '$',
    domain:              'moonbar.com.au',
    walletUrl:           'https://wallet.moonbar.com.au',
    chatUrl:             'https://livechat.moonbar.com.au',
    // All Points North Publications Ltd — AU numbers
    phoneSpecial:        '1300 294 098',
    phoneSpecialOffer:   '20 mins for $29.99. 30 / 40 mins available. Pay by Card.',
    phoneStandard:       '1300 399 909',
    phoneStandardOffer:  '10 mins for $22.50. 20 / 30 / 45 mins available.',
    termsShort:          'Local rate call costs apply. Mobiles may be more. Over 18\'s. Entertainment Only. Must have bill payers permission. Calls recorded.',
    termsLong:           'Local rate call costs apply - Mobiles may be more. Over 18\'s. Entertainment Only. Must have bill payers permission. Calls recorded. You will receive promo msgs, to opt out, send STOP to +61428808307.',
    sp:                  'SP: Allstar Psychics Ltd. Helpdesk: info@allstarpsychics.co.uk',
    optOut:              'To opt out send STOP to +61428808307',
    hreflangs: [
      { hreflang: 'en-AU',    href: 'https://moonbar.com.au' },
      { hreflang: 'en-GB',    href: 'https://moonbar.co.uk' },
      { hreflang: 'en-NZ',    href: 'https://moonbar.co.nz' },
      { hreflang: 'x-default', href: 'https://moonbar.com.au' },
    ],
  },

  UK: {
    region:              'UK',
    locale:              'en-GB',
    currency:            'GBP',
    currencySymbol:      '£',
    domain:              'moonbar.co.uk',
    walletUrl:           'https://wallet.moonbar.co.uk',
    chatUrl:             'https://livechat.moonbar.co.uk',
    // From live moonbar.co.uk — verified August 2026
    phoneSpecial:        '0203 472 1015',
    phoneSpecialOffer:   '20 mins for £12.99. 40 mins for £24.99. 60 mins for £34.99. Pay by Card.',
    phoneStandard:       '0905 766 0004',
    phoneStandardOffer:  '75p per minute + your phone company\'s access charge.',
    // UK text readings (unique to UK)
    phoneSms:            '85358',
    phoneSmsKeyword:     'MOON',
    termsShort:          '18+. Entertainment only. Bill payer\'s permission required. Calls recorded.',
    termsLong:           '0905 766 0004: 75p/min + network access charge. 0203 472 1015: 20 mins £12.99, 40 mins £24.99, 60 mins £34.99. 18+. Entertainment only. Bill payer\'s permission required. Free promo msgs may be sent.',
    sp:                  'SP: Allstar Psychics Ltd. Helpdesk: info@allstarpsychics.co.uk or call 0208 712 5690',
    optOut:              'To opt out text DSTOP to 447860033717',
    hreflangs: [
      { hreflang: 'en-AU',    href: 'https://moonbar.com.au' },
      { hreflang: 'en-GB',    href: 'https://moonbar.co.uk' },
      { hreflang: 'en-NZ',    href: 'https://moonbarpsychics.co.nz' },
      { hreflang: 'x-default', href: 'https://moonbar.com.au' },
    ],
  },

  NZ: {
    region:              'NZ',
    locale:              'en-NZ',
    currency:            'NZD',
    currencySymbol:      '$',
    // Current live domain is moonbarpsychics.co.nz — update to moonbar.co.nz when new domain is live
    domain:              'moonbarpsychics.co.nz',
    walletUrl:           'https://wallet.moonbar.com.au',   // NZ uses same AU wallet
    chatUrl:             'https://livechat.moonbar.com.au', // NZ uses same AU chat
    // From live moonbarpsychics.co.nz — verified August 2026
    phoneSpecial:        '04 888-0244',
    phoneSpecialOffer:   '20 minutes $32.99. 30 / 40 mins available. Pay by Card.',
    phoneStandard:       '04 888-0243',
    phoneStandardOffer:  '10 mins for $22.50. 20 / 30 / 45 mins available.',
    // NZ also has a phonebill number
    phonePhonebill:      '1902 262 230',
    phonePhonebillOffer: '$2.75 per min inc GST. Mobiles and payphones may be higher.',
    termsShort:          'Local rate call costs apply. Payments in NZD. Mobiles may be more. Over 18\'s. Entertainment Only. Must have bill payers permission.',
    termsLong:           'Local rate call costs apply - Payments in NZD. Mobiles may be more. Over 18\'s. Entertainment Only. Must have bill payers permission. Calls recorded. You will receive promo msgs, to opt out, send STOP to +61428808307.',
    sp:                  'SP: Allstar Psychics Ltd. Helpdesk: info@allstarpsychics.co.uk',
    optOut:              'To opt out, send STOP to +61428808307',
    hreflangs: [
      { hreflang: 'en-AU',    href: 'https://moonbar.com.au' },
      { hreflang: 'en-GB',    href: 'https://moonbar.co.uk' },
      { hreflang: 'en-NZ',    href: 'https://moonbarpsychics.co.nz' },
      { hreflang: 'x-default', href: 'https://moonbar.com.au' },
    ],
  },
}

/** Returns the active region config based on the NEXT_PUBLIC_REGION env var. */
export function getRegionConfig(): RegionConfig {
  const r = (process.env.NEXT_PUBLIC_REGION ?? 'AU') as Region
  return REGION_CONFIG[r] ?? REGION_CONFIG.AU
}
