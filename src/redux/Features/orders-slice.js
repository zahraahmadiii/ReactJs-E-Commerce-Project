// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { BASE_URL } from "../../config/constants";
// const initialState = {
//   orders: [],
//   error: "",
//   loading: false,
// };

// export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
//   const response = await axios.get(`${BASE_URL}/orders`);
//   return response.data;
// });

// export const addTodo = createAsyncThunk("todos/addTodo", async (newTodo) => {
//   const response = await axios.post(`${BASE_URL}/todos`, newTodo);
//   return response.data;
// });
// export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
//   const response = await axios.delete(`${BASE_URL}/todos/${id}`);
//   return response.data;
// });
// export const updateTodo = createAsyncThunk("todos/updateTodo", async (editedTodo) => {
//   const response = await axios.put(`${BASE_URL}/todos/${editedTodo.id}`,editedTodo);
//   console.log(response.data)
//   return response.data;
// });
// const ordersSlice = createSlice({
//   name: "orders",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // fetch
//     builder.addCase(fetchOrders.pending, (state) => {
//       return { ...state, loading: true };
//     });
//     builder.addCase(fetchOrders.fulfilled, (state, action) => {
//       return { ...state, loading: false, orders: action.payload };
//     });
//     builder.addCase(fetchOrders.rejected, (state, action) => {
//       return { ...state, loading: false, error: action.payload };
//     });
    // add
    // builder.addCase(addTodo.pending, (state) => {
    //   return { ...state, loading: true };
    // });
    // builder.addCase(addTodo.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     loading: false,
    //     todos: [...state.todos, action.payload],
    //   };
    // });
    // builder.addCase(addTodo.rejected,(state,action)=>{return{...state,loading:false,error: action.payload}})
    // delete
    // builder.addCase(deleteTodo.pending, (state,action) => {
    //     console.log(action)
    //     return { ...state, loading: true };
    //   });
    //   builder.addCase(deleteTodo.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       loading: false,
    //       todos:  state.todos.filter(todo=>todo.id !== action.payload.id),
    //     };
    //   });
    //   builder.addCase(deleteTodo.rejected,(state,action)=>{return{...state,loading:false,error: action.payload}})
    // update
    // builder.addCase(updateTodo.pending, (state,action) => {
    //     console.log(action)
    //     return { ...state, loading: true };
    //   });
    //   builder.addCase(updateTodo.fulfilled, (state, action) => {

    //     return {
    //       ...state,
    //       loading: false,
    //     //   todos:  ,
    //     };

    //   });
    //   builder.addCase(updateTodo.rejected,(state,action)=>{return{...state,loading:false,error: action.payload}})

// export default ordersSlice.reducer;
