import { transformStringToDate } from './transformStringToDate'

type IsValidDateReturnType =
  | 'valid'
  | 'invalidDate'
  | 'exceededLimitYearsAgo'
  | 'exceededLimitYearsLater'
  | ''

export const isValidDateString = (
  dateString: string,
  yearLimit = 1,
): IsValidDateReturnType => {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/
  if (!regex.test(dateString)) {
    return 'invalidDate'
  }

  const [day, month, year] = dateString.split('/').map(Number)
  const date = transformStringToDate(dateString)

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() + 1 !== month ||
    date.getUTCDate() !== day
  ) {
    return 'invalidDate'
  }

  if (yearLimit === -1) return 'valid'

  const today = new Date()
  const todayUTC = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()),
  )

  const oneYearAgo = new Date(todayUTC)
  oneYearAgo.setUTCFullYear(todayUTC.getUTCFullYear() - yearLimit)

  const oneYearAhead = new Date(todayUTC)
  oneYearAhead.setUTCFullYear(todayUTC.getUTCFullYear() + yearLimit)

  if (date < oneYearAgo) {
    return 'exceededLimitYearsAgo'
  }

  if (date > oneYearAhead) {
    return 'exceededLimitYearsLater'
  }

  return 'valid'
}
