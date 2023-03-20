import {instance} from "../../Constants/index";
export const  updateQuantities = (newQuantity) => instance.patch(`/products/${newQuantity.id}`,newQuantity)