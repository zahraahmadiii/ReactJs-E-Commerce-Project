import {instance} from "../../Constants/index";
export const  updatePrices = (newPrice) => instance.patch(`/products/${newPrice.id}`,newPrice)