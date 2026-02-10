import Link from 'next/link'
import { ArrowRight, ArrowLeft, Calendar, Clock, CheckCircle, AlertTriangle, XCircle, Lightbulb, FileText } from 'lucide-react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// =============================================================================
// ARTICLE 0: Who Handles NR6 Withholding - NEW
// =============================================================================
const article0 = {
  title: 'Who Actually Handles NR6 Withholding? (Tenant, Agent, or You)',
  excerpt: 'One of the most misunderstood parts of NR6: who is responsible for withholding tax? The tenant? Your agent? You? CRA doesn\'t care about confusion—only compliance.',
  date: '2026-02-09',
  readTime: '7 min read',
  category: 'Compliance',
  image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop',
  metaDescription: 'Who is responsible for NR6 withholding tax in Canada? Learn about tenant vs agent vs owner responsibilities and avoid CRA penalties from confusion.',
  content: (
    <>
      <p className="text-xl text-muted leading-relaxed mb-8">
        If you're a <strong>non-resident renting out a place in Canada</strong>, there's one question almost everyone gets wrong at first: <em>Who is actually supposed to withhold and send tax to CRA?</em>
      </p>

      <p>Ask around and you'll hear different answers:</p>
      <ul className="space-y-2 my-6">
        <li className="flex items-start gap-3">
          <span className="text-muted">"The tenant does it."</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-muted">"My accountant handles it."</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-muted">"The property manager takes care of everything."</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-red-800 mb-1">The Problem?</p>
            <p className="text-red-700"><strong>CRA doesn't see it that way.</strong> Misunderstanding this is one of the fastest ways non-residents end up with penalties.</p>
          </div>
        </div>
      </div>

      <p>Let's walk through it properly—no jargon, no scare tactics.</p>

      <h2>The Basic Rule (The One CRA Actually Enforces)</h2>
      <p>
        If you're a non-resident earning rental income in Canada, CRA expects <strong>tax to be withheld and sent to them every month</strong>.
      </p>
      <p>
        By default, that amount is <strong>25% of the gross rent</strong>.
      </p>
      <p>
        CRA is not very emotional about <em>who</em> does this. They care about <strong>one thing only</strong>:
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
        <p className="text-xl font-semibold text-blue-800 text-center">Did the correct amount arrive, on time?</p>
      </div>

      <p>That's it.</p>

      <h2>So… Who Can Do the Withholding?</h2>
      <p>There are <strong>three common setups</strong>, and all of them are technically allowed.</p>

      <h3>1. The Tenant Withholds the Tax</h3>
      <p>This is the default <em>on paper</em>. The idea is:</p>
      <ul className="space-y-2 my-4">
        <li>• Tenant pays rent</li>
        <li>• Tenant withholds 25%</li>
        <li>• Tenant sends it to CRA</li>
      </ul>

      <p><strong>In real life?</strong> This almost never works smoothly.</p>
      <p>Tenants:</p>
      <ul className="space-y-2 my-4">
        <li className="flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
          <span>Don't want CRA responsibility</span>
        </li>
        <li className="flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
          <span>Forget deadlines</span>
        </li>
        <li className="flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
          <span>Move out mid-year</span>
        </li>
        <li className="flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
          <span>Push back when they realize what's involved</span>
        </li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-6">
        <p className="text-yellow-800">
          <strong>Here's the part people miss:</strong> CRA can still come after <strong>you</strong>, the owner, if something goes wrong.
        </p>
      </div>

      <h3>2. A Property Manager or Agent Handles It</h3>
      <p>This is the <strong>most common setup</strong>. Typically:</p>
      <ul className="space-y-2 my-4">
        <li>• Tenant pays full rent to the manager</li>
        <li>• Manager withholds the tax</li>
        <li>• Manager remits to CRA</li>
        <li>• Manager issues year-end slips</li>
      </ul>

      <p>This is more practical—but it's not risk-free.</p>
      <p>If the manager:</p>
      <ul className="space-y-2 my-4">
        <li className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
          <span>Misses a payment</span>
        </li>
        <li className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
          <span>Uses the wrong CRA account</span>
        </li>
        <li className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
          <span>Files something incorrectly</span>
        </li>
      </ul>

      <p><strong>CRA still looks to you.</strong></p>
      <p className="text-muted">Using an agent does not transfer liability.</p>

      <h3>3. You Handle Withholding Yourself (Yes, Even as a Non-Resident)</h3>
      <p>This surprises many people:</p>
      <p><strong>Yes—a non-resident owner can handle the withholding themselves.</strong> Even if you live outside Canada.</p>
      
      <p>CRA allows this as long as:</p>
      <ul className="space-y-2 my-4">
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>The correct amount is calculated</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>Payments are sent on time</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>The right reference numbers are used</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>Year-end slips are filed</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>The annual tax return is completed</span>
        </li>
      </ul>

      <p>It's legal. But it's also where <strong>most mistakes happen</strong>.</p>

      <h2>Where NR6 Fits Into This</h2>
      <p>Filing an <strong>NR6</strong> can reduce how much tax is withheld each month.</p>

      <p>What it <strong>does not</strong> do:</p>
      <ul className="space-y-2 my-4">
        <li className="flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
          <span>It does not remove the obligation to remit</span>
        </li>
        <li className="flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
          <span>It does not decide <em>who</em> is responsible</span>
        </li>
      </ul>

      <p>Someone still has to:</p>
      <ul className="space-y-2 my-4">
        <li>• Do the math</li>
        <li>• Send money every month</li>
        <li>• Keep records</li>
        <li>• File slips</li>
        <li>• Close the year properly</li>
      </ul>

      <p><strong>NR6 lowers the amount—it doesn't eliminate the work.</strong></p>

      <h2>The Most Common Mistake CRA Sees</h2>
      <p>Everyone assumes <strong>someone else is handling it</strong>.</p>

      <div className="bg-gray-50 rounded-xl p-6 my-8">
        <ul className="space-y-3 text-muted">
          <li>• Tenant thinks the accountant does it</li>
          <li>• Accountant assumes the property manager does it</li>
          <li>• Property manager assumes the owner is handling it</li>
        </ul>
        <p className="mt-4 font-medium text-foreground">Months go by. Nothing is remitted.</p>
        <p className="text-red-600 font-semibold mt-2">CRA doesn't argue about misunderstandings. They assess penalties.</p>
      </div>

      <h2>The Safest Way to Handle This</h2>
      <p>You don't need anything fancy.</p>
      <p>You just need <strong>one clearly defined party</strong> who is responsible for:</p>

      <ul className="space-y-2 my-4">
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>Withholding</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>Monthly remittance</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>Year-end slips</span>
        </li>
      </ul>

      <p>And that responsibility should be:</p>
      <ul className="space-y-2 my-4">
        <li>• Clear</li>
        <li>• Documented</li>
        <li>• Reviewed once a year</li>
      </ul>

      <p><strong>CRA doesn't care <em>who</em> you choose. They care that it's done correctly.</strong></p>

      <h2>Bottom Line</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span>You <em>can</em> handle withholding yourself as a non-resident.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span>You <em>can</em> assign an agent.</span>
          </li>
          <li className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
            <span>You <em>cannot</em> ignore it or assume it "just happens."</span>
          </li>
        </ul>
      </div>

      <p>Most problems come from confusion, not bad intent.</p>
      <p><strong>Clear responsibility now saves a lot of stress later.</strong></p>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
        <h3 className="text-lg font-semibold text-foreground mb-2">How We Help</h3>
        <p className="text-muted text-sm">
          At NR6.ca, our $999 annual package includes monthly remittance handling, NR4 slips, and Section 216 filing. One party. One responsibility. No confusion.
        </p>
      </div>
    </>
  ),
};

