import styles from "./style.module.css"
import React from 'react'
import Button from "../button";

 const DeleteProductModal = () => {
  return (
    <>
    <div className={styles.wraper_modal}>
    <div className={styles.modal}>
     <p>آیا از حذف مطمئن هستید؟</p>
     <div className={styles.btns}>
     <Button btnColor={" red"}>{"بله"}</Button>
     <Button btnColor={" rgb(7 68 199)"}>{"خیر"}</Button>
     </div>
     
    </div>
    </div>
    
    </>
  )
}

export default DeleteProductModal;
