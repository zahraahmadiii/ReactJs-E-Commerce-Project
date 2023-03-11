import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
import QuantityTable from "../../Components/QuantityTable/index.js"
import React, { useEffect } from 'react'
import styles from "./style.module.css"
import Button from "../../Components/button"
import {useDispatch, useSelector} from 'react-redux'
import { getProduct } from '../../redux/Features/products-slice.js';
const Quantity = () => {

  
  const {products} = useSelector(store => store);
  console.log(products)

   const dispatch=useDispatch()

   useEffect(()=>{
    dispatch(getProduct())
   },[dispatch])

  return (
    <>
    <AdminHeader/>
    <div className={styles.main}>
    
     <div >
      <QuantityTable item={products.data}/>
     </div>
     <div className={styles.add}>
    <Button btnColor={" rgb(7 68 199)"}>{"ذخیره"}</Button>
    </div>
    </div>

    </>
   
  )
}
export default Quantity;
