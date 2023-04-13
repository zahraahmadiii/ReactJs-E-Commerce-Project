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
console.log(allcategory)
// useEffect(()=>{
//     getCategory(category).then(res =>  setAllCategory(res))
//    },[])
useEffect(()=>{
    getCategory(category).then(res => {
        res.sort((a,b)=>  parseFloat(a.price) - parseFloat(b.price))
        setAllCategory(res)
    } )
   },[])


  return (
     <div className={styles.wraper_products}>
      { allcategory.map((item)=> <Card key={item.id} item={item}/>)} 
      
     </div>
  )
}
