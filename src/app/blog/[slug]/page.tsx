import Link from 'next/link'
import { ArrowRight, ArrowLeft, Calendar, User } from 'lucide-react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Blog post content (in production, this could come from a CMS or markdown files)
const blogPosts: Record<string, {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  content: string
}> = {
  'nr6-for-airbnb-hosts': {
    title: 'NR6 for Airbnb Hosts: What Non-Resident Landlords Need to Know',
    excerpt: 'Can you file an NR6 for your Airbnb property? Learn how short-term rentals qualify for NR6 and maximize your tax savings.',
    date: '2026-01-15',
    author: 'NR6.ca Team',
    category: 'Tax Tips',
    content: `
      <p>If you're a non-resident landlord with an Airbnb or short-term rental property in Canada, you might be wondering if you can benefit from filing an NR6 form. The short answer is: <strong>yes, in most cases</strong>.</p>

      <h2>Short-Term Rentals and NR6 Eligibility</h2>
      <p>The NR6 form is available to non-residents who receive rental income from Canadian real property. This includes both traditional long-term rentals and short-term vacation rentals like Airbnb, VRBO, and similar platforms.</p>
      
      <p>However, there's an important distinction to be aware of: your rental activity must be considered "rental income" rather than "business income" for NR6 to apply.</p>

      <h2>Rental Income vs. Business Income</h2>
      <p>CRA may consider your Airbnb income as business income if you provide significant services beyond basic accommodation, such as:</p>
      <ul>
        <li>Daily cleaning or housekeeping services</li>
        <li>Meals or catering</li>
        <li>Guided tours or entertainment</li>
        <li>Extensive concierge services</li>
      </ul>
      
      <p>For most individual Airbnb hosts who simply provide accommodation with basic amenities, the income is treated as rental income and NR6 applies.</p>

      <h2>Deductible Expenses for Airbnb</h2>
      <p>When calculating net income for NR6 purposes, Airbnb hosts can deduct many expenses, including:</p>
      <ul>
        <li>Airbnb platform fees (typically 3%)</li>
        <li>Cleaning fees (if you pay a cleaner)</li>
        <li>Supplies (toiletries, linens, etc.)</li>
        <li>Insurance</li>
        <li>Mortgage interest</li>
        <li>Property taxes</li>
        <li>Utilities</li>
        <li>Repairs and maintenance</li>
      </ul>

      <h2>How NR6 Saves Airbnb Hosts Money</h2>
      <p>Consider an Airbnb property generating $4,000/month in bookings (about $48,000 annually). With expenses of $25,000, your net income is $23,000.</p>
      
      <p><strong>Without NR6:</strong> 25% of $48,000 = $12,000 withheld</p>
      <p><strong>With NR6:</strong> 25% of $23,000 = $5,750 withheld</p>
      <p><strong>Savings:</strong> $6,250 per year</p>

      <h2>Next Steps</h2>
      <p>If you're a non-resident Airbnb host in Canada, filing an NR6 is one of the smartest tax moves you can make. Our team specializes in NR6 filings for all types of rental properties, including short-term rentals.</p>
    `,
  },
  'nr6-for-us-residents': {
    title: 'NR6 Filing Guide for US Residents with Canadian Property',
    excerpt: 'Special considerations for American landlords owning Canadian rental property.',
    date: '2026-01-10',
    author: 'NR6.ca Team',
    category: 'Guides',
    content: `
      <p>If you're a US resident who owns rental property in Canada, you face unique tax considerations. The good news is that the NR6 form can significantly reduce your Canadian tax burden while you remain compliant with both CRA and IRS requirements.</p>

      <h2>The Canada-US Tax Treaty</h2>
      <p>The Canada-US Tax Treaty affects how your rental income is taxed. Key points:</p>
      <ul>
        <li>Canada has the right to tax rental income from Canadian property</li>
        <li>The US also taxes worldwide income of its citizens/residents</li>
        <li>Foreign Tax Credits prevent double taxation</li>
      </ul>

      <h2>Why NR6 Matters for Americans</h2>
      <p>Without an NR6, Canada withholds 25% of your gross rent. But under the treaty, your actual tax liability is likely much lower once expenses are considered. The NR6 allows you to pay tax on net income, improving your cash flow throughout the year.</p>

      <h2>US Tax Implications</h2>
      <p>As a US person, you must:</p>
      <ul>
        <li>Report Canadian rental income on your US tax return</li>
        <li>Claim Foreign Tax Credit for Canadian taxes paid</li>
        <li>File FBAR if Canadian bank accounts exceed $10,000</li>
        <li>Potentially file Form 8938 (FATCA)</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <p>US residents often make these mistakes with Canadian rental property:</p>
      <ul>
        <li>Forgetting to file the Section 216 return</li>
        <li>Not claiming all eligible expenses</li>
        <li>Missing the NR6 renewal deadline</li>
        <li>Failing to report Canadian income on US returns</li>
      </ul>

      <h2>Get Professional Help</h2>
      <p>Cross-border tax situations can be complex. While NR6.ca handles your Canadian NR6 filing, we recommend consulting a cross-border tax specialist for your overall tax strategy.</p>
    `,
  },
  'common-nr6-mistakes': {
    title: '5 Common NR6 Filing Mistakes (And How to Avoid Them)',
    excerpt: 'Avoid these costly errors when filing your NR6.',
    date: '2026-01-05',
    author: 'NR6.ca Team',
    category: 'Tax Tips',
    content: `
      <p>Filing an NR6 form can save you thousands of dollars in withholding tax, but mistakes can be costly. Here are the five most common errors we see—and how to avoid them.</p>

      <h2>Mistake #1: Filing Too Late</h2>
      <p>The NR6 must be filed before the first rental payment of the year to be effective from January 1st. Many landlords wait until partway through the year, missing months of reduced withholding.</p>
      <p><strong>Solution:</strong> File your NR6 by December 31st for the following year. We send reminders to our clients to ensure they never miss this deadline.</p>

      <h2>Mistake #2: Underestimating Expenses</h2>
      <p>Some landlords forget to include all eligible expenses, resulting in higher estimated net income and higher withholding than necessary.</p>
      <p><strong>Solution:</strong> Include all deductible expenses: mortgage interest, property taxes, insurance, repairs, management fees, condo fees, utilities (if landlord pays), and depreciation considerations.</p>

      <h2>Mistake #3: Not Having a Canadian Agent</h2>
      <p>CRA requires a Canadian resident agent for NR6 filings. Some landlords try to file without one, which leads to rejection.</p>
      <p><strong>Solution:</strong> Use a professional service like NR6.ca that includes Canadian agent services in the filing fee.</p>

      <h2>Mistake #4: Forgetting the Section 216 Return</h2>
      <p>The NR6 is an undertaking to file a Section 216 return. If you don't file by June 30th of the following year, CRA may revoke your NR6 election.</p>
      <p><strong>Solution:</strong> Set a calendar reminder or use our service—we remind you before the Section 216 deadline.</p>

      <h2>Mistake #5: Incorrect Property Information</h2>
      <p>Simple errors like wrong addresses, incorrect ownership percentages, or math mistakes can delay your filing.</p>
      <p><strong>Solution:</strong> Double-check all information before submitting. Our team reviews every filing for accuracy before submission.</p>
    `,
  },
  'do-you-need-a-canadian-agent': {
    title: 'Do You Need a Canadian Agent for NR6? Yes, and Here\'s Why',
    excerpt: 'CRA requires a Canadian resident agent for NR6 filings.',
    date: '2025-12-20',
    author: 'NR6.ca Team',
    category: 'Compliance',
    content: `
      <p>If you're a non-resident landlord considering an NR6 filing, you've probably noticed the form requires a Canadian resident agent. But what exactly does an agent do, and why is one required?</p>

      <h2>What is a Canadian Agent?</h2>
      <p>A Canadian agent is a resident of Canada who acts on behalf of a non-resident for tax purposes. The agent is responsible for:</p>
      <ul>
        <li>Receiving correspondence from CRA</li>
        <li>Ensuring withholding tax is remitted on time</li>
        <li>Signing the NR6 form</li>
        <li>Acting as a point of contact for CRA inquiries</li>
      </ul>

      <h2>Why CRA Requires an Agent</h2>
      <p>CRA requires a Canadian agent because:</p>
      <ul>
        <li>Non-residents are outside CRA's direct jurisdiction</li>
        <li>Someone in Canada must be accountable for tax compliance</li>
        <li>It ensures there's a reliable contact for communications</li>
        <li>It protects the Canadian tax system from non-compliance</li>
      </ul>

      <h2>Who Can Be Your Agent?</h2>
      <p>Your Canadian agent can be:</p>
      <ul>
        <li>A property management company</li>
        <li>An accountant or tax professional</li>
        <li>A lawyer</li>
        <li>A professional agent service (like NR6.ca)</li>
        <li>A trusted friend or family member who is a Canadian resident</li>
      </ul>

      <h2>Agent Responsibilities</h2>
      <p>Being an agent comes with legal obligations. The agent must ensure:</p>
      <ul>
        <li>Correct withholding amounts are calculated</li>
        <li>Remittances are made to CRA on time (15th of the following month)</li>
        <li>NR4 slips are issued</li>
        <li>Any CRA correspondence is addressed promptly</li>
      </ul>

      <h2>Our Agent Service</h2>
      <p>At NR6.ca, Canadian agent services are included in our $999 filing fee. We handle all agent responsibilities so you don't have to find someone willing to take on this role.</p>
    `,
  },
  'buying-canadian-property-non-resident': {
    title: 'Buying Canadian Property as a Non-Resident: Tax Implications',
    excerpt: 'Understand the tax implications before you buy Canadian real estate.',
    date: '2025-12-15',
    author: 'NR6.ca Team',
    category: 'Investment',
    content: `
      <p>Investing in Canadian real estate as a non-resident can be lucrative, but it comes with unique tax considerations. Understanding these before you buy will help you maximize your investment returns.</p>

      <h2>Rental Income Tax Basics</h2>
      <p>As a non-resident landlord in Canada, your rental income is subject to:</p>
      <ul>
        <li>25% withholding tax on gross rent (standard)</li>
        <li>Or tax on net income (with approved NR6)</li>
        <li>Section 216 annual return requirement</li>
      </ul>

      <h2>The NR6 Advantage</h2>
      <p>Filing an NR6 form before your first rental payment allows you to pay tax on net income instead of gross. This can reduce your withholding by 50-75%, significantly improving your cash flow.</p>

      <h2>Capital Gains When Selling</h2>
      <p>When you sell Canadian property, you may be subject to:</p>
      <ul>
        <li>Capital gains tax on the profit</li>
        <li>25% withholding by the purchaser's lawyer</li>
        <li>Certificate of Compliance (Section 116) requirements</li>
      </ul>

      <h2>Provincial Taxes to Consider</h2>
      <p>Some provinces have additional taxes for non-residents:</p>
      <ul>
        <li>British Columbia: Speculation and Vacancy Tax</li>
        <li>Ontario: Non-Resident Speculation Tax</li>
        <li>These vary by province and property type</li>
      </ul>

      <h2>Planning for Success</h2>
      <p>Before buying Canadian property as a non-resident:</p>
      <ul>
        <li>Consult with a cross-border tax specialist</li>
        <li>Understand all applicable taxes (federal, provincial, municipal)</li>
        <li>Plan to file NR6 from day one</li>
        <li>Set up proper banking and remittance processes</li>
        <li>Consider the implications in your home country</li>
      </ul>
    `,
  },
  'nr6-vs-section-216': {
    title: 'NR6 vs Section 216: Understanding the Difference',
    excerpt: 'Many landlords confuse NR6 and Section 216 returns.',
    date: '2025-12-10',
    author: 'NR6.ca Team',
    category: 'Guides',
    content: `
      <p>Two forms come up repeatedly when discussing non-resident rental income: the NR6 and the Section 216 return. Many landlords confuse these or don't understand how they work together. Let's clear that up.</p>

      <h2>What is the NR6?</h2>
      <p>The NR6 is an "undertaking" form filed at the beginning of the year. It:</p>
      <ul>
        <li>Estimates your net rental income for the year</li>
        <li>Allows reduced withholding (on net instead of gross)</li>
        <li>Must be filed before the first rental payment</li>
        <li>Is essentially a promise to file a Section 216 later</li>
      </ul>

      <h2>What is Section 216?</h2>
      <p>The Section 216 return is an income tax return filed after the year ends. It:</p>
      <ul>
        <li>Reports your actual rental income and expenses</li>
        <li>Calculates your true tax liability</li>
        <li>Reconciles tax withheld vs. tax owed</li>
        <li>May result in a refund if too much was withheld</li>
        <li>Is due by June 30 of the following year</li>
      </ul>

      <h2>How They Work Together</h2>
      <p>Think of NR6 and Section 216 as two parts of the same process:</p>
      <ol>
        <li><strong>NR6 (Start of Year):</strong> "Here's what I estimate my net income will be—please withhold tax on that amount instead of gross rent."</li>
        <li><strong>Section 216 (Following Year):</strong> "Here's what my actual income was—let's reconcile the tax."</li>
      </ol>

      <h2>What If You Don't File NR6?</h2>
      <p>Without an NR6:</p>
      <ul>
        <li>25% is withheld on gross rent</li>
        <li>You can still file a Section 216 return</li>
        <li>You may get a refund of excess tax</li>
        <li>But your cash flow suffers throughout the year</li>
      </ul>

      <h2>What If You Don't File Section 216?</h2>
      <p>If you filed an NR6 but don't file Section 216:</p>
      <ul>
        <li>Your NR6 election may be revoked by CRA</li>
        <li>Future NR6 applications may be denied</li>
        <li>You may face penalties</li>
        <li>You forfeit any potential refund</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>File both: NR6 at the start of the year to reduce withholding, and Section 216 by June 30 to finalize your taxes. Our service handles the NR6 portion—just don't forget to file your Section 216!</p>
    `,
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
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow">
          <Link 
            href="/blog" 
            className="text-primary-light hover:text-primary inline-flex items-center gap-1 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-muted mb-4">
            <span className="px-2 py-1 bg-blue-100 text-primary rounded text-xs font-medium">
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
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <article 
            className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary-light"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to File Your NR6?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            $999 flat fee. Complete in under 7 minutes. Agent services included.
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

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}
