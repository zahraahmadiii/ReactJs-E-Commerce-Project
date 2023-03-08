import React from 'react'
import styles from "./style.module.css"
import ProductTable from '../../Components/ProductTable/index.js';
import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
import Button from '../../Components/button';
 const ProductPanel = () => {


  return (
    <>
    <AdminHeader/>
    <div className={styles.add}>
    <Button btnColor={"rgb(7 68 199)"}>{"افزودن کالا"}</Button>
    </div>
   
    <ProductTable/>
    </>
    
  )
}
export default ProductPanel;