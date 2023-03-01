import { useContext } from "react"
import { UserContext } from "../context/Auth"

export function useLoggedUser() {
  return useContext(UserContext)
}
