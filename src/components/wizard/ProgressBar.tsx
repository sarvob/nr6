'use client'

import { useWizard } from './WizardContext'
import { CheckCircle } from 'lucide-react'

const steps = [
  { number: 1, label: 'Property' },
  { number: 2, label: 'Income' },
  { number: 3, label: 'Expenses' },
  { number: 4, label: 'Contact' },
  { number: 5, label: 'Payment' },
]

export function ProgressBar() {
  const { step } = useWizard()

  return (
    <div className="mb-8">
      {/* Mobile View */}
      <div className="md:hidden text-center mb-4">
        <span className="text-sm text-muted">Step {step} of {steps.length}</span>
        <p className="font-semibold text-primary">{steps[step - 1].label}</p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between">
        {steps.map((s, index) => (
          <div key={s.number} className="flex items-center flex-1">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                  s.number < step
                    ? 'bg-green-600 text-white'
                    : s.number === step
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-muted'
                }`}
              >
                {s.number < step ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  s.number
                )}
              </div>
              <span
                className={`ml-2 text-sm font-medium ${
                  s.number <= step ? 'text-foreground' : 'text-muted'
                }`}
              >
                {s.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-4 ${
                  s.number < step ? 'bg-green-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar (Mobile) */}
      <div className="md:hidden">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(step / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
