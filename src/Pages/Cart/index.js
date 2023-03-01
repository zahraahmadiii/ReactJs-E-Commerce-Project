import React from 'react'
import { Link } from 'react-router-dom';
import Button from "../../Components/button"
import Navbar from '../../Components/Navbar';

 const Cart = () => {
  return (
    <div>
      <Navbar/>
      <Link to="/Cart/RegisterCustomer"><Button>{"نهایی کردن سبد خرید"}</Button></Link>
      <h2>Cart</h2>
    </div>
  )
}
export default Cart;
