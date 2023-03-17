import styles from "./style.module.css"
import React from 'react'
import Button from "../button";
import {useDispatch} from 'react-redux'
import {closeDeleteModal} from '../../redux/Features/products-slice.js';
const DeleteProductModal=()=>{

  const dispatch=useDispatch()
  const handleCloseDeleteProduct=()=>{
    console.log("is click")
    dispatch(closeDeleteModal())
  }

  return (
    <>
    <div className={styles.wraper_modal}>
    <div className={styles.modal}>
     <p>آیا از حذف مطمئن هستید؟</p>
     <div className={styles.btns}>
     <Button btnColor={" red"}>{"بله"}</Button>
     <Button btnColor={" rgb(7 68 199)"} onClick={()=>handleCloseDeleteProduct()} >{"خیر"}</Button>
     </div>
     
    </div>
    </div>
    
    </>
  )
}

export default DeleteProductModal;
