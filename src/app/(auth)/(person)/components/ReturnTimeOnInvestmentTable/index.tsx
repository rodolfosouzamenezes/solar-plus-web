'use client'

import { useReturnTimeOnInvestment } from '@/contexts/ReturnTimeOnInvestmentContext'
import { columns } from './Columns'
import { DataTable } from '@/components/DataTable'

export function ReturnTimeOnInvestmentTable() {
  const { returnTimeOnInvestmentList } = useReturnTimeOnInvestment()

  return (
    <>
      <DataTable
        data={returnTimeOnInvestmentList}
        columns={columns}
        conditionalRender={false}
        search={false}
        hideColumns={false}
      />
    </>
  )
}
