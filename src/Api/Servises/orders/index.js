import axios from "axios"

// const delivery = useSelector(store => store.ordersSlice.delivery);

export const fetchOrders=(deliveryState)=> axios.get(`http://localhost:3002/orders?delivered=${deliveryState}`)