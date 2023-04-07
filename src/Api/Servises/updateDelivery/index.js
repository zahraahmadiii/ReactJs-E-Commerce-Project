import {instance} from "../../Constants/index";
export const  updateDelivery = (delivered) => instance.patch(`/orders/${delivered.id}`,delivered)