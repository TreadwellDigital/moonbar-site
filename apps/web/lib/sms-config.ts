/**
 * Centralised SMS configuration — all values come from environment variables.
 * Do NOT hardcode the number, keyword or wallet deep link here.
 *
 * Required env vars (set in .env.local or deployment dashboard when live):
 *   NEXT_PUBLIC_SMS_KEYWORD   — e.g. "MOONBAR"
 *   NEXT_PUBLIC_SMS_NUMBER    — e.g. "+61400000000"
 *   NEXT_PUBLIC_SMS_WALLET_LINK — deep link into Moonbar Wallet for SMS top-up
 *
 * Until all three are set, isLive === false and the sms: CTAs are hidden.
 */

export interface SmsConfig {
  /** Keyword the customer texts to start a reading, or null until configured. */
  keyword: string | null
  /** Long number the customer texts, or null until configured. */
  number: string | null
  /** Wallet top-up / SMS entry link. Falls back to Wallet homepage. */
  walletLink: string
  /** True only when both keyword and number are confirmed and configured. */
  isLive: boolean
}

export function getSmsConfig(): SmsConfig {
  const keyword = process.env.NEXT_PUBLIC_SMS_KEYWORD ?? null
  const number  = process.env.NEXT_PUBLIC_SMS_NUMBER  ?? null
  const walletLink =
    process.env.NEXT_PUBLIC_SMS_WALLET_LINK ?? 'https://wallet.moonbar.com.au/'

  return {
    keyword,
    number,
    walletLink,
    isLive: Boolean(keyword && number),
  }
}

/**
 * Build a validated sms: URI.
 * Only call this when isLive === true.
 */
export function buildSmsUri(number: string, keyword: string): string {
  // Strip everything except digits and leading +
  const clean = number.replace(/[^0-9+]/g, '')
  return `sms:${clean}?&body=${encodeURIComponent(keyword.trim())}`
}
