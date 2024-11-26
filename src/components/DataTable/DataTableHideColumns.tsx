import { Table } from '@tanstack/react-table'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react'
import { useEffect } from 'react'

export interface DataTableHideColumnsProps<TData> {
  table: Table<TData>
  defaultHiddenColumns?: string[]
}

export function DataTableHideColumns<TData>({
  table,
  defaultHiddenColumns = [],
}: DataTableHideColumnsProps<TData>) {
  const canHideColumns = table
    .getAllColumns()
    .filter((column) => column.getCanHide())

  useEffect(() => {
    const defaultHiddenColumnsTable = canHideColumns.filter((column) =>
      defaultHiddenColumns.some((c) => c === column.id),
    )

    defaultHiddenColumnsTable.forEach((column) => {
      column.toggleVisibility(false)
    })
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Colunas <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {canHideColumns.map((column) => {
          const name = column.columnDef.meta?.name

          return (
            <DropdownMenuCheckboxItem
              key={column.id}
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}
              onSelect={(e) => e.preventDefault()}
            >
              {name}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
