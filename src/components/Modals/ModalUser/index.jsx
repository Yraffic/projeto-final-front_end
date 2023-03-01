import { Modal } from "@mui/material"
import { useForm } from "react-hook-form"
import { Button } from "../../Button"
import { Input } from "../../Input"
import { Text } from "../../Text"
import { joiResolver } from "@hookform/resolvers/joi"
import style from "./style.module.css"
import defaulStyles from "../style.module.css"
import { UserSchema } from "../../../global/validators/user"
import { useEffect } from "react"
import { useLoggedUser } from "../../../hooks/useLoggedUser"
import { Loading } from "../../Loading"
import { useModal } from "../../../hooks/useModal"
import { updateUser } from "../../../services/requests"
import { SuccessCard } from "../../SuccessCard"
import { useMutation } from "@tanstack/react-query"

export function ModalUser() {
  const {
    setValue,
    setError,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(UserSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      cellphone: "",
      password: "",
      confirmPassword: "",
    },
  })
  const { user, setUser } = useLoggedUser()
  const {
    userModal: { open, toggle },
  } = useModal()
  const { mutate, isLoading, isSuccess } = useMutation(updateUser, {
    onError: (error) => {
      setError(
        "email",
        {
          type: "manual",
          message: error.response.data.mensagem,
        },
        {
          shouldFocus: true,
        }
      )
    },
    onSuccess: (data) => {
      const { data: userData } = data
      setUser((prevData) => {
        return {
          ...prevData,
          userData,
        }
      })
    },
  })

  function handleSucess(data) {
    const { name, email, cpf, cellphone, password } = data
    const requestData = {
      nome: name,
      email,
    }

    if (typeof cpf !== "undefined") requestData.cpf = cpf
    if (typeof cellphone !== "undefined") requestData.telefone = cellphone
    if (typeof password !== "undefined") requestData.senha = password

    mutate(requestData)
  }

  useEffect(() => {
    if (!user) return
    setValue("name", user.userData.nome)
    setValue("email", user.userData.email)
    setValue("cpf", user.userData.cpf ? user.userData.cpf : "")
    setValue(
      "cellphone",
      user.userData.telefone ? user.userData.telefone : ""
    )
  }, [user, setValue])

  return (
    <>
      <Modal
        open={open}
        onClose={toggle}
        className={defaulStyles["overlay"]}
      >
        <div
          className={`${defaulStyles["container"]} ${
            isSuccess && style["container--success"]
          }`}
        >
          {isSuccess ? (
            <SuccessCard
              primary
              message="Cadastro Alterado com sucesso!"
            />
          ) : (
            <>
              <button
                className={defaulStyles["close-button"]}
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
              <div className={style["content-container"]}>
                <Text type="subtitle" as="h2" weight="bold">
                  Edite seu cadastro
                </Text>
                <form
                  className={defaulStyles["form"]}
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
                      label="CPF"
                      error={!!errors.cpf}
                      errorName={errors.cpf?.message}
                      placeholder="Digite seu CPF"
                      control={control}
                    />
                    <Input
                      type="text"
                      name="cellphone"
                      label="Telefone"
                      error={!!errors.cellphone}
                      errorName={errors.cellphone?.message}
                      placeholder="Digite seu Telefone"
                      control={control}
                    />
                  </div>
                  <Input
                    type="password"
                    name="password"
                    label="Nova Senha*"
                    error={!!errors.password}
                    errorName={errors.password?.message}
                    control={control}
                  />
                  <Input
                    type="password"
                    name="confirmPassword"
                    label="Confirmar Senha*"
                    error={!!errors.confirmPassword}
                    errorName={errors.confirmPassword?.message}
                    control={control}
                  />
                  <Button type="submit">Aplicar</Button>
                </form>
              </div>
            </>
          )}
        </div>
      </Modal>
      {isLoading && <Loading />}
    </>
  )
}
