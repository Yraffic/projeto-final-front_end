import * as React from "react"
import TableBody from "@mui/material/TableBody"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { ReactComponent as Cobranca } from "../../../../assets/cobrancaTable.svg"
import style from "./style.module.css"
import { useModal } from "../../../../hooks/useModal"
import { getClients } from "../../../../services/requests"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { TableContainer } from "../../../../components/Table/style"
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../../components/Table/style"
import { Table } from "@mui/material"

function getStatusColor(status) {
  switch (status) {
    case "Inadimplente":
      return "#971D1D"
    case "Em dia":
      return "#1FA7AF"
    default:
      return "#1FA7AF"
  }
}

function getBackgroundStatusColor(status) {
  switch (status) {
    case "Inadimplente":
      return "#FFEFEF;"
    case "Em dia":
      return "#EEF6F6"
    default:
      return "#EEF6F6"
  }
}

export function ClientTable() {
  const {
    chargeModal: { toggle: toggleCharge, setChargeDetails },
  } = useModal()
  const { isSuccess, data } = useQuery(["clients"], getClients)
  const navigate = useNavigate()

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Cliente</StyledTableCell>
            <StyledTableCell align="left">CPF</StyledTableCell>
            <StyledTableCell align="left">E-mail</StyledTableCell>
            <StyledTableCell align="left">Telefone</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Criar Cobrança</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isSuccess &&
            data.data.map((client) => (
              <StyledTableRow key={client.id}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  onClick={() => navigate(`/clients/${client.id}`)}
                  sx={{ cursor: "pointer" }}
                >
                  {client.nome}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {client.cpf}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {client.email}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {client.telefone}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Paper
                    sx={{
                      color: `${getStatusColor(client.status)}`,
                      fontWeight: "600",
                      backgroundColor: `${getBackgroundStatusColor(
                        client.status
                      )}`,
                      textAlign: "center",
                      width: "100px",
                    }}
                  >
                    {client.status}
                  </Paper>
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  onClick={() => {
                    setChargeDetails({
                      id: client.id,
                      nome: client.nome,
                    })
                    toggleCharge()
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <div className={style["container"]}>
                    <div className={style["center"]}>
                      <Cobranca />
                      Cobrança
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
