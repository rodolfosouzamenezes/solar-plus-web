import { ColumnDef } from '@tanstack/react-table'
import { yearColumn } from './Year'
import { economyColumn } from './Economy'
import { expanseColumn } from './Expanse'
import { IReturnTimeOnInvestment } from '@/interfaces/returnTimeOnInvestment'
import { returnColumn } from './Return'

export const columns: ColumnDef<IReturnTimeOnInvestment>[] = [
  yearColumn,
  economyColumn,
  expanseColumn,
  returnColumn,
]
