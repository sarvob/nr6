'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useWizard } from './WizardContext'
import { ArrowRight, ArrowLeft, Upload, X } from 'lucide-react'
import { useState, useRef } from 'react'

const schema = z.object({
  full_name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  country_of_residence: z.string().min(2, 'Please enter your country of residence'),
  checkbox_confirm: z.literal(true, {
    errorMap: () => ({ message: 'You must confirm the information is accurate' }),
  }),
})

type FormData = z.infer<typeof schema>

const countries = [
  'United States',
  'United Kingdom',
  'Australia',
  'China',
  'Hong Kong',
  'India',
  'Germany',
  'France',
  'Japan',
  'South Korea',
  'Singapore',
  'United Arab Emirates',
  'Other',
]

export function Step4Contact() {
  const { data, setData, nextStep, prevStep } = useWizard()
  const [file, setFile] = useState<File | null>(data.file_upload || null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      country_of_residence: data.country_of_residence,
      checkbox_confirm: data.checkbox_confirm ? true : undefined,
    },
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Validate file type
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
      if (!validTypes.includes(selectedFile.type)) {
        alert('Please upload a PDF or image file (JPG, PNG)')
        return
      }
      // Validate file size (10MB max)
      if (selectedFile.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB')
        return
      }
      setFile(selectedFile)
    }
  }

  const removeFile = () => {
    setFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const onSubmit = (formData: FormData) => {
    setData({
      ...formData,
      file_upload: file,
    })
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Contact Information</h2>
        <p className="text-muted">We'll use this information to prepare your NR6 and keep you updated.</p>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="full_name" className="block text-sm font-medium text-foreground mb-1">
          Full Legal Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="full_name"
          {...register('full_name')}
          className={`input-field ${errors.full_name ? 'input-error' : ''}`}
          placeholder="John Smith"
        />
        {errors.full_name && (
          <p className="error-message">{errors.full_name.message}</p>
        )}
        <p className="text-sm text-muted mt-1">
          As it appears on your identification documents
        </p>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`input-field ${errors.email ? 'input-error' : ''}`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className={`input-field ${errors.phone ? 'input-error' : ''}`}
          placeholder="+1 555 123 4567"
        />
        {errors.phone && (
          <p className="error-message">{errors.phone.message}</p>
        )}
      </div>

      {/* Country of Residence */}
      <div>
        <label htmlFor="country_of_residence" className="block text-sm font-medium text-foreground mb-1">
          Country of Residence <span className="text-red-500">*</span>
        </label>
        <select
          id="country_of_residence"
          {...register('country_of_residence')}
          className={`input-field ${errors.country_of_residence ? 'input-error' : ''}`}
        >
          <option value="">Select your country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country_of_residence && (
          <p className="error-message">{errors.country_of_residence.message}</p>
        )}
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Supporting Documents (Optional)
        </label>
        <p className="text-sm text-muted mb-3">
          You may upload any supporting documents (property deed, rental agreement, etc.)
        </p>
        
        {file ? (
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-md">
            <div className="flex-1">
              <p className="font-medium text-foreground text-sm">{file.name}</p>
              <p className="text-xs text-muted">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="p-2 text-red-600 hover:bg-red-100 rounded-md transition-colors"
              aria-label="Remove file"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div
            className="border-2 border-dashed border-border rounded-md p-8 text-center cursor-pointer hover:border-primary-light transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-8 h-8 text-muted mx-auto mb-2" />
            <p className="text-sm text-muted">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted mt-1">
              PDF, JPG, PNG up to 10MB
            </p>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Confirmation Checkbox */}
      <div className="p-4 bg-gray-50 rounded-md">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('checkbox_confirm')}
            className="w-5 h-5 mt-0.5 text-primary rounded"
          />
          <span className="text-sm text-foreground">
            I confirm that the information provided is true and accurate to the best of my knowledge. 
            I understand that providing false information may result in penalties from CRA.
            <span className="text-red-500"> *</span>
          </span>
        </label>
        {errors.checkbox_confirm && (
          <p className="error-message mt-2">{errors.checkbox_confirm.message}</p>
        )}
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
          Continue to Payment
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  )
}
