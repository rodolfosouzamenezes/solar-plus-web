import { formatCpfCnpj as cpfCnpj } from './cpfCnpj'
import { formatCnpj as cnpj } from './cnpj'
import { formatCpf as cpf } from './cpf'
import { formatRg as rg } from './rg'
import { formatCurrency as currency } from './currency'
import { formatOnlyNumbers as onlyNumbers } from './onlyNumbers'
import { formatDate as date } from './date'
import {
  formatCapitalize as capitalize,
  formatLowercase as lowercase,
  formatUppercase as uppercase,
} from './string'

export const formatter = {
  onlyNumbers,
  cpf,
  cnpj,
  rg,
  cpfCnpj,
  uppercase,
  lowercase,
  capitalize,
  currency,
  date,
}
