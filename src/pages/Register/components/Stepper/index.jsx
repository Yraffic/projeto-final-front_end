import { Text } from "../../../../components/Text"
import style from "./style.module.css"
import CheckIcon from "@mui/icons-material/Check"
import { useSteps } from "../../hooks/useSteps"

export function Stepper() {
  const { currentStep, steps, setStepsValue } = useSteps()

  return (
    <div className={style["steps-container"]}>
      {steps.map((step, index) => {
        return (
          <div
            className={style["step"]}
            onClick={() => {
              if (!step.completed || currentStep === 2) return
              setStepsValue(index)
            }}
            key={index}
          >
            <div className={style["step__icons"]}>
              <div
                className={`${style["step__icons__icon"]} ${
                  step.completed && style["step__icons__icon--completed"]
                } ${
                  index === currentStep
                    ? style["step__icons__icon--active"]
                    : style["step__icons__icon--inactive"]
                }`}
              >
                {step.completed && (
                  <CheckIcon style={{ color: "white" }} />
                )}
              </div>
              {
                <div
                  className={`${style["step__separator"]} ${
                    index === steps.length - 1 &&
                    style["step__separator--unactive"]
                  }`}
                />
              }
            </div>
            <div className={style["step__content"]}>
              <Text
                type="subtitle"
                as="h3"
                color="green-200"
                weight="bold"
                size="medium"
              >
                {step.label}
              </Text>
              <Text type="subtitle" as="h4" size="medium">
                {step.description}
              </Text>
            </div>
          </div>
        )
      })}
    </div>
  )
}
