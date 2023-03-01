export function getStatusColor(status) {
  switch (status) {
    case "vencido":
      return "#971D1D"
    case "pago":
      return "#1FA7AF"
    case "pendente":
      return "#C5A605"
    default:
      return "#1FA7AF"
  }
}
export function getStatusBackgroundColor(status) {
  switch (status) {
    case "vencido":
      return "#FFEFEF;"
    case "pago":
      return "#EEF6F6"
    case "pendente":
      return "#FCF6DC"
    default:
      return "#EEF6F6"
  }
}
