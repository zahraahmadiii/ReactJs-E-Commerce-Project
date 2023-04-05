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

  //   const basket =  JSON.parse(localStorage.getItem("basket"));
  // console.log(basket)
 
  return (
    <>
      <Header/>
   
    <div className={styles.cart}>
      <CartTable orders={orders.orderProduct}/>
      <p>جمع:</p>
      <Link to="/Cart/CheckOut"><Button btnColor={" rgb(7 68 199)"}>{"نهایی کردن سبد "}</Button></Link>
    </div>
    </>
  )
}
export default Cart;
