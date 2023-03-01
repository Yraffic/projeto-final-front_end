import { toast } from "react-toastify"

export function toastSuccess(message) {
  toast.success(message, {
    className: "toast-success",
  })
}
export function toastError(message) {
  toast.error(message, {
    className: "toast-error",
  })
}
