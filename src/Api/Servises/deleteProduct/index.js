import { instance } from "../../Constants/index";
export const  deleteProducts = (id) => instance.delete(`/products/${id}`)
