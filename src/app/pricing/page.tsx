import Link from 'next/link'
import { CheckCircle, X, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - NR6.ca | $999 Flat Fee NR6 Filing Service',
  description: 'Transparent pricing for NR6 filing. $999 flat fee per property includes preparation, submission, agent services, and support. No hidden fees.',
}

const included = [
  'Complete NR6 form preparation',
  'Document review and validation',
  'Direct submission to CRA',
  'Canadian agent services (CRA requirement)',
  'Withholding tax calculation assistance',
  'Email support throughout the process',
  'Status updates on your filing',
  'Annual renewal reminders',
]

const comparison = [
  {
    feature: 'Cost',
    nr6ca: '$999 flat fee',
    accountant: '$500–$2,000+ (hourly)',
  },
  {
    feature: 'Process',
    nr6ca: 'Online, 5-7 minutes',
    accountant: 'Meetings, phone calls',
  },
  {
    feature: 'Canadian Agent',
    nr6ca: 'Included',
    accountant: 'Often extra cost',
  },
  {
    feature: 'Turnaround',
    nr6ca: '1-2 business days to submit',
    accountant: '1-2 weeks typical',
  },
  {
    feature: 'Support',
    nr6ca: 'Email support included',
    accountant: 'May incur hourly charges',
  },
  {
    feature: 'Reminders',
    nr6ca: 'Annual reminders included',
    accountant: 'Not typically offered',
  },
]

export default function PricingPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            One flat fee. No surprises. No hidden costs. 
            Everything you need to file your NR6 successfully.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="max-w-lg mx-auto">
            <div className="card border-2 border-primary shadow-lg">
              <div className="text-center pb-6 border-b border-border">
                <p className="text-muted uppercase tracking-wide text-sm font-semibold mb-2">
                  Done-For-You Filing
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-6xl font-bold text-primary">$999</span>
                  <span className="text-muted text-lg">USD</span>
                </div>
                <p className="text-muted">per property, per year</p>
              </div>
              
              <div className="py-6">
                <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <Link href="/start" className="btn-primary w-full text-center block text-lg py-4">
                  Start Filing Now
                </Link>
                <p className="text-sm text-muted text-center mt-4">
                  Secure payment via Stripe. Complete in under 7 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Flat Fee */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why a Flat Fee?</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              We believe in transparent pricing. You know exactly what you'll pay upfront—no hourly billing surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold text-lg mb-2">Predictable Cost</h3>
              <p className="text-muted text-sm">
                Budget with confidence. $999 covers everything from start to finish.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="font-semibold text-lg mb-2">No Hourly Billing</h3>
              <p className="text-muted text-sm">
                Ask questions freely. We don't charge for phone calls or emails.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-semibold text-lg mb-2">All-Inclusive</h3>
              <p className="text-muted text-sm">
                Agent services, reminders, and support are all included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading">NR6.ca vs. Traditional Accountant</h2>
            <p className="section-subheading">
              See how we compare to hiring a traditional Canadian accountant.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary bg-blue-50">NR6.ca</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted">Typical Accountant</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-4 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-primary bg-blue-50/50">{row.nr6ca}</td>
                    <td className="py-4 px-4 text-muted">{row.accountant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Multiple Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <div className="card">
            <div className="md:flex items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Multiple Properties?</h3>
                <p className="text-muted">
                  Each property requires a separate NR6 filing. Simply complete our form once per property.
                  For 3+ properties, contact us about volume discounts.
                </p>
              </div>
              <div className="mt-6 md:mt-0 flex-shrink-0">
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Complete your NR6 filing in under 7 minutes. No account needed.
          </p>
          <Link href="/start" className="bg-white text-primary px-8 py-4 rounded-md font-semibold text-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
            File My NR6 Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
