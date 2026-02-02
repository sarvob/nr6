import Link from 'next/link'
import { 
  AlertTriangle, 
  FileText, 
  Users, 
  Calculator,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  DollarSign
} from 'lucide-react'

const painPoints = [
  {
    icon: AlertTriangle,
    title: '25% Tax on Gross Rent',
    description: 'Without NR6, Canada withholds 25% of your gross rental income—even before expenses.',
  },
  {
    icon: FileText,
    title: 'Confusing CRA Forms',
    description: 'The NR6 process is complex and error-prone. One mistake can delay your filing for months.',
  },
  {
    icon: Users,
    title: 'Need a Canadian Agent',
    description: 'CRA requires a Canadian resident agent. Finding a trustworthy one is difficult from abroad.',
  },
]

const solutions = [
  {
    icon: FileText,
    title: 'NR6 Preparation',
    description: 'We prepare your NR6 form accurately with all required information.',
  },
  {
    icon: Shield,
    title: 'CRA Submission',
    description: 'We submit directly to CRA and handle any follow-up correspondence.',
  },
  {
    icon: Users,
    title: 'Agent Services',
    description: 'We act as your Canadian agent—a CRA requirement for non-residents.',
  },
  {
    icon: Clock,
    title: 'Annual Reminders',
    description: 'We remind you before deadlines so you never miss a filing.',
  },
]

const howItWorks = [
  {
    step: 1,
    title: 'Enter Your Details',
    description: 'Complete our simple 5-minute form with your property and rental information.',
  },
  {
    step: 2,
    title: 'We Prepare Your NR6',
    description: 'Our team reviews your information and prepares your NR6 form.',
  },
  {
    step: 3,
    title: 'We File With CRA',
    description: 'We submit your NR6 to CRA and act as your Canadian agent.',
  },
  {
    step: 4,
    title: 'Pay Tax on Net Income',
    description: 'With NR6 approved, you pay tax on net income instead of gross.',
  },
]

const faqs = [
  {
    question: 'What is the NR6 form?',
    answer: 'The NR6 allows non-resident landlords to pay tax on net rental income instead of 25% on gross rent.',
  },
  {
    question: 'How much can I save?',
    answer: 'Most landlords save 50-75% on their withholding tax by filing NR6. Our calculator shows your estimated savings.',
  },
  {
    question: 'How long does the process take?',
    answer: 'Our intake form takes about 5-7 minutes. CRA typically processes NR6 forms within 4-8 weeks.',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Stop Overpaying on Canadian Rental Income Tax
            </h1>
            <p className="text-xl text-muted mb-4">
              Non-resident landlord? Without NR6, Canada withholds 25% of your <em>gross</em> rent.
              With NR6, you pay tax only on <em>net</em> income—saving thousands annually.
            </p>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary mb-8">
              <DollarSign className="w-8 h-8" />
              <span>$999 Flat Fee Per Property</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
                File My NR6 Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/guides/calculator" className="btn-secondary text-lg px-8 py-4">
                Calculate My Savings
              </Link>
            </div>
            <p className="text-sm text-muted mt-4">
              Complete the process in under 7 minutes. No account required.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-heading">The Problem for Non-Resident Landlords</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              If you own rental property in Canada but live abroad, the tax system works against you.
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

      {/* Solution */}
      <section className="py-16 lg:py-20 bg-blue-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-heading">How NR6.ca Solves This</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              We handle everything—from NR6 preparation to CRA submission—so you keep more of your rental income.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => (
              <div key={solution.title} className="card">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-muted text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-heading">Simple, Transparent Pricing</h2>
            <div className="card mt-8 border-2 border-primary">
              <div className="text-center">
                <p className="text-muted uppercase tracking-wide text-sm font-semibold mb-2">
                  Done-For-You Filing
                </p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <span className="text-5xl font-bold text-primary">$999</span>
                  <span className="text-muted">USD / property / year</span>
                </div>
                <ul className="text-left max-w-sm mx-auto space-y-3 mb-6">
                  {[
                    'Complete NR6 form preparation',
                    'Direct submission to CRA',
                    'Canadian agent services included',
                    'Withholding calculation assistance',
                    'Email support',
                    'Annual reminders',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted mb-6">
                  No hidden fees. No surprises. One flat price.
                </p>
                <Link href="/start" className="btn-primary inline-flex items-center gap-2">
                  Start Filing
                  <ArrowRight className="w-5 h-5" />
                </Link>
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
              Four simple steps to start saving on your Canadian rental income tax.
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
          <div className="text-center mt-12">
            <Link href="/how-it-works" className="text-primary-light hover:text-primary font-semibold inline-flex items-center gap-1">
              Learn more about our process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted">Properties Filed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
              <p className="text-muted">Saved for Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted">CRA Approval Rate</p>
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
            Ready to Stop Overpaying?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of non-resident landlords who save thousands every year with NR6.
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
