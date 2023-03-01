import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../Components/button';

const Payment = () => {
  return (
    <div>
      <Link to="/Cart/RegisterCustomer/Payment/SuccessPay"><Button>{"پرداخت"}</Button></Link>
      <Link to="/Cart/RegisterCustomer/Payment/FailPay"><Button>{"انصراف"}</Button></Link>
      
    </div>
  )
}
export default Payment;
