import React, { useEffect } from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import Header from '../../Layouts/header';
import ControlledCarousel from '../../Components/Carousel';
import ProductSwiper from '../../Components/productSwiper-one'
import MobileSwiper from '../../Components/productSwiper-two';
import TabletSwiper from '../../Components/productSwiper-three';
import AirpodSwiper from '../../Components/productSwiper-four';
import Card from '../../Components/Card';
import { getProduct } from '../../redux/Features/products-slice';
import {useDispatch, useSelector} from 'react-redux'


 const Home = () => {
  const {products} = useSelector(store => store);
  console.log(products);
  const dispatch=useDispatch()

  useEffect(()=>{
   dispatch(getProduct())
  },[dispatch])

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
   
      {/* <ControlledCarousel/> */}
  
       <Link to="/Products"  className={styles.products}>موبایل</Link>
       <Link to="/Products"  className={styles.products}>تبلت</Link>
       <Link to="/Products"  className={styles.products}>لپ تاپ</Link>
       <Link to="/Products"  className={styles.products}>ایرپاد</Link>
    

     <div className={styles.cards}>
      <Card item={products.data}/>
     </div>
  
     </div>
    </>
  )
}
export default Home;
