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
import { IReturnTimeOnInvestment } from '@/interfaces/returnTimeOnInvestment'

export function CalcReturnTimeOnInvestmentForm() {
  const formMethods = useForm<CalcReturnTimeOnInvestmentFormFieldsType>({
    resolver: calcReturnTimeOnInvestmentFormResolver,
  })

  const { setReturnTimeOnInvestmentList } = useReturnTimeOnInvestment()

  const onSubmit = async (data: CalcReturnTimeOnInvestmentFormFieldsType) => {
    const initialExpanse = Number(data.initialExpanse)
    const monthlyCostWithoutThePlate = Number(data.monthlyCostWithoutThePlate)
    const monthlyCostWithThePlate = Number(data.monthlyCostWithThePlate)

    const returnTimeOnInvestmentList: IReturnTimeOnInvestment[] = []
    let year = 1

    while (year <= 100) {
      const yearExpanseWithThePlate =
        initialExpanse + monthlyCostWithThePlate * 12 * year
      const yearExpanseWithoutThePlate = monthlyCostWithoutThePlate * 12 * year
      const yearEconomy = yearExpanseWithoutThePlate - yearExpanseWithThePlate

      returnTimeOnInvestmentList.push({
        year,
        costWithThePlate: yearExpanseWithThePlate.toFixed(2),
        costWithoutThePlate: yearExpanseWithoutThePlate.toFixed(2),
        economy: yearEconomy.toFixed(2),
      })

      if (year % 10 === 0 && yearEconomy > 0) {
        break
      }

      year++
    }

    setReturnTimeOnInvestmentList(returnTimeOnInvestmentList)

    toast.success('Tempo de retorno calculado com sucesso')
  }

  return (
    <Form.Provider formMethods={formMethods} onSubmit={onSubmit}>
      <CalcReturnTimeOnInvestmentFormFields />

      <Form.ButtonArea submitLabel="Calcular tempo de retorno" />
    </Form.Provider>
  )
}
