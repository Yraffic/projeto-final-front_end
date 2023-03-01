import { useLoggedUser } from "../hooks/useLoggedUser"
import { Outlet, Navigate } from "react-router-dom"

export function PrivateRoutes() {
  const { user } = useLoggedUser()

  return user?.token ? <Outlet /> : <Navigate to="/login" />
}
