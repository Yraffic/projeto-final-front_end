import style from "./style.module.css"
import CheckIcon from "@mui/icons-material/Check"
import { Text } from "../Text"

export function SuccessCard({ message, primary }) {
  return (
    <div
      className={`${style["card"]} ${primary && style["card--primary"]}`}
    >
      <div className={style["circle"]}>
        <CheckIcon
          style={{
            color: "green",
            width: "4rem",
            height: "4rem",
          }}
        />
      </div>
      <Text
        type="title"
        as="h2"
        color="grey-800"
        size="large"
        position="center"
        weight="bold"
      >
        {message}
      </Text>
    </div>
  )
}
