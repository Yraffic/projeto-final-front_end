import {
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
  TableContainer as TableWrapper,
} from "@mui/material"

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#3F3F55",
    fontSize: "1rem",
    fontWeight: "700",
    fontFamily: "Munito, sans-serif",
    width: "187px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "0.88rem",
    fontFamily: "Munito, sans-serif",
    color: "#747488",
  },
}))
export const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

export const TableContainer = styled(TableWrapper)(() => ({
  background: "white",
  borderRadius: "30px",
  padding: "0.75rem 1.45rem",
  width: "100%",
  height: "100%",
  overflow: "auto",
}))