// =============================================================================
// ARTICLE 1: NR6 Form Explained (2026 Guide) - NEW
// =============================================================================
const article1 = {
  title: 'NR6 Form Explained: Who Needs to File It and Why It Matters (2026 Guide)',
  excerpt: 'Everything you need to know about the NR6 form in plain English. Who must file, what happens if you don\'t, and why it could save you thousands.',
  date: '2026-02-01',
  readTime: '8 min read',
  category: 'NR6 Basics',
  image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop',
  metaDescription: 'Complete 2026 guide to the NR6 form for non-resident landlords in Canada. Learn who needs to file, deadlines, and how to reduce your 25% withholding tax.',
  content: (
    <>
      <p className="text-xl text-muted leading-relaxed mb-8">
        If you own rental property in Canada but live abroad, there's a good chance you're paying more tax than you need to. The NR6 form is how you fix that. This guide explains everything in plain English—no accounting degree required.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-blue-800 mb-1">The 30-Second Summary</p>
            <p className="text-blue-700">Without NR6, Canada takes 25% of your <strong>gross</strong> rent. With NR6, they only take 25% of your <strong>net</strong> income (after expenses). For most landlords, that's a difference of thousands of dollars per year.</p>
          </div>
        </div>
      </div>

      <h2>What is the NR6 Form?</h2>
      <p>
        The NR6 (officially called "Undertaking to File an Income Tax Return by a Non-Resident Receiving Rent from Real or Immovable Property or Receiving a Timber Royalty") is a form you submit to the Canada Revenue Agency (CRA) to reduce the amount of tax withheld from your rental income.
      </p>
      <p>
        In simple terms: it's your promise to CRA that you'll file a proper tax return later, in exchange for paying less withholding tax now.
      </p>

      <h2>Who Needs to File NR6?</h2>
      <p>You should file an NR6 if <strong>all</strong> of these apply to you:</p>
      
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>You're a <strong>non-resident of Canada</strong> for tax purposes</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>You own <strong>rental property in Canada</strong> (house, condo, Airbnb, etc.)</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>You have <strong>deductible expenses</strong> (mortgage interest, property tax, repairs, etc.)</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <span>You want to <strong>reduce your withholding tax</strong></span>
        </li>
      </ul>

      <h2>What Happens If You Don't File NR6?</h2>
      <p>
        Without an approved NR6, your property manager (or tenant, if they pay you directly) is <strong>legally required</strong> to:
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-red-800 mb-2">Without NR6:</p>
            <ul className="text-red-700 space-y-1">
              <li>• Withhold <strong>25% of gross rent</strong> (not net—gross!)</li>
              <li>• Send that money to CRA every month</li>
              <li>• You get what's left over</li>
            </ul>
          </div>
        </div>
      </div>

      <p>
        Let's put real numbers to this. Say you collect $3,000/month in rent ($36,000/year), but you have $20,000 in expenses:
      </p>

      <div className="bg-gray-50 rounded-xl p-6 my-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-5 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">❌ Without NR6</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>Gross rent:</span> <span>$36,000</span></li>
              <li className="flex justify-between"><span>25% withholding:</span> <span className="font-bold text-red-600">-$9,000</span></li>
              <li className="flex justify-between border-t pt-2"><span>You receive:</span> <span>$27,000</span></li>
            </ul>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">✓ With NR6</h4>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>Gross rent:</span> <span>$36,000</span></li>
              <li className="flex justify-between"><span>Expenses:</span> <span>-$20,000</span></li>
              <li className="flex justify-between"><span>Net income:</span> <span>$16,000</span></li>
              <li className="flex justify-between"><span>25% withholding:</span> <span className="font-bold text-green-600">-$4,000</span></li>
              <li className="flex justify-between border-t pt-2"><span>You receive:</span> <span>$32,000</span></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 pt-6 border-t">
          <p className="text-muted mb-1">Annual Difference</p>
          <p className="text-4xl font-bold text-primary">$5,000 more in your pocket</p>
        </div>
      </div>

      <h2>Common Myths About NR6</h2>
      
      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">"My accountant handles this automatically"</p>
              <p className="text-muted text-sm mt-1">No. NR6 must be filed <em>before</em> you receive rental income. Many accountants only deal with year-end returns. You need to proactively request NR6 filing.</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">"I'll just get a refund at tax time"</p>
              <p className="text-muted text-sm mt-1">Technically possible via Section 216, but you'll wait 12+ months for your money. NR6 gives you better cash flow throughout the year.</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">"NR6 is only for big landlords"</p>
              <p className="text-muted text-sm mt-1">Wrong. Even one property benefits from NR6. The savings percentage is often higher for single-property owners with significant expenses.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>NR6 Requirements: What You Need</h2>
      <p>To file NR6, you'll need:</p>

      <ol className="space-y-3 my-6 list-decimal list-inside">
        <li><strong>Property address</strong> in Canada</li>
        <li><strong>Estimated rental income</strong> for the year</li>
        <li><strong>Estimated expenses</strong> (mortgage interest, property tax, insurance, repairs, condo fees, management fees)</li>
        <li><strong>A Canadian agent</strong> — a Canadian resident who agrees to act on your behalf (required by CRA)</li>
        <li><strong>Your signature</strong> and your agent's signature</li>
      </ol>

      <h2>When to File NR6</h2>
      <p>
        The NR6 should be filed <strong>before</strong> you receive your first rental payment of the year. For most landlords:
      </p>
      <ul className="space-y-2 my-6">
        <li className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <span><strong>December 31</strong> of the previous year (to be effective January 1)</span>
        </li>
        <li className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <span>Before your <strong>first rent payment</strong> if you buy a new property mid-year</span>
        </li>
      </ul>

      <h2>Ready to File?</h2>
      <p>
        At NR6.ca, we handle the entire process for a flat $999 CAD fee—including acting as your Canadian agent. Most clients complete our form in under 7 minutes.
      </p>
    </>
  ),
};

