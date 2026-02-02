# NR6.ca - NR6 Filing Service for Non-Resident Landlords

A professional web application that helps non-resident landlords file NR6 forms with the Canada Revenue Agency. The service includes a 5-step intake wizard, Stripe payment integration, Firebase backend, and admin panel.

## Features

- **Public Pages**: Home, Pricing, How It Works, FAQ, Contact, Guides, Blog
- **5-Step Intake Wizard**: Property info, rental income, expenses, contact details, payment
- **Real-time Savings Calculator**: Shows estimated tax savings based on user input
- **Stripe Payment**: Secure one-time payment of $999 USD
- **Firebase Backend**: Firestore for data, Storage for file uploads, Auth for admin
- **Admin Panel**: View submissions, update status, add notes, export CSV
- **Email Notifications**: Customer confirmation, admin alerts (configured separately)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Auth**: Firebase Auth (admin only)
- **Payments**: Stripe Checkout
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project
- Stripe account

### Installation

1. Clone the repository:
```bash
cd /Users/frontierai/CascadeProjects/nr6-ca
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your credentials:
```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key

# Email Configuration (optional)
SENDGRID_API_KEY=your_sendgrid_api_key
ADMIN_EMAIL=admin@nr6.ca
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore, Storage, and Authentication
3. Deploy security rules:
```bash
firebase deploy --only firestore:rules,storage:rules
```
4. Create an admin user in Firebase Auth
5. Add the user to the `admins` collection in Firestore with `{ isAdmin: true }`

### Stripe Setup

1. Get your API keys from [dashboard.stripe.com](https://dashboard.stripe.com)
2. Set up a webhook endpoint pointing to `/api/webhook`
3. Configure the webhook to listen for `checkout.session.completed` events

## Project Structure

```
src/
├── app/
│   ├── admin/          # Admin panel (protected)
│   ├── api/            # API routes (checkout, webhook, email)
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   ├── faq/            # FAQ page
│   ├── guides/         # Guide pages (NR6, Section 216, Calculator, Deadlines)
│   ├── how-it-works/   # How It Works page
│   ├── pricing/        # Pricing page
│   ├── start/          # Intake wizard
│   ├── success/        # Payment success page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── layout/         # Header, Footer
│   └── wizard/         # Intake wizard components
└── lib/
    ├── firebase.ts     # Firebase config
    └── types.ts        # TypeScript types
```

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home page with hero, pain points, solution, pricing preview |
| `/start` | 5-step intake wizard |
| `/success` | Payment confirmation |
| `/pricing` | Detailed pricing and comparison |
| `/how-it-works` | Step-by-step process explanation |
| `/faq` | Frequently asked questions |
| `/contact` | Contact form and information |
| `/guides` | Resource guides index |
| `/guides/nr6-form` | NR6 form guide |
| `/guides/section-216` | Section 216 guide |
| `/guides/calculator` | Interactive tax calculator |
| `/guides/deadlines` | Deadlines and remittances |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual blog posts |
| `/admin` | Admin panel (login required) |

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: '#1E3A5F',  // Deep blue
    light: '#3B82F6',    // Accent blue
    dark: '#0F2541',     // Darker blue
  },
}
```

### Content
- Edit page content directly in the page files
- Blog posts are stored in `src/app/blog/[slug]/page.tsx`
- FAQ items are in `src/app/faq/page.tsx`

### Pricing
To change the price, update:
1. `src/components/wizard/Step5Payment.tsx` (display)
2. `src/app/api/create-checkout-session/route.ts` (Stripe amount)

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Firebase Hosting
1. Build the app: `npm run build`
2. Deploy: `firebase deploy --only hosting`

## Security Considerations

- All API routes validate input
- Admin panel requires Firebase Auth
- Firestore rules restrict access
- Stripe handles payment security
- HTTPS enforced in production

## License

Private - All rights reserved
