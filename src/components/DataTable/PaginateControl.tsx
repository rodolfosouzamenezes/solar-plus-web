import { IPaginateConfig, IPaginateListParams } from '@/@types/response'
import { Button } from '../ui/button'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

interface PaginateControlProps {
  paginateConfig?: IPaginateConfig
  fetchData: (params?: IPaginateListParams) => Promise<void>
}

export function PaginateControl({
  paginateConfig,
  fetchData,
}: PaginateControlProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          fetchData({
            page: 1,
          })
        }
        disabled={!paginateConfig?.hasPrevPage}
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          fetchData({
            page: paginateConfig!.prevPage!,
          })
        }
        disabled={!paginateConfig?.hasPrevPage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" disabled={true}>
        {paginateConfig?.page ?? 0} de {paginateConfig?.totalPages ?? 0}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          fetchData({
            page: paginateConfig!.nextPage!,
          })
        }
        disabled={!paginateConfig?.hasNextPage}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          fetchData({
            page: paginateConfig!.totalPages!,
          })
        }
        disabled={!paginateConfig?.hasNextPage}
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
