import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Button from "../../Components/button"
import Header from '../../Layouts/header';
import CartTable from "../../Components/CartTable"
import { useSelector } from 'react-redux';
 const Cart = () => {
   const orders = useSelector(store => store.ordersSlice);
    // console.log(orders.orderProduct)
 
  return (
    <>
      <Header/>
   
    <div className={styles.cart}>
      <CartTable orders={orders.orderProduct}/>

      <Link to="/Cart/CheckOut"><Button btnColor={" rgb(7 68 199)"}>{"نهایی کردن سبد "}</Button></Link>
    </div>
    </>
  )
}
export default Cart;
