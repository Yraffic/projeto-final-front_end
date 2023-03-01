import { ModalClient } from "../../components/Modals/ModalClient"
import { useModal } from "../../hooks/useModal"
import style from "./style.module.css"
import client from "../../assets/client.svg"
import filtro from "../../assets/filtro.svg"
import { Text } from "../../components/Text"
import { Button } from "../../components/Button"
import pesquisa from "../../assets/pesquisa.svg"
import { ClientTable } from "./components/Table"

export function Clients() {
  const {
    clientSignUpModal: { open, toggle },
  } = useModal()

  return (
    <div className={style["container"]}>
      <div className={style["client__nav"]}>
        <div className={style["client__flex"]}>
          <img
            src={client}
            alt="icon"
            className={style["client__flex_img"]}
          />
          <Text
            type="title"
            as="h1"
            color="grey-700"
            size="extra-large"
            position="center"
            weight="medium"
          >
            Clientes
          </Text>
        </div>
        <div className={style["client__flex"]}>
          <Button type="primary" onClick={toggle}>
            + Adicionar cliente
          </Button>
          <div className={style["client__nav_filtro"]}>
            <img src={filtro} alt="filtro" />
          </div>
          <input
            className={style["client__nav_input"]}
            type="text"
            placeholder="Pesquisar"
          />
          <img
            src={pesquisa}
            alt="botão pesquisar"
            className={style["client__nav_input_img"]}
          />
        </div>
      </div>
      <ClientTable />
      {open && <ModalClient />}
    </div>
  )
}
