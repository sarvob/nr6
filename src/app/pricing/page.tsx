import Link from 'next/link'
import { CheckCircle, ArrowRight, FileText, Calendar, FileCheck, Shield, Users, Headphones, CalendarCheck, HelpCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - NR6.ca | Complete Non-Resident Rental Tax Compliance',
  description: 'Complete tax compliance for $999 CAD/year. Includes NR6, monthly remittances, NR4, Section 216, Canadian agent services, and year-round support.',
}

const filings = [
  {
    name: 'NR6 Form',
    description: 'Reduces withholding from 25% gross to net income',
    frequency: 'Annual',
    typicalCost: '$300–500',
    icon: FileText,
  },
  {
    name: 'Monthly Remittances',
    description: 'Calculate and submit withholding to CRA',
    frequency: '12x/year',
    typicalCost: '$50–100/month',
    icon: Calendar,
  },
  {
    name: 'NR4 Information Slip',
    description: 'Year-end reporting slip for non-resident payments',
    frequency: 'Annual',
    typicalCost: '$100–200',
    icon: FileCheck,
  },
  {
    name: 'Section 216 Return',
    description: 'Your Canadian tax return to reconcile actual tax',
    frequency: 'Annual',
    typicalCost: '$400–800',
    icon: Shield,
  },
]

const additionalServices = [
  {
    name: 'Canadian Agent Services',
    description: 'We act as your CRA-required Canadian agent',
    typicalCost: '$200–500/year',
    icon: Users,
  },
  {
    name: 'CRA Correspondence',
    description: 'We handle letters and inquiries from CRA',
    typicalCost: '$50–100/hour',
    icon: FileText,
  },
  {
    name: 'Year-Round Support',
    description: 'Email support whenever you have questions',
    typicalCost: '$50–100/hour',
    icon: Headphones,
  },
  {
    name: 'Deadline Reminders',
    description: 'We remind you before every important deadline',
    typicalCost: 'Priceless',
    icon: CalendarCheck,
  },
]

const comparison = [
  {
    feature: 'NR6 Form',
    nr6ca: true,
    accountant: '$300–500',
  },
  {
    feature: 'Monthly Remittances (12x)',
    nr6ca: true,
    accountant: '$600–1,200',
  },
  {
    feature: 'NR4 Slip',
    nr6ca: true,
    accountant: '$100–200',
  },
  {
    feature: 'Section 216 Return',
    nr6ca: true,
    accountant: '$400–800',
  },
  {
    feature: 'Canadian Agent',
    nr6ca: true,
    accountant: '$200–500',
  },
  {
    feature: 'CRA Correspondence',
    nr6ca: true,
    accountant: 'Hourly fees',
  },
  {
    feature: 'Email Support',
    nr6ca: true,
    accountant: 'Hourly fees',
  },
  {
    feature: 'Total',
    nr6ca: '$999',
    accountant: '$1,800–3,500+',
  },
]

export default function PricingPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Complete Non-Resident Rental Compliance
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Every CRA filing. Every deadline. One annual fee. 
            We handle your complete Canadian rental tax obligations.
          </p>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            <div className="card border-2 border-primary shadow-lg">
              <div className="text-center pb-6 border-b border-border">
                <p className="text-muted uppercase tracking-wide text-sm font-semibold mb-2">
                  Annual Compliance Package
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-6xl font-bold text-primary">$999</span>
                  <span className="text-muted text-lg">CAD</span>
                </div>
                <p className="text-muted">per property, per year</p>
                <p className="text-green-600 font-medium mt-2">
                  That's less than $85/month for complete peace of mind
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="font-semibold text-foreground mb-4 text-lg">All CRA Filings Included:</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {filings.map((filing) => (
                    <div key={filing.name} className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                      <filing.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{filing.name}</p>
                        <p className="text-xs text-muted">{filing.frequency}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h3 className="font-semibold text-foreground mb-4 text-lg">Plus These Services:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Canadian agent services (CRA requirement)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">CRA correspondence handling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Year-round email support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Deadline reminders for all filings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Withholding rate optimization</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <Link href="/start" className="btn-primary w-full text-center block text-lg py-4">
                  Get Started Now
                </Link>
                <p className="text-sm text-muted text-center mt-4">
                  Secure payment via Stripe. Setup takes about 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading">15+ CRA Filings & Interactions Per Year</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Here's everything we handle on your behalf. One price covers it all.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-4">Required CRA Filings</h3>
              <div className="space-y-4">
                {filings.map((filing) => (
                  <div key={filing.name} className="card">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <filing.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">{filing.name}</h4>
                          <span className="text-xs text-primary bg-blue-100 px-2 py-1 rounded">{filing.frequency}</span>
                        </div>
                        <p className="text-sm text-muted">{filing.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-4">Additional Services</h3>
              <div className="space-y-4">
                {additionalServices.map((service) => (
                  <div key={service.name} className="card">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">{service.name}</h4>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Included</span>
                        </div>
                        <p className="text-sm text-muted">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading">The Value Breakdown</h2>
            <p className="section-subheading">
              See what you'd pay if you hired these services separately.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Service</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary bg-blue-50">NR6.ca</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted">If Purchased Separately</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={row.feature} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${row.feature === 'Total' ? 'border-t-2 border-primary font-bold' : ''}`}>
                    <td className="py-4 px-4 text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center bg-blue-50/50">
                      {row.nr6ca === true ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-primary font-bold text-xl">{row.nr6ca}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-muted">{row.accountant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-foreground">
              <strong className="text-primary">You save $800–2,500+</strong> compared to hiring an accountant
            </p>
          </div>
        </div>
      </section>

      {/* Why Flat Fee */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why One Annual Fee?</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              We believe in predictable, transparent pricing. No hourly billing surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-lg mb-2">Predictable Cost</h3>
              <p className="text-muted text-sm">
                Know exactly what you'll pay. Budget with confidence for the entire year.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-semibold text-lg mb-2">Ask Freely</h3>
              <p className="text-muted text-sm">
                Email us anytime. No per-question charges. No "clock running" anxiety.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-lg mb-2">Complete Coverage</h3>
              <p className="text-muted text-sm">
                Every filing, every deadline, every CRA interaction—all covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple Properties */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="card border-2 border-primary">
            <div className="md:flex items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Multiple Properties?</h3>
                <p className="text-muted">
                  Each property is $999/year. For 3+ properties, contact us for volume discounts.
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

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading">Pricing Questions</h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="card">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">When do I pay?</h4>
                  <p className="text-muted text-sm">You pay upfront when you sign up. The fee covers the full year of compliance services.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Are there any hidden fees?</h4>
                  <p className="text-muted text-sm">No. $999 covers everything listed—all filings, agent services, and support. No surprises.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">What if I already filed my NR6?</h4>
                  <p className="text-muted text-sm">We can take over from wherever you are. Contact us to discuss your situation.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Is there a money-back guarantee?</h4>
                  <p className="text-muted text-sm">If we haven't submitted any filings yet, we offer a full refund. Contact us within 14 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Worry-Free Compliance?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            One price. Every filing. All year. Get started in about 5 minutes.
          </p>
          <Link href="/start" className="bg-white text-primary px-8 py-4 rounded-md font-semibold text-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
