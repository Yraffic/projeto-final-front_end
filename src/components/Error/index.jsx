import style from "./style.module.css"
import erroPesquisa from "../../assets/erroPesquisa.svg"
import erroPesquisa2 from "../../assets/erroPesquisa2.svg"
import { Text } from "../Text"

export function ErroComponet() {
  return (
    <div className={style["conteiner__erro"]}>
        <img
          src={erroPesquisa}
          alt="icon"
          className={style["erro_icon_primary"]}
        />
        <img className={style["secondary"]}src={erroPesquisa2} alt="icon secindary" />
      <Text
        type="title"
        as="h1"
        color="red-300"
        size="extra-large"
        position="center"
        weight="medium"
      >
        Nenhum resultado foi encontrado!
      </Text>
      <Text
        type="title"
        as="h1"
        color="grey-500"
        size="large"
        position="center"
        weight="medium"
      >
        Verifique se escrita está correta
      </Text>
    </div>
  )
}
