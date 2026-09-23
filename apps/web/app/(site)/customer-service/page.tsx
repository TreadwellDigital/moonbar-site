import type { Metadata } from 'next'
import CustomerServiceClient from './CustomerServiceClient'

export const metadata: Metadata = {
  title: 'Customer Services',
}

export const revalidate = 3600

export default function CustomerServicePage() {
  return <CustomerServiceClient />
}
