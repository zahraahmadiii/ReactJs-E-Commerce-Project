import React, { useEffect } from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
import ControlledCarousel from "../../Components/carousel"
import ProductSwiper from '../../Components/productSwiper-one'
import MobileSwiper from '../../Components/productSwiper-two';
import TabletSwiper from '../../Components/productSwiper-three';
import AirpodSwiper from '../../Components/productSwiper-four';
import { getProduct } from '../../redux/Features/products-slice';
import {useDispatch, useSelector} from 'react-redux'
import Footer from "../../Layouts/footer"
import { Category } from '../../Components/Category';


 const Home = () => {
  const {products} = useSelector(store => store);
  console.log(products);
  const dispatch=useDispatch()

  useEffect(()=>{
   dispatch(getProduct())
  },[dispatch])
  // //////////////////////////////////////////////////

  return (
    <>
    <div className={styles.homePage}>
      <Header/>
      <div className={styles.ProductSwiper}>
      <ProductSwiper/>
      <div className={styles.wraperProducts}>
      <MobileSwiper/>
      <div className={styles.wraperProduct}>
        <TabletSwiper/>
        <AirpodSwiper/>
      </div>
      </div>
     
      </div>
   
      <ControlledCarousel/>
     <div className={styles.productsWrapper}>
       <Link to="/Products/موبایل"  className={styles.products}>موبایل</Link>
         <div className={styles.wraperCategory}>
         <Category category="موبایل" page="1" limit="6"/>
          </div>
          <Link to="/Products/تبلت"  className={styles.products}>تبلت</Link>
         <div className={styles.wraperCategory}>
        <Category category="تبلت" page="1" limit="6"/>
         </div>
         <Link to="/Products/لپ تاپ"  className={styles.products}>لپ تاپ</Link>
         <div className={styles.wraperCategory}>
          <Category category="لپ تاپ" page="1" limit="6"/>
         </div>
          <Link to="/Products/ایرپاد"  className={styles.products}>ایرپاد</Link>
       <div className={styles.wraperCategory}>
         <Category category="ایرپاد" page="1" limit="6"/>
       </div>
       <Footer/>
    </div>
         
     </div>
    </>
  )
}
export default Home;
