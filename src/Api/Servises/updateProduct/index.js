import { instance } from "../../Constants/index";
export const  updateProducts = (editedProduct) => instance.patch(`/products/${editedProduct.id}`, editedProduct)
