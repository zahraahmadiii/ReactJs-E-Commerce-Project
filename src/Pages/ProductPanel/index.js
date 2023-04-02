import React, { useEffect } from 'react'
import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
import styles from "./style.module.css"
import Button from "../../Components/button"
import ProductTable from '../../Components/ProductTable/index.js';
import {useDispatch, useSelector} from 'react-redux'
import { addProduct, getProduct, postProduct } from '../../redux/Features/products-slice.js';
import ProductModal from '../../Components/product-modal/index.js';
import DeleteProductModal from '../../Components/DeleteProduct-modal/index.js';
import { ToastContainer } from 'react-toastify';
 const ProductPanel = () => {
  const {products} = useSelector(store => store);
  // console.log(products)
   const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(getProduct())
    },[dispatch])

  const handelAddProduct=()=>{
   dispatch(addProduct())
 }
   
  return (
    <>
    <AdminHeader/>
    <ToastContainer/>
    <div className={styles.main}>
    <Button btnColor={" rgb(7 68 199)"} onClick={()=>handelAddProduct()}>{"افزودن کالا"}</ Button>
    <ProductTable item={products.data}/>
    </div>
    {products.openModalAdd && ( <ProductModal/>)}
    {products.openModalEdit && (<ProductModal/>)}
    {products.openModalDelete && (<DeleteProductModal/>)}
    </>
    
  )
}
export default ProductPanel;