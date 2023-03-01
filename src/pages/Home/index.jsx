import style from "./style.module.css"
import { CardCharge } from "./components/Cards/CardCharge"
import { TableCard } from "./components/Cards/TableCard"
import cobrancasPagas from "../../assets/cobrancasPagas.svg"
import cobrancaPendente from "../../assets/cobrancaPendente.svg"
import cobrancaVencida from "../../assets/cobrancaVencida.svg"

export function Home() {
  return (
    <div className={style["conteiner_home"]}>
      <section className={style["home___cards_charge"]}>
        <CardCharge
          img={cobrancasPagas}
          color="petroleum-200"
          text="pagas"
          value="30.000"
        />
        <CardCharge
          img={cobrancaVencida}
          color="wine-200"
          text="vencidas"
          value="7.000"
        />
        <CardCharge
          img={cobrancaPendente}
          color="yellow-200"
          text="pendentes"
          value="10.000"
        />
      </section>
      <section className={style["home__cards_info"]}>
        <TableCard type="cobrança" title="Vencidas" />
        <TableCard type="cobrança" title="Previstas" />
        <TableCard type="cobrança" title="Pagas" />
      </section>
      <section className={style["home__cards_info"]}>
        <TableCard type="cliente" title="inadimplentes" />
        <TableCard type="cliente" title="em dia" />
      </section>
    </div>
  )
}
