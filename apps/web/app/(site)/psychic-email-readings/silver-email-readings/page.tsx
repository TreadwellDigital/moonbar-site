import { redirect } from 'next/navigation'

/**
 * Silver Email Readings are temporarily disabled.
 * Visitors are sent to the SMS Readings page until the service is reinstated.
 */
export default function SilverEmailReadingsPage() {
  redirect('/psychic-sms-readings')
}
