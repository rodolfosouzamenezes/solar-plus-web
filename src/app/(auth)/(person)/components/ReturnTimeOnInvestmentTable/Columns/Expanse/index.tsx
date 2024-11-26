import { HeaderCell } from '@/components/DataTable/HeaderCell'
import { IReturnTimeOnInvestment } from '@/interfaces/returnTimeOnInvestment'
import { formatter } from '@/utils/formatter'
import { ColumnDef } from '@tanstack/react-table'

export const expanseColumn: ColumnDef<IReturnTimeOnInvestment> = {
  accessorKey: 'expanse',
  meta: { name: ' Custo Total' },
  enableSorting: true,
  size: 400,
  header: (e) => <HeaderCell {...e} />,
  cell: ({ row: { original } }) => {
    return formatter.currency(original.expanse)
  },
}
