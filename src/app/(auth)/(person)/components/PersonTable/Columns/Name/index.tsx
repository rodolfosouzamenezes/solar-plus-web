import { IPerson } from '@/@types/person'
import { HeaderCell } from '@/components/DataTable/HeaderCell'
import { ColumnDef } from '@tanstack/react-table'

export const nameColumn: ColumnDef<IPerson> = {
  accessorKey: 'name',
  meta: { name: 'Pessoa' },
  enableSorting: true,
  size: 400,
  header: (e) => <HeaderCell {...e} />,
}
