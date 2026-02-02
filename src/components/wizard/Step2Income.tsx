'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useWizard } from './WizardContext'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const schema = z.object({
  monthly_rent: z.number().min(1, 'Please enter your monthly rent'),
  months_rented: z.number().min(1, 'Minimum 1 month').max(12, 'Maximum 12 months'),
  property_manager_fee: z.number().min(0).default(0),
})

type FormData = z.infer<typeof schema>

export function Step2Income() {
  const { data, setData, nextStep, prevStep } = useWizard()
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      monthly_rent: data.monthly_rent || undefined,
      months_rented: data.months_rented,
      property_manager_fee: data.property_manager_fee,
    },
  })

  const monthlyRent = watch('monthly_rent') || 0
  const monthsRented = watch('months_rented') || 12
  const annualGross = monthlyRent * monthsRented

  const onSubmit = (formData: FormData) => {
    setData(formData)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Rental Income</h2>
        <p className="text-muted">Tell us about your rental income for the year.</p>
      </div>

      {/* Monthly Rent */}
      <div>
        <label htmlFor="monthly_rent" className="block text-sm font-medium text-foreground mb-1">
          Monthly Rent (CAD) <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">$</span>
          <input
            type="number"
            id="monthly_rent"
            {...register('monthly_rent', { valueAsNumber: true })}
            className={`input-field pl-8 ${errors.monthly_rent ? 'input-error' : ''}`}
            placeholder="2000"
            min={0}
          />
        </div>
        {errors.monthly_rent && (
          <p className="error-message">{errors.monthly_rent.message}</p>
        )}
        <p className="text-sm text-muted mt-1">
          Average monthly rental income (or expected for new properties)
        </p>
      </div>

      {/* Months Rented */}
      <div>
        <label htmlFor="months_rented" className="block text-sm font-medium text-foreground mb-1">
          Months Rented Per Year <span className="text-red-500">*</span>
        </label>
        <select
          id="months_rented"
          {...register('months_rented', { valueAsNumber: true })}
          className={`input-field ${errors.months_rented ? 'input-error' : ''}`}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
            <option key={month} value={month}>
              {month} {month === 1 ? 'month' : 'months'}
            </option>
          ))}
        </select>
        {errors.months_rented && (
          <p className="error-message">{errors.months_rented.message}</p>
        )}
      </div>

      {/* Property Manager Fee */}
      <div>
        <label htmlFor="property_manager_fee" className="block text-sm font-medium text-foreground mb-1">
          Annual Property Management Fee (CAD)
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">$</span>
          <input
            type="number"
            id="property_manager_fee"
            {...register('property_manager_fee', { valueAsNumber: true })}
            className="input-field pl-8"
            placeholder="0"
            min={0}
          />
        </div>
        <p className="text-sm text-muted mt-1">
          Leave as 0 if you don't use a property manager
        </p>
      </div>

      {/* Annual Summary */}
      {annualGross > 0 && (
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-muted mb-1">Estimated Annual Gross Rent</p>
          <p className="text-2xl font-bold text-primary">
            ${annualGross.toLocaleString()} CAD
          </p>
        </div>
      )}

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
