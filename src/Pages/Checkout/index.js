import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Button from '../../Components/button';
import Header from '../../Layouts/header';
const CheckOut = () => {
  return (
    <>
     <Header/>
     <div className={styles.register}>
      <Link to="/Cart/CheckOut/Payment"><Button >{"پرداخت"}</Button></Link>
      <h2>نهایی کردن خرید</h2>
    </div>
    </>
   
  )
}
export default CheckOut;