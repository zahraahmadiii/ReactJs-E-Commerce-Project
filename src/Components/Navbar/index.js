import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
import {BsFillCartFill} from "react-icons/bs"
import {FaUserAlt} from "react-icons/fa"
import {ImHome} from "react-icons/im"
 const Navbar = () => {
  return (
    <div className={styles.links}>
      <div className={styles.row1}>
      <ImHome className={styles.Icon}/>
      <Link to="/" className={styles.link}>خانه</Link>
    
      </div>
      <div className={styles.row2}>
      <FaUserAlt className={styles.Icon}/>
      <Link to="/LoginPanel" className={styles.link}>مدیریت</Link>
    
      </div>
      <div className={styles.row3}>
        <div className={styles.qty}>0</div>
      <BsFillCartFill className={styles.Icon}/>
       <Link to="/Cart" className={styles.link}>سبدخرید</Link>
      </div>
      
     
    </div>
  )
}
export default Navbar
