import { useContext } from "react"
import { StepsContext } from "../context/Steps"

export function useSteps() {
  return useContext(StepsContext)
}
