import { redirect } from 'next/navigation'

/**
 * Email Readings are temporarily disabled.
 * Visitors are sent to the SMS Readings page until the service is reinstated.
 */
export default function PsychicEmailReadingsPage() {
  redirect('/psychic-sms-readings')
}
