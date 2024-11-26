export const transformStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))

  return date
}
