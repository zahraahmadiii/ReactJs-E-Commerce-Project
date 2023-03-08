import React from 'react'
import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
import styles from "./style.module.css"
import Button from "../../Components/button"

 const ProductPanel = () => {


  return (
    <>
    <AdminHeader/>
    <div className={styles.add}>
    <Button btnColor={" rgb(7 68 199)"}>{"افزودن کالا"}</Button>
    </div>
    <div>
        
    </div>
   
    </>
    
  )
}
export default ProductPanel;