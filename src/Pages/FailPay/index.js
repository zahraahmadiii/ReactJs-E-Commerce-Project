import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
 const FailPay = () => {
  return (
    <>
      <Header/>
      <div className={styles.fail}>
    
      <h2>FailPay</h2>
    </div>
    </>
  
  )
}
export default FailPay;