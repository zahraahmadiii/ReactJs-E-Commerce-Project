import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchproducts} from "../../../src/Api/Servises/getProducts"
import { postProducts } from "../../../src/Api/Servises/postProduct";
import { deleteProducts } from "../../Api/Servises/deleteProduct";


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
  const response = await deleteProducts();
  return response.data;
});
 
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
 OpenDeleteModal:(state) => {
    state.openModalDelete = true

  },
  closeDeleteModal:(state) => {
    state.openModalDelete = false

  },
  deleteProductItem:(state,action) =>{
    state.data.filter((item) => 
     item.id !==action.payload
    )
    console.log(action.payload)
  }
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
  //   [deleteProduct.pending]:(state)=>{
  //     state.status = 'pending';
  //   },
  //   [deleteProduct.rejected]:(state)=>{
  //     state.status = 'rejected';
  //   },
  //   [deleteProduct.fulfilled]:(state, action)=>{
  //     state.status = 'success';
  //     state.data=state.data.filter((item) => 
  //     item.id !==action.payload
  //  )
  //  }
   
  
  }
});

    export default productsSlice.reducer;
    export const{addProduct,closeModal, OpenDeleteModal,closeDeleteModal,deleteProductItem}=productsSlice.actions;




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