// =============================================================================
// ARTICLE 2: NR6 Deadline Missed - NEW
// =============================================================================
const article2 = {
  title: 'NR6 Deadline Missed? What Happens If You File Late (Penalties & Fixes)',
  excerpt: 'Missed the NR6 deadline? Don\'t panic. Here\'s exactly what CRA does, what penalties you face, and how to fix it before things get worse.',
  date: '2026-01-28',
  readTime: '7 min read',
  category: 'Deadlines',
  image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=600&fit=crop',
  metaDescription: 'Missed your NR6 filing deadline? Learn what penalties apply, how CRA handles late filings, and exactly what steps to take to minimize damage.',
  content: (
    <>
      <p className="text-xl text-muted leading-relaxed mb-8">
        You just realized you should have filed an NR6 but didn't. Maybe you didn't know about it. Maybe your accountant never mentioned it. Whatever the reason, you're now wondering: <em>How bad is this?</em>
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-yellow-800 mb-1">First: Don't Panic</p>
            <p className="text-yellow-700">Missing the NR6 deadline isn't the end of the world. There are no direct "late filing penalties" for NR6 itself. But there are significant <strong>financial consequences</strong> you need to understand.</p>
          </div>
        </div>
      </div>

      <h2>What is the NR6 Deadline?</h2>
      <p>Let's be clear about what "deadline" actually means for NR6:</p>

      <div className="bg-gray-50 rounded-xl p-6 my-8">
        <h4 className="font-semibold text-foreground mb-4">NR6 Timing Rules</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</div>
            <div>
              <p className="font-medium">For existing properties:</p>
              <p className="text-sm text-muted">File by <strong>December 31</strong> for the NR6 to be effective January 1 of the next year</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</div>
            <div>
              <p className="font-medium">For new properties:</p>
              <p className="text-sm text-muted">File <strong>before your first rental payment</strong></p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</div>
            <div>
              <p className="font-medium">Processing time:</p>
              <p className="text-sm text-muted">CRA takes <strong>4-8 weeks</strong> to approve, so factor that in</p>
            </div>
          </li>
        </ul>
      </div>

      <p>
        The key point: NR6 only applies <strong>going forward</strong> from when it's approved. It's not retroactive.
      </p>

      <h2>Can NR6 Be Filed Retroactively?</h2>
      <p>
        <strong>No.</strong> This is the most important thing to understand. NR6 cannot be backdated. If you file NR6 in March, it only applies from March onward (once approved). January and February withholding is still at 25% of gross.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
        <p className="font-semibold text-red-800 mb-2">Real Example:</p>
        <p className="text-red-700 text-sm">
          John forgot to file NR6 for 2026. He realizes in April and files immediately. His NR6 is approved in May. 
          For January-April, his property manager withheld 25% of gross rent ($2,500/month × 4 months = $10,000 withheld). 
          With NR6, it would have been $1,000/month ($4,000 total). 
          John overpaid $6,000 for those 4 months. He can get it back via Section 216, but not until 2027.
        </p>
      </div>

      <h2>How to Minimize Damage If You Already Missed It</h2>
      <p>If you're reading this and haven't filed NR6 yet:</p>

      <ol className="space-y-4 my-6">
        <li className="flex items-start gap-4">
          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
          <div>
            <p className="font-semibold">File NR6 immediately</p>
            <p className="text-muted text-sm">Every day you wait is another day of 25% gross withholding.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
          <div>
            <p className="font-semibold">Track your expenses carefully</p>
            <p className="text-muted text-sm">You'll need them for your Section 216 return to claim a refund.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
          <div>
            <p className="font-semibold">Set a reminder for next year</p>
            <p className="text-muted text-sm">File by December 31 for the following year. Don't let this happen again.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
          <div>
            <p className="font-semibold">File Section 216 on time</p>
            <p className="text-muted text-sm">Due June 30 of the following year. This is how you get your overpaid tax back.</p>
          </div>
        </li>
      </ol>

      <h2>The Bottom Line</h2>
      <p>
        There's no specific "NR6 late filing penalty" from CRA. But the consequence of not filing—or filing late—is that you overpay tax and have to wait 12+ months to get it back.
      </p>
    </>
  ),
};

