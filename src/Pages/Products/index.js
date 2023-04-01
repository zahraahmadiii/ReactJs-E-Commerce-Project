import React,{useState ,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from "./style.module.css"
import { Link } from 'react-router-dom'
import Header from '../../Layouts/header';
import {Category} from '../../Components/Category'
import {getProductsCategory} from '../../Api/Servises/getCategories'
import Card from '../../Components/Card';
import { ProductsCategory } from '../../Components/productsCategory';



const Products = () => {
  

  // const [searchParams] = useSearchParams();
  return (
    <>
     <Header/>
      
     <div className={styles.ProductCategory}>
      {/* <ProductsCategory category="موبایل" /> */}
          {/* <Link to="/Products/ProductDetail">product 1</Link>
          <h2>{`کالاهای شماره${searchParams.get("id")}`}</h2> */}
    </div>
    </>
   
  )
}
export  default Products;