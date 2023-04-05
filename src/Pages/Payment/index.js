import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Button from '../../Components/button';

const Payment = () => {
  return (
    <div>
      <Link to="/Cart/CheckOut/Payment/SuccessPay"><Button btnColor={" rgb(7 68 199)"}>{"پرداخت"}</Button></Link>
      <Link to="/Cart/CheckOut/Payment/FailPay"><Button btnColor={" red"} >{"انصراف"}</Button></Link>
      
    </div>
  )
}
export default Payment;
