export const formatDate = (defaultDate: Date | string, withHour = true) => {
  const date = new Date(defaultDate)

  const day = String(date.getUTCDate()).padStart(2, '0')
  const mouth = String(date.getUTCMonth() + 1).padStart(2, '0') // getUTCMonth() retorna 0-11
  const year = String(date.getUTCFullYear())

  if (!withHour) return `${day}/${mouth}/${year}`

  const hour = String(date.getUTCHours()).padStart(2, '0')
  const minutes = String(date.getUTCMinutes()).padStart(2, '0')

  return `${day}/${mouth}/${year} - ${hour}:${minutes}`
}
