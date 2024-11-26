import { useFormContext } from 'react-hook-form'
import { CalcReturnTimeOnInvestmentFormFieldsType } from './form.schema'
import { Input } from '@/components/ui/input'

export function CalcReturnTimeOnInvestmentFormFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CalcReturnTimeOnInvestmentFormFieldsType>()

  return (
    <div className="grid grid-cols-3 gap-6">
      <Input
        label="Custo inicial"
        placeholder="R$ 0,00"
        info="O custo para comprar e instalar o equipamento, dentre outras coisas..."
        error={errors?.initialExpanse?.message}
        mask="currency"
        {...register('initialExpanse')}
      />
      <Input
        label="Custos Mensais"
        placeholder="R$ 0,00"
        info="Custos com manutenção..."
        error={errors?.mensalExpanse?.message}
        mask="currency"
        {...register('mensalExpanse')}
      />
      <Input
        label="Economia mensal"
        placeholder="R$ 0,00"
        error={errors?.mensalEconomy?.message}
        mask="currency"
        {...register('mensalEconomy')}
      />
    </div>
  )
}
