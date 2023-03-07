import React from 'react'
import styles from "./style.module.css"
import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
 const AdminPanel = () => {

  return (
    <>
       <AdminHeader/>
    
       <div className={styles.filter}>
       <input  type="radio" className={styles.check}/>
       <label className={styles.label}> سفارش های در انتظار ارسال </label>
       <input  type="radio" className={styles.check}/>
       <label className={styles.label}> سفارش های تحویل شده</label>
       </div>


     

    
    </>

  )
}

export default AdminPanel;
