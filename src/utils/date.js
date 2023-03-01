export function transformToBrDate(value) {
  return new Date(value).toLocaleDateString("pt-br")
}
export function formatToLocalDate(value, local) {
  if (!value) return null
  return new Date(value).toLocaleDateString(local)
}
