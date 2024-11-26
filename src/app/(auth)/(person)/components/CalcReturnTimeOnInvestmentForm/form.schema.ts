import { currencySchema } from '@/utils/schemas/currency'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const calcReturnTimeOnInvestmentFormFieldsSchema = z.object({
  initialExpanse: currencySchema,
  mensalExpanse: currencySchema,
  mensalEconomy: currencySchema,
})

export const calcReturnTimeOnInvestmentFormResolver = zodResolver(
  calcReturnTimeOnInvestmentFormFieldsSchema,
)

export type CalcReturnTimeOnInvestmentFormFieldsType = z.infer<
  typeof calcReturnTimeOnInvestmentFormFieldsSchema
>
