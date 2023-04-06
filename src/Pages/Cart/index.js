import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Button from "../../Components/button"
import Header from '../../Layouts/header';
import CartTable from "../../Components/CartTable"
import { useSelector } from 'react-redux';
 const Cart = () => {

   const orders = useSelector(store => store.ordersSlice);
   const[totalprice,setToatalPrice]=useState(0)
 
  useEffect(()=>{
    let  setTotalCount=0
    orders.orderProduct.map((item)=> setTotalCount+=item.count*item.price)
    setToatalPrice(setTotalCount)
  },[orders.orderProduct])
 
  return (
    <>
      <Header/>
    <div className={styles.cart}>
      <CartTable orders={orders.orderProduct}/>
      <p>جمع: {totalprice}</p>
      <Link to="/Cart/CheckOut"><Button btnColor={" rgb(7 68 199)"}>{"نهایی کردن سبد "}</Button></Link>
    </div>
    </>
  )
}
export default Cart;
