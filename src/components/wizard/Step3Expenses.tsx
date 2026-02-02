'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useWizard } from './WizardContext'
import { ArrowRight, ArrowLeft, TrendingDown, TrendingUp } from 'lucide-react'

const schema = z.object({
  mortgage_interest: z.number().min(0).default(0),
  property_tax: z.number().min(0).default(0),
  condo_fees: z.number().min(0).default(0),
  repairs: z.number().min(0).default(0),
  insurance: z.number().min(0).default(0),
  other_expenses: z.number().min(0).default(0),
})

type FormData = z.infer<typeof schema>

export function Step3Expenses() {
  const { data, setData, nextStep, prevStep, savings } = useWizard()
  
  const {
    register,
    handleSubmit,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      mortgage_interest: data.mortgage_interest,
      property_tax: data.property_tax,
      condo_fees: data.condo_fees,
      repairs: data.repairs,
      insurance: data.insurance,
      other_expenses: data.other_expenses,
    },
  })

  // Calculate live savings
  const formValues = watch()
  const monthlyRent = data.monthly_rent || 0
  const monthsRented = data.months_rented || 12
  const propertyManagerFee = data.property_manager_fee || 0
  
  const gross = monthlyRent * monthsRented
  const expensesTotal = 
    (formValues.mortgage_interest || 0) +
    (formValues.property_tax || 0) +
    (formValues.condo_fees || 0) +
    (formValues.repairs || 0) +
    (formValues.insurance || 0) +
    (formValues.other_expenses || 0) +
    propertyManagerFee
  
  const net = gross - expensesTotal
  const withoutNr6 = gross * 0.25
  const withNr6 = Math.max(net, 0) * 0.25
  const estimatedSavings = withoutNr6 - withNr6

  const onSubmit = (formData: FormData) => {
    setData(formData)
    nextStep()
  }

  const expenseFields = [
    {
      id: 'mortgage_interest',
      label: 'Mortgage Interest (Annual)',
      description: 'Only the interest portion, not principal payments',
    },
    {
      id: 'property_tax',
      label: 'Property Tax (Annual)',
      description: 'Annual property taxes paid',
    },
    {
      id: 'condo_fees',
      label: 'Condo/HOA Fees (Annual)',
      description: 'Leave as 0 if not applicable',
    },
    {
      id: 'repairs',
      label: 'Repairs & Maintenance (Annual)',
      description: 'Estimated annual repair costs',
    },
    {
      id: 'insurance',
      label: 'Insurance (Annual)',
      description: 'Landlord or property insurance',
    },
    {
      id: 'other_expenses',
      label: 'Other Expenses (Annual)',
      description: 'Any other deductible rental expenses',
    },
  ] as const

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Rental Expenses</h2>
        <p className="text-muted">Enter your annual rental property expenses. These reduce your taxable income.</p>
      </div>

      {/* Expense Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        {expenseFields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-1">
              {field.label}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">$</span>
              <input
                type="number"
                id={field.id}
                {...register(field.id as keyof FormData, { valueAsNumber: true })}
                className="input-field pl-8"
                placeholder="0"
                min={0}
              />
            </div>
            <p className="text-xs text-muted mt-1">{field.description}</p>
          </div>
        ))}
      </div>

      {/* Savings Calculation Box */}
      <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <TrendingDown className="w-5 h-5 text-green-600" />
          Your Estimated Savings with NR6
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="text-center p-3 bg-white rounded-md">
            <p className="text-sm text-muted mb-1">Gross Rent</p>
            <p className="text-lg font-bold text-foreground">${gross.toLocaleString()}</p>
          </div>
          <div className="text-center p-3 bg-white rounded-md">
            <p className="text-sm text-muted mb-1">Total Expenses</p>
            <p className="text-lg font-bold text-foreground">${expensesTotal.toLocaleString()}</p>
          </div>
          <div className="text-center p-3 bg-white rounded-md">
            <p className="text-sm text-muted mb-1">Net Income</p>
            <p className="text-lg font-bold text-foreground">${net.toLocaleString()}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-red-50 rounded-md text-center">
            <p className="text-sm text-red-700 mb-1">Without NR6 (25% on gross)</p>
            <p className="text-2xl font-bold text-red-600">${withoutNr6.toLocaleString()}</p>
            <p className="text-sm text-red-600">withheld annually</p>
          </div>
          <div className="p-4 bg-green-50 rounded-md text-center">
            <p className="text-sm text-green-700 mb-1">With NR6 (25% on net)</p>
            <p className="text-2xl font-bold text-green-600">${withNr6.toLocaleString()}</p>
            <p className="text-sm text-green-600">withheld annually</p>
          </div>
        </div>

        <div className="text-center p-4 bg-primary rounded-md">
          <p className="text-blue-100 text-sm mb-1">You may save approximately</p>
          <p className="text-4xl font-bold text-white">${estimatedSavings.toLocaleString()}</p>
          <p className="text-blue-100 text-sm">per year using NR6 instead of 25% withholding</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={prevStep}
          className="btn-secondary flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <button type="submit" className="btn-primary flex items-center justify-center gap-2">
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  )
}
