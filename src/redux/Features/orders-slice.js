import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchOrders} from "../../../src/Api/Servises/orders"


export const getOrder = createAsyncThunk("orders/fetchList", async () => {
    const response = await fetchOrders();
    return response.data;
  });
 
const ordersSlice = createSlice({
  name: "orders",
  initialState:{
    data:[],
    status:'idle'
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

