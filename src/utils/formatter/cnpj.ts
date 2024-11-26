import { formatOnlyNumbers } from './onlyNumbers'

export const formatCnpj = (value: string) => {
  const cleanedValue = formatOnlyNumbers(value)

  const maxLength = 14
  const truncatedValue = cleanedValue.slice(0, maxLength)

  return truncatedValue
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
}
