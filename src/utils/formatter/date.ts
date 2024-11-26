import { formatOnlyNumbers } from './onlyNumbers'

export const formatDate = (value: string) => {
  const cleanedValue = formatOnlyNumbers(value)

  const maxLength = 8
  const truncatedValue = cleanedValue.slice(0, maxLength)

  return truncatedValue
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1')
}
