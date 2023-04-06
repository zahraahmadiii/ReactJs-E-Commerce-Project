import React,{useState ,useEffect} from 'react'
import {getProductsCategory} from '../../Api/Servises/getCategories'
import Card from '../Card'
import styles from "./style.module.css"

const getCategory=async(category)=>{
    const res= await getProductsCategory(category)
    return res.data
}

export const ProductsCategory = ({category}) => {
// console.log(category)
const [allcategory,setAllCategory]=useState([])

useEffect(()=>{
    getCategory(category).then(res => setAllCategory(res))
   },[])



  return (
     <div className={styles.wraper_products}>
      {allcategory.map((item)=> <Card key={item.id} item={item}/>)} 
     </div>
  )
}
