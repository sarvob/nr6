'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useWizard } from './WizardContext'
import { ArrowRight } from 'lucide-react'

const schema = z.object({
  property_address: z.string().min(5, 'Please enter a valid property address'),
  ownership_percentage: z.number().min(1, 'Minimum 1%').max(100, 'Maximum 100%'),
  rental_type: z.enum(['long_term', 'short_term']),
  first_rental_year: z.number().min(1990).max(new Date().getFullYear() + 1),
})

type FormData = z.infer<typeof schema>

export function Step1Property() {
  const { data, setData, nextStep } = useWizard()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      property_address: data.property_address,
      ownership_percentage: data.ownership_percentage,
      rental_type: data.rental_type,
      first_rental_year: data.first_rental_year,
    },
  })

  const onSubmit = (formData: FormData) => {
    setData(formData)
    nextStep()
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 35 }, (_, i) => currentYear - i)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Property Information</h2>
        <p className="text-muted">Tell us about your Canadian rental property.</p>
      </div>

      {/* Property Address */}
      <div>
        <label htmlFor="property_address" className="block text-sm font-medium text-foreground mb-1">
          Property Address <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="property_address"
          {...register('property_address')}
          className={`input-field ${errors.property_address ? 'input-error' : ''}`}
          placeholder="123 Main Street, Toronto, ON M5V 1A1"
        />
        {errors.property_address && (
          <p className="error-message">{errors.property_address.message}</p>
        )}
      </div>

      {/* Ownership Percentage */}
      <div>
        <label htmlFor="ownership_percentage" className="block text-sm font-medium text-foreground mb-1">
          Ownership Percentage <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="number"
            id="ownership_percentage"
            {...register('ownership_percentage', { valueAsNumber: true })}
            className={`input-field pr-12 ${errors.ownership_percentage ? 'input-error' : ''}`}
            min={1}
            max={100}
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted">%</span>
        </div>
        {errors.ownership_percentage && (
          <p className="error-message">{errors.ownership_percentage.message}</p>
        )}
        <p className="text-sm text-muted mt-1">
          If you co-own the property, enter your ownership share.
        </p>
      </div>

      {/* Rental Type */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Rental Type <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          <label className="flex items-center gap-3 p-4 border border-border rounded-md cursor-pointer hover:border-primary-light transition-colors">
            <input
              type="radio"
              {...register('rental_type')}
              value="long_term"
              className="w-5 h-5 text-primary"
            />
            <div>
              <span className="font-medium text-foreground">Long-term Rental</span>
              <p className="text-sm text-muted">Traditional monthly/yearly lease</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 border border-border rounded-md cursor-pointer hover:border-primary-light transition-colors">
            <input
              type="radio"
              {...register('rental_type')}
              value="short_term"
              className="w-5 h-5 text-primary"
            />
            <div>
              <span className="font-medium text-foreground">Short-term / Airbnb</span>
              <p className="text-sm text-muted">Vacation rentals, Airbnb, VRBO, etc.</p>
            </div>
          </label>
        </div>
      </div>

      {/* First Rental Year */}
      <div>
        <label htmlFor="first_rental_year" className="block text-sm font-medium text-foreground mb-1">
          First Year of Rental Income <span className="text-red-500">*</span>
        </label>
        <select
          id="first_rental_year"
          {...register('first_rental_year', { valueAsNumber: true })}
          className={`input-field ${errors.first_rental_year ? 'input-error' : ''}`}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {errors.first_rental_year && (
          <p className="error-message">{errors.first_rental_year.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button type="submit" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
          Continue
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  )
}
