import React from 'react'
import styles from "./style.module.css"
import {CiSearch} from "react-icons/ci"
import { Link } from 'react-router-dom';
const AdminHeader = () => {
  return (
    <div className={styles.AdminHeader}>
     <div className={styles.right}>
       <h2>پنل مدیریت </h2>
       <div className={styles.search}>
        <CiSearch className={styles.searchIcon}/>
      <input type="search" placeholder='جستجو...'/>
       </div>
     </div>
       
       <nav className={styles.nav}>
       <div className={styles.products}>
       <Link to="/LoginPanel/AdminPanel/ProductPanel" className={styles.link}>کالاها</Link>
       </div>
        <div className={styles.inventory}>
       <Link to="/LoginPanel/AdminPanel/Quantity" className={styles.link}>موجودی و قیمت </  Link>
        </div>
       <div className={styles.orders}>
       <Link to="/LoginPanel/AdminPanel/OrdersPanel" className={styles.link}>سفارش ها</Link>
       </div>
       
       <Link to="/" className={styles.back}>بازگشت</Link>
     
    </nav> 
    
    </div>
  )
}
export default AdminHeader 