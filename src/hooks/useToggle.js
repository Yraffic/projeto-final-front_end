import { useCallback, useState } from "react"

export function useToggle() {
  const [isToggled, setIsToggled] = useState(false)

  const toggle = useCallback(() => setIsToggled((prev) => !prev), [])

  return [isToggled, toggle]
}
