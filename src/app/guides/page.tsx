import Link from 'next/link'
import { FileText, Calculator, Calendar, BookOpen, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guides - NR6.ca | Resources for Non-Resident Landlords',
  description: 'Comprehensive guides about NR6 forms, Section 216 returns, tax calculators, and filing deadlines for non-resident Canadian landlords.',
}

const guides = [
  {
    icon: FileText,
    title: 'NR6 Form Guide',
    description: 'Everything you need to know about the NR6 form, who qualifies, and how it reduces your withholding tax.',
    href: '/guides/nr6-form',
  },
  {
    icon: BookOpen,
    title: 'Section 216 Guide',
    description: 'Understanding the Section 216 return, why it\'s required, and how to file it correctly.',
    href: '/guides/section-216',
  },
  {
    icon: Calculator,
    title: 'Tax Savings Calculator',
    description: 'Calculate your potential savings by filing NR6 instead of paying 25% on gross rental income.',
    href: '/guides/calculator',
  },
  {
    icon: Calendar,
    title: 'Deadlines & Remittances',
    description: 'Key dates for NR6 filing, remittance schedules, and penalties for late submissions.',
    href: '/guides/deadlines',
  },
]

export default function GuidesPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Guides & Resources
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Comprehensive resources to help you understand NR6 filing and maximize your tax savings as a non-resident landlord.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card group hover:border-primary-light hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <guide.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h2>
                <p className="text-muted mb-4">{guide.description}</p>
                <span className="text-primary-light font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Guide
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to File Your NR6?</h2>
          <p className="text-muted mb-6">
            Let us handle the paperwork. Complete your filing in under 7 minutes.
          </p>
          <Link href="/start" className="btn-primary inline-flex items-center gap-2">
            Start Filing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
