import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchOrders} from "../../../src/Api/Servises/orders"
import { fetchCustomerData } from "../../Api/Servises/getCustomersOrder";


export const getOrder = createAsyncThunk("orders/fetchList", async (action) => {
  // console.log(action)
    const response = await fetchOrders(action.delivery);
    return response.data;
  });

  export const getCustomerData = createAsyncThunk("CustomerOrders/fetchList", async (id) => {
      const response = await fetchCustomerData(id);
      // console.log(response)
      return response.data;
    });

const ordersSlice = createSlice({
  name:"orders",
  initialState:{
    data:[],
    status:'idle',
    delivery:false,
    openModal:false,
    orderId:0,
    orderProduct:[],  
},
reducers:{
setDelivery:(state,action)=>{
  state.delivery=action.payload.delivery
},
openOrdersModal:(state,action)=>{
 state.openModal=true;
 state.orderId=action.payload
},
closeOrdersModal:(state,action)=>{
  state.openModal=false;
 },
 addToCart:(state,action)=>{
  state.orderProduct=action.payload
  console.log(state.orderProduct)

  
  // let localBasket = JSON.parse(localStorage.getItem('basket'))

  // const index = state.orderProduct.findIndex(item => item.id === action.payload.id)

  // if (index >= 0) {
  //     state.orderProduct[index] = {
  //         ...state.orderProduct[index],
  //         Qty: state.orderProduct[index].Qty + 1
  //     }
  // } else {
  //     const newCartItem = { ...action.payload, Qty: 1 }
  //     state.orderProduct.push(newCartItem)
  // }
  // state.cartTotalQuantity++
  // state.cartTotalPrice = (Number(state.cartTotalPrice) + Number(action.payload.price)).toFixed(2)

 }
},
  extraReducers:{
    [getOrder.pending]:(state)=>{
        state.status = 'pending';
    },
    [getOrder.rejected]:(state)=>{
        state.status = 'rejected';   
    },
    [getOrder.fulfilled]:(state, action)=>{
        state.status = 'success';
        state.data = action.payload
    },
}
   
  
    });

    export default ordersSlice.reducer;
export const{setDelivery,openOrdersModal,closeOrdersModal,addToCart}=ordersSlice.actions;
