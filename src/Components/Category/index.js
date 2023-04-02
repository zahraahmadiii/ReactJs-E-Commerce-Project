import React,{useState ,useEffect} from 'react'
import {getProductsCategory} from '../../Api/Servises/getCategories'
import Card from '../Card'
import styles from "./style.module.css"

const getProduct=async(category,page,limit)=>{
    // console.log(category)
    const res= await getProductsCategory(category,page,limit)
    return res.data
}

export const Category = ({category,page,limit}) => {

const [products,setProducts]=useState([])

useEffect(()=>{
    getProduct(category,page,limit).then(res => setProducts(res))
   },[])

//    console.log(products)

  return (
     <div className={styles.wraper_products}>
      {products.map((item)=> <Card key={item.id} item={item}/>)} 
     </div>
  )
}
