import { createContext, useMemo, useState } from "react"
import { useToggle } from "../hooks/useToggle"

export const ModalContext = createContext({
  userModal: {
    open: false,
    toggle: () => {},
  },
  clientSignUpModal: {
    open: false,
    toggle: () => {},
  },
  clientEditModal: {
    open: false,
    toggle: () => {},
  },
  chargeModal: {
    open: false,
    toggle: () => {},
    chargeDetails: {
      id: null,
      nome: "",
      descricao: "",
      vencimento: "",
      valor: "",
      status: "",
    },
    setChargeDetails: () => {},
  },
  chargeEditModal: {
    open: false,
    toggle: () => {},
  },
  chargeDeleteModal: {
    open: false,
    toggle: () => {},
  },
  chargeDetailModal: {
    open: false,
    toggle: () => {},
  },
})

export function ModalProvider({ children }) {
  const [isUserModalOpen, setIsUserModalOpen] = useToggle()
  const [isSignUpClientModalOpen, setIsSignUpClientModalOpen] = useToggle()
  const [isEditClientModalOpen, setIsEditClientModalOpen] = useToggle()
  const [isChargeModalOpen, setIsChargeModalOpen] = useToggle()
  const [isChargeEditModalOpen, setIsChargeEditModalOpen] = useToggle()
  const [isChargeDeleteModalOpen, setIsChargeDeleteModalOpen] = useToggle()
  const [isChargeDetailModalOpen, setIsChargeDetailModalOpen] = useToggle()
  const [chargeDetails, setChargeDetails] = useState({
    id: null,
    nome: "",
    descricao: "",
    vencimento: "",
    valor: "",
    status: "",
  })

  const values = useMemo(() => {
    return {
      userModal: {
        open: isUserModalOpen,
        toggle: setIsUserModalOpen,
      },
      clientSignUpModal: {
        open: isSignUpClientModalOpen,
        toggle: setIsSignUpClientModalOpen,
      },
      clientEditModal: {
        open: isEditClientModalOpen,
        toggle: setIsEditClientModalOpen,
      },
      chargeModal: {
        open: isChargeModalOpen,
        toggle: setIsChargeModalOpen,
        chargeDetails,
        setChargeDetails,
      },
      chargeEditModal: {
        open: isChargeEditModalOpen,
        toggle: setIsChargeEditModalOpen,
      },
      chargeDeleteModal: {
        open: isChargeDeleteModalOpen,
        toggle: setIsChargeDeleteModalOpen,
      },
      chargeDetailModal: {
        open: isChargeDetailModalOpen,
        toggle: setIsChargeDetailModalOpen,
      },
    }
  }, [
    isChargeDetailModalOpen,
    setIsChargeDetailModalOpen,
    isChargeDeleteModalOpen,
    setIsChargeDeleteModalOpen,
    isChargeEditModalOpen,
    setIsChargeEditModalOpen,
    chargeDetails,
    setChargeDetails,
    isUserModalOpen,
    setIsUserModalOpen,
    isSignUpClientModalOpen,
    setIsSignUpClientModalOpen,
    isEditClientModalOpen,
    setIsEditClientModalOpen,
    isChargeModalOpen,
    setIsChargeModalOpen,
  ])
  return (
    <ModalContext.Provider value={values}>
      {children}
    </ModalContext.Provider>
  )
}
