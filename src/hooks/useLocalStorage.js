import { useEffect, useState, useCallback } from "react"

function getLocalStorageValue(key, initialValue) {
  const localStorageString = localStorage.getItem(key)

  if (typeof localStorageString === "string") {
    const localStorageValue = JSON.parse(localStorageString)
    return localStorageValue
  }

  if (typeof initialValue === "function") {
    return initialValue()
  }

  return initialValue
}

export function useLocalStorage(key, initialValue = "") {
  const [value, setValue] = useState(() => {
    return getLocalStorageValue(key, initialValue)
  })

  const remove = useCallback(() => {
    localStorage.removeItem(key)
    setValue("")
  }, [key])

  useEffect(() => {
    if (!value) {
      return
    }
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue, remove]
}
