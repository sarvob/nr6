import type { Metadata } from 'next'
import { WizardProvider } from '@/components/wizard/WizardContext'
import { WizardContent } from '@/components/wizard/WizardContent'

export const metadata: Metadata = {
  title: 'Start Filing - NR6.ca | File Your NR6 Form',
  description: 'Complete our simple 5-step form to file your NR6 with CRA. Takes less than 7 minutes. No account required.',
}

export default function StartPage() {
  return (
    <div className="py-8 md:py-12 bg-gray-50 min-h-[calc(100vh-200px)]">
      <div className="container-narrow">
        <WizardProvider>
          <WizardContent />
        </WizardProvider>
      </div>
    </div>
  )
}
