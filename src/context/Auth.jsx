import { createContext, useMemo, useCallback, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { api } from "../services/api"

export const UserContext = createContext({
  user: {
    userData: {
      id: "",
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
    },
    token: "",
  },
  setUser: () => {},
  signOut: () => {},
})

export function UserProvider({ children }) {
  const [user, setUser, remove] = useLocalStorage("user", "")

  const signOut = useCallback(() => {
    remove()
  }, [remove])

  const valueProvider = useMemo(() => {
    return { user, setUser, signOut }
  }, [user, setUser, signOut])

  useEffect(() => {
    if (!user?.token) return

    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`
  }, [user])

  return (
    <UserContext.Provider value={valueProvider}>
      {children}
    </UserContext.Provider>
  )
}
