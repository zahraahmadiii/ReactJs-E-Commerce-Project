import React from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from "./style.module.css"
import { Link } from 'react-router-dom'
import Header from '../../Layouts/header';
const Products = () => {
  const [searchParams] = useSearchParams();
  return (
    <>
     <Header/>
     <div className={styles.ProductCategory}>
       
          <Link to="/Products/ProductDetail">product 1</Link>
          <h2>{`کالاهای شماره${searchParams.get("id")}`}</h2>
    </div>
    </>
   
  )
}
export  default Products;