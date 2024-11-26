import { HeaderCell } from '@/components/DataTable/HeaderCell'
import { Badge } from '@/components/ui/badge'
import { IReturnTimeOnInvestment } from '@/interfaces/returnTimeOnInvestment'
import { formatter } from '@/utils/formatter'
import { ColumnDef } from '@tanstack/react-table'

export const returnColumn: ColumnDef<IReturnTimeOnInvestment> = {
  accessorKey: 'return',
  meta: { name: ' Retorno Total' },
  enableSorting: true,
  size: 400,
  header: (e) => <HeaderCell {...e} />,
  cell: ({ row: { original } }) => {
    return (
      <Badge variant={original.return.includes('-') ? 'red' : 'emerald'}>
        {formatter.currency(original.return)}
      </Badge>
    )
  },
}
