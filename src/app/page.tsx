import Link from 'next/link'
import { 
  AlertTriangle, 
  FileText, 
  Users, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Calendar,
  FileCheck,
  Headphones,
  CalendarCheck
} from 'lucide-react'

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Multiple CRA Filings Required',
    description: 'NR6, monthly remittances, NR4 slips, Section 216 returns—miss one and face penalties.',
  },
  {
    icon: FileText,
    title: 'Complex Compliance Rules',
    description: 'CRA has strict deadlines and requirements. One mistake can cost you thousands.',
  },
  {
    icon: Users,
    title: 'Need a Canadian Agent',
    description: 'CRA requires a Canadian resident agent. Finding a trustworthy one from abroad is difficult.',
  },
]

const services = [
  {
    icon: FileText,
    title: 'NR6 Form',
    description: 'Reduce your withholding rate from 25% gross to net income',
    frequency: 'Annual',
  },
  {
    icon: Calendar,
    title: 'Monthly Remittances',
    description: 'We calculate and submit your withholding to CRA every month',
    frequency: '12x/year',
  },
  {
    icon: FileCheck,
    title: 'NR4 Information Slip',
    description: 'Year-end slip showing amounts paid to non-resident',
    frequency: 'Annual',
  },
  {
    icon: Shield,
    title: 'Section 216 Return',
    description: 'Your year-end Canadian tax return to reconcile actual tax',
    frequency: 'Annual',
  },
]

const included = [
  'NR6 form preparation & CRA submission',
  'Monthly remittance calculations (12x/year)',
  'NR4 information slip preparation',
  'Section 216 year-end tax return',
  'Canadian agent services (required by CRA)',
  'CRA correspondence handling',
  'Year-round email support',
  'Annual renewal reminders',
]

const howItWorks = [
  {
    step: 1,
    title: 'Sign Up',
    description: 'Complete our simple form with your property and rental details. Takes about 5 minutes.',
  },
  {
    step: 2,
    title: 'We Handle Everything',
    description: 'We file your NR6, manage monthly remittances, and handle all CRA communications.',
  },
  {
    step: 3,
    title: 'Year-End Filing',
    description: 'We prepare your NR4 slip and Section 216 return to reconcile your taxes.',
  },
  {
    step: 4,
    title: 'Stay Compliant',
    description: 'Relax knowing your Canadian rental taxes are handled. We remind you before renewals.',
  },
]

const faqs = [
  {
    question: 'What\'s included in the $999?',
    answer: 'Everything: NR6 filing, 12 monthly remittances, NR4 slip, Section 216 return, Canadian agent services, and year-round support. No hidden fees.',
  },
  {
    question: 'Is this just for NR6?',
    answer: 'No—we handle your complete non-resident rental tax compliance. That\'s 15+ CRA filings and interactions per year, all for one flat fee.',
  },
  {
    question: 'Why do I need all these filings?',
    answer: 'CRA requires NR6 to reduce withholding, monthly remittances to stay compliant, NR4 for reporting, and Section 216 as your year-end return. We handle all of it.',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Complete Tax Compliance for Non-Resident Landlords
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Your Canadian Rental Taxes, Handled
            </h1>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Stop worrying about CRA deadlines and compliance. We manage every filing—NR6, monthly remittances, NR4, and Section 216—so you don't have to.
            </p>
            
            {/* Price with context */}
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl md:text-5xl font-bold text-primary">$999</span>
                <div className="text-left">
                  <span className="text-muted text-sm block">CAD / property / year</span>
                  <span className="text-green-600 text-sm font-medium">All filings included</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
                <div className="bg-blue-50 rounded-lg p-2">
                  <div className="font-semibold text-primary">NR6</div>
                  <div className="text-muted text-xs">Annual</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-2">
                  <div className="font-semibold text-primary">Remittances</div>
                  <div className="text-muted text-xs">12x/year</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-2">
                  <div className="font-semibold text-primary">NR4</div>
                  <div className="text-muted text-xs">Annual</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-2">
                  <div className="font-semibold text-primary">T1(216)</div>
                  <div className="text-muted text-xs">Annual</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
                See What's Included
              </Link>
            </div>
            <p className="text-sm text-muted mt-4">
              Less than $85/month for complete peace of mind
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-heading">Non-Resident Rental Taxes Are Complicated</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              If you own property in Canada but live abroad, CRA expects multiple filings throughout the year.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point) => (
              <div key={point.title} className="card text-center">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 lg:py-20 bg-blue-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-heading">One Price. Every Filing. All Year.</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              We handle your complete Canadian rental tax compliance—that's 15+ CRA interactions annually.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-blue-100 px-2 py-1 rounded">
                    {service.frequency}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          
          {/* Plus more */}
          <div className="mt-8 text-center">
            <div className="inline-flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" />
                Canadian Agent Services
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <Headphones className="w-4 h-4 text-primary" />
                Year-Round Support
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <CalendarCheck className="w-4 h-4 text-primary" />
                Deadline Reminders
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-heading">Complete Non-Resident Rental Compliance</h2>
              <p className="section-subheading">
                Everything you need to stay compliant with CRA. One annual fee. No surprises.
              </p>
            </div>
            
            <div className="card border-2 border-primary">
              <div className="md:flex">
                {/* Left: Price */}
                <div className="md:w-1/3 text-center pb-6 md:pb-0 md:pr-8 md:border-r border-b md:border-b-0 border-border">
                  <p className="text-muted uppercase tracking-wide text-sm font-semibold mb-2">
                    Annual Package
                  </p>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-primary">$999</span>
                    <span className="text-muted">CAD</span>
                  </div>
                  <p className="text-muted text-sm">per property, per year</p>
                  <p className="text-green-600 text-sm font-medium mt-2">
                    = Less than $85/month
                  </p>
                </div>
                
                {/* Right: What's included */}
                <div className="md:w-2/3 pt-6 md:pt-0 md:pl-8">
                  <h3 className="font-semibold text-foreground mb-4">Everything Included:</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border text-center">
                <Link href="/start" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-sm text-muted mt-3">
                  Secure payment via Stripe. Setup takes about 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-heading">How It Works</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Sign up once, and we handle your tax compliance all year long.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted text-sm">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted">Properties Managed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6,000+</div>
              <p className="text-muted">CRA Filings Submitted</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted">Compliance Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-heading">Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-primary-light hover:text-primary font-semibold inline-flex items-center gap-1">
              View all FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Worry-Free Compliance?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of non-resident landlords who trust us with their Canadian rental taxes.
          </p>
          <Link href="/start" className="bg-white text-primary px-8 py-4 rounded-md font-semibold text-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
