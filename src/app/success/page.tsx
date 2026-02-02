'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Mail, Clock } from 'lucide-react'

export default function SuccessPage() {
  const [orderId, setOrderId] = useState<string>('...')

  useEffect(() => {
    // Get session_id from URL on client side
    const params = new URLSearchParams(window.location.search)
    const sessionId = params.get('session_id') || 'N/A'
    setOrderId(sessionId.slice(0, 16).toUpperCase())
    
    // Clear the wizard draft from localStorage
    localStorage.removeItem('nr6_wizard_draft')
  }, [])

  return (
    <div className="py-16 bg-gray-50 min-h-[calc(100vh-200px)]">
      <div className="container-narrow">
        <div className="card max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl font-bold text-primary mb-2">
            Thank You for Your Submission!
          </h1>
          <p className="text-muted text-lg mb-6">
            Your NR6 filing request has been received successfully.
          </p>

          {/* Order ID */}
          <div className="p-4 bg-blue-50 rounded-lg mb-8">
            <p className="text-sm text-muted mb-1">Order Reference</p>
            <p className="text-xl font-mono font-bold text-primary">{orderId}</p>
          </div>

          {/* Next Steps */}
          <div className="text-left mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Confirmation Email</p>
                  <p className="text-sm text-muted">
                    You'll receive a confirmation email shortly with your order details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">We Prepare Your NR6</p>
                  <p className="text-sm text-muted">
                    Our team will review your information and prepare your NR6 form within 1-2 business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">We File With CRA</p>
                  <p className="text-sm text-muted">
                    We'll submit your NR6 to CRA and keep you updated on the status.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Info */}
          <div className="p-4 bg-gray-50 rounded-lg mb-6">
            <h3 className="font-medium text-foreground mb-2">Need Help?</h3>
            <p className="text-sm text-muted mb-3">
              If you have any questions about your filing, please don't hesitate to contact us.
            </p>
            <div className="flex justify-center text-sm">
              <a href="mailto:support@nr6.ca" className="flex items-center justify-center gap-2 text-primary-light hover:text-primary">
                <Mail className="w-4 h-4" />
                support@nr6.ca
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <Link href="/" className="btn-primary inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
