import { IPerson } from '@/@types/person'
import { HeaderCell } from '@/components/DataTable/HeaderCell'
import { ColumnDef } from '@tanstack/react-table'

export const typeColumn: ColumnDef<IPerson> = {
  accessorKey: 'type',
  meta: { name: 'Tipo' },
  enableSorting: true,
  size: 400,
  header: (e) => <HeaderCell {...e} />,
}
