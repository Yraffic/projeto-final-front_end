import { joiResolver } from "@hookform/resolvers/joi"
import { Modal } from "@mui/material"
import { useForm } from "react-hook-form"
import { ClientSchema } from "../../../global/validators/client"
import { useModal } from "../../../hooks/useModal"
import { Button } from "../../Button"
import { Input } from "../../Input"
import { Text } from "../../Text"
import defaulStyles from "../style.module.css"
import { ReactComponent as ClientIcon } from "../../../assets/client.svg"
import style from "./style.module.css"
import { createClient, updateClient } from "../../../services/requests"
import { Loading } from "../../Loading"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toastError, toastSuccess } from "../../../utils/toast"

export function ModalClient({ type }) {
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: joiResolver(ClientSchema),
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      cellphone: "",
      address: "",
      city: "",
      state: "",
      cep: "",
      complement: "",
      neighborhood: "",
    },
  })
  const {
    clientSignUpModal: { open, toggle },
    clientEditModal: { open: openEdit, toggle: toggleEdit },
  } = useModal()
  const { id } = useParams()
  const queryClient = useQueryClient()
  const { isLoading, mutate } = useMutation(
    type === "edit" ? updateClient : createClient,
    {
      onSuccess: () => {
        if (type === "edit") {
          toggleEdit()
          toastSuccess("Edições do cadastro concluídas com sucesso!")
          queryClient.invalidateQueries(["client", id], {
            exact: true,
          })
          return
        }

        toggle()
        toastSuccess("Cadastro concluído com sucesso!")
        queryClient.invalidateQueries(["clients"])
      },
      onError: (error) => {
        if (!error.response.data?.erro) {
          toastError(
            type === "edit"
              ? "Erro ao editar o cadastro"
              : "Erro ao cadastrar cliente!"
          )
        }

        if (error.response.data?.erro?.email) {
          setError(
            "email",
            {
              type: "manual",
              message: error.response.data.erro.email,
            },
            {
              shouldFocus: true,
            }
          )
        }

        if (error.response.data?.erro?.cpf) {
          setError(
            "cpf",
            {
              type: "manual",
              message: error.response.data.erro.cpf,
            },
            {
              shouldFocus: true,
            }
          )
        }
      },
    }
  )

  function handleSucess(data) {
    const {
      name,
      email,
      cpf,
      cellphone,
      address,
      city,
      state,
      cep,
      complement,
      neighborhood,
    } = data
    const client = {
      nome: name,
      email,
      cpf,
      telefone: cellphone,
    }

    if (address) client.logradouro = address
    if (city) client.cidade = city
    if (state) client.estado = state
    if (cep) client.cep = cep
    if (complement) client.complemento = complement
    if (neighborhood) client.bairro = neighborhood

    if (type === "edit") {
      mutate({ id, data: client })
      return
    }

    mutate(client)
  }

  useEffect(() => {
    if (type !== "edit") return

    const { data: client } = queryClient.getQueryData(["client", id], {
      exact: true,
    })
    if (typeof client === "undefined") return

    setValue("name", client.nome)
    setValue("email", client.email)
    setValue("cpf", client.cpf)
    setValue("cellphone", client.telefone)
    setValue("address", client?.logradouro ? client.logradouro : "")
    setValue("city", client?.cidade ? client.cidade : "")
    setValue("state", client?.estado ? client.estado : "")
    setValue("cep", client?.cep ? client.cep : "")
    setValue("complement", client?.complemento ? client.complemento : "")
    setValue("neighborhood", client?.bairro ? client?.bairro : "")
  }, [type, setValue, id, queryClient])

  return (
    <>
      <Modal
        open={type === "edit" ? openEdit : open}
        onClose={type === "edit" ? toggleEdit : toggle}
        className={`${defaulStyles["overlay"]} ${style["overlay--z-index-low"]}`}
      >
        <div
          className={`${defaulStyles["container"]} ${style["container--large"]}`}
        >
          <button
            className={defaulStyles["close-button"]}
            onClick={type === "edit" ? toggleEdit : toggle}
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
              <ClientIcon />
              <Text
                type="subtitle"
                as="h2"
                size="extra-large"
                weight="bold"
              >
                {type === "edit" ? "Editar" : "Cadastro do"} Cliente
              </Text>
            </div>
            <form
              className={`${defaulStyles["form"]} ${style["form--gap-small"]}`}
              onSubmit={handleSubmit(handleSucess)}
            >
              <Input
                type="text"
                name="name"
                label="Nome*"
                error={!!errors.name}
                errorName={errors.name?.message}
                placeholder="Digite seu nome"
                control={control}
              />
              <Input
                type="text"
                name="email"
                label="E-mail*"
                error={!!errors.email}
                errorName={errors.email?.message}
                placeholder="Digite seu e-mail"
                control={control}
              />
              <div className={defaulStyles["form__input-wrapper"]}>
                <Input
                  type="text"
                  name="cpf"
                  label="CPF*"
                  error={!!errors.cpf}
                  errorName={errors.cpf?.message}
                  placeholder="Digite seu CPF"
                  control={control}
                />
                <Input
                  type="text"
                  name="cellphone"
                  label="Telefone*"
                  error={!!errors.cellphone}
                  errorName={errors.cellphone?.message}
                  placeholder="Digite seu Telefone"
                  control={control}
                />
              </div>
              <Input
                type="text"
                name="address"
                label="Endereço"
                placeholder="Digite o endereço"
                error={!!errors.address}
                errorName={errors.address?.message}
                control={control}
              />
              <Input
                type="text"
                name="complement"
                label="Complemento"
                placeholder="Digite o complemento"
                error={!!errors.complement}
                errorName={errors.complement?.message}
                control={control}
              />
              <div className={defaulStyles["form__input-wrapper"]}>
                <Input
                  type="text"
                  name="cep"
                  label="CEP"
                  error={!!errors.cep}
                  errorName={errors.cep?.message}
                  placeholder="Digite o CEP"
                  control={control}
                />
                <Input
                  type="text"
                  name="neighborhood"
                  label="Bairro"
                  error={!!errors.neighborhood}
                  errorName={errors.neighborhood?.message}
                  placeholder="Digite o bairro"
                  control={control}
                />
              </div>
              <div
                className={`${defaulStyles["form__input-wrapper"]} ${style["form__input-wrapper--large"]}`}
              >
                <Input
                  type="text"
                  name="city"
                  label="Cidade"
                  error={!!errors.city}
                  errorName={errors.city?.message}
                  placeholder="Digite a cidade"
                  control={control}
                />
                <Input
                  type="text"
                  name="state"
                  label="UF"
                  error={!!errors.state}
                  errorName={errors.state?.message}
                  placeholder="Digite a UF"
                  control={control}
                />
              </div>
              <div className={style["wrapper"]}>
                <Button
                  variant="secondary"
                  onClick={() => {
                    reset()
                    type === "edit" ? toggleEdit() : toggle()
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
