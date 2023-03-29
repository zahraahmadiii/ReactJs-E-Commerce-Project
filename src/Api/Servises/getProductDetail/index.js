import { instance } from "../../Constants/index";
export const  getDetails= (id) => instance.get(`/products/${id}`)