import { instance } from "../../Constants/index"
export const fetchCustomerData=(id)=> instance.get(`/orders/${id}`)