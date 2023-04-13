import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import Button from '../../Components/button'
import { Link, useParams } from 'react-router-dom'
import Header from "../../Layouts/header"
import { getDetails } from '../../Api/Servises/getProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../Api/Constants'
import { addToCart } from '../../redux/Features/orders-slice'
import { ToastContainer ,toast} from 'react-toastify';
const getData= async(id)=>{
  const res=await  getDetails(id)
  return res.data
}
const ProductDetail = () => {
  const {productId}=useParams()
 const [product,setProduct]=useState(null)
 console.log(product)
   useEffect(()=>{
    getData(productId).then(res => setProduct(res))
   },[productId])
  //  ////////////////////////////////////////////////////
  // handle add product to cart
  const [count, setCount] = useState(0)
  const orders = useSelector(store => store.ordersSlice);
  // console.log(orders.orderProduct)
  const addProduct=()=>{
  if(count<=product.quantity){
    setCount(count + 1)
  }
  else{
    toast.error("موجودی نداریم");
  }  
  }
  const minusProduct=()=>{
    if(count>0){
      setCount(count - 1)
    }
    
  }
  const dispatch=useDispatch()
  const addToCartBtn=(product)=>{
    const OrderData={
      count:count,
      Qty:product.quantity,
      image:product.thumbnail,
      name:product.name,
      price:product.price,
      id:product.id
    }
    let filteredProduct= orders.orderProduct.filter((item) =>  item.id !== OrderData.id)
    filteredProduct.push(OrderData)
     dispatch(addToCart(filteredProduct)) 
     if(count==0){
      dispatch(addToCart([])) 
     }
  }


  return (
    <>
     <Header/>
     <ToastContainer/>
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
             <Button onClick={()=>addToCartBtn(product)} btnColor={" rgb(7 68 199)"}>{"افزودن به سبد "}</Button>

            <div className={styles.number}>
              <div className={styles.add} onClick={addProduct}>+</div>
              <div className={styles.num}>{count}</div>
              <div className={styles.minus} onClick={minusProduct}>-</div>
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