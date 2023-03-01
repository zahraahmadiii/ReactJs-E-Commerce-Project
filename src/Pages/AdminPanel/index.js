import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Button from '../../Components/button';
 const AdminPanel = () => {
  return (
    <nav className={styles.nav}>
       <Link to="/AdminLogin/AdminPanel/ProductPanel">کالاها</Link>
       <Link to="/AdminLogin/AdminPanel/InventoryPrice">موجودی و قیمت </  Link>
       <Link to="/AdminLogin/AdminPanel/OrdersPanel">سفارش ها</Link>
       <Link to="/">بازگشت</Link>
       <h2>پنل مدیریت فروشگاه</h2>
    </nav>
  )
}

export default AdminPanel;
