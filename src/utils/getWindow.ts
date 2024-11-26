export const getWindow = (): typeof window | null => {
  if (typeof window !== 'undefined') {
    return window
  }
  return null
}
