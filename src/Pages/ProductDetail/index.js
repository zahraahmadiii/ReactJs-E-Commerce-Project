import React from 'react'
import styles from "./style.module.css"
import Button from '../../Components/button'
import { Link } from 'react-router-dom'
import Header from "../../Layouts/header"
const ProductDetail = () => {
  return (
    <>
     <Header/>
     <div className={styles.ProductDetail} >
      <div className={styles.wraperBtn}>
      <div className={styles.wraperAllData}>
         <p className={styles.name}>نام کالا:</p>
         <p className={styles.brand}>برند کالا:</p>
         <p className={styles.price}>قیمت:</p>
         <p className={styles.desc}>توضیحات:</p>
        </div>
        <Link to="/Products/ProductDetail"><Button btnColor={" rgb(7 68 199)"}>{"افزودن به سبد خرید"}</Button></Link>

      </div>
      
        <div className={styles.wraperImage}>
          <img  className={styles.Image}/>
        </div>
       
     </div>
    
    </>
  
  )
}
export default ProductDetail