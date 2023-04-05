import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
 const FailPay = () => {
  return (
    <>
      <Header/>
      <div className={styles.fail}>
      <img src="/img/Fail.png" className={styles.image}/>
      <h6>پرداخت موفقیت آمیز نبود ,سفارش شما در انتظار پرداخت است</h6>
    </div>
    </>
  
  )
}
export default FailPay;