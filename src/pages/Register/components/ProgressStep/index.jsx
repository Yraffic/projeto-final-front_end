import { useSteps } from "../../hooks/useSteps"
import style from "./style.module.css"

export function ProgressStep() {
  const { steps, currentStep } = useSteps()

  return (
    <div className={style["progress-container"]}>
      {steps.map((_step, index) => (
        <div
          key={index}
          className={`${style["progress__item"]} ${
            index === currentStep
              ? style["progress__item--active"]
              : style["progress__item--inactive"]
          }`}
        />
      ))}
    </div>
  )
}
