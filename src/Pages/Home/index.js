import React from 'react'
import styles from "./style.module.css"
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom';
 const Home = () => {
  return (
    <>
     <Navbar/> 
     <div className={styles.products}>
       <Link to="/Mobile">گوشی موبایل</Link>
       <Link to="/Tablet">تبلت</Link>
       <Link to="/Laptop">لپ تاپ</Link>
       <Link to="/AirPod">ایرپاد</Link>
     </div>
      
       <h2>Home page</h2>
    </>
  )
}
export default Home;
