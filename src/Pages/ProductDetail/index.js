import React from 'react'
import styles from "./style.module.css"
import Button from '../../Components/button'
import { Link } from 'react-router-dom'
import Header from "../../Layouts/header"
const ProductDetail = () => {
  return (
    <>
     <Header/>
     <div className={styles.ProductDetail}>
       <Link to="/Products/ProductDetail"><Button>{"افزودن به سبد خرید"}</Button></Link>
       <h2>کالای فلان</h2>
     </div>
    </>
  
  )
}
export default ProductDetail