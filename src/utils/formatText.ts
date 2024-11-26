export const formatText = (text: string) => {
  const isValidText = !!text.trim().replace(/ㅤ/g, '')

  if (!isValidText) return ''

  return text.trim().replace(/^ㅤ+|ㅤ+$/g, '')
}
