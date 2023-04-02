import React,{useState ,useEffect} from 'react'
import styles from "./style.module.css"
import { Link,useParams  } from 'react-router-dom'
import Header from '../../Layouts/header';
import {getProductsCategory} from '../../Api/Servises/getCategories'
import Card from '../../Components/Card';
import { ProductsCategory } from '../../Components/productsCategory';
import Sidbar from '../../Layouts/sidebar';
import { getCategoris } from '../../Api/Servises/getProductsCategories'

// const getData= async(category)=>{
//   const res=await  getCategoris(category)
//   console.log(res)
//   return res.data
// }

const Products = () => {
  const {productCategory}=useParams()
  console.log(productCategory)
//  const [category,setCategory]=useState(null)

//    useEffect(()=>{
//     getData(productCategory).then(res => setCategory(res))
//    },[productCategory])

  return (
    <>
     <Header/>
   
     <div className={styles.ProductCategory}>
      <div>
      {/* {category && <ProductsCategory  category="موبایل" />} */}
         {/* <ProductsCategory category="موبایل" /> */}
          {/* <Link to="/Products/ProductDetail">product 1</Link>
          <h2>{`کالاهای شماره${searchParams.get("id")}`}</h2> */}
      </div>
      <Sidbar/>
     
    </div>
    </>
   
  )
}
export  default Products;