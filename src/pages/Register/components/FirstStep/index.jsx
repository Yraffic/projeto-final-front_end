import { Button } from "../../../../components/Button"
import { Input } from "../../../../components/Input"
import style from "../../style.module.css"
import { useFormContext } from "react-hook-form"

export function FirstStep() {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <Input
        type="text"
        name="name"
        label="Nome*"
        placeholder="Digite seu nome"
        error={!!errors.name}
        errorName={errors.name?.message}
        control={control}
      />
      <div className={style["form__password"]}>
        <Input
          type="text"
          name="email"
          label="E-mail*"
          error={!!errors.email}
          errorName={errors.email?.message}
          placeholder="Digite sua e-mail"
          control={control}
        />
      </div>
      <Button type="submit">Continuar</Button>
    </>
  )
}
