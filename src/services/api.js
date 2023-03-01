import axios from "axios"

export const api = axios.create({
  baseURL: "https://back-integral-m05-t08-production-f529.up.railway.app",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})
