import style from "./style.module.css"
import polygon from "../../../../assets/Polygon.svg"
import edit from "../../../../assets/edit.svg"
import close from "../../../../assets/close.svg"
import { Text } from "../../../Text"
import { useLoggedUser } from "../../../../hooks/useLoggedUser"
import { useModal } from "../../../../hooks/useModal"

export function LogOut() {
  const { signOut } = useLoggedUser()
  const {
    userModal: { toggle },
  } = useModal()

  return (
    <div className={style["card"]}>
      <img className={style["polygon"]} src={polygon} alt="Poligono" />
      <div className={style["grup_icons"]}>
        <div className={style["card__item"]} onClick={toggle}>
          <img src={edit} className={style["edit"]} alt="botão editar" />
          <Text
            type="title"
            as="span"
            color="grey-600"
            size="extra-small"
            position="center"
            weight="medium"
          >
            Editar
          </Text>
        </div>
        <div className={style["card__item"]} onClick={() => signOut()}>
          <img src={close} className={style["close"]} alt="botão sair" />
          <Text
            type="title"
            as="span"
            color="grey-600"
            size="extra-small"
            position="center"
            weight="medium"
          >
            Sair
          </Text>
        </div>
      </div>
    </div>
  )
}
