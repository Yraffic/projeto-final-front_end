import style from "./style.module.css"
import banner from "../../assets/loginBanner.svg"
import { Text } from "../../components/Text"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Navigate, NavLink } from "react-router-dom"
import { useForm } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi"
import { LoginSchema } from "../../global/validators/login"
import { logUserIn } from "../../services/requests"
import { useLoggedUser } from "../../hooks/useLoggedUser"
import { Loading } from "../../components/Loading"
import { useMutation } from "@tanstack/react-query"

export function Login() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: joiResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const { setUser, user } = useLoggedUser()
  const { mutate, isLoading } = useMutation(logUserIn, {
    onSuccess: (data) => {
      setUser({
        userData: {
          id: data.data.usuario.id,
          nome: data.data.usuario.nome,
          email: data.data.usuario.email,
          cpf: data.data.usuario.cpf,
          telefone: data.data.usuario.telefone,
        },
        token: data.data.token,
      })
    },
    onError: () => {
      setError(
        "email",
        {
          type: "manual",
          message: "Email ou senha inválidos",
        },
        {
          shouldFocus: true,
        }
      )
      setError(
        "password",
        {
          type: "manual",
          message: "Email ou senha inválidos",
        },
        {
          shouldFocus: true,
        }
      )
    },
  })

  function handleSucess(data) {
    mutate({
      email: data.email,
      senha: data.password,
    })
  }

  if (user) {
    return <Navigate to="/home" />
  }

  return (
    <>
      <div className={style["main-container"]}>
        <div className={style["left-container"]}>
          <Text
            type="title"
            as="h1"
            color="green-300"
            size="large"
            position="center"
            weight="medium"
          >
            Gerencie todos os pagamentos da sua empresa em um só lugar.
          </Text>
          <img
            className={style["left-container__image"]}
            src={banner}
            alt="Login Banner"
          />
        </div>
        <div className={style["right-container"]}>
          <Text type="subtitle" as="h2" weight="bold">
            Faça seu login!
          </Text>
          <form
            className={style["form"]}
            onSubmit={handleSubmit(handleSucess)}
          >
            <Input
              type="text"
              name="email"
              label="E-mail"
              error={!!errors.email}
              errorName={errors.email?.message}
              placeholder="Digite seu e-mail"
              control={control}
            />
            <div className={style["form__password"]}>
              <Text
                type="span"
                as="a"
                color="pink-200"
                weight="medium"
                decoration="underline"
              >
                Esqueceu a senha?
              </Text>
              <Input
                type="password"
                name="password"
                error={!!errors.password}
                errorName={errors.password?.message}
                label="Senha"
                placeholder="Digite sua senha"
                control={control}
              />
            </div>
            <Button type="submit">Entrar</Button>
          </form>
          <Text type="span" as="span">
            Ainda não possui uma conta?{" "}
            <NavLink to="/register">
              <Text
                type="span"
                as="span"
                pointer
                color="pink-200"
                weight="medium"
                decoration="underline"
              >
                Cadastre-se{" "}
              </Text>
            </NavLink>
          </Text>
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  )
}
