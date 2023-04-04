import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Button from "../../Components/button"
import Header from '../../Layouts/header';
import CartTable from "../../Components/CartTable"
 const Cart = () => {
  return (
    <>
      <Header/>
   
    <div className={styles.cart}>
    
       
      {/* <CartTable/> */}

      <Link to="/Cart/CheckOut"><Button>{"نهایی کردن سبد خرید"}</Button></Link>
      <h2>Cart</h2>
    </div>
    </>
  )
}
export default Cart;
