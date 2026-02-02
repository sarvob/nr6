import Link from 'next/link'
import { 
  FileText, 
  ClipboardCheck, 
  Send, 
  Banknote,
  ArrowRight,
  CheckCircle,
  Clock
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works - NR6.ca | Simple 4-Step NR6 Filing Process',
  description: 'Learn how NR6.ca helps non-resident landlords file NR6 forms in 4 simple steps. Complete the process online in under 7 minutes.',
}

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Enter Your Details',
    description: 'Complete our simple online form with your property address, rental income, and expense information. The form takes about 5-7 minutes to complete.',
    details: [
      'Property address and ownership details',
      'Monthly rental income and rental period',
      'Deductible expenses (mortgage interest, property tax, repairs, etc.)',
      'Your contact information',
    ],
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: 'We Prepare Your NR6',
    description: 'Our team reviews your submission and prepares your NR6 form according to CRA requirements. We calculate your estimated withholding and ensure everything is accurate.',
    details: [
      'Professional review of all information',
      'NR6 form preparation',
      'Withholding tax calculation',
      'Quality check before submission',
    ],
  },
  {
    number: 3,
    icon: Send,
    title: 'We File With CRA',
    description: 'We submit your completed NR6 form directly to the Canada Revenue Agency and act as your Canadian agent—a requirement for non-resident landlords.',
    details: [
      'Direct submission to CRA',
      'We serve as your Canadian agent',
      'Handle any CRA correspondence',
      'Status updates throughout the process',
    ],
  },
  {
    number: 4,
    icon: Banknote,
    title: 'Pay Tax on Net Income',
    description: 'Once CRA approves your NR6, your property manager only withholds tax on your net rental income (after expenses), not the full 25% on gross rent.',
    details: [
      'Approval letter from CRA',
      'Reduced withholding rate',
      'Significant tax savings',
      'Annual reminders for renewal',
    ],
  },
]

const timeline = [
  { stage: 'You submit form', time: '5-7 minutes' },
  { stage: 'We prepare NR6', time: '1-2 business days' },
  { stage: 'We submit to CRA', time: 'Same day' },
  { stage: 'CRA processes', time: '4-8 weeks (varies)' },
  { stage: 'Approval received', time: 'Effective for tax year' },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            How NR6.ca Works
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Four simple steps to reduce your Canadian rental income withholding tax.
            Complete the process online in under 7 minutes.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 w-0.5 h-32 bg-border" />
                )}
                
                <div className="md:flex gap-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-primary-light uppercase tracking-wide">
                        Step {step.number}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">{step.title}</h2>
                    <p className="text-muted mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading">Expected Timeline</h2>
            <p className="section-subheading">
              From submission to CRA approval, here's what to expect.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary" />
              
              {timeline.map((item, index) => (
                <div key={item.stage} className="relative pl-12 pb-8 last:pb-0">
                  {/* Dot */}
                  <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="card">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{item.stage}</span>
                      <span className="text-primary-light font-medium">{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading">What You'll Need</h2>
            <p className="section-subheading">
              Gather this information before starting to complete the form quickly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold text-lg text-foreground mb-4">Property Information</h3>
              <ul className="space-y-2 text-muted">
                <li>• Property address in Canada</li>
                <li>• Your ownership percentage</li>
                <li>• Type of rental (long-term or Airbnb)</li>
                <li>• First year of rental income</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg text-foreground mb-4">Financial Details</h3>
              <ul className="space-y-2 text-muted">
                <li>• Monthly rental income</li>
                <li>• Number of months rented</li>
                <li>• Mortgage interest (annual)</li>
                <li>• Property taxes, condo fees</li>
                <li>• Insurance, repairs, other expenses</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-muted mt-8">
            Don't have exact numbers? Estimates are fine—we'll work with what you have.
          </p>
        </div>
      </section>

      {/* Example Savings */}
      <section className="py-16 bg-blue-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading">Example Savings</h2>
            <p className="section-subheading">
              See how filing NR6 can significantly reduce your withholding tax.
            </p>
          </div>
          <div className="card max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-4">Without NR6</h3>
                <p className="text-sm text-muted mb-2">Gross rent: $36,000/year</p>
                <p className="text-sm text-muted mb-4">25% withholding on gross</p>
                <div className="text-3xl font-bold text-red-600">$9,000</div>
                <p className="text-sm text-red-600">Withheld annually</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-4">With NR6</h3>
                <p className="text-sm text-muted mb-2">Net income: $16,000/year</p>
                <p className="text-sm text-muted mb-4">25% withholding on net</p>
                <div className="text-3xl font-bold text-green-600">$4,000</div>
                <p className="text-sm text-green-600">Withheld annually</p>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-border">
              <p className="text-muted mb-2">Annual Savings</p>
              <div className="text-4xl font-bold text-primary">$5,000</div>
              <p className="text-sm text-muted mt-2">
                Actual savings depend on your specific rental income and expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Begin your NR6 filing now. It only takes 5-7 minutes.
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
