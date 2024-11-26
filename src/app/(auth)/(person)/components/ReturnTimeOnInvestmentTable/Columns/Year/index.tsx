import { HeaderCell } from '@/components/DataTable/HeaderCell'
import { IReturnTimeOnInvestment } from '@/interfaces/returnTimeOnInvestment'
import { ColumnDef } from '@tanstack/react-table'

export const yearColumn: ColumnDef<IReturnTimeOnInvestment> = {
  accessorKey: 'year',
  meta: { name: 'Ano' },
  enableSorting: true,
  size: 400,
  header: (e) => <HeaderCell {...e} />,
}