// =============================================================================
// ARTICLE 3: NR6 vs Section 216 - NEW
// =============================================================================
const article3 = {
  title: 'NR6 vs Section 216: What\'s the Difference and Do You Need Both?',
  excerpt: 'Confused about NR6 and Section 216? You\'re not alone. Here\'s a clear breakdown of what each form does and why you probably need both.',
  date: '2026-01-25',
  readTime: '6 min read',
  category: 'Tax Forms',
  image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=600&fit=crop',
  metaDescription: 'NR6 vs Section 216 explained clearly. Learn when to file each form, how they work together, and avoid common mistakes.',
  content: (
    <>
      <p className="text-xl text-muted leading-relaxed mb-8">
        "Do I file NR6 or Section 216?" It's one of the most common questions non-resident landlords ask. The short answer: <strong>you probably need both</strong>. They're not alternatives—they're partners in the same tax process.
      </p>

      <h2>The Simple Explanation</h2>
      <p>Think of NR6 and Section 216 as two parts of the same system:</p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">NR6</div>
          <h3 className="text-xl font-bold text-foreground mb-2">The Promise</h3>
          <p className="text-sm text-muted mb-4">Filed <strong>before</strong> receiving rent</p>
          <ul className="text-sm space-y-2">
            <li>• "I promise to file a tax return"</li>
            <li>• Reduces your withholding rate</li>
            <li>• Based on <em>estimated</em> income/expenses</li>
            <li>• Improves your cash flow now</li>
          </ul>
        </div>
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">216</div>
          <h3 className="text-xl font-bold text-foreground mb-2">The Fulfillment</h3>
          <p className="text-sm text-muted mb-4">Filed <strong>after</strong> the tax year ends</p>
          <ul className="text-sm space-y-2">
            <li>• "Here's what actually happened"</li>
            <li>• Reports actual income/expenses</li>
            <li>• Calculates real tax liability</li>
            <li>• Results in refund or amount owing</li>
          </ul>
        </div>
      </div>

      <h2>Side-by-Side Comparison</h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-primary">
              <th className="text-left py-3 px-4 font-semibold bg-gray-50">Feature</th>
              <th className="text-left py-3 px-4 font-semibold bg-blue-50">NR6</th>
              <th className="text-left py-3 px-4 font-semibold bg-green-50">Section 216</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Purpose</td>
              <td className="py-3 px-4 bg-blue-50/50">Reduce withholding</td>
              <td className="py-3 px-4 bg-green-50/50">Calculate final tax</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">When filed</td>
              <td className="py-3 px-4 bg-blue-50/50">Before rent received</td>
              <td className="py-3 px-4 bg-green-50/50">After year ends</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Deadline</td>
              <td className="py-3 px-4 bg-blue-50/50">Dec 31 (for next year)</td>
              <td className="py-3 px-4 bg-green-50/50">June 30 (for prior year)</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Based on</td>
              <td className="py-3 px-4 bg-blue-50/50">Estimates</td>
              <td className="py-3 px-4 bg-green-50/50">Actual figures</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Mandatory?</td>
              <td className="py-3 px-4 bg-blue-50/50">Optional (but smart)</td>
              <td className="py-3 px-4 bg-green-50/50">Required if NR6 filed</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Result</td>
              <td className="py-3 px-4 bg-blue-50/50">Better cash flow</td>
              <td className="py-3 px-4 bg-green-50/50">Refund or tax owing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Do You Need Both?</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">If you file NR6:</p>
              <p className="text-muted text-sm mt-1">You <strong>must</strong> file Section 216. It's a condition of NR6 approval. Skip it, and CRA can revoke your NR6 for future years.</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">If you don't file NR6:</p>
              <p className="text-muted text-sm mt-1">You can still file Section 216 to claim a refund of excess withholding. But you'll have overpaid all year.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>The Bottom Line</h2>
      <p>
        NR6 and Section 216 work together. NR6 is the "estimate" that saves you money throughout the year. Section 216 is the "true-up" that settles your actual tax. File both, on time, every year.
      </p>
    </>
  ),
};

