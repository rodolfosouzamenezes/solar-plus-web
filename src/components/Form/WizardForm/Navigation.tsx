import { Button } from '@/components/Button'
import { useWizardForm } from '.'

export function WizardFormNavigation() {
  const { canNext, canPrevious, handleNext, handlePrevious } = useWizardForm()

  return (
    <div className="flex justify-end space-x-4">
      <Button
        onClick={handlePrevious}
        disabled={!canPrevious}
        variant="outline"
      >
        Anterior
      </Button>
      <Button onClick={handleNext} disabled={!canNext} variant="outline">
        Próximo
      </Button>
    </div>
  )
}
