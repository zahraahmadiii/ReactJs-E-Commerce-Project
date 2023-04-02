import { instance } from "../../Constants/index";
export const  getCategoris= (category) => instance.get(`/products/${category}`)