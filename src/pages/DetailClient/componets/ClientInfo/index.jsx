import { Button } from "../../../../components/Button"
import { Text } from "../../../../components/Text"
import style from "./style.module.css"
import iconEdit from "../../../../assets/iconeEdit.svg"
import clientIcon from "../../../../assets/client.svg"
import { useModal } from "../../../../hooks/useModal"

export function ClientInfo({ client }) {
  const {
    clientEditModal: { toggle },
  } = useModal()

  return (
    <>
      <div className={style["client__nav"]}>
        <div className={style["client__flex"]}>
          <img
            src={clientIcon}
            alt="icon"
            className={style["client__flex_img"]}
          />
          <Text type="title" as="h2" size="extra-large" weight="medium">
            {client.nome}
          </Text>
        </div>
      </div>
      <div className={style["conteiner__detail_client"]}>
        <div className={style["detail__header"]}>
          <Text
            type="title"
            as="h2"
            size="medium"
            color="grey-700"
            weight="bold"
          >
            Dados do Cliente
          </Text>
          <Button variant="secondary" onClick={toggle}>
            <img
              className={style["detail__button_edit_img"]}
              src={iconEdit}
              alt="icon"
            />
            Editar Cliente
          </Button>
        </div>
        <div className={style["detail__info"]}>
          <div className={style["detail__info__item"]}>
            <div className={style["detail__info__item__content"]}>
              <Text
                type="title"
                as="h1"
                color="grey-700"
                size="regular"
                weight="bold"
              >
                E-mail
              </Text>
              <Text
                type="title"
                as="p"
                color="grey-700"
                size="regular"
                weight="regular"
              >
                {client.email}
              </Text>
            </div>
            <div className={style["detail__info__item__content"]}>
              <Text
                type="title"
                as="h1"
                color="grey-700"
                size="regular"
                position="start"
                weight="bold"
              >
                Endereço
              </Text>
              <Text
                type="title"
                as="p"
                color="grey-700"
                size="regular"
                position="start"
                weight="regular"
              >
                {client?.logradouro}
              </Text>
            </div>
          </div>
          <div className={style["detail__info__item"]}>
            <div className={style["detail__info__item__content"]}>
              <Text
                type="title"
                as="h1"
                color="grey-700"
                size="regular"
                position="start"
                weight="bold"
              >
                Telefone
              </Text>
              <Text
                type="title"
                as="p"
                color="grey-700"
                size="regular"
                position="start"
                weight="regular"
              >
                {client.telefone}
              </Text>
            </div>
            <div className={style["detail__info__item__content"]}>
              <Text
                type="title"
                as="h1"
                color="grey-700"
                size="regular"
                position="start"
                weight="bold"
              >
                Bairro
              </Text>
              <Text
                type="title"
                as="p"
                color="grey-700"
                size="regular"
                position="start"
                weight="regular"
              >
                {client?.bairro}
              </Text>
            </div>
          </div>
          <div className={style["detail__info__item"]}>
            <div className={style["detail__info__item__content"]}>
              <Text
                type="title"
                as="h1"
                color="grey-700"
                size="regular"
                position="start"
                weight="bold"
              >
                CPF
              </Text>
              <Text
                type="title"
                as="p"
                color="grey-700"
                size="regular"
                position="start"
                weight="regular"
              >
                {client.cpf}
              </Text>
            </div>
            <div className={style["detail__info__item__content"]}>
              <Text
                type="title"
                as="h1"
                color="grey-700"
                size="regular"
                position="start"
                weight="bold"
              >
                Complemento
              </Text>
              <Text
                type="title"
                as="p"
                color="grey-700"
                size="regular"
                position="start"
                weight="regular"
              >
                {client?.complemento}
              </Text>
            </div>
          </div>
          <div className={style["detail__info__item"]}>
            <div className={style["detail__info__item__content"]}>
              <Text
                type="title"
                as="h1"
                color="grey-700"
                size="regular"
                position="start"
                weight="bold"
              >
                CEP
              </Text>
              <Text
                type="title"
                as="p"
                color="grey-700"
                size="regular"
                position="start"
                weight="regular"
              >
                {client?.cep}
              </Text>
            </div>
          </div>
          <div className={style["detail__info__item"]}>
            <div className={style["detail__info__item__content"]}>
              <Text
                type="title"
                as="h1"
                color="grey-700"
                size="regular"
                position="start"
                weight="bold"
              >
                Cidade
              </Text>
              <Text
                type="title"
                as="p"
                color="grey-700"
                size="regular"
                position="start"
                weight="regular"
              >
                {client?.cidade}
              </Text>
            </div>
          </div>
          <div className={style["detail__info__item"]}>
            <div className={style["detail__info__item__content"]}>
              <Text
                type="title"
                as="h1"
                color="grey-700"
                size="regular"
                position="start"
                weight="bold"
              >
                UF
              </Text>
              <Text
                type="title"
                as="p"
                color="grey-700"
                size="regular"
                position="start"
                weight="regular"
              >
                {client?.estado}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
