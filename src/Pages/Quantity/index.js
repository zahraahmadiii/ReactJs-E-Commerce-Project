import React from 'react'
import styles from "./style.module.css"
import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
import QuantityTable from "../../Components/QuantityTable/index.js"
const Quantity = () => {
  return (
    <>
    <AdminHeader/>
     <div >
      <QuantityTable/>
     </div>
    </>
   
  )
}
export default Quantity;
