'use client'

import * as Form from '@/components/Form'
import {
  CalcReturnTimeOnInvestmentFormFieldsType,
  calcReturnTimeOnInvestmentFormResolver,
} from './form.schema'
import { CalcReturnTimeOnInvestmentFormFields } from './Fields'
import { toast } from 'react-toastify'
import { useReturnTimeOnInvestment } from '@/contexts/ReturnTimeOnInvestmentContext'
import { useForm } from 'react-hook-form'

export function CalcReturnTimeOnInvestmentForm() {
  const formMethods = useForm<CalcReturnTimeOnInvestmentFormFieldsType>({
    resolver: calcReturnTimeOnInvestmentFormResolver,
  })

  const { setReturnTimeOnInvestmentList } = useReturnTimeOnInvestment()

  const onSubmit = async (data: CalcReturnTimeOnInvestmentFormFieldsType) => {
    const mensalExpanse = Number(data.mensalExpanse)
    const initialExpanse = Number(data.initialExpanse)
    const mensalEconomy = Number(data.mensalEconomy)

    const returnTimeOnInvestmentList = []
    let year = 1
    let returnValue = 0

    while (year <= 100) {
      const yearExpanse = initialExpanse + mensalExpanse * 12 * year
      const yearEconomy = mensalEconomy * 12 * year
      returnValue = yearEconomy - yearExpanse

      returnTimeOnInvestmentList.push({
        year,
        economy: yearEconomy.toFixed(2),
        expanse: yearExpanse.toFixed(2),
        return: returnValue.toFixed(2),
      })

      if (year % 10 === 0 && year >= 10 && returnValue > 0) {
        break
      }

      year++
    }

    setReturnTimeOnInvestmentList(returnTimeOnInvestmentList)

    toast.success('Tempo de retorno calculado como sucesso')
  }

  return (
    <Form.Provider formMethods={formMethods} onSubmit={onSubmit}>
      <CalcReturnTimeOnInvestmentFormFields />

      <Form.ButtonArea submitLabel="Calcular tempo de retorno" />
    </Form.Provider>
  )
}
