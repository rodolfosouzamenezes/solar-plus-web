import { IPerson } from '@/@types/person'
import { HeaderCell } from '@/components/DataTable/HeaderCell'
import { ColumnDef } from '@tanstack/react-table'

export const cpfColumn: ColumnDef<IPerson> = {
  accessorKey: 'cpf',
  meta: { name: 'CPF' },
  enableSorting: true,
  size: 400,
  header: (e) => <HeaderCell {...e} />,
}
