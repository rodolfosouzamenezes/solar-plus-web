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
        label="Custo mensal sem a placa"
        placeholder="R$ 0,00"
        info="Custos sem a placa solar"
        error={errors?.monthlyCostWithoutThePlate?.message}
        mask="currency"
        {...register('monthlyCostWithoutThePlate')}
      />
      <Input
        label="Custo mensal com a placa"
        placeholder="R$ 0,00"
        info="Novos custos com a placa solar"
        error={errors?.monthlyCostWithThePlate?.message}
        mask="currency"
        {...register('monthlyCostWithThePlate')}
      />
    </div>
  )
}
