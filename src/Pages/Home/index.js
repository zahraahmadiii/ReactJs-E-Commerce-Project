import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
 const Home = () => {
  return (
    <>
      <Header/>
    <div className={styles.sliderWraper}>

    </div>
     <div className={styles.products}>
       <Link to="/Products">گوشی موبایل</Link>
       <Link to="/Products">تبلت</Link>
       <Link to="/Products">لپ تاپ</Link>
       <Link to="/Products">ایرپاد</Link>
     </div>
 
       <h2>Home page</h2>
    </>
  )
}
export default Home;
