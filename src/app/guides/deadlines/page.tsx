import Link from 'next/link'
import { ArrowRight, Calendar, AlertTriangle, Clock, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NR6 Deadlines & Remittances - NR6.ca | Key Dates for Non-Resident Landlords',
  description: 'Important deadlines for NR6 filing, remittance schedules, and penalties. Stay compliant with CRA requirements.',
}

const deadlines = [
  {
    title: 'NR6 Filing (New Properties)',
    when: 'Before first rental payment',
    description: 'File NR6 before the first rental payment is made to have reduced withholding from day one.',
    importance: 'critical',
  },
  {
    title: 'NR6 Renewal (Existing Properties)',
    when: 'By December 31',
    description: 'Renew your NR6 by year-end to maintain reduced withholding for the following year.',
    importance: 'critical',
  },
  {
    title: 'Monthly Remittance',
    when: '15th of following month',
    description: 'Withholding tax must be remitted to CRA by the 15th of the month following payment.',
    importance: 'high',
  },
  {
    title: 'Section 216 Return',
    when: 'June 30 of following year',
    description: 'File your Section 216 return to report actual income and claim any refund.',
    importance: 'critical',
  },
  {
    title: 'NR4 Information Return',
    when: 'March 31 of following year',
    description: 'Payers must issue NR4 slips to non-residents by this date.',
    importance: 'medium',
  },
]

const penalties = [
  {
    violation: 'Late NR6 filing',
    consequence: 'Standard 25% withholding applies until NR6 is approved',
  },
  {
    violation: 'Late remittance',
    consequence: 'Penalty of 10% on amounts owed, plus interest',
  },
  {
    violation: 'Failure to file Section 216',
    consequence: 'NR6 election may be revoked; standard 25% withholding required',
  },
  {
    violation: 'Underreported withholding',
    consequence: 'Agent may be held liable for the shortfall plus penalties',
  },
]

export default function DeadlinesPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-primary" />
            <p className="text-sm text-primary-light font-semibold uppercase tracking-wide">Guide</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            NR6 Deadlines & Remittance Schedule
          </h1>
          <p className="text-xl text-muted">
            Stay compliant with these important dates for NR6 filing, tax remittances, and required returns.
          </p>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-primary mb-8">Key Deadlines</h2>
          
          <div className="space-y-4">
            {deadlines.map((deadline) => (
              <div 
                key={deadline.title} 
                className={`card border-l-4 ${
                  deadline.importance === 'critical' 
                    ? 'border-l-red-500 bg-red-50/30' 
                    : deadline.importance === 'high'
                    ? 'border-l-yellow-500 bg-yellow-50/30'
                    : 'border-l-blue-500 bg-blue-50/30'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{deadline.title}</h3>
                    <p className="text-muted text-sm mt-1">{deadline.description}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border flex-shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-primary">{deadline.when}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-primary mb-8">Annual Timeline Example</h2>
          <p className="text-muted mb-8">Here's a typical timeline for the 2025 tax year:</p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary" />
            
            <div className="space-y-8">
              {[
                { date: 'Dec 2024', event: 'File or renew NR6 for 2025', side: 'left' },
                { date: 'Jan-Dec 2025', event: 'Monthly remittances due 15th of following month', side: 'right' },
                { date: 'Mar 2026', event: 'Receive NR4 slip from payer', side: 'left' },
                { date: 'Jun 30, 2026', event: 'File Section 216 return', side: 'right' },
                { date: 'Dec 2025', event: 'File or renew NR6 for 2026', side: 'left' },
              ].map((item, index) => (
                <div key={index} className={`relative pl-12 md:pl-0 ${item.side === 'left' ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}>
                  {/* Dot */}
                  <div className={`absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center -translate-x-0 md:-translate-x-1/2`}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className={`card inline-block ${item.side === 'left' ? 'md:mr-8' : 'md:ml-8'}`}>
                    <p className="text-sm text-primary-light font-semibold">{item.date}</p>
                    <p className="text-foreground font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remittance Schedule */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-primary mb-4">Monthly Remittance Schedule</h2>
          <p className="text-muted mb-8">
            Withholding tax must be remitted to CRA on a monthly basis. Here's how it works:
          </p>
          
          <div className="card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-semibold text-foreground">Rent Received</th>
                  <th className="text-left py-3 font-semibold text-foreground">Remittance Due</th>
                  <th className="text-left py-3 font-semibold text-foreground">Form</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 text-muted">January rent</td>
                  <td className="py-3">February 15</td>
                  <td className="py-3">NR76</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-muted">February rent</td>
                  <td className="py-3">March 15</td>
                  <td className="py-3">NR76</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-muted">...</td>
                  <td className="py-3">...</td>
                  <td className="py-3">...</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted">December rent</td>
                  <td className="py-3">January 15 (next year)</td>
                  <td className="py-3">NR76</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-muted mt-4">
            <strong>Note:</strong> The Canadian agent (property manager or NR6.ca) is typically responsible for remitting the withholding tax.
          </p>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-16 bg-red-50">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl font-bold text-red-800">Penalties for Non-Compliance</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {penalties.map((penalty) => (
              <div key={penalty.violation} className="card bg-white border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">{penalty.violation}</h3>
                <p className="text-red-700 text-sm">{penalty.consequence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reminders */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="card bg-green-50 border-green-200">
            <div className="md:flex items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Never Miss a Deadline
                </h3>
                <p className="text-green-700">
                  When you file with NR6.ca, we send you reminders before important deadlines so you stay compliant with CRA requirements.
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex-shrink-0">
                <Link href="/start" className="btn-primary bg-green-600 hover:bg-green-700">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to File Your NR6?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            We handle deadlines so you don't have to worry.
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
