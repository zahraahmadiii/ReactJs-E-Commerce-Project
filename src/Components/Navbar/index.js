import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
 const Navbar = () => {
  return (
    <div className={styles.links}>
       <Link to="/">خانه</Link>
       <Link to="/AdminLogin">مدیریت</Link>
       <Link to="/Cart">سبدخرید</Link>
    </div>
  )
}
export default Navbar
