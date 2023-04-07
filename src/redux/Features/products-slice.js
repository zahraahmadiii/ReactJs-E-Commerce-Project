import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchproducts} from "../../../src/Api/Servises/getProducts"
import { postProducts } from "../../../src/Api/Servises/postProduct";
import { deleteProducts } from "../../Api/Servises/deleteProduct";
import { getDetails } from "../../Api/Servises/getProductDetail";
import { updatePrices } from "../../Api/Servises/updatePrice";
import {updateProducts} from "../../Api/Servises/updateProduct"
import { updateQuantities } from "../../Api/Servises/updateQuantity";
import { getCategoris } from "../../Api/Servises/getProductsCategories";

export const getProduct = createAsyncThunk("products/fetchList", async () => {
    const response = await fetchproducts();
    return response.data;
  });

  export const postProduct = createAsyncThunk("products/addProduct", async (newProduct) => {
      const response = await postProducts(); 
      return response.data; 
});

export const deleteProduct = createAsyncThunk("products/deleteproduct", async (id) => {
    console.log(id)
  const response = await deleteProducts(id);
  return response.data;
});

export const updateProduct= createAsyncThunk("products/updateproduct", async(editedProduct) => {
  const response = await updateProducts(editedProduct);
  return response.data;
});

export const updatePrice= createAsyncThunk("products/updateprice", async(newPrice) => {
  console.log(newPrice)
  const response = await updatePrices(newPrice);
  return response.data;
});

export const updateQuantity= createAsyncThunk("products/updateprice", async(newQuantity) => {
  console.log(newQuantity)
  const response = await updateQuantities(newQuantity);
  return response.data;
});

export const getProductDetail = createAsyncThunk("products/productDetail", async (id) => {
  console.log(id)
const response = await getDetails(id);
return response.data;
});

export const getProductCategory = createAsyncThunk("products/productCategory", async (category) => {
const response = await getCategoris(category);
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
    openModalEdit:false,
    price:[],
    quantity:[],
    editedProduct:{},
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
  OpenEditModal:(state,action) => {
    state.openModalEdit = true
    state.editedProduct=action.payload
    state.productId=action.payload
  },
  closeEditModal:(state,action) => {
    state.openModalEdit = false
    state.editedProduct=action.payload
  },
  editPrice:(state,action) =>{
    state.productId=action.payload
  },
  getNewPrice:(state,action)=>{
    state.price=[...state.price,action.payload]
    console.log(action.payload)
  },
  editQuantity:(state,action) =>{
    state.productId=action.payload
  },
  getNewQuantity:(state,action)=>{
    state.quantity=[...state.quantity,action.payload]
    console.log(action.payload)
  },
  showProductDetail:(state,action)=>{
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
    export const{addProduct,closeModal, OpenDeleteModal,closeDeleteModal,deleteProductItem, OpenEditModal,closeEditModal,editPrice,getNewPrice,editQuantity,getNewQuantity,showProductDetail}=productsSlice.actions;



