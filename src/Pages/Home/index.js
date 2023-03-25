import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
import ControlledCarousel from '../../Components/Carousel';
import ProductSwiper from '../../Components/productSwiper-one'
import MobileSwiper from '../../Components/productSwiper-two';


 const Home = () => {
  return (
    <>
      <Header/>
      <div className={styles.ProductSwiper}>
      <ProductSwiper/>
      <div className={styles.wraperProducts}>
      <MobileSwiper/>
      <div>
        fffffffffff
      </div>
      </div>
     
      </div>
   
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
