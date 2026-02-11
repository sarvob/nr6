import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NR6 Blog - Tax Tips for Non-Resident Landlords | NR6.ca',
  description: 'Expert guides on NR6 filing, Section 216 returns, and Canadian rental income tax for non-resident landlords. Learn how to reduce withholding tax legally.',
}

const blogPosts = [
  // NEW SEO-FOCUSED ARTICLES
  {
    slug: 'how-to-fill-out-nr6-form-step-by-step',
    title: 'How to Fill Out the NR6 Form: A Step-by-Step Guide (2026)',
    excerpt: 'The official NR6 instructions can be confusing. Here\'s a plain-English walkthrough of every section—what to enter, where to send it, and common mistakes to avoid.',
    date: '2026-02-10',
    readTime: '10 min read',
    category: 'How-To Guide',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop',
  },
  {
    slug: 'who-handles-nr6-withholding',
    title: 'Who Actually Handles NR6 Withholding? (Tenant, Agent, or You)',
    excerpt: 'One of the most misunderstood parts of NR6: who is responsible for withholding tax? The tenant? Your agent? You? CRA doesn\'t care about confusion—only compliance.',
    date: '2026-02-09',
    readTime: '7 min read',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop',
  },
  {
    slug: 'nr6-form-explained-2026-guide',
    title: 'NR6 Form Explained: Who Needs to File It and Why It Matters (2026 Guide)',
    excerpt: 'Everything you need to know about the NR6 form in plain English. Who must file, what happens if you don\'t, and why it could save you thousands.',
    date: '2026-02-01',
    readTime: '8 min read',
    category: 'NR6 Basics',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop',
  },
  {
    slug: 'nr6-deadline-missed-penalties-fixes',
    title: 'NR6 Deadline Missed? What Happens If You File Late (Penalties & Fixes)',
    excerpt: 'Missed the NR6 deadline? Don\'t panic. Here\'s exactly what CRA does, what penalties you face, and how to fix it before things get worse.',
    date: '2026-01-28',
    readTime: '7 min read',
    category: 'Deadlines',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=400&fit=crop',
  },
  {
    slug: 'nr6-vs-section-216-difference',
    title: 'NR6 vs Section 216: What\'s the Difference and Do You Need Both?',
    excerpt: 'Confused about NR6 and Section 216? You\'re not alone. Here\'s a clear breakdown of what each form does and why you probably need both.',
    date: '2026-01-25',
    readTime: '6 min read',
    category: 'Tax Forms',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=400&fit=crop',
  },
  {
    slug: 'non-resident-rental-income-tax-canada',
    title: 'How Much Tax Does a Non-Resident Pay on Rental Income in Canada?',
    excerpt: 'The complete breakdown of Canadian rental income tax for non-residents. Understand the 25% withholding, how to reduce it, and what you actually owe.',
    date: '2026-01-20',
    readTime: '9 min read',
    category: 'Tax Rates',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=400&fit=crop',
  },
  // ORIGINAL ARTICLES
  {
    slug: 'nr6-for-airbnb-hosts',
    title: 'Can Airbnb Hosts File NR6? Everything You Need to Know',
    excerpt: 'If you own a short-term rental in Canada and live abroad, you might be wondering if NR6 applies to you. The answer could save you thousands.',
    date: '2026-01-15',
    readTime: '6 min read',
    category: 'Short-Term Rentals',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=400&fit=crop',
  },
  {
    slug: 'nr6-for-us-residents',
    title: 'American Landlords in Canada: Your Complete NR6 Guide',
    excerpt: 'Own Canadian property but live in the US? Here\'s how to navigate the cross-border tax implications and keep more of your rental income.',
    date: '2026-01-10',
    readTime: '8 min read',
    category: 'Cross-Border',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
  },
  {
    slug: 'common-nr6-mistakes',
    title: '5 Costly NR6 Mistakes That Could Cost You Thousands',
    excerpt: 'These common filing errors lead to rejected applications, missed savings, and CRA headaches. Here\'s how to avoid every single one.',
    date: '2026-01-05',
    readTime: '5 min read',
    category: 'Mistakes to Avoid',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
  },
  {
    slug: 'do-you-need-a-canadian-agent',
    title: 'Why CRA Requires a Canadian Agent (And How to Get One)',
    excerpt: 'No Canadian agent means no NR6 approval. Learn what agents do, why they\'re mandatory, and the easiest way to get one.',
    date: '2025-12-20',
    readTime: '4 min read',
    category: 'Requirements',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop',
  },
  {
    slug: 'buying-canadian-property-non-resident',
    title: 'Buying Canadian Real Estate as a Non-Resident: Tax Planning 101',
    excerpt: 'Before you invest, understand the tax implications. From purchase to rental to sale—here\'s what non-residents need to know.',
    date: '2025-12-15',
    readTime: '7 min read',
    category: 'Investment',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop',
  },
  {
    slug: 'filed-nr6-whats-next',
    title: 'I Filed My NR6—Now What? Your Complete Next Steps Guide',
    excerpt: 'You submitted your NR6. Great! But the process isn\'t over. Here\'s exactly what happens next and what you need to do to stay compliant.',
    date: '2025-12-10',
    readTime: '5 min read',
    category: 'After Filing',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop',
  },
]

const featuredPost = blogPosts[0]
const otherPosts = blogPosts.slice(1)

export default function BlogPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            NR6 Guides & Tax Insights
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Clear, practical advice for non-resident landlords navigating Canadian rental income taxes. 
            No jargon. No fluff. Just answers.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10]">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 text-sm text-muted mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted mb-6">{featuredPost.excerpt}</p>
                <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Full Guide
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Other Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-foreground mb-8">More Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted mb-3">
                    <span className="px-2 py-0.5 bg-blue-100 text-primary rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to File Your NR6?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Stop overpaying on your Canadian rental income. $999 CAD flat fee. We handle everything.
            </p>
            <Link 
              href="/start" 
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              Start Filing Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
