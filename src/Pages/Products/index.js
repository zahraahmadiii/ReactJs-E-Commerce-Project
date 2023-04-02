import React from 'react'
import styles from "./style.module.css"
import { useParams  } from 'react-router-dom'
import Header from '../../Layouts/header';
import { ProductsCategory } from '../../Components/productsCategory';
import Sidbar from '../../Layouts/sidebar';

const Products = () => {
  const {productCategory}=useParams()
  console.log(productCategory)

  return (
    <>
     <Header/>
     <div className={styles.ProductCategory}>
      <div>
      <ProductsCategory category={productCategory}/>
      </div>
      <Sidbar/>
    </div>
    </>
   
  )
}
export  default Products;