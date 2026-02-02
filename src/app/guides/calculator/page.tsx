'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calculator, DollarSign, TrendingDown } from 'lucide-react'

export default function CalculatorPage() {
  const [monthlyRent, setMonthlyRent] = useState<number>(2500)
  const [monthsRented, setMonthsRented] = useState<number>(12)
  const [mortgageInterest, setMortgageInterest] = useState<number>(8000)
  const [propertyTax, setPropertyTax] = useState<number>(4000)
  const [otherExpenses, setOtherExpenses] = useState<number>(3000)

  const gross = monthlyRent * monthsRented
  const totalExpenses = mortgageInterest + propertyTax + otherExpenses
  const net = Math.max(gross - totalExpenses, 0)
  const withoutNR6 = gross * 0.25
  const withNR6 = net * 0.25
  const savings = withoutNR6 - withNR6
  const savingsPercent = withoutNR6 > 0 ? ((savings / withoutNR6) * 100).toFixed(0) : 0

  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            NR6 Tax Savings Calculator
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            See how much you could save by filing an NR6 form instead of paying 25% on your gross rental income.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="card">
              <h2 className="text-xl font-bold text-primary mb-6">Enter Your Details</h2>
              
              <div className="space-y-5">
                {/* Monthly Rent */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Monthly Rent (CAD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">$</span>
                    <input
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(Number(e.target.value) || 0)}
                      className="input-field pl-8"
                      min={0}
                    />
                  </div>
                </div>

                {/* Months Rented */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Months Rented Per Year
                  </label>
                  <select
                    value={monthsRented}
                    onChange={(e) => setMonthsRented(Number(e.target.value))}
                    className="input-field"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
                      <option key={m} value={m}>{m} months</option>
                    ))}
                  </select>
                </div>

                {/* Mortgage Interest */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Annual Mortgage Interest (CAD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">$</span>
                    <input
                      type="number"
                      value={mortgageInterest}
                      onChange={(e) => setMortgageInterest(Number(e.target.value) || 0)}
                      className="input-field pl-8"
                      min={0}
                    />
                  </div>
                </div>

                {/* Property Tax */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Annual Property Tax (CAD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">$</span>
                    <input
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(Number(e.target.value) || 0)}
                      className="input-field pl-8"
                      min={0}
                    />
                  </div>
                </div>

                {/* Other Expenses */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Other Annual Expenses (CAD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">$</span>
                    <input
                      type="number"
                      value={otherExpenses}
                      onChange={(e) => setOtherExpenses(Number(e.target.value) || 0)}
                      className="input-field pl-8"
                      min={0}
                    />
                  </div>
                  <p className="text-xs text-muted mt-1">
                    Insurance, repairs, condo fees, management fees, etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Summary */}
              <div className="card bg-gray-50">
                <h3 className="text-lg font-semibold text-foreground mb-4">Income Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted">Gross Annual Rent</span>
                    <span className="font-medium">${gross.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Total Expenses</span>
                    <span className="font-medium">-${totalExpenses.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-medium">Net Rental Income</span>
                    <span className="font-bold text-primary">${net.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Comparison */}
              <div className="card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Tax Comparison</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-red-50 rounded-lg text-center">
                    <p className="text-sm text-red-700 mb-1">Without NR6</p>
                    <p className="text-3xl font-bold text-red-600">${withoutNR6.toLocaleString()}</p>
                    <p className="text-xs text-red-600">25% × gross rent</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <p className="text-sm text-green-700 mb-1">With NR6</p>
                    <p className="text-3xl font-bold text-green-600">${withNR6.toLocaleString()}</p>
                    <p className="text-xs text-green-600">25% × net income</p>
                  </div>
                </div>

                {/* Savings Highlight */}
                <div className="p-6 bg-gradient-to-r from-green-600 to-green-500 rounded-lg text-center text-white">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingDown className="w-6 h-6" />
                    <span className="text-green-100">Your Annual Savings</span>
                  </div>
                  <p className="text-4xl font-bold mb-1">${savings.toLocaleString()}</p>
                  <p className="text-green-100 text-sm">
                    That's {savingsPercent}% less in withholding tax
                  </p>
                </div>
              </div>

              {/* Service Cost Context */}
              <div className="card border-primary bg-blue-50">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Our Service: $999</p>
                    <p className="text-sm text-muted mt-1">
                      {savings > 999 
                        ? `With potential savings of $${savings.toLocaleString()}, our service pays for itself ${(savings / 999).toFixed(1)}x over!`
                        : 'Filing NR6 can provide savings even when they appear smaller—you also get better cash flow throughout the year.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-sm text-muted">
              <strong>Disclaimer:</strong> This calculator provides estimates only. Actual tax liability depends on many factors including your specific situation, tax treaties, and CRA assessment. Consult a tax professional for personalized advice.
            </p>
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
            File your NR6 with us and keep more of your rental income.
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
