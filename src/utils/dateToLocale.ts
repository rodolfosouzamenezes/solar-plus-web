export const dateToLocale = (dateString: string) => {
  const localeDate = new Date(dateString)
    .toLocaleString('pt-br', {
      timeZone: 'UTC',
    })
    .replace(
      /(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2}):(\d{2})/,
      '$3-$2-$1T$4:$5:$6-03:00',
    )

  return localeDate
}
