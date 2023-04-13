import axios from "axios"

export const fetchOrders=(deliveryState)=> axios.get(`http://localhost:3002/orders?delivered=${deliveryState}`)