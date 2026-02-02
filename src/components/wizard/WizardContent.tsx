'use client'

import { useWizard } from './WizardContext'
import { ProgressBar } from './ProgressBar'
import { Step1Property } from './Step1Property'
import { Step2Income } from './Step2Income'
import { Step3Expenses } from './Step3Expenses'
import { Step4Contact } from './Step4Contact'
import { Step5Payment } from './Step5Payment'

export function WizardContent() {
  const { step } = useWizard()

  return (
    <div className="card max-w-2xl mx-auto">
      <ProgressBar />
      
      {step === 1 && <Step1Property />}
      {step === 2 && <Step2Income />}
      {step === 3 && <Step3Expenses />}
      {step === 4 && <Step4Contact />}
      {step === 5 && <Step5Payment />}
    </div>
  )
}
