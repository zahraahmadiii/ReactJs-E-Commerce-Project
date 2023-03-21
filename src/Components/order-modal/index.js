import React from 'react'
import styles from "./style.module.css"
import {IoMdCloseCircle} from "react-icons/io"
const OrderModal = () => {
  return (
   <>
   <div className={styles.wrapper_orderModal}>
    <div className={styles.modal} >
      <div className={styles.top}>
        <p className={styles.para}>سفارشات مشتری</p>
        <IoMdCloseCircle className={styles.close}/>
       </div>
       <div className={styles.middle}>
        <label>نام مشتری :</label>
        <p> زهرااحمدی</p>
        <label>آدرس:</label>
        <p>fff</p>
        <label>تلفن:</label>
        <p>ffff</p>
        <label>زمان تحویل:</label>
        <p>ffff</p>
        <label>زمان سفارش:</label>
        <p>fffffff</p>
       </div>
    </div>
   </div>
   </>
  )
}
export default OrderModal;
