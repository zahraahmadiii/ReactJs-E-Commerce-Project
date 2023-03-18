import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchproducts} from "../../../src/Api/Servises/getProducts"
import { postProducts } from "../../../src/Api/Servises/postProduct";
import { deleteProducts } from "../../Api/Servises/deleteProduct";
import {updateProducts} from "../../Api/Servises/updateProduct"

export const getProduct = createAsyncThunk("products/fetchList", async () => {
    const response = await fetchproducts();
    return response.data;
  });

  export const postProduct = createAsyncThunk("products/addProduct", async (newProduct) => {
      // console.log(newProduct)
      const response = await postProducts(); 
      return response.data; 
});

export const deleteProduct = createAsyncThunk("products/deleteproduct", async (id) => {
    console.log(id)
  const response = await deleteProducts(id);
  return response.data;
});

// export const updateProduct= createAsyncThunk("products/updateproduct", async (editedTodo) => {
//   const response = await updateProducts();
//   return response.data;
// });

const productsSlice = createSlice({
  name: "products",
  initialState:{
    data:[],
    status:'idle',
    openModalAdd :false,
    openModalDelete:false,
    productId:0,
},
reducers:{
  addProduct:(state) => {
    state.openModalAdd = true
  },
  closeModal:(state) => {
    state.openModalAdd = false
  },
 OpenDeleteModal:(state,action) => {
    state.openModalDelete = true
    state.productId=action.payload
  },
  closeDeleteModal:(state,action) => {
    state.openModalDelete = false
    state.productId=action.payload
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
    },

  
  }
});

    export default productsSlice.reducer;
    export const{addProduct,closeModal, OpenDeleteModal,closeDeleteModal,deleteProductItem}=productsSlice.actions;











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


