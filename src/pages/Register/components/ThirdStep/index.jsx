import { Button } from "../../../../components/Button"
import { useNavigate } from "react-router"
import { SuccessCard } from "../../../../components/SuccessCard"

export function ThirdStep() {
  const navigate = useNavigate()

  return (
    <>
      <SuccessCard message="Cadastro realizado com sucesso!" />
      <Button onClick={() => navigate("/login")}>Ir para Login</Button>
    </>
  )
}
