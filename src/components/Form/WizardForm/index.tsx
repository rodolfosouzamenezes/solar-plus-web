'use client'

import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import { WizardFormStepTrigger as StepTrigger } from './StepTrigger'
import { createContext, useContext, useState, type ReactNode } from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

interface WizardFormProps<TFieldValues extends FieldValues> {
  steps: {
    value: string
    label: string
    content: ReactNode
    fields?: (keyof TFieldValues | string)[]
  }[]
  errors?: FieldErrors<TFieldValues>
}

interface WizardFormContextType {
  canPrevious: boolean
  canNext: boolean
  handlePrevious: () => void
  handleNext: () => void
}

const WizardFormContext = createContext({} as WizardFormContextType)

export function WizardForm<TFieldValues extends FieldValues>({
  steps,
  errors,
}: WizardFormProps<TFieldValues>) {
  const [activeStep, setActiveStep] = useState(steps[0].value)
  const currentIndex = steps.findIndex((step) => step.value === activeStep)
  const canPrevious = currentIndex > 0
  const canNext = currentIndex < steps.length - 1

  const handleNext = () => {
    if (canNext) {
      setActiveStep(steps[currentIndex + 1].value)
    }
  }

  const handlePrevious = () => {
    if (canPrevious) {
      setActiveStep(steps[currentIndex - 1].value)
    }
  }

  return (
    <WizardFormContext.Provider
      value={{
        canNext,
        canPrevious,
        handleNext,
        handlePrevious,
      }}
    >
      <Tabs value={activeStep} onValueChange={setActiveStep} className="w-full">
        <TabsList>
          {steps.map((step) => {
            const stepErrors = (step.fields || []).filter((f) => {
              const fieldPath = f.toString().split('.')
              let error: FieldErrors<TFieldValues> | undefined = errors

              for (const key of fieldPath) {
                if (error && key in error) {
                  error = error[key] as FieldErrors<TFieldValues>
                } else {
                  return false
                }
              }
              return !!error?.message
            })

            const stepErrorsCount = stepErrors.length

            return (
              <StepTrigger
                key={step.value}
                value={step.value}
                label={step.label}
                stepErrorsCount={stepErrorsCount}
              />
            )
          })}
        </TabsList>

        {steps.map((step) => {
          return (
            <TabsContent
              value={step.value}
              key={`content-${step.value}`}
              className="space-y-4 py-4"
            >
              {step.content}
            </TabsContent>
          )
        })}
      </Tabs>
    </WizardFormContext.Provider>
  )
}

export const useWizardForm = () => useContext(WizardFormContext)
