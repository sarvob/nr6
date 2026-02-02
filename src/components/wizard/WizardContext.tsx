'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { FilingData, initialFilingData, calculateSavings } from '@/lib/types'

interface WizardContextType {
  step: number
  setStep: (step: number) => void
  data: FilingData
  setData: (data: Partial<FilingData>) => void
  savings: ReturnType<typeof calculateSavings>
  nextStep: () => void
  prevStep: () => void
  isFirstStep: boolean
  isLastStep: boolean
}

const WizardContext = createContext<WizardContextType | undefined>(undefined)

const STORAGE_KEY = 'nr6_wizard_draft'
const TOTAL_STEPS = 5

export function WizardProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1)
  const [data, setDataState] = useState<FilingData>(initialFilingData)

  // Load draft from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setDataState({ ...initialFilingData, ...parsed })
      } catch (e) {
        // Invalid data, ignore
      }
    }
  }, [])

  // Save draft to localStorage on data change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const setData = (newData: Partial<FilingData>) => {
    setDataState((prev) => ({ ...prev, ...newData }))
  }

  const savings = calculateSavings(data)

  const nextStep = () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const isFirstStep = step === 1
  const isLastStep = step === TOTAL_STEPS

  return (
    <WizardContext.Provider
      value={{
        step,
        setStep,
        data,
        setData,
        savings,
        nextStep,
        prevStep,
        isFirstStep,
        isLastStep,
      }}
    >
      {children}
    </WizardContext.Provider>
  )
}

export function useWizard() {
  const context = useContext(WizardContext)
  if (!context) {
    throw new Error('useWizard must be used within a WizardProvider')
  }
  return context
}

export function clearWizardDraft() {
  localStorage.removeItem(STORAGE_KEY)
}
