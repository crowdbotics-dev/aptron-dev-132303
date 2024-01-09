import axios from "axios"
const mobileApp = axios.create({
  baseURL: "https://mobileapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
