import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - NR6.ca | Tax Tips for Non-Resident Landlords',
  description: 'Expert insights and tips for non-resident landlords about NR6 filing, Canadian rental income tax, and maximizing your returns.',
}

const blogPosts = [
  {
    slug: 'nr6-for-airbnb-hosts',
    title: 'NR6 for Airbnb Hosts: What Non-Resident Landlords Need to Know',
    excerpt: 'Can you file an NR6 for your Airbnb property? Learn how short-term rentals qualify for NR6 and maximize your tax savings.',
    date: '2026-01-15',
    author: 'NR6.ca Team',
    category: 'Tax Tips',
  },
  {
    slug: 'nr6-for-us-residents',
    title: 'NR6 Filing Guide for US Residents with Canadian Property',
    excerpt: 'Special considerations for American landlords owning Canadian rental property. Tax treaties, filing requirements, and common mistakes to avoid.',
    date: '2026-01-10',
    author: 'NR6.ca Team',
    category: 'Guides',
  },
  {
    slug: 'common-nr6-mistakes',
    title: '5 Common NR6 Filing Mistakes (And How to Avoid Them)',
    excerpt: 'Avoid these costly errors when filing your NR6. From incorrect expense calculations to missed deadlines, we cover what to watch out for.',
    date: '2026-01-05',
    author: 'NR6.ca Team',
    category: 'Tax Tips',
  },
  {
    slug: 'do-you-need-a-canadian-agent',
    title: 'Do You Need a Canadian Agent for NR6? Yes, and Here\'s Why',
    excerpt: 'CRA requires a Canadian resident agent for NR6 filings. Learn what agents do, how to find one, and why it matters for your tax compliance.',
    date: '2025-12-20',
    author: 'NR6.ca Team',
    category: 'Compliance',
  },
  {
    slug: 'buying-canadian-property-non-resident',
    title: 'Buying Canadian Property as a Non-Resident: Tax Implications',
    excerpt: 'Thinking of investing in Canadian real estate? Understand the tax implications before you buy, from withholding tax to NR6 filing.',
    date: '2025-12-15',
    author: 'NR6.ca Team',
    category: 'Investment',
  },
  {
    slug: 'nr6-vs-section-216',
    title: 'NR6 vs Section 216: Understanding the Difference',
    excerpt: 'Many landlords confuse NR6 and Section 216 returns. Learn how they work together and why you need both for tax compliance.',
    date: '2025-12-10',
    author: 'NR6.ca Team',
    category: 'Guides',
  },
]

export default function BlogPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Expert insights and practical tips for non-resident landlords navigating Canadian rental income taxes.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card group hover:border-primary-light hover:shadow-md transition-all">
                <div className="flex items-center gap-4 text-sm text-muted mb-3">
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
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-primary-light font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to File Your NR6?</h2>
          <p className="text-muted mb-6">
            Stop overpaying on Canadian rental income tax. File your NR6 today.
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
