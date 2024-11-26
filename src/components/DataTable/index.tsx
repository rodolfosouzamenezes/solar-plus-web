import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  Table as TableProps,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import Table from '@/components/Table'
import { DataTableHideColumns } from './DataTableHideColumns'
import { ComponentProps, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Skeleton } from '../Skeleton'
import { IPaginateListParams, IPaginateListState } from '@/@types/response'
import { PaginateControl } from './PaginateControl'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

interface DataTableProps<TData, TValue> extends ComponentProps<'div'> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[] | IPaginateListState<TData>
  defaultHiddenColumns?: string[]
  filters?: (table: TableProps<TData>) => JSX.Element
  left?: (table: TableProps<TData>) => JSX.Element
  fetchData?: (params?: IPaginateListParams) => Promise<void>
  setConditionalRender?: (conditionalRender: boolean) => void
  conditionalRender?: boolean
  search?: boolean
  containerClassName?: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filters,
  left,
  defaultHiddenColumns,
  fetchData,
  search = true,
  conditionalRender,
  setConditionalRender,
  containerClassName,
  className,
  ...props
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [globalFilter, setGlobalFilter] = useState('')
  const [rowSelection, setRowSelection] = useState({})

  const hasSelectColumn = columns.some((c) => c.id === 'select')

  const isPaginatedData = (data: any): data is IPaginateListState<TData> => {
    return 'docs' in data && 'paginateConfig' in data
  }

  const tableData = isPaginatedData(data) ? data.docs : data

  const table = useReactTable({
    data: tableData,
    columns,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  })

  const handleFetchData = async (params?: IPaginateListParams) => {
    try {
      setConditionalRender && setConditionalRender(true)

      fetchData && (await fetchData(params))
    } catch (error) {
      console.log(error)
    } finally {
      setConditionalRender && setConditionalRender(false)
    }
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  return (
    <div className={cn(['w-full', containerClassName])}>
      <div className="flex py-4">
        <div className="mr-auto flex space-x-2">
          <DataTableHideColumns
            table={table}
            defaultHiddenColumns={defaultHiddenColumns}
          />
          {left && left(table)}
        </div>
        <div className="flex space-x-2">
          {filters && filters(table)}
          {search && (
            <Input
              placeholder="Pesquisar..."
              onChange={(event) => {
                const { value } = event.target

                isPaginatedData(data)
                  ? handleFetchData({ search: value })
                  : setGlobalFilter(value)
              }}
              className="max-w-xs"
              canClear
            />
          )}
        </div>
      </div>
      <div
        className={cn([
          'max-w-full overflow-hidden rounded-md border',
          className,
        ])}
        {...props}
      >
        <Table.Root>
          <Table.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row
                key={headerGroup.id}
                className="bg-transparent hover:bg-transparent"
              >
                {headerGroup.headers.map((header) => {
                  const meta = header.column.columnDef.meta

                  return (
                    <Table.Head
                      key={header.id}
                      style={{ width: header.getSize() }}
                      className={cn([
                        meta?.sticky &&
                          'sticky right-0 bg-primary-foreground [&_tr]:border-b',
                      ])}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </Table.Head>
                  )
                })}
              </Table.Row>
            ))}
          </Table.Header>
          {!conditionalRender ? (
            <Table.Body>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <Table.Row
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className="group"
                  >
                    {row.getVisibleCells().map((cell) => {
                      const meta = cell.column.columnDef.meta
                      return (
                        <Table.Cell
                          key={cell.id}
                          className={cn([
                            meta?.sticky &&
                              'sticky right-0 bg-background transition-colors group-hover:bg-muted data-[state=selected]:bg-muted',
                          ])}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </Table.Cell>
                      )
                    })}
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Sem resultados.
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          ) : (
            <Table.Body>
              {[...Array(10)].map((_, index) => (
                <Table.Row key={index} className="group">
                  {columns.map((column, colIndex) => (
                    <Table.Cell
                      key={colIndex}
                      className={cn([
                        column.meta?.sticky &&
                          'sticky right-0 bg-background transition-colors group-hover:bg-muted data-[state=selected]:bg-muted',
                      ])}
                    >
                      <Skeleton className="h-4" />
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          )}
        </Table.Root>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {hasSelectColumn && (
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} de{' '}
            {table.getFilteredRowModel().rows.length} itens selecionados.
          </div>
        )}
        {isPaginatedData(data) ? (
          <PaginateControl
            paginateConfig={data.paginateConfig}
            fetchData={handleFetchData}
          />
        ) : (
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" disabled={true}>
              {table.getState().pagination.pageIndex + 1 || 0} de{' '}
              {table.getPageCount() || 0}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
