import React from 'react'
import styles from "./style.module.css"
import {CiSearch} from "react-icons/ci"
import Navbar from "../../Components/Navbar/index"
const Header= () => {
  return (
    <>
   <header className={styles.header}>
    <div className={styles.left}>
    <img src="/img/logo.jpg"/>
    <div className={styles.search}>
      <CiSearch className={styles.searchIcon}/>
      <input type="search" placeholder='جستجو...'/>
    </div>
    </div>
   <div className={styles.right}>
    <div className={styles.links}>
     <Navbar/> 
    </div>
     
    
  </div>
 
   </header>
   
    </>
  )
}
export default Header;