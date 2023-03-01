import style from "./style.module.css"
import { useParams } from "react-router-dom"
import { getClient } from "../../services/requests"
import { ClientInfo } from "./componets/ClientInfo"
import { ModalClient } from "../../components/Modals/ModalClient"
import { useModal } from "../../hooks/useModal"
import { useQuery } from "@tanstack/react-query"
import { ChargeTable } from "../../components/ChargeTable"
import { useEffect } from "react"

export function DetailClientPage() {
  const { id } = useParams()
  const {
    clientEditModal: { open },
    chargeModal: { setChargeDetails },
  } = useModal()
  const { data, isSuccess } = useQuery(["client", id], getClient)

  useEffect(() => {
    if (!isSuccess) return

    setChargeDetails({
      id: data.data.id,
      nome: data.data.nome,
    })
  }, [isSuccess, data, setChargeDetails])

  return (
    <>
      <div className={style["conteiner_detail"]}>
        {isSuccess && <ClientInfo client={data.data} />}
        <ChargeTable />
      </div>
      {open && <ModalClient type="edit" />}
    </>
  )
}
