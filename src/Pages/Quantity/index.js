import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
import QuantityTable from "../../Components/QuantityTable/index.js"
import React, { useEffect } from 'react'
import styles from "./style.module.css"
import Button from "../../Components/button"
import {useDispatch, useSelector} from 'react-redux'
import { getProduct } from '../../redux/Features/products-slice.js';
import { updatePrices } from '../../Api/Servises/updatePrice/index.js';
import { ToastContainer ,toast} from 'react-toastify';

const Quantity = () => {

  const {products} = useSelector(store => store);
  
  // get products from db ////////////////////////////////
   const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(getProduct())
   },[dispatch])

///handle edit price and quantity ///////////////////////////
   const handlePriceAndQuantity=()=>{
   try{
    const newPrice={
      id:products.productId,
      price:products.price,
     }
       updatePrices(newPrice)
       dispatch(getProduct())
       console.log(newPrice)
       toast.success('update price successfully');
   }
   catch(error){
    toast.error("update price fail");
   }
   }
  //  ////////////////////////////////////////////////////////
   
  return (
    <>
    <AdminHeader/>
    <ToastContainer/>
    <div className={styles.main}>
    <Button onClick={()=>handlePriceAndQuantity()} btnColor={" rgb(7 68 199)"}>{"ذخیره"}</Button>
   <QuantityTable item={products.data}/>
    </div>
    </>
   
  )
}
export default Quantity;
