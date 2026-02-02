import { NextResponse } from 'next/server'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

export async function POST(request: Request) {
  try {
    const { formData } = await request.json()

    if (!STRIPE_SECRET_KEY) {
      // In development without Stripe, redirect to success page with mock data
      const successUrl = new URL('/success', request.url)
      successUrl.searchParams.set('session_id', 'mock_session_' + Date.now())
      return NextResponse.json({ url: successUrl.toString() })
    }

    // Import Stripe dynamically
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(STRIPE_SECRET_KEY)

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'NR6 Filing Service',
              description: `NR6 filing for ${formData.property_address}`,
            },
            unit_amount: 99900, // $999.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${new URL('/success', request.url).origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${new URL('/start', request.url).origin}/start`,
      customer_email: formData.email,
      metadata: {
        property_address: formData.property_address,
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country_of_residence,
        gross: String(formData.gross || 0),
        expenses_total: String(formData.expenses_total || 0),
        estimated_savings: String(formData.estimated_savings || 0),
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
