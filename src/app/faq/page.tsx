import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - NR6.ca | Common Questions About NR6 Filing',
  description: 'Answers to frequently asked questions about NR6 forms, non-resident landlord taxes, filing requirements, and our service.',
}

const faqs = [
  {
    category: 'About NR6',
    questions: [
      {
        question: 'What is the NR6 form?',
        answer: 'The NR6 form (Undertaking to File an Income Tax Return by a Non-Resident Receiving Rent from Real or Immovable Property) allows non-resident landlords to have tax withheld on their net rental income instead of the standard 25% on gross rent. This can result in significant tax savings since you can deduct expenses like mortgage interest, property taxes, and repairs before calculating the withholding amount.',
      },
      {
        question: 'Who needs to file an NR6?',
        answer: 'Non-resident landlords who own rental property in Canada and want to reduce their withholding tax should file an NR6. Without it, your property manager or tenant must withhold 25% of your gross rental income and remit it to CRA. The NR6 lets you pay tax on net income (after expenses) instead.',
      },
      {
        question: 'Is Airbnb or short-term rental income eligible for NR6?',
        answer: 'Yes, short-term rentals including Airbnb income are eligible for NR6 filing, provided the income is considered rental income (not business income). If you\'re operating a hotel-like business with significant services, different rules may apply. Most individual Airbnb hosts qualify for NR6.',
      },
      {
        question: 'What happens if I don\'t file an NR6?',
        answer: 'Without an approved NR6, your property manager or tenant is legally required to withhold 25% of your gross rental income and remit it to CRA. You can recover excess tax by filing a Section 216 return, but you\'ll have less cash flow throughout the year. The NR6 provides a more efficient solution.',
      },
    ],
  },
  {
    category: 'About Our Service',
    questions: [
      {
        question: 'Do I need a Canadian agent?',
        answer: 'Yes, CRA requires non-resident landlords filing NR6 to have a Canadian resident agent. This agent is responsible for receiving correspondence from CRA and ensuring tax obligations are met. Our $999 CAD service fee includes Canadian agent services—we serve as your agent at no extra cost.',
      },
      {
        question: 'What does the $999 fee include?',
        answer: 'The $999 CAD flat fee covers everything: NR6 form preparation, submission to CRA, Canadian agent services (required by CRA), withholding calculation assistance, email support, and annual reminders for renewal. There are no hidden fees or hourly charges.',
      },
      {
        question: 'How long does the process take?',
        answer: 'Our intake form takes about 5-7 minutes to complete. We prepare and submit your NR6 within 1-2 business days. CRA processing typically takes 4-8 weeks, though this can vary. Once approved, the NR6 is effective for the tax year.',
      },
      {
        question: 'Do I need to create an account?',
        answer: 'No account is required. Simply complete our intake form, make your payment, and we handle the rest. You\'ll receive confirmation and updates via email.',
      },
    ],
  },
  {
    category: 'Filing Requirements',
    questions: [
      {
        question: 'What documents do I need to file?',
        answer: 'To complete our form, you\'ll need: your property address, monthly rental income, annual expenses (mortgage interest, property taxes, condo fees, repairs, insurance), and your contact information. You don\'t need to provide physical documents—estimates are acceptable for expenses.',
      },
      {
        question: 'When is the deadline to file NR6?',
        answer: 'The NR6 should be filed before the first rental payment of the year to be effective from January 1st. However, you can file at any time—it becomes effective once approved by CRA. For the following year, file before December 31st of the current year.',
      },
      {
        question: 'Do I still need to file a Section 216 return?',
        answer: 'Yes. The NR6 allows for reduced withholding throughout the year, but you\'re still required to file a Section 216 return by June 30th of the following year to report your actual rental income and claim a refund of any excess tax withheld.',
      },
      {
        question: 'What if I have multiple properties?',
        answer: 'Each property requires a separate NR6 filing. Simply complete our form once for each property. For 3 or more properties, contact us about volume discounts.',
      },
    ],
  },
  {
    category: 'Security & Legal',
    questions: [
      {
        question: 'Is this service legal and legitimate?',
        answer: 'Absolutely. We are a legitimate Canadian business providing tax filing assistance services. The NR6 form is an official CRA form, and using a service to prepare and submit it is completely legal. We follow all CRA guidelines and regulations.',
      },
      {
        question: 'How is my data protected?',
        answer: 'We use industry-standard security measures including HTTPS encryption, secure cloud storage (Firebase), and Stripe for payment processing. We never store credit card information. Your data is only used to prepare your NR6 filing.',
      },
      {
        question: 'What if CRA rejects my NR6?',
        answer: 'CRA rejections are rare but can happen if there are calculation errors or missing information. If your NR6 is rejected, we\'ll work with you to correct the issue and resubmit at no additional charge.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Find answers to common questions about NR6 forms and our filing service.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          {faqs.map((section) => (
            <div key={section.category} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-primary mb-6">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq) => (
                  <details
                    key={faq.question}
                    className="card group"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-foreground">
                      {faq.question}
                      <span className="ml-4 text-primary-light group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <div className="card text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h2>
            <p className="text-muted mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to File Your NR6?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Start saving on your Canadian rental income tax today.
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
