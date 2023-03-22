import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchOrders} from "../../../src/Api/Servises/orders"


export const getOrder = createAsyncThunk("orders/fetchList", async (action) => {
  console.log(action)
    const response = await fetchOrders(action.delivery);
    return response.data;
  });
 
const ordersSlice = createSlice({
  name: "orders",
  initialState:{
    data:[],
    status:'idle',
    delivery:false,
    openModal:false,
},
reducers:{
setDelivery:(state,action)=>{
  state.delivery=action.payload.delivery
},
openOrdersModal:(state,action)=>{
 state.openModal=true;
},
closeOrdersModal:(state,action)=>{
  state.openModal=false;
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
    }
}
   
  
    });

    export default ordersSlice.reducer;
export const{setDelivery,openOrdersModal,closeOrdersModal}=ordersSlice.actions;
