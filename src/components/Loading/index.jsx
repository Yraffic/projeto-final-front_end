import { Backdrop, CircularProgress } from "@mui/material"

export function Loading() {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: 10000 }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
