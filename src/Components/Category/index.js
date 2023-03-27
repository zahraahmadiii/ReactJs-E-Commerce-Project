import React,{useState ,useEffect} from 'react'
import {getProductsCategory} from '../../Api/Servises/getCategories'
import Card from '../Card'

const getProduct=async(str)=>{

    const res= await getProductsCategory(str,1,6)
    return res.data
}
export const Category = ({str}) => {

const [products,setProducts]=useState([])

useEffect(()=>{
    getProduct(str).then(res => setProducts(res))
   },[])
   console.log(products)
  return (
   
  
     <div >
      {products.map((item)=> <Card key={item.id} item={item}/>)} 
     </div>
 

  )
}
