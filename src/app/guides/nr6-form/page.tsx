import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NR6 Form Guide - NR6.ca | Complete Guide for Non-Resident Landlords',
  description: 'Complete guide to the NR6 form for non-resident Canadian landlords. Learn what it is, who qualifies, benefits, and how to file.',
}

export default function NR6FormGuidePage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow">
          <p className="text-sm text-primary-light font-semibold uppercase tracking-wide mb-2">Guide</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            The Complete NR6 Form Guide
          </h1>
          <p className="text-xl text-muted">
            Everything you need to know about the NR6 form and how it can save you thousands on Canadian rental income tax.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-narrow prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-primary mb-4">What is the NR6 Form?</h2>
          <p className="text-muted mb-6">
            The NR6 form, officially titled "Undertaking to File an Income Tax Return by a Non-Resident Receiving Rent from Real or Immovable Property," is a CRA form that allows non-resident landlords to elect to have tax withheld on their <strong>net</strong> rental income instead of the standard 25% on <strong>gross</strong> rent.
          </p>
          <p className="text-muted mb-8">
            Without an approved NR6, your property manager or tenant is legally required to withhold 25% of your gross rental income and remit it to CRA. This can result in significant over-payment of tax, as it doesn't account for your expenses.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">Who Qualifies for NR6?</h2>
          <p className="text-muted mb-4">You may file an NR6 if you:</p>
          <ul className="space-y-2 mb-8">
            {[
              'Are a non-resident of Canada for tax purposes',
              'Own rental property in Canada (residential or commercial)',
              'Receive rental income from the property',
              'Have a Canadian agent to act on your behalf',
              'Agree to file a Section 216 return by June 30 of the following year',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Benefits of Filing NR6</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="card bg-green-50 border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Reduced Withholding</h3>
              <p className="text-green-700 text-sm">
                Pay tax on net income (after expenses) instead of gross rent. This can reduce your withholding by 50-75%.
              </p>
            </div>
            <div className="card bg-green-50 border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Better Cash Flow</h3>
              <p className="text-green-700 text-sm">
                Keep more of your rental income throughout the year instead of waiting for a refund.
              </p>
            </div>
            <div className="card bg-green-50 border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Deduct Expenses</h3>
              <p className="text-green-700 text-sm">
                Mortgage interest, property taxes, repairs, insurance, and management fees can all reduce taxable income.
              </p>
            </div>
            <div className="card bg-green-50 border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Legal Compliance</h3>
              <p className="text-green-700 text-sm">
                NR6 is the proper way to reduce withholding while staying compliant with CRA regulations.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">Example: How NR6 Saves You Money</h2>
          <div className="card mb-8">
            <p className="text-muted mb-4">Consider a property with:</p>
            <ul className="text-muted space-y-1 mb-4">
              <li>• Gross annual rent: $36,000</li>
              <li>• Mortgage interest: $12,000</li>
              <li>• Property taxes: $4,000</li>
              <li>• Other expenses: $4,000</li>
              <li>• Net income: $16,000</li>
            </ul>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg text-center">
                <p className="text-sm text-red-700 font-medium">Without NR6</p>
                <p className="text-2xl font-bold text-red-600">$9,000</p>
                <p className="text-xs text-red-600">25% × $36,000 gross</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <p className="text-sm text-green-700 font-medium">With NR6</p>
                <p className="text-2xl font-bold text-green-600">$4,000</p>
                <p className="text-xs text-green-600">25% × $16,000 net</p>
              </div>
            </div>
            <p className="text-center mt-4 font-semibold text-primary">
              Annual Savings: $5,000
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">Important Requirements</h2>
          <div className="card bg-yellow-50 border-yellow-200 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Key Requirements</h3>
                <ul className="text-yellow-700 text-sm space-y-2">
                  <li>• You must have a Canadian resident agent (we provide this service)</li>
                  <li>• You must file a Section 216 return by June 30 of the following year</li>
                  <li>• NR6 must be filed before the first rental payment of the year for full-year coverage</li>
                  <li>• NR6 needs to be renewed annually</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">Eligible Expenses You Can Deduct</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              'Mortgage interest (not principal)',
              'Property taxes',
              'Property management fees',
              'Insurance premiums',
              'Repairs and maintenance',
              'Condo/strata fees',
              'Utilities (if landlord pays)',
              'Advertising for tenants',
              'Legal and accounting fees',
              'Travel expenses (limited)',
            ].map((expense) => (
              <div key={expense} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-foreground">{expense}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let us handle your NR6 filing. $999 flat fee, all-inclusive.
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