// =============================================================================
// ARTICLE 4: Non-Resident Rental Income Tax Canada - NEW
// =============================================================================
const article4 = {
  title: 'How Much Tax Does a Non-Resident Pay on Rental Income in Canada?',
  excerpt: 'The complete breakdown of Canadian rental income tax for non-residents. Understand the 25% withholding, how to reduce it, and what you actually owe.',
  date: '2026-01-20',
  readTime: '9 min read',
  category: 'Tax Rates',
  image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1200&h=600&fit=crop',
  metaDescription: 'Complete guide to Canadian rental income tax for non-residents. Learn about the 25% withholding tax, how to reduce it with NR6, and your actual tax obligations.',
  content: (
    <>
      <p className="text-xl text-muted leading-relaxed mb-8">
        If you're a non-resident earning rental income from Canadian property, your first question is probably: <em>"How much tax do I actually owe?"</em> The answer isn't as straightforward as a single percentage.
      </p>

      <h2>The Default: 25% Withholding Tax</h2>
      <p>
        Under Canada's Income Tax Act, rental payments to non-residents are subject to a <strong>25% withholding tax on gross rent</strong>.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-red-800 mb-2">The 25% Gross Problem</p>
            <p className="text-red-700">"Gross" means <strong>before any expenses</strong>. Mortgage interest, property tax, repairs—none of it matters. CRA takes 25% off the top.</p>
          </div>
        </div>
      </div>

      <h2>But That's Not Your "Real" Tax Rate</h2>
      <p>
        The 25% withholding is essentially a <strong>prepayment</strong>, not necessarily your final tax bill. Canada actually taxes non-residents on rental income using graduated rates—IF you file the right forms.
      </p>

      <h3>Canada's Tax Rates on Net Rental Income</h3>
      <p>Non-residents who elect to file under Section 216 are taxed on NET income at these federal rates (2026):</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-primary bg-blue-50">
              <th className="text-left py-3 px-4 font-semibold">Taxable Income (CAD)</th>
              <th className="text-left py-3 px-4 font-semibold">Federal Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">$0 – $55,867</td>
              <td className="py-3 px-4">15%</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4">$55,867 – $111,733</td>
              <td className="py-3 px-4">20.5%</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">$111,733 – $173,205</td>
              <td className="py-3 px-4">26%</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4">$173,205 – $246,752</td>
              <td className="py-3 px-4">29%</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Over $246,752</td>
              <td className="py-3 px-4">33%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Real Example: The Math</h2>

      <div className="bg-gray-50 rounded-xl p-6 my-8">
        <h4 className="font-semibold mb-4">Toronto condo, owner lives in Hong Kong</h4>
        
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-medium text-foreground mb-2">Income</p>
            <ul className="space-y-1 text-muted">
              <li>Annual rent: $36,000</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-foreground mb-2">Expenses</p>
            <ul className="space-y-1 text-muted">
              <li>Mortgage interest: $12,000</li>
              <li>Property tax: $4,000</li>
              <li>Condo fees: $6,000</li>
              <li>Insurance: $1,200</li>
              <li>Repairs: $800</li>
              <li><strong>Total: $24,000</strong></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-foreground mb-2">Net Income</p>
            <ul className="space-y-1 text-muted">
              <li>$36,000 - $24,000</li>
              <li><strong>= $12,000</strong></li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t">
          <div className="bg-red-100 p-4 rounded-lg">
            <p className="font-semibold text-red-800">Without NR6/216</p>
            <p className="text-sm text-red-700">25% × $36,000 = <strong>$9,000 tax</strong></p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="font-semibold text-green-800">With NR6/216</p>
            <p className="text-sm text-green-700">15% × $12,000 = <strong>$1,800 tax</strong></p>
          </div>
        </div>

        <div className="text-center mt-6 pt-6 border-t">
          <p className="text-muted">Annual Tax Savings</p>
          <p className="text-4xl font-bold text-primary">$7,200</p>
        </div>
      </div>

      <h2>The Bottom Line</h2>
      <p>
        As a non-resident, you'll pay somewhere between 15-33% on your net Canadian rental income—much less than the default 25% of gross. The key is filing NR6 and Section 216.
      </p>
    </>
  ),
};

