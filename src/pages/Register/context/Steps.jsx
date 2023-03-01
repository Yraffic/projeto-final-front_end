import { createContext, useCallback, useMemo } from "react"
import { useState } from "react"
import { FirstStep } from "../components/FirstStep"
import { SecondStep } from "../components/SecondStep"
import { ThirdStep } from "../components/ThirdStep"

export const StepsContext = createContext({
  steps: [],
  currentStep: 0,
  setStepsValue: () => {},
  getStepForm: () => {},
})

export function StepsProvider({ children }) {
  const [steps, setSteps] = useState([
    {
      label: "Cadastre-se",
      description: "Por favor, escreva seu nome e e-mail",
      completed: false,
    },
    {
      label: "Escolha uma senha",
      description: "Escolha uma senha segura",
      completed: false,
    },
    {
      label: "Cadastro realizado com sucesso",
      description: "E-mail e senha cadastrados com sucesso",
      completed: false,
    },
  ])
  const [currentStep, setCurrentStep] = useState(0)

  const getStepForm = useCallback((step) => {
    switch (step) {
      case 0:
        return <FirstStep />
      case 1:
        return <SecondStep />
      case 2:
        return <ThirdStep />
      default:
        return <FirstStep />
    }
  }, [])

  const setStepsValue = useCallback((step) => {
    switch (step) {
      case 0:
        setSteps((prev) => {
          prev[0].completed = false
          prev[1].completed = false
          prev[2].completed = false
          return [...prev]
        })
        setCurrentStep(0)
        break
      case 1:
        setSteps((prev) => {
          prev[0].completed = true
          prev[1].completed = false
          prev[2].completed = false
          return [...prev]
        })
        setCurrentStep(1)
        break
      case 2:
        setSteps((prev) => {
          prev[0].completed = true
          prev[1].completed = true
          prev[2].completed = true
          return [...prev]
        })
        setCurrentStep(2)
        break
      default:
        setSteps((prev) => {
          prev[0].completed = true
          prev[1].completed = false
          prev[2].completed = false
          return [...prev]
        })
        setCurrentStep(0)
    }
  }, [])

  const value = useMemo(() => {
    return {
      steps,
      currentStep,
      setCurrentStep,
      setStepsValue,
      getStepForm,
    }
  }, [steps, setCurrentStep, getStepForm, currentStep, setStepsValue])

  return (
    <StepsContext.Provider value={value}>{children}</StepsContext.Provider>
  )
}
