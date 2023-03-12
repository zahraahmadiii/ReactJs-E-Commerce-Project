import React, { useEffect } from 'react'
import  AdminHeader  from '../../Layouts/AdminHeader/index.js';
import styles from "./style.module.css"
import Button from "../../Components/button"
import ProductTable from '../../Components/ProductTable/index.js';
import {useDispatch, useSelector} from 'react-redux'
import { getProduct } from '../../redux/Features/products-slice.js';
import ProductModal from '../../Components/product-modal/index.js';
 const ProductPanel = () => {
 
  const {products} = useSelector(store => store);
  console.log(products)

   const dispatch=useDispatch()

   useEffect(()=>{
    dispatch(getProduct())
   },[dispatch])

const addProduct=()=>{
// dispatch(())
}
   
  return (
    <>
    <AdminHeader/>
    <div className={styles.main}>
  
    <div>
  
        <ProductTable item={products.data}/>
    </div>
    <div className={styles.add}>
    <Button btnColor={" rgb(7 68 199)"} onClick={addProduct()}>{"افزودن کالا"}</Button>
    </div>
    {/* {products.addbtn? <ProductModal/>:null} */}
    </div>
  
   
    </>
    
  )
}
export default ProductPanel;