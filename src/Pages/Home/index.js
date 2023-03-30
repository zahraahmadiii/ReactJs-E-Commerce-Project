import React,{ useEffect }  from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
import ControlledCarousel from '../../Components/Carousel';
// import ProductSwiper from '../../Components/ProductSwiper'
import MobileSwiper from '../../Components/productSwiper-two'
import TabletSwiper from '../../Components/productSwiper-three'
import AirpodSwiper from '../../Components/productSwiper-one'
import Category from  '../../Components/Category'
import Footer from '../../Layouts/Footer'
 const Home = () => {
  return (
    <>
    <div className={styles.homePage}>
      <Header/>
      <div className={styles.ProductSwiper}>
      {/* <ProductSwiper/> */}
      <div className={styles.wraperProducts}>
      <MobileSwiper/>
      <div className={styles.wraperProduct}>
        <TabletSwiper/>
        <AirpodSwiper/>
      </div>
      </div>
     
      </div>
   
      <ControlledCarousel/>
  
       <Link to="/Products"  className={styles.products}>موبایل</Link>
       <div>
        <Category str="موبایل"/>
       </div>
       <Link to="/Products"  className={styles.products}>تبلت</Link>
       <div >
        <Category str="تبلت"/>
       </div>
       <Link to="/Products"  className={styles.products}>لپ تاپ</Link>
       <div>
        <Category str="لپ تاپ"/>
       </div>
       <Link to="/Products"  className={styles.products}>ایرپاد</Link>
       <div >
        <Category str="ایرپاد"/>
       </div>
    

  
      <Footer/>
     </div>
    </>
  )
}
export default Home;
