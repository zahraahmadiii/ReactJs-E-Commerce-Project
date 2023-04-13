import { instance } from "../../Constants/index";
export const  postProducts = (newProduct) => instance.post('/products', newProduct)
export const  uploadImage= (data) => instance.post('/upload', data)