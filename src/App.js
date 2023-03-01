import { BrowserRouter as Router } from "react-router-dom"
import { MainRoutes } from "./routes"
import { UserProvider } from "./context/Auth"
import { ModalProvider } from "./context/Modal"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

function App() {
  const queryClient = new QueryClient()

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ModalProvider>
            <MainRoutes />
          </ModalProvider>
        </UserProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </QueryClientProvider>
    </Router>
  )
}

export default App
