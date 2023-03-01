import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../Components/button';
import Navbar from '../../Components/Navbar';
const RegisterCustomer = () => {
  return (
    <div>
       <Navbar/>
      <Link to="/Cart/RegisterCustomer/Payment"><Button >{"پرداخت"}</Button></Link>
      <h2>نهایی کردن خرید</h2>
    </div>
  )
}
export default RegisterCustomer;