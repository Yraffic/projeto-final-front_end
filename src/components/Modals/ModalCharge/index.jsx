import { ReactComponent as ChargeIcon } from "../../../assets/cobrancas.svg"
import { Modal } from "@mui/material"
import { useForm } from "react-hook-form"
import { Button } from "../../Button"
import { Input } from "../../Input"
import { Text } from "../../Text"
import { joiResolver } from "@hookform/resolvers/joi"
import defaultStyles from "../style.module.css"
import style from "./style.module.css"
import { useModal } from "../../../hooks/useModal"
import { ChargeSchema } from "../../../global/validators/charge"
import { useEffect } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { registerCharge, updateCharge } from "../../../services/requests"
import { Loading } from "../../Loading"
import { formatToLocalDate } from "../../../utils/date"
import { toastError, toastSuccess } from "../../../utils/toast"

export function ModalCharge({ type = "create" }) {
  const {
    setValue,
    control,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(ChargeSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      description: "",
      dueDate: "",
      value: "",
      status: "pago",
    },
  })
  const {
    chargeModal: { open: openCreate, toggle: toggleCreate, chargeDetails },
    chargeEditModal: { open: openEdit, toggle: toggleEdit },
  } = useModal()
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation(
    type === "create" ? registerCharge : updateCharge,
    {
      onSuccess: () => {
        if (type === "create") {
          toggleCreate()
          toastSuccess("Cobrança cadastrada com sucesso")
        } else {
          toggleEdit()
          toastSuccess("Cobrança atualizada com sucesso")
        }

        reset()
        queryClient.invalidateQueries(["charges"])
        queryClient.invalidateQueries(["clients"])
      },
      onError: () => {
        toastError("Erro ao cadastrar cobrança")
      },
    }
  )

  function handleSucess(data) {
    const vencimento = new Date(`${data.dueDate} 23:59:59`)
    const charge = {
      id_cliente: chargeDetails?.id,
      nome: data.name,
      descricao: data.description,
      vencimento,
      valor: data.value,
      status: data.status,
    }

    if (type === "edit") {
      mutate({ id: chargeDetails?.id, data: charge })
      return
    }

    mutate(charge)
  }

  useEffect(() => {
    setValue("name", chargeDetails?.nome)

    if (type === "edit") {
      setValue("description", chargeDetails?.descricao)
      setValue(
        "dueDate",
        formatToLocalDate(chargeDetails?.vencimento, "en-CA") || ""
      )
      setValue("value", chargeDetails?.valor)
      if (chargeDetails?.status) {
        setValue(
          "status",
          chargeDetails?.status === "vencido"
            ? "pendente"
            : chargeDetails?.status
        )
      }
    }
  }, [setValue, chargeDetails, type])

  return (
    <>
      <Modal
        open={type === "create" ? openCreate : openEdit}
        onClose={type === "create" ? toggleCreate : toggleEdit}
        className={defaultStyles["overlay"]}
      >
        <div
          className={`${defaultStyles["container"]} ${defaultStyles["container--large"]}`}
        >
          <button
            className={defaultStyles["close-button"]}
            onClick={type === "create" ? toggleCreate : toggleEdit}
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
          <div className={style["content-container"]}>
            <div className={style["wrapper"]}>
              <ChargeIcon />
              <Text
                type="subtitle"
                as="h2"
                size="extra-large"
                weight="bold"
              >
                Cadastro de Cobrança
              </Text>
            </div>
            <form
              className={defaultStyles["form"]}
              onSubmit={handleSubmit(handleSucess)}
            >
              <Input
                type="text"
                name="name"
                disabled
                label="Nome*"
                control={control}
              />
              <Input
                type="text-area"
                name="description"
                label="Descrição*"
                error={!!errors.description}
                errorName={errors.description?.message}
                placeholder="Digite a descrição"
                control={control}
              />
              <div className={defaultStyles["form__input-wrapper"]}>
                <Input
                  type="date"
                  name="dueDate"
                  label="Vencimento*"
                  error={!!errors.dueDate}
                  errorName={errors.dueDate?.message}
                  placeholder="Data de Vencimento"
                  control={control}
                />
                <Input
                  type="number"
                  name="value"
                  label="Valor*"
                  error={!!errors.value}
                  errorName={errors.value?.message}
                  placeholder="Digite o valor"
                  control={control}
                />
              </div>
              <div className={style["input_wrapper"]}>
                <Text
                  type="span"
                  as="label"
                  color="grey-700"
                  size="small"
                  weight="medium"
                >
                  Status*
                </Text>
                <Input
                  type="radio"
                  name="status"
                  value="pago"
                  label="Cobrança Paga"
                  control={control}
                  checked={watch("status") === "pago"}
                />
                <Input
                  type="radio"
                  name="status"
                  value="pendente"
                  label="Cobrança Pendente"
                  control={control}
                  checked={watch("status") === "pendente"}
                />
              </div>
              <div className={style["wrapper"]}>
                <Button
                  variant="secondary"
                  onClick={() => {
                    reset()

                    if (type === "create") {
                      toggleCreate()
                    } else {
                      toggleEdit()
                    }
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit">Aplicar</Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      {isLoading && <Loading />}
    </>
  )
}
