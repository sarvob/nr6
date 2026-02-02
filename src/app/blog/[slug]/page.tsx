import Link from 'next/link'
import { ArrowRight, ArrowLeft, Calendar, Clock, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Blog post content with rich formatting
const blogPosts: Record<string, {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  content: React.ReactNode
}> = {
  'nr6-for-airbnb-hosts': {
    title: 'Can Airbnb Hosts File NR6? Everything You Need to Know',
    excerpt: 'If you own a short-term rental in Canada and live abroad, you might be wondering if NR6 applies to you.',
    date: '2026-01-15',
    readTime: '6 min read',
    category: 'Tax Tips',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=600&fit=crop',
    content: (
      <>
        <p className="text-xl text-muted leading-relaxed mb-8">
          If you're a non-resident who owns an Airbnb or vacation rental in Canada, you're probably familiar with the 25% withholding tax on your gross rental income. But here's the good news: <strong>yes, most Airbnb hosts can file an NR6</strong>—and it could save you thousands every year.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-green-800 mb-1">The Bottom Line</p>
              <p className="text-green-700">Most individual Airbnb hosts qualify for NR6. If you're simply renting out your property without providing hotel-like services, you're likely eligible.</p>
            </div>
          </div>
        </div>

        <h2>The Key Question: Rental Income vs. Business Income</h2>
        <p>
          The Canada Revenue Agency (CRA) draws an important distinction between <em>rental income</em> and <em>business income</em>. NR6 applies to rental income—so understanding this difference is crucial.
        </p>
        <p>
          <strong>Your Airbnb income is typically considered rental income if you:</strong>
        </p>
        <ul className="space-y-2 my-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span>Provide basic accommodation (furnished or unfurnished)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span>Offer standard amenities (WiFi, kitchen access, linens)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span>Use a property manager or self-manage remotely</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span>Have cleaning between guests (but not daily housekeeping)</span>
          </li>
        </ul>

        <p>
          <strong>It may be considered business income if you:</strong>
        </p>
        <ul className="space-y-2 my-6">
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
            <span>Provide daily housekeeping or room service</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
            <span>Offer meals, catering, or food service</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
            <span>Run guided tours or entertainment activities</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
            <span>Operate more like a hotel or B&B with extensive services</span>
          </li>
        </ul>

        <h2>Real Numbers: How Much Can Airbnb Hosts Save?</h2>
        <p>Let's look at a real example. Say you have a condo in Toronto that you rent on Airbnb:</p>

        <div className="bg-gray-50 rounded-xl p-6 my-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Your Annual Numbers</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-muted">Gross Airbnb income:</span> <span className="font-medium">$48,000</span></li>
                <li className="flex justify-between"><span className="text-muted">Airbnb fees (3%):</span> <span className="font-medium">-$1,440</span></li>
                <li className="flex justify-between"><span className="text-muted">Cleaning costs:</span> <span className="font-medium">-$4,800</span></li>
                <li className="flex justify-between"><span className="text-muted">Mortgage interest:</span> <span className="font-medium">-$12,000</span></li>
                <li className="flex justify-between"><span className="text-muted">Property tax:</span> <span className="font-medium">-$4,000</span></li>
                <li className="flex justify-between"><span className="text-muted">Insurance & condo fees:</span> <span className="font-medium">-$6,000</span></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span className="font-medium">Net income:</span> <span className="font-bold text-primary">$19,760</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Tax Comparison</h4>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-red-700 mb-1">Without NR6</p>
                  <p className="text-2xl font-bold text-red-600">$12,000</p>
                  <p className="text-xs text-red-600">25% × $48,000 gross</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700 mb-1">With NR6</p>
                  <p className="text-2xl font-bold text-green-600">$4,940</p>
                  <p className="text-xs text-green-600">25% × $19,760 net</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t">
            <p className="text-muted mb-1">Your Annual Savings</p>
            <p className="text-4xl font-bold text-primary">$7,060</p>
          </div>
        </div>

        <h2>Deductible Expenses for Airbnb Hosts</h2>
        <p>One advantage Airbnb hosts have is the variety of expenses that can reduce taxable income:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Common Deductions</h4>
            <ul className="text-sm text-muted space-y-1">
              <li>• Airbnb/VRBO platform fees</li>
              <li>• Mortgage interest</li>
              <li>• Property taxes</li>
              <li>• Insurance premiums</li>
              <li>• Condo/HOA fees</li>
              <li>• Property management fees</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Often Overlooked</h4>
            <ul className="text-sm text-muted space-y-1">
              <li>• Cleaning fees paid to cleaners</li>
              <li>• Guest supplies (toiletries, coffee)</li>
              <li>• Repairs and maintenance</li>
              <li>• Utilities (if you pay them)</li>
              <li>• Professional photography</li>
              <li>• Accounting/tax prep fees</li>
            </ul>
          </div>
        </div>

        <h2>How to Get Started</h2>
        <p>
          Filing NR6 for your Airbnb is straightforward. You'll need your property details, rental income estimates, and expense projections. Our online form takes about 5 minutes to complete, and we handle everything from there—including acting as your required Canadian agent.
        </p>
      </>
    ),
  },
  'nr6-for-us-residents': {
    title: 'American Landlords in Canada: Your Complete NR6 Guide',
    excerpt: 'Own Canadian property but live in the US? Here\'s how to navigate the cross-border tax implications.',
    date: '2026-01-10',
    readTime: '8 min read',
    category: 'Cross-Border',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop',
    content: (
      <>
        <p className="text-xl text-muted leading-relaxed mb-8">
          As a US resident with Canadian rental property, you're dealing with two tax authorities: the CRA in Canada and the IRS at home. The good news? With proper planning, you can minimize your tax burden on both sides of the border.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-blue-800 mb-1">Key Insight</p>
              <p className="text-blue-700">The Canada-US Tax Treaty prevents double taxation. Tax paid to Canada can generally be claimed as a Foreign Tax Credit on your US return.</p>
            </div>
          </div>
        </div>

        <h2>How Cross-Border Rental Taxes Work</h2>
        <p>When you earn rental income from Canadian property as a US person, here's what happens:</p>

        <ol className="space-y-4 my-6">
          <li className="flex items-start gap-4">
            <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
            <div>
              <p className="font-semibold">Canada taxes the income first</p>
              <p className="text-muted">As the "source country," Canada has the right to tax rental income from Canadian property.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
            <div>
              <p className="font-semibold">US taxes your worldwide income</p>
              <p className="text-muted">As a US person, you must report all income—including Canadian rental income—on your US tax return.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
            <div>
              <p className="font-semibold">Foreign Tax Credit prevents double-dipping</p>
              <p className="text-muted">You can claim a credit on your US return for taxes paid to Canada, avoiding taxation twice on the same income.</p>
            </div>
          </li>
        </ol>

        <h2>Why NR6 Matters Even More for Americans</h2>
        <p>
          Without NR6, Canada withholds 25% of your <em>gross</em> rent. This creates a cash flow problem: you're paying more tax upfront than you likely owe, and you have to wait until you file your Section 216 return to get a refund.
        </p>
        <p>
          With NR6, your withholding is based on <em>net</em> income. This means:
        </p>

        <ul className="space-y-2 my-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span>Better cash flow throughout the year</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span>More accurate Foreign Tax Credit for your US return</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span>Less chance of over-withholding and waiting for refunds</span>
          </li>
        </ul>

        <h2>US Tax Obligations to Remember</h2>
        <p>As a US person with Canadian rental property, you may need to:</p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span><strong>Report Canadian income on your US tax return</strong> (Schedule E for rental income)</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span><strong>File FBAR (FinCEN 114)</strong> if your Canadian bank accounts exceed $10,000 at any point</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span><strong>File Form 8938 (FATCA)</strong> if you meet the asset thresholds</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span><strong>Claim Foreign Tax Credit</strong> for Canadian taxes paid (Form 1116)</span>
            </li>
          </ul>
        </div>

        <h2>Common Mistakes Americans Make</h2>
        <p>Based on our experience with US clients, here are the most frequent errors:</p>

        <ol className="space-y-3 my-6 list-decimal list-inside">
          <li><strong>Forgetting to file Section 216</strong> — Required after filing NR6</li>
          <li><strong>Missing NR6 renewal deadline</strong> — Must be filed by December 31 for the following year</li>
          <li><strong>Not reporting Canadian income on US return</strong> — The IRS expects worldwide income</li>
          <li><strong>Overlooking FBAR requirements</strong> — Penalties can be severe</li>
          <li><strong>Confusing CAD and USD amounts</strong> — Use appropriate exchange rates</li>
        </ol>

        <p>
          Cross-border taxes are complex, but manageable. We recommend working with a tax professional familiar with Canada-US issues for your overall strategy, while we handle the NR6 side of things.
        </p>
      </>
    ),
  },
  'common-nr6-mistakes': {
    title: '5 Costly NR6 Mistakes That Could Cost You Thousands',
    excerpt: 'These common filing errors lead to rejected applications, missed savings, and CRA headaches.',
    date: '2026-01-05',
    readTime: '5 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    content: (
      <>
        <p className="text-xl text-muted leading-relaxed mb-8">
          Filing an NR6 can save you 50-75% on your Canadian withholding tax. But mistakes can delay your application, reduce your savings, or even result in penalties. Here are the five most costly errors we see—and exactly how to avoid them.
        </p>

        <div className="space-y-8">
          <div className="bg-white border-2 border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Filing Too Late in the Year</h3>
                <p className="text-muted mb-4">
                  Many landlords wait until they've already received rental income before filing NR6. The problem? NR6 only applies <em>going forward</em> from when it's approved.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>The Fix:</strong> File your NR6 by December 31st for the following year. For new properties, file before the first rental payment is made.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Underestimating Deductible Expenses</h3>
                <p className="text-muted mb-4">
                  Your NR6 withholding rate is based on estimated net income. If you forget expenses, your net income estimate will be too high—and you'll have more tax withheld than necessary.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>The Fix:</strong> Include ALL eligible expenses: mortgage interest, property taxes, insurance, condo fees, repairs, management fees, and even depreciation considerations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Not Having a Canadian Agent</h3>
                <p className="text-muted mb-4">
                  CRA requires every NR6 filer to have a Canadian resident agent. No agent = no NR6 approval. Some landlords try to use friends or family who don't understand the responsibilities.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>The Fix:</strong> Use a professional service like NR6.ca. Our $999 CAD fee includes Canadian agent services—we take on the legal responsibility so you don't have to find someone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Forgetting the Section 216 Return</h3>
                <p className="text-muted mb-4">
                  Filing NR6 is a commitment to file a Section 216 tax return by June 30th of the following year. Miss this deadline, and CRA can revoke your NR6 election—meaning you're back to 25% on gross.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>The Fix:</strong> Mark June 30th on your calendar. We send reminders to all our clients, but ultimately you're responsible for filing Section 216.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-red-600">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Simple Data Entry Errors</h3>
                <p className="text-muted mb-4">
                  Wrong property address, incorrect ownership percentage, math errors in income calculations. These "small" mistakes can delay your application or cause CRA to request corrections.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>The Fix:</strong> Double-check everything. When you use NR6.ca, our team reviews every submission for accuracy before filing with CRA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  'do-you-need-a-canadian-agent': {
    title: 'Why CRA Requires a Canadian Agent (And How to Get One)',
    excerpt: 'No Canadian agent means no NR6 approval. Learn what agents do and how to get one.',
    date: '2025-12-20',
    readTime: '4 min read',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    content: (
      <>
        <p className="text-xl text-muted leading-relaxed mb-8">
          One of the most common questions we get: "Do I really need a Canadian agent to file NR6?" The short answer is <strong>yes, absolutely</strong>. Here's everything you need to know about this requirement.
        </p>

        <h2>What is a Canadian Agent?</h2>
        <p>
          A Canadian agent is a resident of Canada who acts on your behalf for tax purposes. When you file NR6, this person (or company) signs the form alongside you and takes on specific legal responsibilities.
        </p>

        <h2>Why Does CRA Require One?</h2>
        <p>Think about it from CRA's perspective:</p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <span><strong>You're outside Canada</strong> — CRA can't easily reach you for questions or compliance issues</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <span><strong>Someone needs to be accountable</strong> — The agent ensures withholding is calculated and remitted correctly</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <span><strong>Communication needs a local point</strong> — CRA sends correspondence to the agent's Canadian address</span>
          </li>
        </ul>

        <h2>What Does an Agent Actually Do?</h2>
        <div className="bg-gray-50 rounded-xl p-6 my-8">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</div>
              <span>Signs the NR6 form as your agent</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</div>
              <span>Receives and responds to CRA correspondence</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</div>
              <span>Ensures proper withholding amounts are calculated</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</div>
              <span>Oversees remittance to CRA (15th of following month)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</div>
              <span>Takes on certain legal obligations to CRA</span>
            </li>
          </ul>
        </div>

        <h2>Your Options for Getting an Agent</h2>
        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-white border border-border rounded-lg p-5">
            <h4 className="font-semibold mb-2">Property Manager</h4>
            <p className="text-sm text-muted">If Canadian-based, they may agree to act as agent. Many do this routinely.</p>
          </div>
          <div className="bg-white border border-border rounded-lg p-5">
            <h4 className="font-semibold mb-2">Friend or Family</h4>
            <p className="text-sm text-muted">A Canadian resident you trust. But they take on legal responsibility.</p>
          </div>
          <div className="bg-primary text-white rounded-lg p-5">
            <h4 className="font-semibold mb-2">Professional Service ★</h4>
            <p className="text-sm text-blue-100">NR6.ca includes agent services in our flat fee. Simplest option.</p>
          </div>
        </div>

        <p>
          Using a professional service like NR6.ca means you don't have to ask favors from friends or worry about finding someone willing to take on the responsibility. It's all included in our $999 CAD flat fee.
        </p>
      </>
    ),
  },
  'buying-canadian-property-non-resident': {
    title: 'Buying Canadian Real Estate as a Non-Resident: Tax Planning 101',
    excerpt: 'Before you invest, understand the tax implications from purchase to sale.',
    date: '2025-12-15',
    readTime: '7 min read',
    category: 'Investment',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
    content: (
      <>
        <p className="text-xl text-muted leading-relaxed mb-8">
          Canadian real estate has long attracted international investors. But before you sign that purchase agreement, understanding the tax landscape can save you from costly surprises and help you maximize returns.
        </p>

        <h2>The Purchase Phase</h2>
        <p>When buying property in Canada as a non-resident, you'll encounter:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Land Transfer Tax</h4>
            <p className="text-sm text-muted">Varies by province. Ontario and Toronto have additional municipal taxes. BC has Foreign Buyer taxes in some areas.</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Non-Resident Speculation Tax</h4>
            <p className="text-sm text-muted">25% tax in Ontario for foreign buyers (with some exemptions). BC has similar rules.</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-8">
          <p className="font-semibold text-yellow-800 mb-1">Important Note</p>
          <p className="text-yellow-700">These speculation taxes have exemptions. If you're buying for rental purposes (not speculation), you may qualify for refunds. Consult a local real estate lawyer.</p>
        </div>

        <h2>The Rental Phase: Where NR6 Comes In</h2>
        <p>Once you start earning rental income, the 25% withholding tax kicks in. Here's how it works:</p>

        <div className="bg-gray-50 rounded-xl p-6 my-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">!</div>
              <div>
                <p className="font-semibold">Without NR6</p>
                <p className="text-sm text-muted">Your property manager or tenant must withhold 25% of gross rent and remit to CRA monthly.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">✓</div>
              <div>
                <p className="font-semibold">With NR6</p>
                <p className="text-sm text-muted">Withholding is based on net income after expenses. Significantly reduces your cash out the door.</p>
              </div>
            </div>
          </div>
        </div>

        <h2>The Sale Phase</h2>
        <p>When you sell Canadian property as a non-resident, expect:</p>

        <ul className="space-y-3 my-6">
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
            <span><strong>25% withholding</strong> on the sale proceeds by the buyer's lawyer</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
            <span><strong>Certificate of Compliance</strong> (Section 116) required to release funds</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
            <span><strong>Capital gains tax</strong> on the profit from the sale</span>
          </li>
        </ul>

        <h2>Planning for Success</h2>
        <p>Before investing in Canadian property as a non-resident:</p>

        <ol className="space-y-2 my-6 list-decimal list-inside">
          <li>Consult a cross-border tax professional about your specific situation</li>
          <li>Understand all applicable taxes: federal, provincial, and municipal</li>
          <li>Plan to file NR6 from day one of rental income</li>
          <li>Set up proper Canadian banking for rent collection and tax remittances</li>
          <li>Consider the tax implications in your home country as well</li>
        </ol>
      </>
    ),
  },
  'nr6-vs-section-216': {
    title: 'NR6 vs Section 216: What\'s the Difference?',
    excerpt: 'Confused about these two forms? Here\'s a clear explanation of how they work together.',
    date: '2025-12-10',
    readTime: '5 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=600&fit=crop',
    content: (
      <>
        <p className="text-xl text-muted leading-relaxed mb-8">
          "What's the difference between NR6 and Section 216?" It's one of the most common questions we hear. Let's clear up the confusion once and for all.
        </p>

        <h2>The Simple Explanation</h2>
        <p>Think of them as two parts of the same process:</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
            <h3 className="text-xl font-bold text-foreground mb-2">NR6 Form</h3>
            <p className="text-sm text-muted mb-4">Filed at the <strong>beginning</strong> of the year</p>
            <ul className="text-sm space-y-2">
              <li>• Estimates your net rental income</li>
              <li>• Sets your withholding rate for the year</li>
              <li>• A promise to file Section 216 later</li>
            </ul>
          </div>
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Section 216 Return</h3>
            <p className="text-sm text-muted mb-4">Filed at the <strong>end</strong> of the year</p>
            <ul className="text-sm space-y-2">
              <li>• Reports actual income and expenses</li>
              <li>• Calculates true tax liability</li>
              <li>• Reconciles tax withheld vs. owed</li>
            </ul>
          </div>
        </div>

        <h2>A Real-World Analogy</h2>
        <p>
          Imagine NR6 as an estimate you give your employer for tax withholding at the start of the year. Section 216 is like your tax return at the end—it looks at what actually happened and settles up.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8">
          <h4 className="font-semibold mb-4">The Timeline</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-medium text-primary">Dec 31</div>
              <div className="flex-1 h-0.5 bg-primary"></div>
              <div className="text-sm">File NR6 for next year</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-medium text-muted">Jan - Dec</div>
              <div className="flex-1 h-0.5 bg-gray-300"></div>
              <div className="text-sm text-muted">Earn rental income, pay reduced withholding</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-medium text-green-600">June 30</div>
              <div className="flex-1 h-0.5 bg-green-500"></div>
              <div className="text-sm">File Section 216 return</div>
            </div>
          </div>
        </div>

        <h2>What If You Only File One?</h2>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-yellow-50 p-5 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">NR6 without Section 216</h4>
            <p className="text-sm text-yellow-700">CRA may revoke your NR6 election. Future applications may be denied. You'll revert to 25% on gross.</p>
          </div>
          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Section 216 without NR6</h4>
            <p className="text-sm text-blue-700">You'll pay 25% on gross all year, but can claim a refund for excess tax when you file Section 216.</p>
          </div>
        </div>

        <p>
          The bottom line: filing NR6 gives you better cash flow during the year, but you <strong>must</strong> follow up with Section 216. They work as a pair.
        </p>
      </>
    ),
  },
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug]
  
  if (!post) {
    return { title: 'Post Not Found - NR6.ca' }
  }

  return {
    title: `${post.title} - NR6.ca`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug]

  if (!post) {
    notFound()
  }

  return (
    <div>
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Header */}
      <section className="relative -mt-32 pb-8">
        <div className="container-narrow">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Link 
              href="/blog" 
              className="text-primary hover:text-primary-light inline-flex items-center gap-1 mb-6 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
              <span className="px-3 py-1 bg-blue-100 text-primary rounded-full font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 md:py-12">
        <div className="container-narrow">
          <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground">
            {post.content}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="container-narrow text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to File Your NR6?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Stop overpaying on your Canadian rental income. Our $999 CAD flat-fee service handles everything—including Canadian agent services.
          </p>
          <Link href="/start" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
            Start Filing Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}
