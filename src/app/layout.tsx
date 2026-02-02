import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'NR6.ca - NR6 Filing Service for Non-Resident Landlords',
  description: 'Professional NR6 form filing service for non-resident landlords in Canada. Save up to 75% on withholding tax. Flat fee of $999 per property.',
  keywords: 'NR6, non-resident landlord, Canada tax, withholding tax, rental income, CRA',
  authors: [{ name: 'NR6.ca' }],
  openGraph: {
    title: 'NR6.ca - NR6 Filing Service for Non-Resident Landlords',
    description: 'Professional NR6 form filing service. Save thousands on Canadian rental income tax.',
    url: 'https://nr6.ca',
    siteName: 'NR6.ca',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
