import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - NR6.ca | Tax Tips for Non-Resident Landlords',
  description: 'Expert insights and tips for non-resident landlords about NR6 filing, Canadian rental income tax, and maximizing your returns.',
}

const blogPosts = [
  {
    slug: 'nr6-for-airbnb-hosts',
    title: 'Can Airbnb Hosts File NR6? Everything You Need to Know',
    excerpt: 'If you own a short-term rental in Canada and live abroad, you might be wondering if NR6 applies to you. The answer could save you thousands.',
    date: '2026-01-15',
    readTime: '6 min read',
    category: 'Tax Tips',
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
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
  },
  {
    slug: 'do-you-need-a-canadian-agent',
    title: 'Why CRA Requires a Canadian Agent (And How to Get One)',
    excerpt: 'No Canadian agent means no NR6 approval. Learn what agents do, why they\'re mandatory, and the easiest way to get one.',
    date: '2025-12-20',
    readTime: '4 min read',
    category: 'Compliance',
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
    slug: 'nr6-vs-section-216',
    title: 'NR6 vs Section 216: What\'s the Difference?',
    excerpt: 'Confused about these two forms? You\'re not alone. Here\'s a clear explanation of how they work together to minimize your taxes.',
    date: '2025-12-10',
    readTime: '5 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=400&fit=crop',
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
            NR6 Insights & Guides
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Expert advice for non-resident landlords navigating Canadian rental income taxes. 
            Learn how to maximize your savings and stay compliant.
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
                  Read Article
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
          <h2 className="text-2xl font-bold text-foreground mb-8">More Articles</h2>
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to File Your NR6?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Stop overpaying on your Canadian rental income. Our $999 CAD flat-fee service handles everything.
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
