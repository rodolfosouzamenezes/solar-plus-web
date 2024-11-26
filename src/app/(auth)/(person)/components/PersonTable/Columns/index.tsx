import { ColumnDef } from '@tanstack/react-table'
import { nameColumn } from './Name'
import { typeColumn } from './Type'
import { cpfColumn } from './CPF'
import { IPerson } from '@/@types/person'

export const columns: ColumnDef<IPerson>[] = [nameColumn, typeColumn, cpfColumn]
