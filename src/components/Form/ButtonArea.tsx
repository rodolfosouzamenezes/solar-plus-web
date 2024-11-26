import { useFormContext } from 'react-hook-form'
import { Button } from '../Button'
import { WizardFormNavigation } from './WizardForm/Navigation'

interface FormButtonAreaProps {
  wizardForm?: boolean
  resetButton?: boolean
  submitLabel?: string
  cancel?: () => void
}

export function FormButtonArea({
  submitLabel = 'Salvar',
  cancel,
  wizardForm = false,
  resetButton = false,
}: FormButtonAreaProps) {
  const {
    formState: { isSubmitting },
    reset,
  } = useFormContext()

  return (
    <div className="flex justify-end space-x-4 pt-4">
      {resetButton && (
        <Button variant="outline" onClick={() => reset()} className="mr-auto">
          Limpar
        </Button>
      )}
      {wizardForm && <WizardFormNavigation />}
      {cancel && (
        <Button variant="outline" onClick={cancel}>
          Cancelar
        </Button>
      )}
      <Button isLoading={isSubmitting} type="submit">
        {submitLabel}
      </Button>
    </div>
  )
}
