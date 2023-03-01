import style from "./style.module.css"
import defaultStyles from "../style.module.css"
import { Modal } from "@mui/material"
import { Text } from "../../Text"
import { ReactComponent as AtentionIcon } from "../../../assets/atencao.svg"
import { useModal } from "../../../hooks/useModal"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCharge } from "../../../services/requests"
import { Loading } from "../../Loading"
import { toastError, toastSuccess } from "../../../utils/toast"

export function ModalDeleteCharge() {
  const {
    chargeModal: { chargeDetails },
    chargeDeleteModal: { open, toggle },
  } = useModal()
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation(deleteCharge, {
    onSuccess: () => {
      toastSuccess("Cobrança excluída com sucesso!")
      queryClient.invalidateQueries(["charges"])
      queryClient.invalidateQueries(["clients"])
    },
    onError: () => {
      toastError("Esta cobrança não pode ser excluída!")
    },
    onSettled: () => {
      toggle()
    },
  })

  function handleDelete() {
    mutate(chargeDetails.id)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={toggle}
        className={defaultStyles["overlay"]}
      >
        <div
          className={`${defaultStyles["container"]} ${defaultStyles["container--large"]} ${style["conteiner--spaced"]}`}
        >
          <button
            className={defaultStyles["close-button"]}
            onClick={toggle}
          >
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
            <AtentionIcon className={style["atencao_img"]} />
            <Text
              type="paragraph"
              as="h1"
              position="center"
              color="orange-300"
              weight="medium"
              size="medium"
            >
              Tem certeza que deseja excluir esta cobrança?
            </Text>
            <div className={style["conteiner__buttons"]}>
              <button
                className={[`${style["button"]} ${style["button--red"]}`]}
                onClick={toggle}
              >
                <Text
                  type="span"
                  as="span"
                  color="red-500"
                  size="medium"
                  fontFamily="secondary"
                >
                  Não
                </Text>
              </button>
              <button
                className={[
                  `${style["button"]} ${style["button--green"]}`,
                ]}
                onClick={handleDelete}
              >
                <Text
                  type="span"
                  as="span"
                  color="green-300"
                  size="medium"
                  fontFamily="secondary"
                >
                  Sim
                </Text>
              </button>
            </div>
          </div>
        </div>
      </Modal>
      {isLoading && <Loading />}
    </>
  )
}
