import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Button from '../../Components/button';

const Payment = () => {
  return (
    <div>
      <Link to="/Cart/CheckOut/Payment/SuccessPay"><Button>{"پرداخت"}</Button></Link>
      <Link to="/Cart/CheckOut/Payment/FailPay"><Button>{"انصراف"}</Button></Link>
      
    </div>
  )
}
export default Payment;
