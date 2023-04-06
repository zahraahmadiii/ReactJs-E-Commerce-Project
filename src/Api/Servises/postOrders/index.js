import { instance } from "../../Constants/index";
export const  postOrders = (newOrder) => instance.post('/orders ', newOrder)
