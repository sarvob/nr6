import { NextResponse } from 'next/server'

// Email sending API endpoint
// In production, integrate with SendGrid, SES, or Firebase Extensions

interface EmailRequest {
  type: 'customer_confirmation' | 'admin_notification' | 'status_update'
  to: string
  data: {
    orderId: string
    customerName: string
    propertyAddress: string
    estimatedSavings?: number
    status?: string
  }
}

export async function POST(request: Request) {
  try {
    const body: EmailRequest = await request.json()
    const { type, to, data } = body

    // In production, use a real email service
    // For now, we'll just log and return success
    console.log('Email request:', { type, to, data })

    // Example SendGrid integration (uncomment and configure in production):
    /*
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    if (SENDGRID_API_KEY) {
      const sgMail = require('@sendgrid/mail')
      sgMail.setApiKey(SENDGRID_API_KEY)

      let subject = ''
      let html = ''

      switch (type) {
        case 'customer_confirmation':
          subject = `NR6 Filing Confirmation - Order ${data.orderId}`
          html = `
            <h1>Thank You for Your Submission!</h1>
            <p>Dear ${data.customerName},</p>
            <p>We have received your NR6 filing request for:</p>
            <p><strong>${data.propertyAddress}</strong></p>
            <p>Your order reference is: <strong>${data.orderId}</strong></p>
            <p>We will prepare and submit your NR6 within 1-2 business days.</p>
            <h3>What Happens Next?</h3>
            <ul>
              <li>We review your information</li>
              <li>We prepare your NR6 form</li>
              <li>We submit to CRA on your behalf</li>
              <li>We notify you of the submission status</li>
            </ul>
            <p>If you have any questions, please contact us at support@nr6.ca</p>
            <p>Best regards,<br>The NR6.ca Team</p>
          `
          break

        case 'admin_notification':
          subject = `New NR6 Filing - ${data.customerName}`
          html = `
            <h1>New Filing Received</h1>
            <p><strong>Customer:</strong> ${data.customerName}</p>
            <p><strong>Property:</strong> ${data.propertyAddress}</p>
            <p><strong>Order ID:</strong> ${data.orderId}</p>
            <p><strong>Est. Savings:</strong> $${data.estimatedSavings?.toLocaleString()}</p>
            <p><a href="https://nr6.ca/admin">View in Admin Panel</a></p>
          `
          break

        case 'status_update':
          subject = `NR6 Filing Status Update - ${data.status}`
          html = `
            <h1>Your NR6 Filing Status Has Been Updated</h1>
            <p>Dear ${data.customerName},</p>
            <p>Your NR6 filing for <strong>${data.propertyAddress}</strong> has been updated.</p>
            <p>New Status: <strong>${data.status}</strong></p>
            <p>If you have any questions, please contact us at support@nr6.ca</p>
            <p>Best regards,<br>The NR6.ca Team</p>
          `
          break
      }

      await sgMail.send({
        to,
        from: 'noreply@nr6.ca',
        subject,
        html,
      })
    }
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
