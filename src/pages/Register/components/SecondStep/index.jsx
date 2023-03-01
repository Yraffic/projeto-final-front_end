import { useFormContext } from "react-hook-form"
import { Button } from "../../../../components/Button"
import { Input } from "../../../../components/Input"
import style from "../../style.module.css"

export function SecondStep() {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <Input
        label="Senha*"
        name="password"
        type="password"
        error={!!errors.password}
        errorName={errors.password?.message}
        placeholder="Digite sua senha"
        control={control}
      />
      <div className={style["form__password"]}>
        <Input
          label="Repita a senha*"
          name="confirmPassword"
          type="password"
          error={!!errors.confirmPassword}
          errorName={errors.confirmPassword?.message}
          placeholder="Confirme a senha"
          control={control}
        />
      </div>
      <Button type="submit">Finalizar cadastro</Button>
    </>
  )
}
