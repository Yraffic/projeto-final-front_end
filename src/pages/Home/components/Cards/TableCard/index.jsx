import style from "./style.module.css"
import { Text } from "../../../../../components/Text"
import emDia from "../../../../../assets/emDia.svg"
import inadimplente from "../../../../../assets/inadimplente.svg"

export function TableCard({ type, title, listaExemplo }) {
  if (type === "cliente") {
    return (
      <div className={style["card_client"]}>
        <div
          className={`${style["card__header"]}  ${style["card__header--spaced"]}`}
        >
          <div className={style["header__com_icon"]}>
            <img
              src={title === "inadimplentes" ? inadimplente : emDia}
              alt="icon"
            />
            <Text
              type="title"
              as="h2"
              color="grey-700"
              size="medium"
              position="center"
              weight="bold"
            >
              Clientes {title}
            </Text>
          </div>
          <div
            className={`${style["card__circle"]} ${
              title === "inadimplentes"
                ? style["card__circle--Vencidas"]
                : style["card__circle--Pagas"]
            }`}
          >
            <Text
              type="title"
              as="h3"
              size="regular"
              position="center"
              weight="bold"
            >
              0
            </Text>
          </div>
        </div>
        <section className={style["table"]}>
          <div className={style["table__item"]}>
            <Text
              type="title"
              as="span"
              color="grey-700"
              size="regular"
              position="left"
              weight="bold"
            >
              Cliente
            </Text>
            <Text
              type="title"
              as="span"
              color="grey-700"
              size="regular"
              position="left"
              weight="bold"
            >
              Data de venc.
            </Text>
            <Text
              type="title"
              as="span"
              color="grey-700"
              size="regular"
              position="left"
              weight="bold"
            >
              Valor
            </Text>
          </div>
          <div className={style["table__item"]}>
            <Text
              type="title"
              as="span"
              color="grey-700"
              size="small"
              position="left"
              weight="regular"
            >
              Sara Silva
            </Text>
            <Text
              type="title"
              as="span"
              color="grey-700"
              size="small"
              position="left"
              weight="regular"
            >
              03/01/2000
            </Text>
            <Text
              type="title"
              as="span"
              color="grey-700"
              size="small"
              position="left"
              weight="regular"
            >
              1000.00
            </Text>
          </div>
        </section>
        <div className={style["card__footer"]}>
          <Text
            type="title"
            as="a"
            color="pink-200"
            size="medium"
            position="center"
            weight="medium"
            decoration="underline"
          >
            Ver todos
          </Text>
        </div>
      </div>
    )
  }

  return (
    <div className={style["card_client"]}>
      <div className={style["card__header"]}>
        <Text
          type="title"
          as="h2"
          color="grey-700"
          size="medium"
          position="center"
          weight="bold"
        >
          Cobranças {title}
        </Text>
        <div
          className={`${style["card__circle"]} ${
            style[`card__circle--${title}`]
          }`}
        >
          <Text
            type="title"
            as="h3"
            size="regular"
            position="center"
            weight="bold"
          >
            0
          </Text>
        </div>
      </div>
      <section className={style["table"]}>
        <div className={style["table__item"]}>
          <Text
            type="title"
            as="span"
            color="grey-700"
            size="regular"
            position="left"
            weight="bold"
          >
            Cliente
          </Text>
          <Text
            type="title"
            as="span"
            color="grey-700"
            size="regular"
            position="left"
            weight="bold"
          >
            ID da cob.
          </Text>
          <Text
            type="title"
            as="span"
            color="grey-700"
            size="regular"
            position="left"
            weight="bold"
          >
            Valor
          </Text>
        </div>
        <div className={style["table__item"]}>
          <Text
            type="title"
            as="span"
            color="grey-700"
            size="small"
            position="left"
            weight="regular"
          >
            Lara Brito
          </Text>
          <Text
            type="title"
            as="span"
            color="grey-700"
            size="small"
            position="left"
            weight="regular"
          >
            223456787
          </Text>
          <Text
            type="title"
            as="span"
            color="grey-700"
            size="small"
            position="left"
            weight="regular"
          >
            R$ 900.00
          </Text>
        </div>
      </section>
      <div className={style["card__footer"]}>
        <Text
          type="title"
          as="a"
          color="pink-200"
          size="medium"
          position="center"
          weight="medium"
          decoration="underline"
        >
          Ver todos
        </Text>
      </div>
    </div>
  )
}
