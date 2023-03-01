export function transformToReal(value) {
  return Number(value).toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    currency: "BRL",
    style: "currency",
  })
}
