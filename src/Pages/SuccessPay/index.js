import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
import styles from "./style.module.css"
 const SuccessPay = () => {
  return (
    <>
      <Header/>
      <div  className={styles.success}>
      {/* <Link to="/LoginPanel">مدیریت</Link> */}
      <img src="/img/success.png" className={styles.image}/>
      <h6>با تشکر از پرداخت شما,سفارش شما ثبت شده و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد.</h6>
      </div>
    
      </>
    
   
  )
}
export default SuccessPay

