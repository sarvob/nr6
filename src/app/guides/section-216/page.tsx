import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle, Calendar } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Section 216 Guide - NR6.ca | Understanding Section 216 Returns',
  description: 'Complete guide to Section 216 returns for non-resident landlords. Learn what it is, why it\'s required, and how to file it correctly.',
}

export default function Section216GuidePage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow">
          <p className="text-sm text-primary-light font-semibold uppercase tracking-wide mb-2">Guide</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Understanding Section 216 Returns
          </h1>
          <p className="text-xl text-muted">
            A complete guide to Section 216 income tax returns for non-resident landlords with Canadian rental property.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-narrow prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-primary mb-4">What is a Section 216 Return?</h2>
          <p className="text-muted mb-6">
            A Section 216 return is an income tax return that non-resident landlords must file to report their Canadian rental income. It's named after Section 216 of the Income Tax Act, which allows non-residents to elect to file a Canadian tax return on their rental income.
          </p>
          <p className="text-muted mb-8">
            If you filed an NR6 form, you are <strong>required</strong> to file a Section 216 return. This return reconciles the tax withheld during the year with your actual tax liability, and you may receive a refund if too much was withheld.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">Section 216 vs. Regular Tax Return</h2>
          <div className="card mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-semibold text-foreground">Feature</th>
                  <th className="text-left py-2 font-semibold text-foreground">Section 216</th>
                  <th className="text-left py-2 font-semibold text-foreground">Regular T1</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-muted">Who Files</td>
                  <td className="py-2">Non-residents</td>
                  <td className="py-2">Canadian residents</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-muted">Income Reported</td>
                  <td className="py-2">Canadian rental only</td>
                  <td className="py-2">Worldwide income</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-muted">Deadline</td>
                  <td className="py-2">June 30 of following year</td>
                  <td className="py-2">April 30</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-muted">Tax Rate</td>
                  <td className="py-2">Graduated rates (like residents)</td>
                  <td className="py-2">Graduated rates</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted">Deductions</td>
                  <td className="py-2">Limited to rental expenses</td>
                  <td className="py-2">Full personal deductions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">Why File a Section 216 Return?</h2>
          <ul className="space-y-3 mb-8">
            {[
              'Required if you filed an NR6 form',
              'Claim a refund if too much tax was withheld',
              'Report actual expenses to reduce taxable income',
              'Avoid penalties for non-filing',
              'Maintain compliance with CRA requirements',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Key Deadlines</h2>
          <div className="card bg-blue-50 border-primary mb-8">
            <div className="flex items-start gap-3">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary mb-2">Filing Deadline: June 30</h3>
                <p className="text-muted text-sm">
                  Section 216 returns must be filed by June 30 of the year following the tax year. 
                  For example, the 2025 tax year return is due June 30, 2026.
                </p>
                <p className="text-muted text-sm mt-2">
                  <strong>Note:</strong> If you miss the 2-year deadline, you lose the ability to file and may forfeit any refund.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">What Happens If You Don't File?</h2>
          <div className="card bg-red-50 border-red-200 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-red-800 mb-2">Consequences of Not Filing</h3>
                <ul className="text-red-700 text-sm space-y-2">
                  <li>• Your NR6 election may be revoked by CRA</li>
                  <li>• You may face penalties and interest charges</li>
                  <li>• Future NR6 applications may be denied</li>
                  <li>• You forfeit any potential refund</li>
                  <li>• Your property manager may be held liable for withholding shortfall</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">Information Needed for Section 216</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="card">
              <h3 className="font-semibold text-foreground mb-3">Income Information</h3>
              <ul className="text-sm text-muted space-y-2">
                <li>• Total rental income received</li>
                <li>• NR4 slips from payers</li>
                <li>• Tax withheld during the year</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-foreground mb-3">Expense Documentation</h3>
              <ul className="text-sm text-muted space-y-2">
                <li>• Mortgage interest statements</li>
                <li>• Property tax receipts</li>
                <li>• Insurance premiums</li>
                <li>• Repair and maintenance invoices</li>
                <li>• Property management fees</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">The Relationship Between NR6 and Section 216</h2>
          <p className="text-muted mb-4">
            Think of NR6 and Section 216 as two parts of the same process:
          </p>
          <div className="card mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <p className="font-semibold text-foreground">NR6 (Beginning of Year)</p>
                  <p className="text-sm text-muted">Estimates your net income and sets withholding rate for the year</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <p className="font-semibold text-foreground">Section 216 (Following Year)</p>
                  <p className="text-sm text-muted">Reports actual income/expenses and reconciles the tax withheld</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help With Your NR6 Filing?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            We handle NR6 preparation and submission. Start saving today.
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
