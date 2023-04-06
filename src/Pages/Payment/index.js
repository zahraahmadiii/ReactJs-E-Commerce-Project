import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Button from '../../Components/button';
import { postOrders } from '../../Api/Servises/postOrders';
import { useDispatch, useSelector } from 'react-redux';
import { emptyBasket } from '../../redux/Features/orders-slice';

const Payment = () => {
  const orders = useSelector(store => store.ordersSlice);
  const dispatch=useDispatch()
const payOrder=()=>{
  let localCustomer = JSON.parse(localStorage.getItem('customerData'))
  console.log(localCustomer)
  let localBasket = JSON.parse(localStorage.getItem('basket'))
    let prices=localStorage.getItem("totalPrice")
  const newOrder={
    ...localCustomer,products:localBasket,delivered:false,prices:prices
  }
  postOrders(newOrder)
  dispatch(emptyBasket([]))
}

const failOrder=()=>{

}

  return (
    <>
    <div className={styles.pay}>
      <Link to="/Cart/CheckOut/Payment/SuccessPay"><Button onClick={()=>payOrder()} btnColor={" rgb(7 68 199)"}>{"پرداخت"}</Button></Link>
      <Link to="/Cart/CheckOut/Payment/FailPay"><Button onClick={()=>failOrder()} btnColor={" red"} >{"انصراف"}</Button></Link>
      
    </div>
    </>
  )
}
export default Payment;
