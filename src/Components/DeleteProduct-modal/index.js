import styles from "./style.module.css"
import React from 'react'
import Button from "../button";
import {useDispatch} from 'react-redux'
import {closeDeleteModal,deleteProductItem} from '../../redux/Features/products-slice.js';
import { deleteProducts } from "../../Api/Servises/deleteProduct";


const DeleteProductModal=()=>{

  const dispatch=useDispatch()
  const handleCloseDeleteProduct=()=>{
    dispatch(closeDeleteModal())
  }

  const handleDeleteProduct=()=>{
   dispatch(deleteProducts())
  
  }

  return (
    <>
    <div className={styles.wraper_modal}>
    <div className={styles.modal}>
     <p>آیا از حذف مطمئن هستید؟</p>
     <div className={styles.btns}>
     <Button btnColor={" red"} onClick={()=>handleDeleteProduct()}>{"بله"}</Button>
     <Button btnColor={" rgb(7 68 199)"} onClick={()=>handleCloseDeleteProduct()} >{"خیر"}</Button>
     </div>
     
    </div>
    </div>
    
    </>
  )
}

export default DeleteProductModal;
