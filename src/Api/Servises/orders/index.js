import axios from "axios"
export const fetchOrders=()=> axios.get("http://localhost:3002/orders?")