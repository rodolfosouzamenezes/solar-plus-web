import { useFormContext } from 'react-hook-form'
import { Button } from '../Button'

interface FormButtonAreaProps {
  wizardForm?: boolean
  resetButton?: boolean
  submitLabel?: string
  cancel?: () => void
}

export function FormButtonArea({
  submitLabel = 'Salvar',
}: FormButtonAreaProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext()

  return (
    <Button isLoading={isSubmitting} type="submit" className="w-full">
      {submitLabel}
    </Button>
  )
}
