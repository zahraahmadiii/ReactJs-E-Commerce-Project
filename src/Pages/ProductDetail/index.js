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
              <p className={styles.brand}>برند: {product.brand}</p>
              <p>ویژگی ها:</p>
              <p className={styles.desc}>{product.description}</p>
              <p className={styles.price}>{product.price} تومان</p>
             </div>
             <div className={styles.btnNumber}>
             <Link to="/Products/ProductDetail"><Button btnColor={" rgb(7 68 199)"}>{"افزودن به سبد خرید"}</Button></Link>

            <div className={styles.number}>
              <div className={styles.add}>+</div>
              <div className={styles.num}>1</div>
              <div className={styles.minus}>-</div>
              </div>
            </div>
            </div>
           

           <div className={styles.allImages}>
           <div className={styles.wraperthumbnail}>
               <img src={`${BASE_URL}/files/${product.thumbnail}`}  className={styles.thumbnailImage}/>
               </div>

               <div className={styles.wraperImages}>
               <img src={`${BASE_URL}/files/${product.images[0]}`}  className={styles.Image}/>
               <img src={`${BASE_URL}/files/${product.images[1]}`}  className={styles.Image}/>
               </div>
           </div>
            
              
           
 
    </div>}
    
    </>
  
  )
}
export default ProductDetail