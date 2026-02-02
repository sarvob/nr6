'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { getDb } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'support@nr6.ca',
    href: 'mailto:support@nr6.ca',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '1-800-555-1234',
    href: 'tel:+18005551234',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Bay Street, Suite 400\nToronto, ON M5H 2Y4\nCanada',
    href: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      const db = getDb()
      
      // Save contact submission to Firestore
      // This will trigger the email extension if configured
      await addDoc(collection(db, 'contact_submissions'), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        created_at: serverTimestamp(),
        status: 'new', // new, replied, resolved
        replied: false,
        notes: '',
      })

      // Also add to mail collection for Firebase Trigger Email extension
      await addDoc(collection(db, 'mail'), {
        to: ['support@nr6.ca'], // Admin email
        replyTo: formData.email,
        message: {
          subject: `[NR6.ca Contact] ${formData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${formData.name} (${formData.email})</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
            <hr />
            <p style="color: #666; font-size: 12px;">
              This message was sent via the NR6.ca contact form.
              Reply directly to this email to respond to the customer.
            </p>
          `,
          text: `
New Contact Form Submission

From: ${formData.name} (${formData.email})
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent via the NR6.ca contact form.
          `,
        },
      })

      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting contact form:', err)
      setError('Failed to send message. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-muted mb-8">
                Whether you have questions about our service, need help with your filing, 
                or want to learn more about the NR6 process, we're happy to assist.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-primary-light hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-muted">
                  <strong>Business Hours:</strong><br />
                  Monday – Friday: 9:00 AM – 5:00 PM EST<br />
                  Saturday – Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
              
              {submitted ? (
                <div className="card bg-green-50 border-green-200">
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll get back to you within 1-2 business days.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="input-field"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="input-field"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="input-field"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="input-field resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
