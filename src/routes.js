import { Navigate, Route, Routes } from "react-router"
import { StepsProvider } from "./pages/Register/context/Steps"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"
import { PrivateRoutes } from "./utils/PrivateRoutes"
import { MainNavigation } from "./components/MainNavigation"
import { Clients } from "./pages/Client"
import { DetailClientPage } from "./pages/DetailClient"
import { Charges } from "./pages/Charges"

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/register"
        element={
          <>
            <StepsProvider>
              <Register />
            </StepsProvider>
          </>
        }
      />
      <Route element={<PrivateRoutes />}>
        <Route element={<MainNavigation />}>
          <Route path="/home" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/:id" element={<DetailClientPage />} />
          <Route path="/charges" element={<Charges />} />
        </Route>
      </Route>
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  )
}
