import { Button } from '../ui/button'
import { HeaderContext } from '@tanstack/react-table'

export function HeaderCell({ column }: HeaderContext<any, any>) {
  const { name } = column.columnDef.meta!

  return (
    <Button
      variant="ghost"
      // onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {name}
      {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
    </Button>
  )
}
