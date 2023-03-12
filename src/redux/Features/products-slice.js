import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchproducts} from "../../../src/Api/Servises/products"
import { postProducts } from "../../../src/Api/Servises/products";

export const getProduct = createAsyncThunk("products/fetchList", async () => {
    const response = await fetchproducts();
    return response.data;
  });

  export const postProduct = createAsyncThunk("products/addProduct", async (newProduct) => {
  const response = await postProducts ();
  return response.data;
});
 
const productsSlice = createSlice({
  name: "products",
  initialState:{
    data:[],
    status:'idle',
    openModalAdd :false,
},
reducers:{
  addProduct:(state) => {
    state.openModalAdd = true

  },
},
  extraReducers:{
    [getProduct.pending]:(state)=>{
        state.status = 'pending';
    },
    [getProduct.rejected]:(state)=>{
        state.status = 'rejected';
        
    },
    [getProduct.fulfilled]:(state, action)=>{
        state.status = 'success';
        state.data = action.payload
    }
}
   
  
    });

    export default productsSlice.reducer;
    export const{addProduct}=productsSlice.actions;
// export const fetchProducts = createAsyncThunk("products/fetchProducts", async (info) => {
//   const {page,limit} = info
//   const response = await axios.get(`${BASE_URL}/products?_page=${page}&_limit=${limit}`);
//   console.log(response.data)
//   return response.data;
// });
// export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
//   const response = await axios.get(`${BASE_URL}/products`);
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


// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // fetch
//     builder.addCase(fetchProducts.pending, (state) => {
//       return { ...state, loading: true };
//     });
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       return { ...state, loading: false, products: action.payload };
//     });
//     builder.addCase(fetchProducts.rejected, (state, action) => {
//       return { ...state, loading: false, error: action.payload };
//     });
//     // fetch all products
//     builder.addCase(fetchAllProducts.pending, (state) => {
//       return { ...state, loading: true };
//     });
//     builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
//       return { ...state, loading: false, totalItems: action.payload.length };
//     });
//     builder.addCase(fetchAllProducts.rejected, (state, action) => {
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


