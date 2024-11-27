import { ColumnDef } from '@tanstack/react-table'
import { yearColumn } from './Year'
import { economyColumn } from './Economy'
import { IReturnTimeOnInvestment } from '@/interfaces/returnTimeOnInvestment'
import { costWithoutThePlateColumn } from './CostWithoutThePlate'
import { costWithThePlateColumn } from './CostWithThePlate'

export const columns: ColumnDef<IReturnTimeOnInvestment>[] = [
  yearColumn,
  costWithoutThePlateColumn,
  costWithThePlateColumn,
  economyColumn,
]
