import { formatOnlyNumbers } from './onlyNumbers'

export const formatRg = (value: string): string => {
  const cleanedValue = formatOnlyNumbers(value)

  return cleanedValue
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1})/, '$1-$2')
    .replace(/(-\d)\d+?$/, '$1')
}
