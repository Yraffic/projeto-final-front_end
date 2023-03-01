import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { ReactComponent as Edit } from "../../assets/edit.svg"
import { ReactComponent as Lixeira } from "../../assets/lixeira.svg"
import {
  StyledTableCell,
  StyledTableRow,
  TableContainer,
} from "../Table/style"
import style from "./style.module.css"
import { Text } from "../Text"
import { Button } from "../Button"
import { useModal } from "../../hooks/useModal"
import { useQuery } from "@tanstack/react-query"
import { getCharges, getChargesByClientId } from "../../services/requests"
import { transformToReal } from "../../utils/currency"
import { transformToBrDate } from "../../utils/date"
import { useParams } from "react-router-dom"
import {
  getStatusColor,
  getStatusBackgroundColor,
} from "../../utils/statusColor"

export function ChargeTable() {
  const {
    chargeModal: { toggle, setChargeDetails },
    chargeEditModal: { toggle: toggleEdit },
    chargeDeleteModal: { toggle: toggleDelete },
    chargeDetailModal: { toggle: toggleDetail },
  } = useModal()
  const { id } = useParams()
  const { isSuccess: isChargesSuccess, data: charges } = useQuery(
    ["charges"],
    getCharges,
    {
      enabled: !Boolean(id),
    }
  )
  const { isSuccess: isSuccessChargesById, data: dataChargesById } =
    useQuery(["charges", id], getChargesByClientId, {
      enabled: !!id,
    })

  function handleOpenEdit(charge) {
    setChargeDetails(charge)
    toggleEdit()
  }

  function handleOpenDelete(charge) {
    setChargeDetails(charge)
    toggleDelete()
  }

  function handleOpenDetail(charge) {
    setChargeDetails(charge)
    toggleDetail()
  }

  return (
    <TableContainer>
      {id && (
        <div className={style["custom-header"]}>
          <Text
            type="title"
            as="h2"
            size="medium"
            color="grey-700"
            weight="bold"
          >
            Cobranças do Cliente
          </Text>
          <Button onClick={toggle}>+ Nova Cobrança</Button>
        </div>
      )}
      <Table>
        <TableHead>
          <TableRow>
            {!id ? (
              <>
                <StyledTableCell align="left">Cliente</StyledTableCell>
                <StyledTableCell align="left">ID cob.</StyledTableCell>
                <StyledTableCell align="left">Valor</StyledTableCell>
                <StyledTableCell align="left">
                  Data de venc.
                </StyledTableCell>
              </>
            ) : (
              <>
                <StyledTableCell align="left">ID cob.</StyledTableCell>
                <StyledTableCell align="left">
                  Data de venc.
                </StyledTableCell>
                <StyledTableCell align="left">Valor</StyledTableCell>
              </>
            )}

            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Descrição</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {id
            ? isSuccessChargesById &&
              dataChargesById.data.map((charge) => (
                <StyledTableRow
                  key={charge.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleOpenDetail(charge)
                  }}
                >
                  <StyledTableCell component="th" scope="row">
                    {charge.id}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {transformToBrDate(charge.vencimento)}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {transformToReal(charge.valor)}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Paper
                      sx={{
                        color: `${getStatusColor(charge.status)}`,
                        fontWeight: "600",
                        backgroundColor: `${getStatusBackgroundColor(
                          charge.status
                        )}`,
                        textAlign: "center",
                        width: "100px",
                      }}
                    >
                      {charge.status}
                    </Paper>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {charge.descricao}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={style["container"]}>
                      <div
                        className={`${style["icon"]} ${style["icon--grey"]}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleOpenEdit(charge)
                        }}
                      >
                        <Edit />
                        Editar
                      </div>
                      <div
                        className={`${style["icon"]} ${style["icon--red"]}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleOpenDelete(charge)
                        }}
                      >
                        <Lixeira />
                        Excluir
                      </div>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            : isChargesSuccess &&
              charges.data.map((charge) => (
                <StyledTableRow
                  key={charge.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleOpenDetail(charge)
                  }}
                >
                  <StyledTableCell component="th" scope="row">
                    {charge.nome}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {charge.id}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {transformToReal(charge.valor)}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {transformToBrDate(charge.vencimento)}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Paper
                      sx={{
                        color: `${getStatusColor(charge.status)}`,
                        fontWeight: "600",
                        backgroundColor: `${getStatusBackgroundColor(
                          charge.status
                        )}`,
                        textAlign: "center",
                        width: "100px",
                      }}
                    >
                      {charge.status}
                    </Paper>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {charge.descricao}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={style["container"]}>
                      <div
                        className={`${style["icon"]} ${style["icon--grey"]}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleOpenEdit(charge)
                        }}
                      >
                        <Edit />
                        Editar
                      </div>
                      <div
                        className={`${style["icon"]} ${style["icon--red"]}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleOpenDelete(charge)
                        }}
                      >
                        <Lixeira />
                        Excluir
                      </div>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
