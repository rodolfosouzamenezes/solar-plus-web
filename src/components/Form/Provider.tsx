import { ReactNode } from 'react'
import {
  FieldValues,
  UseFormReturn,
  SubmitHandler,
  FormProvider as FormProviderPrimitive,
  FieldErrors,
} from 'react-hook-form'
import { toast } from 'react-toastify'

interface FormProviderProps<TFieldValues extends FieldValues> {
  formMethods: UseFormReturn<TFieldValues>
  children: ReactNode[] | ReactNode
  onSubmit: SubmitHandler<TFieldValues>
}

export function FormProvider<TFieldValues extends FieldValues>({
  formMethods,
  children,
  onSubmit,
}: FormProviderProps<TFieldValues>) {
  const { handleSubmit } = formMethods

  const onError = (errors: FieldErrors<FieldValues>) => {
    toast.error('Preencha todos os campos corretamente')
    console.log({ errors })
  }

  return (
    <FormProviderPrimitive {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
        {children}
      </form>
    </FormProviderPrimitive>
  )
}
