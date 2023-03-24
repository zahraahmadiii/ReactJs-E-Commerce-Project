import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
import ControlledCarousel from '../../Components/Carousel';

 const Home = () => {
  return (
    <>
      <Header/>
      <ControlledCarousel/>
     <div className={styles.products}>
       <Link to="/Products">گوشی موبایل</Link>
       <Link to="/Products">تبلت</Link>
       <Link to="/Products">لپ تاپ</Link>
       <Link to="/Products">ایرپاد</Link>
     </div>

  
    </>
  )
}
export default Home;
