import style from "./style.module.css"
import { SideBar } from "./SideBar"
import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { ModalUser } from "../Modals/ModalUser"
import { useModal } from "../../hooks/useModal"
import { ModalCharge } from "../Modals/ModalCharge"
import { ModalDeleteCharge } from "../Modals/ModalDeleteCharge"
import { ModalDetailCharge } from "../Modals/ModalDetailCharge"

export function MainNavigation() {
  const {
    userModal: { open },
    chargeModal: { open: openCharge },
    chargeEditModal: { open: openEditCharge },
    chargeDeleteModal: { open: openDeleteCharge },
    chargeDetailModal: { open: openDetailCharge },
  } = useModal()

  return (
    <>
      <div className={style["conteiner_home"]}>
        <Header />
        <SideBar />
        <main className={style["conteiner__content"]}>
          <Outlet />
        </main>
      </div>
      {open && <ModalUser />}
      {openCharge && <ModalCharge />}
      {openDeleteCharge && <ModalDeleteCharge />}
      {openDetailCharge && <ModalDetailCharge />}
      {openEditCharge && <ModalCharge type="edit" />}
    </>
  )
}