// =============================================================================
// ARTICLE 5: NR6 for Airbnb Hosts - ORIGINAL
// =============================================================================
const article5 = {
  title: 'Can Airbnb Hosts File NR6? Everything You Need to Know',
  excerpt: 'If you own a short-term rental in Canada and live abroad, you might be wondering if NR6 applies to you. The answer could save you thousands.',
  date: '2026-01-15',
  readTime: '6 min read',
  category: 'Short-Term Rentals',
  image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=600&fit=crop',
  metaDescription: 'Can Airbnb and VRBO hosts file NR6? Yes! Learn how short-term rental income qualifies and how to save thousands on Canadian withholding tax.',
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
        CRA draws an important distinction between <em>rental income</em> and <em>business income</em>. NR6 applies to rental income—so understanding this difference is crucial.
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

      <h2>How to Get Started</h2>
      <p>
        Filing NR6 for your Airbnb is straightforward. You'll need your property details, rental income estimates, and expense projections. Our online form takes about 5 minutes to complete.
      </p>
    </>
  ),
};

// =============================================================================
// ARTICLE 6: NR6 for US Residents - ORIGINAL
// =============================================================================
const article6 = {
  title: 'American Landlords in Canada: Your Complete NR6 Guide',
  excerpt: 'Own Canadian property but live in the US? Here\'s how to navigate the cross-border tax implications and keep more of your rental income.',
  date: '2026-01-10',
  readTime: '8 min read',
  category: 'Cross-Border',
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop',
  metaDescription: 'Complete NR6 guide for Americans with Canadian rental property. Understand cross-border tax, Foreign Tax Credit, and how to avoid double taxation.',
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
      <p>When you earn rental income from Canadian property as a US person:</p>

      <ol className="space-y-4 my-6">
        <li className="flex items-start gap-4">
          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
          <div>
            <p className="font-semibold">Canada taxes the income first</p>
            <p className="text-muted text-sm">As the "source country," Canada has the right to tax rental income from Canadian property.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
          <div>
            <p className="font-semibold">US taxes your worldwide income</p>
            <p className="text-muted text-sm">As a US person, you must report all income—including Canadian rental income—on your US tax return.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
          <div>
            <p className="font-semibold">Foreign Tax Credit prevents double-dipping</p>
            <p className="text-muted text-sm">You can claim a credit on your US return for taxes paid to Canada.</p>
          </div>
        </li>
      </ol>

      <h2>Why NR6 Matters Even More for Americans</h2>
      <p>
        Without NR6, Canada withholds 25% of your <em>gross</em> rent. This creates a cash flow problem and complicates your Foreign Tax Credit calculation.
      </p>

      <h2>US Tax Obligations to Remember</h2>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <span><strong>Report Canadian income on your US tax return</strong> (Schedule E)</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <span><strong>File FBAR (FinCEN 114)</strong> if Canadian bank accounts exceed $10,000</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <span><strong>File Form 8938 (FATCA)</strong> if you meet the asset thresholds</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <span><strong>Claim Foreign Tax Credit</strong> (Form 1116)</span>
          </li>
        </ul>
      </div>

      <p>
        Cross-border taxes are complex. We recommend working with a tax professional familiar with Canada-US issues, while we handle the NR6 side of things.
      </p>
    </>
  ),
};

