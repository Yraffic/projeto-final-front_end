import { Modal, Paper } from "@mui/material"
import { Text } from "../../Text"
import defaultStyles from "../style.module.css"
import style from "./style.module.css"
import cobrancas from "../../../assets/cobrancas.svg"
import { useModal } from "../../../hooks/useModal"
import { transformToBrDate } from "../../../utils/date"
import { transformToReal } from "../../../utils/currency"
import {
  getStatusBackgroundColor,
  getStatusColor,
} from "../../../utils/statusColor"

export function ModalDetailCharge() {
  const {
    chargeModal: { chargeDetails },
    chargeDetailModal: { open, toggle },
  } = useModal()
  return (
    <Modal
      open={open}
      onClose={toggle}
      className={defaultStyles["overlay"]}
    >
      <div
        className={`${defaultStyles["container"]} ${defaultStyles["container--large"]}`}
      >
        <button className={defaultStyles["close-button"]} onClick={toggle}>
          <Text
            type="paragraph"
            as="span"
            color="gray-700"
            weight="medium"
            size="extra-large"
          >
            X
          </Text>
        </button>
        <div className={style["conteiner_content"]}>
          <div className={style["wrapper"]}>
            <img src={cobrancas} alt="icon" />
            <Text
              type="title"
              as="h2"
              position="left"
              weight="medium"
              size="extra-large"
            >
              Detalhe da Cobrança
            </Text>
          </div>
          <div className={style["conteiner_content__info"]}>
            <div className={style["conteiner_content__info__item"]}>
              <Text
                type="paragraph"
                as="span"
                position="center"
                weight="medium"
                size="regular"
              >
                Nome
              </Text>
              <Text
                type="paragraph"
                as="span"
                position="center"
                weight="small"
                size="regular"
              >
                {chargeDetails?.nome}
              </Text>
            </div>
            <div className={style["conteiner_content__info__item"]}>
              <Text
                type="paragraph"
                as="h2"
                position="center"
                weight="medium"
                size="regular"
              >
                Descrição
              </Text>
              <Text
                type="paragraph"
                as="span"
                position="justify"
                weight="small"
                size="regular"
              >
                {chargeDetails?.descricao}
              </Text>
            </div>
            <div
              className={`${style["wrapper"]} ${style["wrapper--spaced"]}`}
            >
              <div className={style["conteiner_content__info__item"]}>
                <Text
                  type="paragraph"
                  as="h2"
                  position="center"
                  weight="medium"
                  size="regular"
                >
                  Vencimento
                </Text>
                <Text
                  type="paragraph"
                  as="span"
                  position="start"
                  weight="small"
                  size="regular"
                >
                  {transformToBrDate(chargeDetails?.vencimento)}
                </Text>
              </div>
              <div className={style["conteiner_content__info__item"]}>
                <Text
                  type="paragraph"
                  as="h2"
                  position="center"
                  weight="medium"
                  size="regular"
                >
                  Valor
                </Text>
                <Text
                  type="paragraph"
                  as="span"
                  position="start"
                  weight="small"
                  size="regular"
                >
                  {transformToReal(chargeDetails?.valor)}
                </Text>
              </div>
            </div>
            <div
              className={`${style["wrapper"]} ${style["wrapper--spaced"]}`}
            >
              <div className={style["conteiner_content__info__item"]}>
                <Text
                  type="paragraph"
                  as="h2"
                  position="center"
                  weight="medium"
                  size="regular"
                >
                  ID cobrança
                </Text>
                <Text
                  type="paragraph"
                  as="span"
                  position="start"
                  weight="small"
                  size="regular"
                >
                  {chargeDetails?.id}
                </Text>
              </div>
              <div className={style["conteiner_content__info__item"]}>
                <Text
                  type="paragraph"
                  as="h2"
                  position="center"
                  weight="medium"
                  size="regular"
                >
                  Status
                </Text>
                <Paper
                  sx={{
                    color: `${getStatusColor(chargeDetails?.status)}`,
                    fontWeight: "600",
                    backgroundColor: `${getStatusBackgroundColor(
                      chargeDetails?.status
                    )}`,
                    textAlign: "center",
                    width: "100px",
                  }}
                >
                  {chargeDetails?.status}
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
