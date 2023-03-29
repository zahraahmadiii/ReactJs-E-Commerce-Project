import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import Button from '../../Components/button'
import { Link, useParams } from 'react-router-dom'
import Header from "../../Layouts/header"
import { getDetails } from '../../Api/Servises/getProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../Api/Constants'

const getData= async(id)=>{
  const res=await  getDetails(id)
  return res.data
}
const ProductDetail = () => {
  const {productId}=useParams()
  console.log(productId)
 const [product,setProduct]=useState(null)

   useEffect(()=>{
    getData(productId).then(res => setProduct(res))
   },[productId])

  return (
    <>
     <Header/>
     {product &&
     <div className={styles.ProductDetail} >
           <div className={styles.wraperBtn}>
           <div className={styles.wraperAllData}>
              <p className={styles.name}>{product.name}</p>
              <p className={styles.brand}>{product.brand}</p>
              <p className={styles.price}>{product.price}</p>
              <p className={styles.desc}>{product.description}</p>
             </div>
             <Link to="/Products/ProductDetail"><Button btnColor={" rgb(7 68 199)"}>{"افزودن به سبد خرید"}</Button></Link>
           </div>
           
             <div className={styles.wraperImage}>
               <img src={`${BASE_URL}/files/${product.thumbnail}`}  className={styles.Image}/>
             </div>
 
    </div>}
    
    </>
  
  )
}
export default ProductDetail