import { FormProvider, useForm } from "react-hook-form"
import { Stepper } from "./components/Stepper"
import style from "./style.module.css"
import { joiResolver } from "@hookform/resolvers/joi"
import { RegisterSchema } from "../../global/validators/register"
import { Text } from "../../components/Text"
import { NavLink } from "react-router-dom"
import { useSteps } from "./hooks/useSteps"
import { ProgressStep } from "./components/ProgressStep"
import { signUserUp } from "../../services/requests"
import { Loading } from "../../components/Loading"
import { useMutation } from "@tanstack/react-query"

export function Register() {
  const methods = useForm({
    mode: "onSubmit",
    resolver: joiResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  const { currentStep, getStepForm, setStepsValue } = useSteps()
  const { mutate, isLoading } = useMutation(signUserUp, {
    onSuccess: () => {
      setStepsValue(2)
    },
    onError: () => {
      setStepsValue(0)
      methods.reset()
      methods.setError(
        "email",
        {
          type: "manual",
          message: "Email inválido",
        },
        {
          shouldFocus: true,
        }
      )
    },
  })

  function handleError(error) {
    if (currentStep === 0) {
      if (!error.email && !error.name) {
        setStepsValue(1)
        methods.clearErrors()
      }
    }
  }

  function handleSucess(data) {
    const { name, email, password } = data
    mutate({
      nome: name,
      email,
      senha: password,
    })
  }

  return (
    <>
      <div className={style["main-container"]}>
        <div className={style["left-container"]}>
          <Stepper />
        </div>
        <div className={style["right-container"]}>
          {currentStep !== 2 ? (
            <div className={style["card"]}>
              <Text type="subtitle" as="h2" weight="bold">
                {currentStep === 0
                  ? "Adicione seus dados"
                  : "Escolha uma senha"}
              </Text>
              <FormProvider {...methods}>
                <form
                  className={style["form"]}
                  onSubmit={methods.handleSubmit(
                    handleSucess,
                    handleError
                  )}
                >
                  {getStepForm(currentStep)}
                </form>
              </FormProvider>
              <Text type="span" as="span">
                Já possui uma conta? Faça seu{" "}
                <NavLink to="/login">
                  <Text
                    type="span"
                    as="span"
                    pointer
                    color="pink-200"
                    weight="medium"
                    decoration="underline"
                  >
                    Login
                  </Text>
                </NavLink>
              </Text>
            </div>
          ) : (
            getStepForm(currentStep)
          )}
          <ProgressStep />
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  )
}
