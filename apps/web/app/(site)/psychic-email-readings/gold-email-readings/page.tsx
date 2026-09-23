import { redirect } from 'next/navigation'

/**
 * Gold Email Readings are temporarily disabled.
 * Visitors are sent to the SMS Readings page until the service is reinstated.
 */
export default function GoldEmailReadingsPage() {
  redirect('/psychic-sms-readings')
}
