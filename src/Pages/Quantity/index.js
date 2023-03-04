import React from 'react'
import styles from "./style.module.css"
import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
const Quantity = () => {
  return (
    <>
    <AdminHeader/>
     <div className={styles.inventory}>
      <h1>InventoryPrice</h1>
     </div>
    </>
   
  )
}
export default Quantity;
