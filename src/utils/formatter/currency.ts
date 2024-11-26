export const formatCurrency = (value: string | number) => {
  const stringValue = `${value}`.trim()

  const isNegative = stringValue.startsWith('-')

  const onlyDigits = stringValue
    .replace('-', '')
    .split('')
    .filter((s) => /\d/.test(s))
    .join('')
    .padStart(3, '0')

  const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)

  const numberValue = Number(digitsFloat) * (isNegative ? -1 : 1)

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numberValue)
}
