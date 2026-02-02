'use client'

import { useState } from 'react'
import { useWizard, clearWizardDraft } from './WizardContext'
import { ArrowLeft, Lock, CreditCard, CheckCircle } from 'lucide-react'
import { calculateSavings } from '@/lib/types'
import { getDb } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export function Step5Payment() {
  const { data, prevStep } = useWizard()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const savings = calculateSavings(data)

  const handlePayment = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Save filing to Firestore first
      const db = getDb()
      const filingData = {
        ...data,
        ...savings,
        created_at: serverTimestamp(),
        status: 'new',
        paid: false,
        notes: '',
        file_upload: null, // Don't store File object directly
      }

      const docRef = await addDoc(collection(db, 'filings'), filingData)
      const filingId = docRef.id

      // For now, redirect to a Stripe Payment Link or simulate success
      // In production, you would use Stripe Checkout with a payment link
      // or set up a Cloud Function to create checkout sessions
      
      // Store the filing ID for reference
      localStorage.setItem('nr6_pending_filing', filingId)
      
      // Clear the wizard draft
      clearWizardDraft()
      
      // Redirect to success page (in production, this would go to Stripe first)
      // For demo purposes, we'll go directly to success
      window.location.href = `/success?session_id=${filingId}`
      
    } catch (err) {
      console.error('Payment error:', err)
      setError('Unable to process your submission. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Review & Pay</h2>
        <p className="text-muted">Please review your information before completing payment.</p>
      </div>

      {/* Order Summary */}
      <div className="card border-2 border-border">
        <h3 className="font-semibold text-lg text-foreground mb-4">Order Summary</h3>
        
        {/* Property Info */}
        <div className="space-y-3 pb-4 border-b border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted">Property</span>
            <span className="text-foreground font-medium text-right max-w-[60%]">{data.property_address}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Rental Type</span>
            <span className="text-foreground">{data.rental_type === 'long_term' ? 'Long-term' : 'Short-term / Airbnb'}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Contact</span>
            <span className="text-foreground">{data.full_name}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Email</span>
            <span className="text-foreground">{data.email}</span>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="space-y-3 py-4 border-b border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted">Gross Annual Rent</span>
            <span className="text-foreground">${savings.gross.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Total Expenses</span>
            <span className="text-foreground">-${savings.expenses_total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted">Net Income</span>
            <span className="text-foreground font-medium">${savings.net.toLocaleString()}</span>
          </div>
        </div>

        {/* Estimated Savings */}
        <div className="py-4 border-b border-border">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700 mb-1">Estimated Annual Savings with NR6</p>
            <p className="text-3xl font-bold text-green-600">${savings.estimated_savings.toLocaleString()}</p>
          </div>
        </div>

        {/* Service Fee */}
        <div className="pt-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold text-foreground">NR6 Filing Service</span>
              <p className="text-sm text-muted">Complete preparation, submission & agent services</p>
            </div>
            <span className="text-2xl font-bold text-primary">$999</span>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="card bg-blue-50 border-primary">
        <h3 className="font-semibold text-foreground mb-3">What's Included:</h3>
        <ul className="space-y-2">
          {[
            'NR6 form preparation & submission',
            'Canadian agent services (CRA requirement)',
            'Withholding calculation assistance',
            'Email support',
            'Annual reminders',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Security Notice */}
      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
        <Lock className="w-6 h-6 text-muted" />
        <div className="text-sm text-muted">
          <p className="font-medium text-foreground">Secure Submission</p>
          <p>Your data is encrypted and securely stored. Payment will be processed via Stripe.</p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Payment Button */}
      <div className="pt-4 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={prevStep}
          disabled={isLoading}
          className="btn-secondary flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <button
          onClick={handlePayment}
          disabled={isLoading}
          className="btn-primary flex-1 flex items-center justify-center gap-2 text-lg py-4"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              Submit & Pay $999 USD
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-center text-muted">
        By clicking "Submit & Pay", you agree to our terms of service. 
        You will be redirected to Stripe for secure payment processing.
      </p>
    </div>
  )
}
