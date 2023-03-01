import { api } from "./api"

export function signUserUp(data) {
  return api.post("/user", data)
}
export function logUserIn(data) {
  return api.post("/login", data)
}
export function updateUser(data) {
  return api.patch("/user", data)
}
export function createClient(data) {
  return api.post("/client", data)
}
export function getClients() {
  return api.get("/clients")
}
export function getClient({ queryKey }) {
  return api.get(`/client/${queryKey[1]}`)
}
export function updateClient({ id, data }) {
  return api.patch(`/client/${id}`, data)
}
export function registerCharge(data) {
  console.log("register")
  return api.post("/charge", data)
}
export function getCharges() {
  return api.get("/charges")
}
export function getChargesByClientId({ queryKey }) {
  return api.get(`/charges/${queryKey[1]}`)
}
export function updateCharge({ id, data }) {
  return api.patch(`/charge/${id}`, data)
}
export function deleteCharge(id) {
  return api.delete(`/charge/${id}`)
}
