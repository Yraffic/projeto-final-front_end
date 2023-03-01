import style from "./style.module.css"
import cobrancas from "../../assets/cobrancas.svg"
import filtro from "../../assets/filtro.svg"
import { Text } from "../../components/Text"
import pesquisa from "../../assets/pesquisa.svg"
import { ChargeTable } from "../../components/ChargeTable"

export function Charges() {
  return (
    <div className={style["container"]}>
      <div className={style["client__nav"]}>
        <div className={style["client__flex"]}>
          <img
            src={cobrancas}
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
            Cobranças
          </Text>
        </div>
        <div className={style["client__flex"]}>
          <img
            src={filtro}
            alt="filtro"
            className={style["client__nav_filtro"]}
          />
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
      <ChargeTable />
    </div>
  )
}
