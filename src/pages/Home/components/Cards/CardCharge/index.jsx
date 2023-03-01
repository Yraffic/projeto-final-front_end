import style from "./style.module.css"
import { Text } from "../../../../../components/Text"

export function CardCharge({ img, color, text, value }) {
  return (
    <div
      className={style["card"]}
      style={{
        backgroundColor: `var(--${color})`,
      }}
    >
      <img src={img} alt="icon" className={style["card__image"]} />
      <div className={style["card__item"]}>
        <Text
          type="title"
          as="h2"
          color="grey-700"
          size="regular"
          position="center"
          weight="bold"
        >
          Cobranças {text}
        </Text>
        <Text
          type="title"
          as="p"
          color="grey-700"
          size="large"
          position="center"
          weight="bold"
        >
          R$ {value}
        </Text>
      </div>
    </div>
  )
}