// =============================================================================
// ARTICLE 7: Common NR6 Mistakes - ORIGINAL
// =============================================================================
const article7 = {
  title: '5 Costly NR6 Mistakes That Could Cost You Thousands',
  excerpt: 'These common filing errors lead to rejected applications, missed savings, and CRA headaches. Here\'s how to avoid every single one.',
  date: '2026-01-05',
  readTime: '5 min read',
  category: 'Mistakes to Avoid',
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
  metaDescription: '5 common NR6 filing mistakes that cost landlords thousands. Learn what errors to avoid and how to file correctly the first time.',
  content: (
    <>
      <p className="text-xl text-muted leading-relaxed mb-8">
        Filing an NR6 can save you 50-75% on your Canadian withholding tax. But mistakes can delay your application, reduce your savings, or even result in penalties.
      </p>

      <div className="space-y-8">
        <div className="bg-white border-2 border-red-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-red-600">1</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Filing Too Late in the Year</h3>
              <p className="text-muted text-sm mb-4">
                NR6 only applies <em>going forward</em>. If you file in March, January and February are still at 25% gross.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>The Fix:</strong> File by December 31st for the following year.
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
              <p className="text-muted text-sm mb-4">
                If you forget expenses, your net income estimate is too high—and you'll have more tax withheld than necessary.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>The Fix:</strong> Include ALL eligible expenses: mortgage interest, property taxes, insurance, condo fees, repairs, management fees.
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
              <p className="text-muted text-sm mb-4">
                CRA requires every NR6 filer to have a Canadian resident agent. No agent = no NR6 approval.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>The Fix:</strong> Use a professional service like NR6.ca. Our $999 CAD fee includes Canadian agent services.
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
              <p className="text-muted text-sm mb-4">
                Filing NR6 is a commitment to file Section 216 by June 30th. Miss it, and CRA can revoke your NR6.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>The Fix:</strong> Mark June 30th on your calendar. We send reminders to all clients.
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
              <p className="text-muted text-sm mb-4">
                Wrong property address, incorrect ownership percentage, math errors. These delay your application.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>The Fix:</strong> Double-check everything. At NR6.ca, our team reviews every submission before filing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
};

// =============================================================================
// ARTICLE 8: Canadian Agent Requirement - ORIGINAL
// =============================================================================
const article8 = {
  title: 'Why CRA Requires a Canadian Agent (And How to Get One)',
  excerpt: 'No Canadian agent means no NR6 approval. Learn what agents do, why they\'re mandatory, and the easiest way to get one.',
  date: '2025-12-20',
  readTime: '4 min read',
  category: 'Requirements',
  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
  metaDescription: 'CRA requires a Canadian agent for NR6 filing. Learn what agents do, who can be your agent, and the easiest way to get one.',
  content: (
    <>
      <p className="text-xl text-muted leading-relaxed mb-8">
        "Do I really need a Canadian agent to file NR6?" The short answer is <strong>yes, absolutely</strong>. It's a CRA requirement with no exceptions.
      </p>

      <h2>What is a Canadian Agent?</h2>
      <p>
        A Canadian agent is a resident of Canada who acts on your behalf for tax purposes. They sign the NR6 form alongside you and take on specific legal responsibilities.
      </p>

      <h2>Why Does CRA Require One?</h2>
      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <span><strong>You're outside Canada</strong> — CRA can't easily reach you</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <span><strong>Someone needs to be accountable</strong> — The agent ensures compliance</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <span><strong>Communication needs a local point</strong> — CRA sends correspondence to Canada</span>
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
            <span>Takes on certain legal obligations to CRA</span>
          </li>
        </ul>
      </div>

      <h2>Your Options for Getting an Agent</h2>
      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-white border border-border rounded-lg p-5">
          <h4 className="font-semibold mb-2">Property Manager</h4>
          <p className="text-sm text-muted">If Canadian-based, they may agree to act as agent.</p>
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
    </>
  ),
};

// =============================================================================
// ARTICLE 9: Buying Canadian Property - ORIGINAL
// =============================================================================
const article9 = {
  title: 'Buying Canadian Real Estate as a Non-Resident: Tax Planning 101',
  excerpt: 'Before you invest, understand the tax implications. From purchase to rental to sale—here\'s what non-residents need to know.',
  date: '2025-12-15',
  readTime: '7 min read',
  category: 'Investment',
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
  metaDescription: 'Tax guide for non-residents buying Canadian real estate. Learn about purchase taxes, rental income withholding, and capital gains on sale.',
  content: (
    <>
      <p className="text-xl text-muted leading-relaxed mb-8">
        Canadian real estate has long attracted international investors. But before you sign that purchase agreement, understanding the tax landscape can save you from costly surprises.
      </p>

      <h2>The Purchase Phase</h2>
      <p>When buying property in Canada as a non-resident, you'll encounter:</p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-blue-50 p-5 rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">Land Transfer Tax</h4>
          <p className="text-sm text-muted">Varies by province. Ontario and Toronto have additional municipal taxes.</p>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">Non-Resident Speculation Tax</h4>
          <p className="text-sm text-muted">25% tax in Ontario for foreign buyers (with some exemptions).</p>
        </div>
      </div>

      <h2>The Rental Phase: Where NR6 Comes In</h2>
      <p>Once you start earning rental income, the 25% withholding tax kicks in:</p>

      <div className="bg-gray-50 rounded-xl p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">!</div>
            <div>
              <p className="font-semibold">Without NR6</p>
              <p className="text-sm text-muted">Your property manager must withhold 25% of gross rent monthly.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">✓</div>
            <div>
              <p className="font-semibold">With NR6</p>
              <p className="text-sm text-muted">Withholding is based on net income after expenses.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>The Sale Phase</h2>
      <p>When you sell Canadian property as a non-resident:</p>

      <ul className="space-y-3 my-6">
        <li className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
          <span><strong>25% withholding</strong> on sale proceeds by the buyer's lawyer</span>
        </li>
        <li className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
          <span><strong>Certificate of Compliance</strong> (Section 116) required</span>
        </li>
        <li className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
          <span><strong>Capital gains tax</strong> on the profit from sale</span>
        </li>
      </ul>

      <h2>Planning for Success</h2>
      <ol className="space-y-2 my-6 list-decimal list-inside">
        <li>Consult a cross-border tax professional</li>
        <li>Understand all applicable taxes before buying</li>
        <li>Plan to file NR6 from day one of rental income</li>
        <li>Set up proper Canadian banking</li>
        <li>Consider tax implications in your home country</li>
      </ol>
    </>
  ),
};

// =============================================================================
// ARTICLE 10: Filed NR6 What's Next - NEW (replaces duplicate)
// =============================================================================
const article10 = {
  title: 'I Filed My NR6—Now What? Your Complete Next Steps Guide',
  excerpt: 'You submitted your NR6. Great! But the process isn\'t over. Here\'s exactly what happens next and what you need to do to stay compliant.',
  date: '2025-12-10',
  readTime: '5 min read',
  category: 'After Filing',
  image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=600&fit=crop',
  metaDescription: 'Filed your NR6? Learn what happens next: CRA processing, approval timeline, what to tell your property manager, and Section 216 requirements.',
  content: (
    <>
      <p className="text-xl text-muted leading-relaxed mb-8">
        You've submitted your NR6 form. Congratulations—that's the first step toward keeping more of your rental income! But your obligations don't end there. Here's everything that happens next.
      </p>

      <h2>The Timeline After Filing</h2>
      
      <div className="bg-gray-50 rounded-xl p-6 my-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <p className="font-semibold">Week 1-2: CRA Receives Your NR6</p>
              <p className="text-sm text-muted">Your form enters the processing queue. No action needed from you.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <p className="font-semibold">Week 3-6: CRA Reviews</p>
              <p className="text-sm text-muted">CRA verifies your information. They may contact your agent if questions arise.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <p className="font-semibold">Week 4-8: Approval Letter</p>
              <p className="text-sm text-muted">You receive written approval with your authorized withholding rate.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>What to Do When You Get Approved</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Send approval to your property manager</p>
              <p className="text-muted text-sm mt-1">They need this to know your new withholding rate. Forward the CRA letter immediately.</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Save a copy for your records</p>
              <p className="text-muted text-sm mt-1">You'll need this when filing your Section 216 return.</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Set a calendar reminder for Section 216</p>
              <p className="text-muted text-sm mt-1">Due June 30 of the following year. Don't forget this—it's mandatory.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Your Ongoing Obligations</h2>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-primary bg-blue-50">
              <th className="text-left py-3 px-4 font-semibold">Obligation</th>
              <th className="text-left py-3 px-4 font-semibold">Deadline</th>
              <th className="text-left py-3 px-4 font-semibold">What Happens If You Miss It</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">Monthly withholding remittance</td>
              <td className="py-3 px-4">15th of following month</td>
              <td className="py-3 px-4 text-red-600">Penalties and interest</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="py-3 px-4">File Section 216 return</td>
              <td className="py-3 px-4 font-medium">June 30 next year</td>
              <td className="py-3 px-4 text-red-600">NR6 may be revoked for future years</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Renew NR6 for next year</td>
              <td className="py-3 px-4">December 31</td>
              <td className="py-3 px-4 text-red-600">Back to 25% gross withholding</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Section 216 Return</h2>
      <p>
        This is the most important follow-up. When you filed NR6, you made a <strong>legal promise</strong> to file a Section 216 return. This return:
      </p>
      <ul className="space-y-2 my-6">
        <li className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <span>Reports your <strong>actual</strong> rental income and expenses</span>
        </li>
        <li className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <span>Calculates your <strong>true</strong> tax liability</span>
        </li>
        <li className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <span>Results in a <strong>refund</strong> (if you overpaid) or <strong>balance owing</strong> (if you underpaid)</span>
        </li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-6">
        <p className="font-semibold text-yellow-800 mb-2">Don't Skip Section 216</p>
        <p className="text-yellow-700 text-sm">
          If you filed NR6 but don't file Section 216, CRA can deny your future NR6 applications. You'll be stuck with 25% gross withholding—permanently.
        </p>
      </div>

      <h2>The Annual Cycle</h2>
      <p>Once you're in the NR6 system, here's your yearly routine:</p>

      <div className="bg-gray-50 rounded-xl p-6 my-8">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="font-semibold text-primary w-24">Jan-Dec:</span>
            <span>Collect rent, pay reduced withholding</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-semibold text-primary w-24">By June 30:</span>
            <span>File Section 216 for the prior year</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-semibold text-primary w-24">By Dec 31:</span>
            <span>File NR6 for the upcoming year</span>
          </li>
        </ul>
      </div>

      <p>
        At NR6.ca, we send reminders before each deadline so you never miss a step. That's part of our service.
      </p>
    </>
  ),
};

// =============================================================================
// BLOG POSTS COLLECTION
// =============================================================================
const blogPosts: Record<string, typeof article1> = {
  'who-handles-nr6-withholding': article0,
  'nr6-form-explained-2026-guide': article1,
  'nr6-deadline-missed-penalties-fixes': article2,
  'nr6-vs-section-216-difference': article3,
  'non-resident-rental-income-tax-canada': article4,
  'nr6-for-airbnb-hosts': article5,
  'nr6-for-us-residents': article6,
  'common-nr6-mistakes': article7,
  'do-you-need-a-canadian-agent': article8,
  'buying-canadian-property-non-resident': article9,
  'filed-nr6-whats-next': article10,
};

// =============================================================================
// PAGE COMPONENT
// =============================================================================
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
    title: `${post.title} | NR6.ca`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug]

  if (!post) {
    notFound()
  }

  // Get related posts (exclude current)
  const relatedSlugs = Object.keys(blogPosts).filter(s => s !== resolvedParams.slug).slice(0, 2)

  return (
    <div>
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
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
          <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted prose-p:leading-relaxed prose-p:mb-4 prose-a:text-primary prose-strong:text-foreground prose-li:text-muted">
            {post.content}
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedSlugs.map((slug) => {
              const related = blogPosts[slug]
              return (
                <Link 
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img 
                      src={related.image} 
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-primary font-medium mb-2">{related.category}</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="container-narrow text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to File Your NR6?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Stop overpaying on your Canadian rental income. $999 CAD flat fee. We handle everything—including acting as your Canadian agent.
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
